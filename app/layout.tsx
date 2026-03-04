import { ClarityProvider } from "@/components/providers/clarity-provider";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { ToasterProvider } from "@/components/providers/toaster-provider";
import { JsonLd } from "@/components/json-ld";
import { env } from "@/env";
import { createMetadata } from "@/lib/metadata";
import { cn } from "@/lib/utils";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Markdown Visualizer",
  "applicationCategory": "DeveloperApplication",
  "operatingSystem": "Web Browser",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD",
  },
  "featureList": [
    "Live Markdown Preview",
    "Monaco Editor Syntax Highlighting",
    "Dark/Light Theme",
    "Session Storage Persistence",
    "Real-time Statistics",
  ],
  "author": {
    "@type": "Person",
    "name": "Milind Mishra",
    "url": "https://milindmishra.com/",
  },
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <JsonLd data={softwareApplicationSchema} />
      </head>
      <body
        className={cn(
          `antialiased min-h-screen bg-background text-foreground`,
          geist.className,
          geistMono.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <div className="h-full flex flex-col">
            {children}
          </div>
          <ToasterProvider />
        </ThemeProvider>
        <ClarityProvider />
        <GoogleAnalytics gaId={env.NEXT_PUBLIC_GA_ID} />
      </body>
    </html>
  );
}
