import { IndexList } from "@/components/index-list";

export function EditorCta() {
  return (
    <IndexList
      title="Try it"
      items={[{ href: "/", title: "Open the editor", meta: "Live preview" }]}
    />
  );
}
