"use client";

import { Streamdown } from "streamdown";
import { code } from "@streamdown/code";
import { mermaid } from "@streamdown/mermaid";
import { cn } from "@/lib/utils";

type TMarkdownPreviewProps = {
	content: string;
	className?: string;
};

export function MarkdownPreview({ content, className }: TMarkdownPreviewProps) {
  return (
    <div className={cn("h-full overflow-y-auto", className)}>
      <Streamdown mode="static" plugins={{ code, mermaid }}>
        {content}
      </Streamdown>
    </div>
  );
}
