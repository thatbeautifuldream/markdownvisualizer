import { JsonLd } from "@/components/json-ld";
import { createMetadata } from "@/lib/metadata";
import Link from "next/link";
import { allPages } from "content-collections";
import { Streamdown } from "streamdown";

const page = allPages.find((p) => p.slug === "markdown-preview");

export const metadata = createMetadata({
  title: page ? page.title : "Markdown Preview - Real-Time Markdown Renderer",
  description: page
    ? page.description
    : "Preview markdown instantly with real-time rendering. Supports GitHub Flavored Markdown, code syntax highlighting, tables, task lists. Free, no registration.",
  canonical: "https://markdownvisualizer.com/markdown-preview",
});

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Preview Markdown",
  step: [
    {
      "@type": "HowToStep",
      text: "Open Markdown Visualizer and paste or type your markdown content in the editor pane",
    },
    {
      "@type": "HowToStep",
      text: "Switch to the Preview tab or use the split view to see your rendered markdown instantly",
    },
    {
      "@type": "HowToStep",
      text: "Write markdown and watch the preview update in real-time as you type",
    },
    {
      "@type": "HowToStep",
      text: "Copy your content or export using your browser's print to PDF functionality",
    },
  ],
};

export default function MarkdownPreviewPage() {
  return (
    <>
      <head>
        <JsonLd data={howToSchema} />
      </head>

      <Streamdown>{page?.content || ""}</Streamdown>

      <section className="bg-primary/5 border border-primary/20 p-8 rounded-lg mt-12">
        <h2 className="text-3xl font-bold mb-4">Try Markdown Preview</h2>
        <p className="text-lg mb-6">
          Experience real-time markdown rendering with our free editor. No
          registration, instant load, and support for full GitHub Flavored
          Markdown.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8"
        >
          Open Editor with Preview
        </Link>
      </section>
    </>
  );
}
