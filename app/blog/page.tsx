import { allPages } from "content-collections";
import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/json-ld";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata = createMetadata({
  title: "Blog - Markdown Visualizer",
  description:
    "Master markdown syntax, Monaco Editor features, and real-time preview with comprehensive guides and tutorials for online markdown editing.",
  canonical: "https://markdownvisualizer.com/blog",
});

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Markdown Visualizer Blog",
  description:
    "Guides and tutorials for mastering markdown syntax, Monaco Editor, and real-time preview features",
  url: "https://markdownvisualizer.com/blog",
};

const author = {
  name: "Milind Mishra",
  role: "Creator",
  href: "https://milindmishra.com/",
  imageUrl: "https://avatars.githubusercontent.com/u/28717686?v=4",
};

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;

  const sortedPages = [...allPages].sort((a, b) =>
    a.title.localeCompare(b.title),
  );

  const filteredPages = category
    ? sortedPages.filter(
        (page) => page.category.toLowerCase() === category.toLowerCase(),
      )
    : sortedPages;

  const posts = filteredPages.map((page) => ({
    id: page.slug,
    title: page.title,
    href: `/blog/${page.slug}`,
    description: page.description,
    date: formatDate(page.date),
    datetime: page.date,
    category: {
      title: page.category,
      href: `/blog?category=${page.category.toLowerCase()}`,
    },
    author,
  }));

  return (
    <>
      <JsonLd data={blogSchema} />

      <div className="py-10 sm:py-14">
        <section className="pb-10 sm:pb-12">
          <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-muted-foreground">
            Blog
          </p>
          <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                {category
                  ? `${category.charAt(0).toUpperCase() + category.slice(1)} Articles`
                  : "Minimal notes on markdown and writing workflows."}
              </h1>
              <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg">
                {category
                  ? `Showing ${filteredPages.length} ${filteredPages.length === 1 ? "post" : "posts"} in ${category}.`
                  : "Guides on markdown syntax, editor behavior, live preview, and the small UX decisions that make developer tools feel precise."}
              </p>
            </div>
            {category ? (
              <Link
                href="/blog"
                className={cn(
                  buttonVariants({ variant: "outline", size: "sm" }),
                  "w-fit rounded-full border-0 shadow-none",
                )}
              >
                All posts
              </Link>
            ) : null}
          </div>
        </section>

        <section className="space-y-10 sm:space-y-12">
          {filteredPages.length === 0 ? (
            <div className="py-16 text-center">
              <p className="text-muted-foreground">
                No posts found in this category.
              </p>
              <Link
                href="/blog"
                className={cn(
                  buttonVariants({ variant: "outline", size: "sm" }),
                  "mt-6 rounded-full border-0 shadow-none",
                )}
              >
                View all posts
              </Link>
            </div>
          ) : (
            posts.map((post) => (
              <article
                key={post.id}
                className="group grid gap-5 py-2 transition-colors sm:grid-cols-[9rem_minmax(0,1fr)] sm:gap-8"
              >
                <div className="space-y-3 text-sm text-muted-foreground">
                  <time dateTime={post.datetime} className="block">
                    {post.date}
                  </time>
                  <Link
                    href={post.category.href}
                    className="inline-flex rounded-full bg-muted/50 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.2em] transition-colors hover:bg-muted hover:text-foreground"
                  >
                    {post.category.title}
                  </Link>
                </div>
                <div className="relative">
                  <h2 className="text-2xl font-semibold tracking-tight text-foreground transition-colors group-hover:text-foreground/75">
                    <Link href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </Link>
                  </h2>
                  <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
                    {post.description}
                  </p>
                  <div className="mt-6 flex items-center gap-2 text-xs text-muted-foreground">
                    <img
                      alt={post.author.name}
                      src={post.author.imageUrl}
                      className="size-6 rounded-full bg-muted/70"
                    />
                    <div className="flex items-center gap-1.5">
                      <span>{post.author.name}</span>
                      <span className="text-muted-foreground/60">/</span>
                      <span>{post.author.role}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))
          )}
        </section>
      </div>
    </>
  );
}
