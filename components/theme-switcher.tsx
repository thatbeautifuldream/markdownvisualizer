"use client";

import { useHotkey } from "@tanstack/react-hotkeys";
import { useTheme } from "next-themes";
import { useRef } from "react";
import { flushSync } from "react-dom";
import { cn } from "@/lib/utils";

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
    <button
      type="button"
      onClick={toggle}
      className={cn("text-faint hover:text-foreground cursor-pointer", className)}
    >
      <span className="dark:hidden">Dark mode</span>
      <span className="not-dark:hidden">Light mode</span>
    </button>
  );
}
