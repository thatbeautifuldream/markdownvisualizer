"use client";

import Editor, { type Monaco } from "@monaco-editor/react";
import type { editor } from "monaco-editor";

type TMarkdownEditorProps = {
	value: string;
	onChange: (value: string | undefined) => void;
	onMount: (editor: editor.IStandaloneCodeEditor, monaco: Monaco) => void;
	theme: "mdv-light" | "mdv-dark";
	className?: string;
};

function defineThemes(monaco: Monaco) {
	monaco.editor.defineTheme("mdv-light", {
		base: "vs",
		inherit: true,
		rules: [],
		colors: {
			"editor.background": "#fdfdfc",
			"editor.foreground": "#111111",
			"editor.lineHighlightBackground": "#0000000a",
			"editor.lineHighlightBorder": "#00000000",
			"editorLineNumber.foreground": "#000000a6",
			"editorLineNumber.activeForeground": "#111111",
			"editor.selectionBackground": "#0000001a",
			"editorIndentGuide.background1": "#0000000d",
		},
	});
	monaco.editor.defineTheme("mdv-dark", {
		base: "vs-dark",
		inherit: true,
		rules: [],
		colors: {
			"editor.background": "#111111",
			"editor.foreground": "#fdfdfc",
			"editor.lineHighlightBackground": "#ffffff0f",
			"editor.lineHighlightBorder": "#00000000",
			"editorLineNumber.foreground": "#ffffffa6",
			"editorLineNumber.activeForeground": "#fdfdfc",
			"editor.selectionBackground": "#ffffff26",
			"editorIndentGuide.background1": "#ffffff12",
		},
	});
}

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
				beforeMount={defineThemes}
				onChange={onChange}
				onMount={(instance, monaco) => {
					onMount(instance, monaco);
					void document.fonts.load('14px "Google Sans Code"').then(
						() => monaco.editor.remeasureFonts(),
						() => undefined,
					);
				}}
				options={{
					minimap: { enabled: true },
					fontSize: 14,
					lineHeight: 20,
					fontFamily: "var(--code-font-family)",
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
