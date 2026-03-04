"use client";

import { Streamdown } from "streamdown";
import { code } from "@streamdown/code";
import { mermaid } from "@streamdown/mermaid";

type TMarkdownPreviewProps = {
	content: string;
	className?: string;
};

export function MarkdownPreview({ content, className }: TMarkdownPreviewProps) {
		return (
		<div className={`h-full overflow-y-auto p-6 ${className}`}>
			<Streamdown mode="static" plugins={{ code, mermaid }}>{content}</Streamdown>
		</div>
	);
}
