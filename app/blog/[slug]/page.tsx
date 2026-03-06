import { allPages } from "content-collections";
import { notFound } from "next/navigation";
import Link from "next/link";
import { StreamdownWrapper } from "@/components/streamdown-wrapper";
import { createMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/json-ld";
import { Button } from "@/components/ui/button";

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

      <div className="bg-background py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto">
            <article>
              <header className="mb-8 pb-8 border-b border-border">
                <div className="flex flex-col gap-6">
                  <div>
                    <Link
                      href={`/blog?category=${page.category.toLowerCase()}`}
                      className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary hover:bg-primary/20"
                    >
                      {page.category}
                    </Link>
                  </div>

                  <h1 className="text-4xl font-semibold tracking-tight text-pretty text-foreground sm:text-5xl">
                    {page.title}
                  </h1>

                  <div className="flex items-center gap-x-4">
                    <img
                      alt={author.name}
                      src={author.imageUrl}
                      className="size-10 rounded-full bg-muted"
                    />
                    <div className="text-sm">
                      <p className="font-semibold text-foreground">
                        <Link href={author.href} className="hover:text-primary">
                          {author.name}
                        </Link>
                      </p>
                      <p className="text-muted-foreground">{author.role}</p>
                    </div>
                    <div className="flex items-center gap-x-2 ml-auto">
                      <time
                        dateTime={page.date}
                        className="text-sm text-muted-foreground"
                      >
                        {formatDate(page.date)}
                      </time>
                    </div>
                  </div>
                </div>
              </header>

              <div className="prose prose-gray max-w-none dark:prose-invert">
                <StreamdownWrapper content={page.content} />
              </div>

              <div className="relative isolate overflow-hidden bg-background">
                <div className="px-6 py-24 sm:py-32 lg:px-8">
                  <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
                      Try Markdown Visualizer
                    </h2>
                    <p className="mx-auto mt-6 max-w-xl text-lg/8 text-pretty">
                      Practice what you&apos;ve learned with our free online
                      editor. No registration, instant load, and all the
                      features you need. ea.
                    </p>
                    <div className="mt-10">
                      <Link href="/">
                        <Button>Open Editor</Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  );
}
