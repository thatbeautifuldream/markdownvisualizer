"use client";

import { Streamdown } from "streamdown";

type TMarkdownPreviewProps = {
	content: string;
	className?: string;
};

export function MarkdownPreview({ content, className }: TMarkdownPreviewProps) {
	return (
		<div className={`h-full overflow-y-auto p-6 ${className}`}>
			<Streamdown mode="static">{content}</Streamdown>
		</div>
	);
}
