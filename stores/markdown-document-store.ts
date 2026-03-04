"use client";

import { create } from "zustand";

const STORAGE_KEY = "markdown-visualizer-content";

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
  loadFromSessionStorage: () => void;
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
    if (typeof window !== "undefined") {
      sessionStorage.setItem(STORAGE_KEY, content);
    }
  },

  clearMarkdown: () => {
    set({ markdownContent: "" });
    statsCache.clear();
    if (typeof window !== "undefined") {
      sessionStorage.removeItem(STORAGE_KEY);
    }
  },

  loadFromSessionStorage: () => {
    if (typeof window !== "undefined") {
      const saved = sessionStorage.getItem(STORAGE_KEY);
      if (saved !== null) {
        set({ markdownContent: saved });
      }
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
