"use client";

import { Coffee } from "lucide-react";
import { forwardRef } from "react";
import NumberFlow from "@number-flow/react";
import Link from "next/link";
import { siteConfig } from "@/lib/config";
import type { TMarkdownStats } from "@/stores/markdown-document-store";

const formatSize = (bytes: number): { number: number; unit: string } => {
  if (bytes === 0) return { number: 0, unit: "B" };
  const k = 1024;
  const sizes = ["B", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return {
    number: parseFloat((bytes / k ** i).toFixed(1)),
    unit: sizes[i],
  };
};

type TStatusBarProps = {
  stats: TMarkdownStats;
  hasContent: boolean;
};

export const StatusBar = forwardRef<HTMLDivElement, TStatusBarProps>(
  ({ stats }, ref) => {
    return (
      <div
        ref={ref}
        className="bg-muted/50 border-t border-border px-3 py-1.5 text-sm flex items-center justify-between"
      >
        <div className="flex items-center gap-4">
          <Link
            href={siteConfig.links.sponsor}
            target="_blank"
            className="hover:text-muted-foreground text-muted-foreground flex items-center gap-1.5"
          >
            <Coffee size={14} className="shrink-0" />
            <span>Buy me a Chai</span>
          </Link>
        </div>
        <div className="flex items-center gap-4 text-muted-foreground">
          <span
            className="hover:text-foreground tabular-nums cursor-default"
            title="Lines"
          >
            <span className="text-muted-foreground/60">L:</span>{" "}
            <NumberFlow value={stats.lines} className="text-foreground" />
          </span>
          <span
            className="hover:text-foreground tabular-nums cursor-default"
            title="Characters"
          >
            <span className="text-muted-foreground/60">C:</span>{" "}
            <NumberFlow value={stats.characters} className="text-foreground" />
          </span>
          <span
            className="hover:text-foreground tabular-nums cursor-default"
            title="Size"
          >
            <span className="text-muted-foreground/60">S:</span>{" "}
            <NumberFlow value={formatSize(stats.size).number} className="text-foreground" />{" "}
            <span className="text-muted-foreground/60">{formatSize(stats.size).unit}</span>
          </span>
        </div>
      </div>
    );
  },
);

StatusBar.displayName = "StatusBar";
