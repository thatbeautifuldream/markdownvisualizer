import { allPages } from "content-collections";
import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/json-ld";

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

      <div className="bg-background py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-4xl font-semibold tracking-tight text-pretty text-foreground sm:text-5xl">
              {category
                ? `${category.charAt(0).toUpperCase() + category.slice(1)} Articles`
                : "Blog"}
            </h2>
            <p className="mt-2 text-lg/8 text-muted-foreground">
              {category
                ? `Showing ${filteredPages.length} ${filteredPages.length === 1 ? "post" : "posts"} in ${category} category.`
                : "Master markdown syntax, Monaco Editor features, and real-time preview with our comprehensive guides."}
            </p>
            {category && (
              <div className="mt-4">
                <Link
                  href="/blog"
                  className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary/80"
                >
                  Back to all posts
                </Link>
              </div>
            )}
            <div className="mt-10 space-y-16 border-t border-border pt-10 sm:mt-16 sm:pt-16">
              {filteredPages.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">
                    No posts found in this category.
                  </p>
                  <Link
                    href="/blog"
                    className="mt-4 inline-block text-sm font-medium text-primary hover:text-primary/80"
                  >
                    View all posts
                  </Link>
                </div>
              ) : (
                posts.map((post) => (
                  <article
                    key={post.id}
                    className="flex flex-col items-start justify-between"
                  >
                    <div className="flex items-center gap-x-4 text-xs">
                      <time
                        dateTime={post.datetime}
                        className="text-muted-foreground"
                      >
                        {post.date}
                      </time>
                      <Link
                        href={post.category.href}
                        className="relative z-10 rounded-full bg-muted px-3 py-1.5 font-medium text-muted-foreground hover:bg-muted/80"
                      >
                        {post.category.title}
                      </Link>
                    </div>
                    <div className="group relative">
                      <h3 className="mt-3 text-lg/6 font-semibold text-foreground group-hover:text-foreground/80">
                        <Link href={post.href}>
                          <span className="absolute inset-0" />
                          {post.title}
                        </Link>
                      </h3>
                      <p className="mt-5 line-clamp-3 text-sm/6 text-muted-foreground">
                        {post.description}
                      </p>
                    </div>
                    <div className="relative mt-8 flex items-center gap-x-4">
                      <img
                        alt=""
                        src={post.author.imageUrl}
                        className="size-8 rounded-full bg-muted"
                      />
                      <div className="text-sm/6">
                        <p className="font-semibold text-foreground">
                          <Link href={post.author.href}>
                            <span className="absolute inset-0" />
                            {post.author.name}
                          </Link>
                        </p>
                        <p className="text-muted-foreground">
                          {post.author.role}
                        </p>
                      </div>
                    </div>
                  </article>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
