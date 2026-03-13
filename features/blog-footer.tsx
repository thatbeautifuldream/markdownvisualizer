export function BlogFooter() {
  return (
    <footer className="bg-background">
      <div className="mx-auto w-full max-w-4xl px-3 py-6 sm:px-6">
        <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-muted-foreground">
          © {new Date().getFullYear()} Markdown Visualizer. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
