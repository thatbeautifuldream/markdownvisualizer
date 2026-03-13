import { ReactNode } from "react";
import { BlogHeader } from "@/features/blog-header";
import { BlogFooter } from "@/features/blog-footer";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <BlogHeader />
      <div className="flex-1 mx-auto w-full max-w-4xl px-3 sm:px-6">
        {children}
      </div>
      <BlogFooter />
    </div>
  );
}
