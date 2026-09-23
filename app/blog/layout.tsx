import { ReactNode } from "react";
import { BlogFooter } from "@/features/blog/blog-footer";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <div
        aria-hidden="true"
        className="top-fade pointer-events-none fixed inset-x-0 top-0 z-10 h-10 md:h-32"
      />
      <div className="isolate mx-auto flex min-h-svh w-full max-w-[36.375rem] flex-col gap-10 px-6 pt-8 md:px-4 md:pt-20">
        <div className="grow">{children}</div>
        <BlogFooter />
      </div>
    </>
  );
}
