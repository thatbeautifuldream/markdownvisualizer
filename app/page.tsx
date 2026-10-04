import { MarkdownWorkspace } from "@/features/workspace/markdown-workspace";
import { demoMarkdown } from "@/lib/demo-markdown";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ demo?: string }>;
}) {
  const { demo } = await searchParams;

  return (
    <div className="h-dvh overflow-hidden">
      <MarkdownWorkspace
        initialContent={demo === "true" ? demoMarkdown : undefined}
      />
    </div>
  );
}
