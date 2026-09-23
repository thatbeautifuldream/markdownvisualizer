import { allPages } from "content-collections";
import { notFound } from "next/navigation";
import { StreamdownWrapper } from "@/components/streamdown-wrapper";
import { createMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/json-ld";
import { EditorCta } from "@/features/blog/editor-cta";
import { BlogHeader } from "@/features/blog/blog-header";
import { PageHeader } from "@/components/page-header";

export async function generateStaticParams() {
  return allPages.map((page) => ({
    slug: page.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = allPages.find((p) => p.slug === slug);

  if (!page) {
    return {};
  }

  return createMetadata({
    title: page.title,
    description: page.description,
    canonical: `https://markdownvisualizer.com/blog/${slug}`,
  });
}

const author = {
  name: "Milind Mishra",
  href: "https://milindmishra.com/",
};

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = allPages.find((p) => p.slug === slug);

  if (!page) {
    notFound();
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: page.title,
    description: page.description,
    author: {
      "@type": "Person",
      name: author.name,
      url: author.href,
    },
    datePublished: page.date,
    dateModified: page.date,
  };

  return (
    <>
      <JsonLd data={articleSchema} />

      <main className="grid gap-10">
        <BlogHeader href="/blog" label="Blog" />
        <article className="stagger grid min-w-0 gap-8">
          <PageHeader
            title={page.title}
            meta={`${page.category} · ${formatDate(page.date)}`}
          />
          <StreamdownWrapper content={page.content} />
        </article>
        <EditorCta />
      </main>
    </>
  );
}
