"use client";

import Editor, { type Monaco } from "@monaco-editor/react";
import type { editor } from "monaco-editor";

type TMarkdownEditorProps = {
	value: string;
	onChange: (value: string | undefined) => void;
	onMount: (editor: editor.IStandaloneCodeEditor, monaco: Monaco) => void;
	theme: "light" | "hc-black";
	className?: string;
};

export function MarkdownEditor({
	value,
	onChange,
	onMount,
	theme,
	className = "",
}: TMarkdownEditorProps) {
	return (
		<div className={`h-full ${className}`}>
			<Editor
				height="100%"
				defaultLanguage="markdown"
				value={value}
				theme={theme}
				onChange={onChange}
				onMount={onMount}
				options={{
					minimap: { enabled: true },
					fontSize: 12,
					fontFamily: "var(--font-geist-mono)",
					lineNumbers: "on",
					roundedSelection: false,
					scrollBeyondLastLine: false,
					automaticLayout: true,
					tabSize: 2,
					insertSpaces: true,
					wordWrap: "on",
					folding: true,
					foldingStrategy: "indentation",
					showFoldingControls: "always",
					bracketPairColorization: { enabled: true },
				}}
			/>
		</div>
	);
}
