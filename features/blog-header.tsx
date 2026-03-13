"use client";

import Link from "next/link";
import { ThemeSwitcher } from "@/components/theme-switcher";

export function BlogHeader() {
  return (
    <header className="bg-background">
      <div className="mx-auto flex w-full max-w-4xl items-center justify-between px-3 py-1 sm:px-6">
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="text-[11px] font-medium uppercase tracking-[0.24em] text-muted-foreground transition-colors hover:text-foreground"
          >
            Markdown Visualizer
          </Link>
          <Link
            href="/blog"
            className="text-[11px] font-medium uppercase tracking-[0.24em] text-muted-foreground transition-colors hover:text-foreground"
          >
            Blog
          </Link>
        </div>
        <ThemeSwitcher />
      </div>
    </header>
  );
}
