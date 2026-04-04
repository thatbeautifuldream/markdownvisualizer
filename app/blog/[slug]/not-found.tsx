import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center py-20">
      <div className="text-center">
        <p className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
          404
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-balance text-foreground">
          Article Not Found
        </h1>
        <p className="mt-4 text-base text-pretty text-muted-foreground sm:max-w-[48ch]">
          The article you&apos;re looking for doesn&apos;t exist or has been
          removed.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/blog"
            className={cn(buttonVariants())}
          >
            Back to Blog
          </Link>
          <Link
            href="/"
            className={cn(buttonVariants({ variant: "outline" }))}
          >
            Open Editor
          </Link>
        </div>
      </div>
    </div>
  );
}
