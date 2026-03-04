import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
        <p className="text-muted-foreground mb-8">
          The article you&apos;re looking for doesn&apos;t exist or has been
          removed.
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/blog">
            <Button>Back to Blog</Button>
          </Link>
          <Link href="/">
            <Button variant="outline">Open Editor</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
