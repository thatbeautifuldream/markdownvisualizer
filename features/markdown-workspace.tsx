"use client";

import type { Monaco } from "@monaco-editor/react";
import type { editor } from "monaco-editor";
import { useTheme } from "next-themes";
import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  useTransition,
} from "react";
import { toast } from "sonner";
import { WorkspaceHeader } from "./workspace-header";
import { EditorToolbar } from "./editor-toolbar";
import { MarkdownEditor } from "./markdown-editor";
import { MarkdownPreview } from "./markdown-preview";
import { StatusBar } from "./status-bar";
import { useMarkdownStore } from "@/stores/markdown-document-store";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { GitHubLink } from "./github-link";
import { TextMorph } from "torph/react";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

type EditorTheme = "light" | "hc-black";

export function MarkdownWorkspace() {
  const [editorTheme, setEditorTheme] = useState<EditorTheme>("hc-black");
  const [activeTab, setActiveTab] = useState("editor");
  const [isPending, startTransition] = useTransition();
  const editorRef = useRef<editor.IStandaloneCodeEditor | null>(null);
  const monacoRef = useRef<Monaco | null>(null);
  const statusBarRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  const { theme: appTheme } = useTheme();

  const stats = useMarkdownStore((state) => state.getStats());
  const hasContent = useMarkdownStore((state) => state.hasContent());
  const markdownContent = useMarkdownStore((state) => state.markdownContent);
  const saveMarkdown = useMarkdownStore((state) => state.saveMarkdown);
  const clearMarkdown = useMarkdownStore((state) => state.clearMarkdown);
  const setMarkdownContent = useMarkdownStore(
    (state) => state.setMarkdownContent,
  );
  const loadFromIndexedDB = useMarkdownStore(
    (state) => state.loadFromIndexedDB,
  );

  useEffect(() => {
    void loadFromIndexedDB();
  }, [loadFromIndexedDB]);

  useEffect(() => {
    if (editorRef.current && editorRef.current.getValue() !== markdownContent) {
      editorRef.current.setValue(markdownContent);
    }
  }, [markdownContent]);

  const handleEditorChange = useCallback(
    (value: string | undefined) => {
      const newValue = value || "";
      startTransition(() => {
        setMarkdownContent(newValue);
        saveMarkdown(newValue);
      });
    },
    [setMarkdownContent, saveMarkdown],
  );

  const handleEditorDidMount = useCallback(
    (editor: editor.IStandaloneCodeEditor, monaco: Monaco) => {
      editorRef.current = editor;
      monacoRef.current = monaco;
    },
    [],
  );

  useEffect(() => {
    return () => {
      if (editorRef.current) {
        editorRef.current.dispose();
        editorRef.current = null;
      }
      monacoRef.current = null;
    };
  }, []);

  const copyToClipboard = useCallback(async () => {
    if (!editorRef.current) return;

    try {
      const value = editorRef.current.getValue();
      await navigator.clipboard.writeText(value);
      toast.success("Copied to Clipboard");
    } catch {
      toast.error("Failed to copy to clipboard");
    }
  }, []);

  const clearEditor = useCallback(async () => {
    clearMarkdown();
    if (editorRef.current) {
      editorRef.current.setValue("");
    }
  }, [clearMarkdown]);

  useEffect(() => {
    if (appTheme === "dark") {
      setEditorTheme("hc-black");
    } else {
      setEditorTheme("light");
    }
  }, [appTheme]);

  const tabs = useMemo(() => {
    return [
      {
        id: "editor",
        label: "Editor",
        content: (
          <div className="border flex flex-col h-full">
            <div className="flex-1 min-h-0">
              <MarkdownEditor
                value={markdownContent}
                onChange={handleEditorChange}
                onMount={handleEditorDidMount}
                theme={editorTheme}
              />
            </div>
            <StatusBar
              ref={statusBarRef}
              stats={stats}
              hasContent={hasContent}
            />
          </div>
        ),
      },
      {
        id: "preview",
        label: "Preview",
        content: (
          <MarkdownPreview
            content={markdownContent}
            className="w-full h-full px-4 py-4 md:p-6"
          />
        ),
      },
    ];
  }, [
    markdownContent,
    handleEditorChange,
    handleEditorDidMount,
    editorTheme,
    stats,
    hasContent,
  ]);

  const activeTabContent = useMemo(() => {
    return tabs.find((tab) => tab.id === activeTab)?.content;
  }, [tabs, activeTab]);

  const editorPane = useMemo(() => {
    return (
      <section className="workspace-pane border" aria-label="Markdown editor">
        <div className="flex items-center justify-between border-b px-4 py-2 text-[11px] font-medium uppercase tracking-[0.24em] text-muted-foreground">
          <span>Editor</span>
          <TextMorph>{isPending ? "Saving" : "Ready"}</TextMorph>
        </div>
        <div className="flex-1 min-h-0">
          <MarkdownEditor
            value={markdownContent}
            onChange={handleEditorChange}
            onMount={handleEditorDidMount}
            theme={editorTheme}
          />
        </div>
        <StatusBar ref={statusBarRef} stats={stats} hasContent={hasContent} />
      </section>
    );
  }, [
    markdownContent,
    handleEditorChange,
    handleEditorDidMount,
    editorTheme,
    isPending,
    stats,
    hasContent,
  ]);

  const previewPane = useMemo(() => {
    return (
      <section className="workspace-pane border" aria-label="Markdown preview">
        <div className="flex items-center justify-between border-b px-4 py-2 text-[11px] font-medium uppercase tracking-[0.24em] text-muted-foreground">
          <span>Preview</span>
          <span>Live render</span>
        </div>
        <MarkdownPreview
          content={markdownContent}
          className="flex-1 min-h-0 px-4 py-4 md:p-6"
        />
      </section>
    );
  }, [markdownContent]);

  return (
    <div className="h-screen flex flex-col">
      <WorkspaceHeader
        tabs={isMobile ? tabs : undefined}
        activeTab={isMobile ? activeTab : undefined}
        onTabChange={isMobile ? setActiveTab : undefined}
        leftActions={
          <span className="text-[11px] font-medium uppercase tracking-[0.24em] text-muted-foreground">
            Markdown Visualizer
          </span>
        }
        actions={
          <div className="flex items-center gap-2">
            <EditorToolbar
              onCopy={copyToClipboard}
              onClear={clearEditor}
              hasContent={hasContent}
              isVisible={isMobile ? activeTab === "editor" : true}
            />
            <GitHubLink />
            <ThemeSwitcher />
          </div>
        }
      />
      <div
        className={cn(
          "flex-1 min-h-0 overflow-hidden",
          isMobile ? "p-0" : "p-3",
        )}
      >
        {isMobile ? (
          activeTabContent
        ) : (
          <div className="workspace-shell h-full">
            <div className="workspace-panels h-full">
              {editorPane}
              {previewPane}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
