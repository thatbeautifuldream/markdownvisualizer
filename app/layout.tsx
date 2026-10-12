import { JsonLd } from "@/components/json-ld";
import { AnalyticsProvider } from "@/components/providers/analytics-provider";
import { ServiceWorkerProvider } from "@/components/providers/service-worker-provider";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { ToasterProvider } from "@/components/providers/toaster-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { HotkeysProvider } from "@/components/providers/hotkeys-provider";
import { createMetadata } from "@/lib/metadata";
import type { Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

const inter = localFont({
  src: [
    {
      path: "../assets/fonts/InterVariable.woff2",
      weight: "100 900",
      style: "normal",
    },
    {
      path: "../assets/fonts/InterVariable-Italic.woff2",
      weight: "100 900",
      style: "italic",
    },
  ],
  variable: "--font-inter",
  display: "swap",
});

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Markdown Visualizer",
  applicationCategory: "DeveloperApplication",
  operatingSystem: "Web Browser",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  featureList: [
    "Live Markdown Preview",
    "Monaco Editor Syntax Highlighting",
    "Dark/Light Theme",
    "Session Storage Persistence",
    "Real-time Statistics",
  ],
  author: {
    "@type": "Person",
    name: "Milind Mishra",
    url: "https://milindmishra.com/",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fdfdfc" },
    { media: "(prefers-color-scheme: dark)", color: "#111111" },
  ],
};

export const metadata = createMetadata({
  title: "Markdown Visualizer - Free Online Markdown Editor with Live Preview",
  description:
    "Write and preview Markdown in real-time. A free, no-registration markdown editor with Monaco syntax highlighting, dark mode, and instant preview. Perfect for developers, writers, and students.",
  canonical: "https://markdownvisualizer.com",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`} suppressHydrationWarning>
      <head>
        <JsonLd data={softwareApplicationSchema} />
      </head>
      <body
        className="bg-background text-foreground min-h-svh"
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <HotkeysProvider>
            <TooltipProvider>
              <div className="h-full flex flex-col isolate">{children}</div>
              <ToasterProvider />
            </TooltipProvider>
          </HotkeysProvider>
        </ThemeProvider>
        <AnalyticsProvider />
        <ServiceWorkerProvider />
      </body>
    </html>
  );
}
