"use client";

import Link from "next/link";
import { ThemeSwitcher } from "@/components/theme-switcher";

export function BlogHeader() {
  return (
    <header className="border-b border-border">
      <div className="max-w-6xl mx-auto px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/">
            <span className="text-xl font-semibold text-foreground hover:text-primary/80 transition-colors">
              Markdown Visualizer
            </span>
          </Link>
          <Link
            href="/blog"
            className="text-sm font-medium text-foreground hover:text-primary/80 transition-colors"
          >
            Blog
          </Link>
        </div>
        <ThemeSwitcher />
      </div>
    </header>
  );
}
