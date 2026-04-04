import { ReactNode } from "react";
import { BlogHeader } from "@/features/blog-header";
import { BlogFooter } from "@/features/blog-footer";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-dvh bg-background flex flex-col isolate">
      <BlogHeader />
      <main className="flex-1 mx-auto w-full max-w-4xl px-4 sm:px-6">
        {children}
      </main>
      <BlogFooter />
    </div>
  );
}
