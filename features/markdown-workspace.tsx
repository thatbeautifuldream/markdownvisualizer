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
} from "react";
import { toast } from "sonner";
import { Maximize2Icon, Minimize2 } from "lucide-react";
import { useHotkey, formatForDisplay } from "@tanstack/react-hotkeys";
import { WorkspaceHeader } from "./workspace-header";
import { EditorToolbar } from "./editor-toolbar";
import { MarkdownEditor } from "./markdown-editor";
import { MarkdownPreview } from "./markdown-preview";
import { StatusBar } from "./status-bar";
import { useMarkdownStore } from "@/stores/markdown-document-store";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { GitHubLink } from "./github-link";
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
import { Kbd, KbdGroup } from "@/components/ui/kbd";

type ExpandedPane = "editor" | "preview" | null;

const workspacePaneClassName =
  "relative flex h-full min-h-0 flex-col overflow-hidden rounded-lg border bg-background/95";

type PaneExpandButtonProps = {
  paneId: Exclude<ExpandedPane, null>;
  expandedPane: ExpandedPane;
  onToggleExpand: (pane: Exclude<ExpandedPane, null>) => void;
  shortcut?: string;
};

function PaneExpandButton({
  paneId,
  expandedPane,
  onToggleExpand,
  shortcut,
}: PaneExpandButtonProps) {
  const isExpanded = expandedPane === paneId;
  const paneLabel = paneId === "editor" ? "Editor" : "Preview";
  const label = isExpanded
    ? `Collapse ${paneLabel}`
    : `Expand ${paneLabel}`;

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button
          type="button"
          aria-label={label}
          title={label}
          onClick={() => onToggleExpand(paneId)}
          className="absolute right-3 top-3 z-20 inline-flex size-7 cursor-pointer items-center justify-center rounded-md border bg-background/90 text-muted-foreground shadow-sm backdrop-blur-sm transition-colors hover:bg-accent hover:text-accent-foreground"
        >
          {isExpanded ? <Minimize2 size={14} /> : <Maximize2Icon size={14} />}
        </button>
      </TooltipTrigger>
      <TooltipContent side="bottom" sideOffset={8}>
        <div className="flex items-center gap-2">
          <span>{label}</span>
          {shortcut && (
            <KbdGroup>
              {shortcut.split("+").map((key) => (
                <Kbd key={key}>{formatForDisplay(key)}</Kbd>
              ))}
            </KbdGroup>
          )}
        </div>
      </TooltipContent>
    </Tooltip>
  );
}

export function MarkdownWorkspace() {
  const [activeTab, setActiveTab] = useState("editor");
  const [expandedPane, setExpandedPane] = useState<ExpandedPane>(null);
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
      setMarkdownContent(newValue);
      saveMarkdown(newValue);
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
    if (desktopExpandedPane !== null) {
      editorRef.current?.layout();
    }
  }, [desktopExpandedPane]);

  const togglePaneExpansion = useCallback(
    (pane: Exclude<ExpandedPane, null>) => {
      setExpandedPane((current) => (current === pane ? null : pane));
    },
    [],
  );

  useHotkey("Mod+E", () => {
    togglePaneExpansion("editor");
  });

  useHotkey("Mod+Shift+P", () => {
    togglePaneExpansion("preview");
  });

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
        <PaneExpandButton
          paneId="editor"
          expandedPane={desktopExpandedPane}
          onToggleExpand={togglePaneExpansion}
          shortcut="Mod+E"
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
        <PaneExpandButton
          paneId="preview"
          expandedPane={desktopExpandedPane}
          onToggleExpand={togglePaneExpansion}
          shortcut="Mod+Shift+P"
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
    <div className="flex h-screen flex-col [container-type:inline-size]">
      <WorkspaceHeader
        tabs={isMobile ? tabs : undefined}
        activeTab={isMobile ? activeTab : undefined}
        onTabChange={isMobile ? setActiveTab : undefined}
        leftActions={
          <span className="text-[11px] font-medium uppercase tracking-[0.24em] text-muted-foreground [@container(max-width:767px)]:hidden">
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
          <div className="h-full">
            <div className="h-full">{desktopContent}</div>
          </div>
        )}
      </div>
    </div>
  );
}
