import { JsonLd } from "@/components/json-ld";
import { createMetadata } from "@/lib/metadata";
import Link from "next/link";
import { allPages } from "content-collections";
import { Streamdown } from "streamdown";

const page = allPages.find((p) => p.slug === "markdown-editor-online");

export const metadata = createMetadata({
  title: page
    ? page.title
    : "Markdown Editor Online - Free No-Registration Editor",
  description: page
    ? page.description
    : "Free online markdown editor with live preview, Monaco syntax highlighting, and instant preview. For developers, writers, and students.",
  canonical: "https://markdownvisualizer.com/markdown-editor-online",
});

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Markdown Visualizer",
  applicationCategory: "DeveloperApplication",
  operatingSystem: "Web Browser",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  featureList: [
    "Live Markdown Preview",
    "Monaco Editor Syntax Highlighting",
    "Dark/Light Theme",
    "Session Storage Persistence",
    "Real-time Statistics",
    "No Registration Required",
    "Instant Load",
  ],
  author: {
    "@type": "Person",
    name: "Milind Mishra",
    url: "https://milindmishra.com/",
  },
};

export default function MarkdownEditorOnlinePage() {
  return (
    <>
      <JsonLd data={softwareApplicationSchema} />

      <Streamdown>{page?.content || ""}</Streamdown>

      <section className="bg-primary/5 border border-primary/20 p-8 rounded-lg mt-12">
        <h2 className="text-3xl font-bold mb-4">Try Markdown Visualizer Now</h2>
        <p className="text-lg mb-6">
          No registration. No download. No limits. Start writing markdown in
          seconds with professional Monaco editing, live preview, and
          privacy-first design.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8"
          >
            Open Editor
          </Link>
          <Link
            href="/markdown-guide"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 px-8"
          >
            Learn Markdown
          </Link>
        </div>
      </section>
    </>
  );
}
