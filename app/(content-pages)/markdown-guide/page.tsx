import { JsonLd } from "@/components/json-ld";
import { createMetadata } from "@/lib/metadata";
import Link from "next/link";
import { allPages } from "content-collections";
import { Streamdown } from "streamdown";

const page = allPages.find((p) => p.slug === "markdown-guide");

export const metadata = createMetadata({
  title: page
    ? page.title
    : "Complete Markdown Guide - Learn Markdown Syntax & Best Practices",
  description: page
    ? page.description
    : "Learn markdown syntax from basics to advanced. Reference for creating structured documents with examples and best practices.",
  canonical: "https://markdownvisualizer.com/markdown-guide",
});

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Markdown?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Markdown is a lightweight markup language created by John Gruber in 2004. It allows users to format text using simple, readable syntax that can be converted to HTML. Markdown has become the standard for documentation, README files, and technical writing.",
      },
    },
    {
      "@type": "Question",
      name: "How do I write Markdown?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You write Markdown using plain text with special characters for formatting. For example, use # for headings, * or _ for italic, ** or __ for bold, - for lists, and `code` for inline code. You can practice writing Markdown using our free online editor.",
      },
    },
    {
      "@type": "Question",
      name: "Why should I use Markdown?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Markdown is portable, version-control friendly, and works everywhere from GitHub to documentation tools. It reduces formatting time by up to 60% compared to traditional word processors, and is the universal language of technical documentation.",
      },
    },
    {
      "@type": "Question",
      name: "Is Markdown difficult to learn?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No, Markdown is intentionally simple. Most users learn the basics in under 5 minutes. The syntax uses intuitive characters that you might already use in chats and emails, making it easy to remember.",
      },
    },
    {
      "@type": "Question",
      name: "Where is Markdown used?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Markdown is used everywhere in tech: GitHub README files, documentation sites like GitBook and Docusaurus, static site generators like Jekyll and Hugo, messaging platforms like Slack and Discord, and many content management systems.",
      },
    },
  ],
};

export default function MarkdownGuidePage() {
  return (
    <>
      <head>
        <JsonLd data={faqSchema} />
      </head>

      <Streamdown>{page?.content || ""}</Streamdown>

      <section className="bg-muted/50 p-8 rounded-lg mt-12">
        <h2 className="text-3xl font-bold mb-4">Ready to Write?</h2>
        <p className="text-lg mb-6">
          Practice your Markdown skills with our free online editor. Features
          include real-time preview, syntax highlighting, dark mode, and session
          persistence—all without registration.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8"
        >
          Try Markdown Visualizer
        </Link>
      </section>
    </>
  );
}
