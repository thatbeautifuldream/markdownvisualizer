import { ReactNode } from "react";
import { BlogHeader } from "@/features/blog-header";
import { BlogFooter } from "@/features/blog-footer";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <BlogHeader />
      <div className="flex-1 max-w-6xl mx-auto w-full">{children}</div>
      <BlogFooter />
    </div>
  );
}
