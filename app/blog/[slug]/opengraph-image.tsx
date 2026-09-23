import { allPages } from "content-collections";
import { ogImage, ogSize } from "@/lib/og";

export const size = ogSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return allPages.map((page) => ({ slug: page.slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = allPages.find((p) => p.slug === slug);
  return ogImage({
    title: page?.title ?? "Markdown Visualizer",
    description: page?.description ?? "",
  });
}
