import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };

// Shared Open Graph card, matching the portfolio's card.
export async function ogImage({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  const faces = [
    { name: "Allo", file: "allo-400.ttf", weight: 400 },
    { name: "Allo", file: "allo-500.ttf", weight: 500 },
    { name: "Noto Sans Devanagari", file: "noto-sans-devanagari-400.ttf", weight: 400 },
    { name: "Noto Sans Devanagari", file: "noto-sans-devanagari-500.ttf", weight: 500 },
  ] as const;
  const fonts = await Promise.all(
    faces.map(async ({ name, file, weight }) => ({
      name,
      weight,
      style: "normal" as const,
      data: await readFile(join(process.cwd(), "assets/fonts", file)),
    })),
  );

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          padding: 96,
          backgroundColor: "#fdfdfc",
          fontFamily: "Allo, Noto Sans Devanagari",
          fontSize: 44,
          lineHeight: 1.35,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 32, width: 912 }}>
          <div style={{ color: "#111111", fontWeight: 500 }}>{title}</div>
          <div style={{ color: "#595958", fontWeight: 400 }}>
            {description}
          </div>
        </div>
      </div>
    ),
    {
      ...ogSize,
      fonts,
    },
  );
}
