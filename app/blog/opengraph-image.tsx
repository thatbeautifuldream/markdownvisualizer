import { ogImage, ogSize } from "@/lib/og";

export const alt = "Markdown Visualizer Blog";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return ogImage({
    title: "Writing",
    description: "Notes on markdown and writing workflows.",
  });
}
