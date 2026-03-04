import { JsonLd } from "@/components/json-ld";
import { createMetadata } from "@/lib/metadata";
import Link from "next/link";
import { allPages } from "content-collections";
import { Streamdown } from "streamdown";

const page = allPages.find((p) => p.slug === "monaco-editor");

export const metadata = createMetadata({
  title: page
    ? page.title
    : "Monaco Editor in Markdown Visualizer - Professional Code Editor",
  description: page
    ? page.description
    : "Markdown Visualizer uses Monaco Editor, VS Code editor. Syntax highlighting, auto-indentation, and keyboard shortcuts for markdown editing.",
  canonical: "https://markdownvisualizer.com/monaco-editor",
});

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Monaco Editor in Markdown Visualizer",
  description:
    "Markdown Visualizer uses Monaco Editor, VS Code editor. Syntax highlighting, auto-indentation, and keyboard shortcuts for markdown editing.",
  author: {
    "@type": "Person",
    name: "Milind Mishra",
    url: "https://milindmishra.com/",
  },
  datePublished: "2026-03-04",
  dateModified: "2026-03-04",
};

export default function MonacoEditorPage() {
  return (
    <>
      <head>
        <JsonLd data={articleSchema} />
      </head>

      <Streamdown>{page?.content || ""}</Streamdown>

      <section className="bg-primary/5 border border-primary/20 p-8 rounded-lg mt-12">
        <h2 className="text-3xl font-bold mb-4">
          Try Monaco Editor in Markdown Visualizer
        </h2>
        <p className="text-lg mb-6">
          Experience professional markdown editing with Monaco Editor—the same
          engine that powers VS Code. No registration, instant load, and all the
          features you expect from a professional code editor.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8"
        >
          Open Monaco Editor
        </Link>
      </section>
    </>
  );
}
