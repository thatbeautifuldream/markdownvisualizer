"use client";

import type { Monaco } from "@monaco-editor/react";
import type { editor } from "monaco-editor";
import { useTheme } from "next-themes";
import {
  type ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  useTransition,
} from "react";
import { toast } from "sonner";
import { Maximize2Icon, Minimize2 } from "lucide-react";
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
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type ExpandedPane = "editor" | "preview" | null;

const workspacePaneClassName =
  "flex h-full min-h-0 flex-col overflow-hidden rounded-lg border bg-background/95";

type PaneHeaderProps = {
  title: string;
  meta: ReactNode;
  paneId: Exclude<ExpandedPane, null>;
  expandedPane: ExpandedPane;
  onToggleExpand: (pane: Exclude<ExpandedPane, null>) => void;
};

function PaneHeader({
  title,
  meta,
  paneId,
  expandedPane,
  onToggleExpand,
}: PaneHeaderProps) {
  const isExpanded = expandedPane === paneId;
  const label = isExpanded ? `Collapse ${title}` : `Expand ${title}`;

  return (
    <div className="flex items-center justify-between border-b px-4 py-2 text-[11px] font-medium uppercase tracking-[0.24em] text-muted-foreground">
      <span>{title}</span>
      <div className="flex items-center gap-1">
        <span>{meta}</span>
        <Tooltip>
          <TooltipTrigger asChild>
            <button
              type="button"
              aria-label={label}
              title={label}
              onClick={() => onToggleExpand(paneId)}
              className="inline-flex size-6 cursor-pointer items-center justify-center rounded-sm text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              {isExpanded ? (
                <Minimize2 size={14} />
              ) : (
                <Maximize2Icon size={14} />
              )}
            </button>
          </TooltipTrigger>
          <TooltipContent side="bottom" sideOffset={8}>
            {label}
          </TooltipContent>
        </Tooltip>
      </div>
    </div>
  );
}

export function MarkdownWorkspace() {
  const [activeTab, setActiveTab] = useState("editor");
  const [expandedPane, setExpandedPane] = useState<ExpandedPane>(null);
  const [isPending, startTransition] = useTransition();
  const editorRef = useRef<editor.IStandaloneCodeEditor | null>(null);
  const monacoRef = useRef<Monaco | null>(null);
  const statusBarRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  const { theme: appTheme } = useTheme();
  const editorTheme = appTheme === "dark" ? "hc-black" : "light";
  const desktopExpandedPane = isMobile ? null : expandedPane;

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
    editorRef.current?.layout();
  }, [desktopExpandedPane]);

  const togglePaneExpansion = useCallback(
    (pane: Exclude<ExpandedPane, null>) => {
      setExpandedPane((current) => (current === pane ? null : pane));
    },
    [],
  );

  const handleDesktopLayoutChange = useCallback(() => {
    editorRef.current?.layout();
  }, []);

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
      <section
        className={workspacePaneClassName}
        aria-label="Markdown editor"
      >
        <PaneHeader
          title="Editor"
          meta={<TextMorph>{isPending ? "Saving" : "Ready"}</TextMorph>}
          paneId="editor"
          expandedPane={desktopExpandedPane}
          onToggleExpand={togglePaneExpansion}
        />
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
    desktopExpandedPane,
    togglePaneExpansion,
  ]);

  const previewPane = useMemo(() => {
    return (
      <section
        className={workspacePaneClassName}
        aria-label="Markdown preview"
      >
        <PaneHeader
          title="Preview"
          meta="Live render"
          paneId="preview"
          expandedPane={desktopExpandedPane}
          onToggleExpand={togglePaneExpansion}
        />
        <MarkdownPreview
          content={markdownContent}
          className="flex-1 min-h-0 px-4 py-4 md:p-6"
        />
      </section>
    );
  }, [markdownContent, desktopExpandedPane, togglePaneExpansion]);

  const desktopContent = useMemo(() => {
    if (desktopExpandedPane === "editor") {
      return editorPane;
    }

    if (desktopExpandedPane === "preview") {
      return previewPane;
    }

    return (
      <ResizablePanelGroup
        orientation="horizontal"
        onLayoutChange={handleDesktopLayoutChange}
      >
        <ResizablePanel defaultSize="52%" minSize="30%">
          {editorPane}
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize="48%" minSize="30%">
          {previewPane}
        </ResizablePanel>
      </ResizablePanelGroup>
    );
  }, [
    desktopExpandedPane,
    editorPane,
    previewPane,
    handleDesktopLayoutChange,
  ]);

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
        className={`flex-1 min-h-0 overflow-hidden ${isMobile ? "p-0" : "p-3"}`}
      >
        {isMobile ? (
          activeTabContent
        ) : (
          <div className="h-full [container-type:inline-size]">
            <div className="h-full">{desktopContent}</div>
          </div>
        )}
      </div>
    </div>
  );
}
