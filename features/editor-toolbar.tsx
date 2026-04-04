"use client";

import { Button } from "@/components/ui/button";

type TEditorToolbarProps = {
  onCopy: () => void;
  onClear: () => void;
  hasContent: boolean;
  className?: string;
  isVisible?: boolean;
};

const ToolbarButton = ({
  onClick,
  children,
  disabled,
}: {
  onClick: () => void;
  children: React.ReactNode;
  disabled: boolean;
}) => (
  <Button
    onClick={onClick}
    className="text-sm relative"
    disabled={disabled}
    size="sm"
    variant="ghost"
    type="button"
  >
    <span className="absolute top-1/2 left-1/2 size-[max(100%,3rem)] -translate-1/2 pointer-fine:hidden" aria-hidden="true" />
    {children}
  </Button>
);

export function EditorToolbar({
  onCopy,
  onClear,
  hasContent,
  className = "",
  isVisible = true,
}: TEditorToolbarProps) {
  if (!isVisible) return null;
  return (
    <div className={`flex flex-wrap items-center gap-1 ${className}`}>
      <ToolbarButton onClick={onCopy} disabled={!hasContent}>
        Copy
      </ToolbarButton>
      <ToolbarButton onClick={onClear} disabled={!hasContent}>
        Clear
      </ToolbarButton>
    </div>
  );
}
