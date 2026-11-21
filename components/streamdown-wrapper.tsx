"use client";

import { cloneElement, isValidElement, type ReactNode } from "react";
import { Streamdown, type Components } from "streamdown";
import { code } from "@streamdown/code";
import { mermaid } from "@streamdown/mermaid";
import { cn } from "@/lib/utils";

const proseTags = [
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "p",
  "ul",
  "ol",
  "li",
  "blockquote",
  "hr",
  "strong",
] as const;

// Render text elements bare so `.prose` styles them; Streamdown keeps its code, table and mermaid chrome.
export const proseComponents = Object.fromEntries(
  proseTags.map((Tag) => [
    Tag,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ({ node, ...props }: React.ComponentProps<typeof Tag> & { node?: unknown }) => (
      <Tag {...(props as object)} />
    ),
  ]),
) as Components;

type StreamdownWrapperProps = {
  content: string;
  mode?: "static" | "streaming";
  className?: string;
  printable?: boolean;
};

const printableComponents: Components = {
  ...proseComponents,
  pre: ({ children }) => {
    if (!isValidElement<{ className?: string; children?: ReactNode; "data-block"?: string }>(children)) {
      return children;
    }

    const block = cloneElement(children, { "data-block": "true" });
    if (!children.props.className?.split(/\s+/).includes("language-mermaid")) {
      return block;
    }

    return (
      <div data-print-mermaid>
        {block}
        <pre data-print-mermaid-source className="hidden">
          <code>{children.props.children}</code>
        </pre>
      </div>
    );
  },
};

export function StreamdownWrapper({
  content,
  mode,
  className,
  printable,
}: StreamdownWrapperProps) {
  return (
    <Streamdown
      mode={mode}
      plugins={{ code, mermaid }}
      components={printable ? printableComponents : proseComponents}
      className={cn("prose min-w-0 space-y-0", className)}
    >
      {content}
    </Streamdown>
  );
}
