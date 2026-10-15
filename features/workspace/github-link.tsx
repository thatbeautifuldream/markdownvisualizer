"use client";

import * as React from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/config";
import { GitHub } from "@/components/icons/github";
import { ErrorBoundary } from "@/components/error-boundary";

const linkClassName =
  "text-faint hover:text-foreground flex items-center gap-1.5 no-underline";

function parseStargazersCount(payload: unknown): number | null {
  if (!payload || typeof payload !== "object") return null;
  const count = (payload as { stargazers_count?: unknown }).stargazers_count;
  return typeof count === "number" && Number.isFinite(count) && count >= 0
    ? count
    : null;
}

function formatStarCount(count: number): string {
  return count >= 1000
    ? `${Math.round(count / 1000)}k`
    : count.toLocaleString();
}

type GitHubRepoLinkProps = {
  stars?: string | null;
};

function GitHubRepoLink({ stars }: GitHubRepoLinkProps) {
  return (
    <Link
      href={siteConfig.links.github}
      target="_blank"
      rel="noreferrer"
      className={linkClassName}
      aria-label={
        stars ? `GitHub repository, ${stars} stars` : "GitHub repository"
      }
    >
      <GitHub className="size-4 shrink-0" />
      {stars ? <span className="tabular-nums">{stars}</span> : null}
    </Link>
  );
}

function GitHubLinkWithStars() {
  const [stars, setStars] = React.useState<string | null>(null);

  React.useEffect(() => {
    let cancelled = false;

    void (async () => {
      try {
        const response = await fetch(
          `https://api.github.com/repos/${siteConfig.owner}/${siteConfig.repo}`,
        );
        if (!response.ok) return;

        const count = parseStargazersCount(await response.json());
        if (!cancelled && count !== null) {
          setStars(formatStarCount(count));
        }
      } catch {
        // Keep icon-only link on any failure.
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  return <GitHubRepoLink stars={stars} />;
}

export function GitHubLink() {
  return (
    <ErrorBoundary fallback={<GitHubRepoLink />}>
      <GitHubLinkWithStars />
    </ErrorBoundary>
  );
}
