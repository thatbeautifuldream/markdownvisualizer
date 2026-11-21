"use client";

import { formatForDisplay, useHotkey } from "@tanstack/react-hotkeys";
import { FileDown } from "lucide-react";
import type { ReactNode } from "react";
import { StreamdownWrapper } from "@/components/streamdown-wrapper";
import { Button } from "@/components/ui/button";
import { Kbd, KbdGroup } from "@/components/ui/kbd";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

const savePdfShortcut = "Mod+Alt+P";

function printMarkdown() {
  window.print();
}

type TMarkdownPreviewProps = {
  content: string;
  className?: string;
  actions?: ReactNode;
};

export function MarkdownPreview({ content, className, actions }: TMarkdownPreviewProps) {
  const hasContent = content.trim().length > 0;
  useHotkey(savePdfShortcut, printMarkdown, {
    enabled: hasContent,
    ignoreInputs: false,
    requireReset: true,
  });

  return (
    <div className="flex h-full min-h-0 flex-col">
      <div className="flex shrink-0 items-center justify-end gap-2 px-3 pt-3">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              type="button"
              variant="ghost"
              size="xs"
              className="relative size-7 has-[>svg]:p-0 pointer-coarse:mr-2"
              aria-label="Save as PDF"
              disabled={!hasContent}
              onClick={printMarkdown}
            >
              <span
                className="pointer-fine:hidden absolute top-1/2 left-1/2 size-[max(100%,3rem)] -translate-1/2"
                aria-hidden="true"
              />
              <FileDown size={14} className="size-3.5" aria-hidden="true" />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="bottom" sideOffset={8}>
            <div className="flex items-center gap-2">
              <span>Save as PDF</span>
              <KbdGroup>
                {savePdfShortcut.split("+").map((key) => (
                  <Kbd key={key}>{formatForDisplay(key)}</Kbd>
                ))}
              </KbdGroup>
            </div>
          </TooltipContent>
        </Tooltip>
        {actions}
      </div>
      <div
        data-markdown-print
        className={cn("min-h-0 flex-1 overflow-y-auto", className)}
      >
        <StreamdownWrapper mode="static" content={content} printable />
      </div>
    </div>
  );
}
