"use client";

import { StreamdownWrapper } from "@/components/streamdown-wrapper";
import { cn } from "@/lib/utils";

type TMarkdownPreviewProps = {
	content: string;
	className?: string;
};

export function MarkdownPreview({ content, className }: TMarkdownPreviewProps) {
  return (
    <div className={cn("h-full overflow-y-auto", className)}>
      <StreamdownWrapper mode="static" content={content} />
    </div>
  );
}
