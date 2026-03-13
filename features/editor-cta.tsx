import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function EditorCta() {
  return (
    <section className="mt-12 rounded-lg border bg-muted/20 px-6 py-8 sm:px-8">
      <div className="max-w-2xl">
        <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-muted-foreground">
          Practice
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Try it in the editor.
        </h2>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          Open Markdown Visualizer and test the ideas from this article in a
          live editor with instant preview.
        </p>
        <div className="mt-6">
          <Link
            href="/"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "rounded-full bg-background shadow-none",
            )}
          >
            Open Editor
          </Link>
        </div>
      </div>
    </section>
  );
}
