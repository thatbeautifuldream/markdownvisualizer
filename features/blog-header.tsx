"use client";

import Link from "next/link";
import { ThemeSwitcher } from "@/components/theme-switcher";

export function BlogHeader() {
  return (
    <header className="border-b border-border">
      <div className="mx-auto flex w-full max-w-4xl items-center justify-between px-4 py-3 sm:px-6">
        <nav className="flex items-center gap-6">
          <Link
            href="/"
            aria-label="Homepage"
            className="text-sm font-medium text-foreground hover:text-foreground/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
          >
            Markdown Visualizer
          </Link>
          <Link
            href="/blog"
            className="text-sm font-medium text-muted-foreground hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
          >
            Blog
          </Link>
        </nav>
        <ThemeSwitcher />
      </div>
    </header>
  );
}
