"use client";

import { useHotkey } from "@tanstack/react-hotkeys";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "lucide-react";
import { useRef } from "react";
import { flushSync } from "react-dom";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function ThemeSwitcher({ className }: { className?: string }) {
  const { setTheme } = useTheme();
  const activeTransition = useRef<ViewTransition | null>(null);

  const toggle = () => {
    const root = document.documentElement;
    const next = root.classList.contains("dark") ? "light" : "dark";
    const apply = () => {
      root.classList.toggle("dark", next === "dark");
      flushSync(() => setTheme(next));
    };

    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!document.startViewTransition || reduced) {
      apply();
      return;
    }

    root.classList.add("theme-transition");
    const transition = document.startViewTransition(apply);
    activeTransition.current = transition;
    // A rapid second toggle skips this transition while the new one is still
    // running — only the latest transition may clean up the class.
    transition.finished.finally(() => {
      if (activeTransition.current === transition) {
        activeTransition.current = null;
        root.classList.remove("theme-transition");
      }
    });
  };

  useHotkey("Mod+D", toggle);

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button
          type="button"
          onClick={toggle}
          className={cn(
            "relative inline-flex size-7 shrink-0 cursor-pointer items-center justify-center rounded-md text-faint hover:text-foreground",
            className,
          )}
        >
          <MoonIcon size={16} className="shrink-0 dark:hidden" aria-hidden="true" />
          <SunIcon size={16} className="shrink-0 not-dark:hidden" aria-hidden="true" />
          <span className="sr-only dark:hidden">Dark mode</span>
          <span className="sr-only not-dark:hidden">Light mode</span>
          <span
            className="absolute top-1/2 left-1/2 size-[max(100%,3rem)] -translate-1/2 pointer-fine:hidden"
            aria-hidden="true"
          />
        </button>
      </TooltipTrigger>
      <TooltipContent side="bottom" sideOffset={8}>
        <span className="dark:hidden">Dark mode</span>
        <span className="not-dark:hidden">Light mode</span>
      </TooltipContent>
    </Tooltip>
  );
}
