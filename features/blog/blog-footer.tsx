export function BlogFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border mt-auto">
      <div className="mx-auto w-full max-w-4xl px-4 py-6 sm:px-6">
        <p className="text-sm text-muted-foreground">
          © {currentYear} Markdown Visualizer. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
