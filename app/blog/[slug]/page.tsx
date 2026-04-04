import { allPages } from "content-collections";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
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

      <article className="py-12 sm:py-16">
        <header className="pb-12 sm:pb-14">
          <Link
            href="/blog"
            className="inline-flex text-sm font-medium text-muted-foreground hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
          >
            Back to blog
          </Link>

          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
            <Link
              href={`/blog?category=${page.category.toLowerCase()}`}
              className="inline-flex rounded-full bg-muted/50 px-3 py-1 text-sm font-medium hover:bg-muted hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
            >
              {page.category}
            </Link>
            <span className="hidden sm:inline text-muted-foreground/50">/</span>
            <time dateTime={page.date}>{formatDate(page.date)}</time>
          </div>

          <h1 className="mt-8 text-4xl font-semibold tracking-tight text-balance text-foreground sm:text-5xl sm:max-w-[30ch]">
            {page.title}
          </h1>
          <p className="mt-6 text-base text-pretty text-muted-foreground sm:text-lg sm:max-w-[48ch]">
            {page.description}
          </p>

          <div className="mt-8 flex items-center gap-3 text-sm text-muted-foreground">
            <Image
              alt={author.name}
              src={author.imageUrl}
              width={24}
              height={24}
              className="size-6 rounded-full bg-muted/70 outline-1 -outline-offset-1 outline-black/5 dark:outline-white/10"
            />
            <div className="flex items-center gap-2">
              <span>{author.name}</span>
              <span className="text-muted-foreground/50">/</span>
              <span className="text-muted-foreground/70">{author.role}</span>
            </div>
          </div>
        </header>

        <div className="prose prose-neutral max-w-none dark:prose-invert prose-headings:font-semibold prose-headings:tracking-tight prose-headings:text-balance prose-p:text-pretty prose-a:text-foreground prose-a:underline prose-a:underline-offset-4 hover:prose-a:text-foreground/80">
          <StreamdownWrapper content={page.content} />
        </div>

        <EditorCta />
      </article>
    </>
  );
}
