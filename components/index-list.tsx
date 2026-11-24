import Link from "next/link";
import { cn } from "@/lib/utils";

type TIndexItem = {
  href: string;
  title: string;
  meta?: string;
  description?: string;
};

export function IndexList({
  title,
  items,
  className,
}: {
  title: string;
  items: TIndexItem[];
  className?: string;
}) {
  return (
    <section className={cn("min-w-0", className)}>
      <h2 className="section-title">{title}</h2>
      <ul role="list" className="divide-y divide-rule">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="flex items-center justify-between gap-4 py-3 no-underline"
            >
              <span className="grid min-w-0 gap-1 wrap-anywhere">
                <span className="font-medium">{item.title}</span>
                {item.description && (
                  <span className="text-muted-foreground">{item.description}</span>
                )}
              </span>
              {item.meta && (
                <span className="text-muted-foreground max-w-1/2 shrink-0 truncate tabular-nums">
                  {item.meta}
                </span>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
