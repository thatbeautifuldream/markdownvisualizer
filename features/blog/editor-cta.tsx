import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function EditorCta() {
  return (
    <section className="mt-16 rounded-lg border bg-muted/30 p-6 sm:p-8">
      <div>
        <p className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
          Practice
        </p>
        <h2 className="mt-4 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          Try it in the editor.
        </h2>
        <p className="mt-4 text-base text-pretty text-muted-foreground sm:max-w-[48ch]">
          Open Markdown Visualizer and test the ideas from this article in a
          live editor with instant preview.
        </p>
        <div className="mt-8">
          <Link
            href="/"
            className={cn(buttonVariants())}
          >
            Open Editor
          </Link>
        </div>
      </div>
    </section>
  );
}
