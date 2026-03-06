export function BlogFooter() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-6xl mx-auto px-6 py-6">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Markdown Visualizer. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
