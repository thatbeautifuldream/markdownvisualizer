import { ReactNode } from "react";

export default function Layout({
  children,
  backHref = "/",
}: {
  children: ReactNode;
  backHref?: string;
}) {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="mb-8">
          <a
            href={backHref}
            className="text-muted-foreground hover:text-foreground text-sm mb-4 inline-block"
          >
            Back to Editor
          </a>
        </div>
        {children}
      </div>
    </div>
  );
}
