"use client";

import type { Monaco } from "@monaco-editor/react";
import type { editor } from "monaco-editor";
import { useTheme } from "next-themes";
import { useCallback, useEffect, useMemo, useRef, useState, useTransition } from "react";
import { toast } from "sonner";
import { WorkspaceHeader } from "./workspace-header";
import { EditorToolbar } from "./editor-toolbar";
import { MarkdownEditor } from "./markdown-editor";
import { MarkdownPreview } from "./markdown-preview";
import { StatusBar } from "./status-bar";
import { useMarkdownStore } from "@/stores/markdown-document-store";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { GitHubLink } from "./github-link";

type EditorTheme = "light" | "hc-black";

export function MarkdownWorkspace() {
	const [editorTheme, setEditorTheme] = useState<EditorTheme>("hc-black");
	const [activeTab, setActiveTab] = useState("editor");
	const [isPending, startTransition] = useTransition();
	const editorRef = useRef<editor.IStandaloneCodeEditor | null>(null);
	const monacoRef = useRef<Monaco | null>(null);
	const statusBarRef = useRef<HTMLDivElement>(null);

	const { theme: appTheme } = useTheme();

	const stats = useMarkdownStore((state) => state.getStats());
	const hasContent = useMarkdownStore((state) => state.hasContent());
	const markdownContent = useMarkdownStore((state) => state.markdownContent);
	const saveMarkdown = useMarkdownStore((state) => state.saveMarkdown);
	const clearMarkdown = useMarkdownStore((state) => state.clearMarkdown);
	const setMarkdownContent = useMarkdownStore((state) => state.setMarkdownContent);
	const loadFromSessionStorage = useMarkdownStore((state) => state.loadFromSessionStorage);

	useEffect(() => {
		loadFromSessionStorage();
	}, [loadFromSessionStorage]);

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
				label: "Markdown Editor",
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
				content: <MarkdownPreview content={markdownContent} className="w-full h-full" />,
			},
		];
	}, [markdownContent, handleEditorChange, handleEditorDidMount, editorTheme, stats, hasContent]);

	const activeTabContent = useMemo(() => {
		return tabs.find((tab) => tab.id === activeTab)?.content;
	}, [tabs, activeTab]);

	return (
		<div className="h-screen flex flex-col">
			<WorkspaceHeader
				tabs={tabs}
				activeTab={activeTab}
				onTabChange={setActiveTab}
				leftActions={<div />}
				actions={
					<div className="flex items-center gap-2">
						<EditorToolbar
							onCopy={copyToClipboard}
							onClear={clearEditor}
							hasContent={hasContent}
							isVisible={activeTab === "editor"}
						/>
						<GitHubLink />
						<ThemeSwitcher />
					</div>
				}
			/>
			<div className="flex-1 min-h-0 overflow-hidden">{activeTabContent}</div>
		</div>
	);
}
