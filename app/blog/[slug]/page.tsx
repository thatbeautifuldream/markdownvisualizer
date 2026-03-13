import { allPages } from "content-collections";
import { notFound } from "next/navigation";
import Link from "next/link";
import { StreamdownWrapper } from "@/components/streamdown-wrapper";
import { createMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/json-ld";
import { EditorCta } from "@/features/editor-cta";

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
  role: "Creator",
  href: "https://milindmishra.com/",
  imageUrl: "https://avatars.githubusercontent.com/u/28717686?v=4",
};

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default async function BlogPage({
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

      <div className="py-10 sm:py-14">
        <article className="pb-12">
          <header className="pb-10 sm:pb-12">
            <Link
              href="/blog"
              className="inline-flex text-[11px] font-medium uppercase tracking-[0.24em] text-muted-foreground transition-colors hover:text-foreground"
            >
              Back to blog
            </Link>

            <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
              <Link
                href={`/blog?category=${page.category.toLowerCase()}`}
                className="inline-flex rounded-full bg-muted/50 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.2em] transition-colors hover:bg-muted hover:text-foreground"
              >
                {page.category}
              </Link>
              <span className="hidden sm:inline">/</span>
              <time dateTime={page.date}>{formatDate(page.date)}</time>
            </div>

            <h1 className="mt-6 max-w-3xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              {page.title}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
              {page.description}
            </p>

            <div className="mt-8 flex items-center gap-2 text-xs text-muted-foreground">
              <img
                alt={author.name}
                src={author.imageUrl}
                className="size-6 rounded-full bg-muted/70"
              />
              <div className="flex items-center gap-1.5">
                <span>{author.name}</span>
                <span className="text-muted-foreground/60">/</span>
                <span>{author.role}</span>
              </div>
            </div>
          </header>

          <div className="mt-10 bg-background px-0 py-2">
            <div className="prose prose-gray max-w-none dark:prose-invert">
              <StreamdownWrapper content={page.content} />
            </div>
          </div>

          <EditorCta />
        </article>
      </div>
    </>
  );
}
