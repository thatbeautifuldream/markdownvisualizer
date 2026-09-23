import { IndexList } from "@/components/index-list";
import { PageHeader } from "@/components/page-header";

export default function NotFound() {
  return (
    <main className="stagger grid gap-12">
      <article className="grid gap-4">
        <PageHeader title="This article wandered off." meta="404" />
        <p className="text-pretty">
          The article you&apos;re looking for doesn&apos;t exist or has moved.
        </p>
      </article>
      <IndexList
        title="Go somewhere"
        items={[
          { href: "/blog", title: "Read the blog" },
          { href: "/", title: "Open the editor" },
        ]}
      />
    </main>
  );
}
