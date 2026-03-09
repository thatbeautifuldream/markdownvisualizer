"use client";

import { create } from "zustand";
import { indexedDBService } from "@/lib/markdown-storage-service";

const LEGACY_SESSION_STORAGE_KEY = "markdown-visualizer-content";
const STALE_TABS_TTL_MS = 7 * 24 * 60 * 60 * 1000;

export type TMarkdownStats = {
  lines: number;
  characters: number;
  size: number;
};

export type TMarkdownStore = {
  markdownContent: string;
  setMarkdownContent: (content: string) => void;
  saveMarkdown: (content: string) => void;
  clearMarkdown: () => void;
  loadFromIndexedDB: () => Promise<void>;
  getStats: () => TMarkdownStats;
  hasContent: () => boolean;
};

const statsCache = new Map<string, TMarkdownStats>();

export const useMarkdownStore = create<TMarkdownStore>((set, get) => ({
  markdownContent: "",

  setMarkdownContent: (content: string) => {
    set({ markdownContent: content });
    statsCache.clear();
  },

  saveMarkdown: (content: string) => {
    set({ markdownContent: content });
    statsCache.clear();
    if (typeof window === "undefined") return;

    void (async () => {
      try {
        const tabId = await indexedDBService.getOrCreateTabId();
        await indexedDBService.saveTabState(tabId, content);
      } catch (error) {
        console.error("Failed to save markdown content to IndexedDB", error);
      }
    })();
  },

  clearMarkdown: () => {
    set({ markdownContent: "" });
    statsCache.clear();
    if (typeof window === "undefined") return;

    void (async () => {
      try {
        const tabId = await indexedDBService.getOrCreateTabId();
        await indexedDBService.deleteTabState(tabId);
      } catch (error) {
        console.error("Failed to clear markdown content from IndexedDB", error);
      }
    })();
  },

  loadFromIndexedDB: async () => {
    if (typeof window === "undefined") return;

    indexedDBService.registerLifecycleCleanup();
    const tabId = await indexedDBService.getOrCreateTabId();
    const cutoffMs = Date.now() - STALE_TABS_TTL_MS;
    void indexedDBService.cleanupStaleTabs(cutoffMs);
    void indexedDBService.cleanupClosedTabs();

    const persisted = await indexedDBService.getTabState(tabId);
    if (persisted) {
      set({ markdownContent: persisted.content });
      return;
    }

    // One-time migration from legacy sessionStorage persistence.
    const legacyContent = sessionStorage.getItem(LEGACY_SESSION_STORAGE_KEY);
    if (legacyContent !== null) {
      set({ markdownContent: legacyContent });
      await indexedDBService.saveTabState(tabId, legacyContent);
      sessionStorage.removeItem(LEGACY_SESSION_STORAGE_KEY);
    }
  },

  getStats: (): TMarkdownStats => {
    const content = get().markdownContent;

    const cached = statsCache.get(content);
    if (cached) return cached;

    const lines = content ? content.split("\n").length : 0;
    const characters = content.length;
    const size = new Blob([content]).size;

    const result: TMarkdownStats = {
      lines,
      characters,
      size,
    };
    statsCache.set(content, result);
    return result;
  },

  hasContent: () => {
    return get().markdownContent.trim().length > 0;
  },
}));
