import { ogImage, ogSize } from "@/lib/og";

export const alt = "Markdown Visualizer";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return ogImage({
    title: "Markdown Visualizer",
    description: "Write and preview Markdown in real-time.",
  });
}
