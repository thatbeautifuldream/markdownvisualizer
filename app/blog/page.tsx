import { allPages } from "content-collections";
import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/json-ld";
import { IndexList } from "@/components/index-list";
import { PageHeader } from "@/components/page-header";
import { BlogHeader } from "@/features/blog/blog-header";

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

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;

  const pages = [...allPages]
    .filter(
      (page) =>
        !category || page.category.toLowerCase() === category.toLowerCase(),
    )
    .sort((a, b) => a.title.localeCompare(b.title));

  const groups = Object.entries(
    Object.groupBy(pages, (page) => page.category),
  ).sort(([a], [b]) => a.localeCompare(b));

  return (
    <>
      <JsonLd data={blogSchema} />

      <main className="stagger grid gap-12">
        <BlogHeader href={category ? "/blog" : "/"} label={category ? "Blog" : "Editor"} />
        <PageHeader
          title="Writing"
          meta="Notes on markdown and writing workflows."
        />
        {groups.length === 0 ? (
          <p className="text-faint">
            No posts in this category.{" "}
            <Link href="/blog">View all posts</Link>
          </p>
        ) : (
          groups.map(([title, items]) => (
            <IndexList
              key={title}
              title={title}
              items={(items ?? []).map((page) => ({
                href: `/blog/${page.slug}`,
                title: page.title,
              }))}
            />
          ))
        )}
      </main>
    </>
  );
}
