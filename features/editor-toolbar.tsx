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
		className="text-xs"
		disabled={disabled}
		size="xs"
		variant="ghost"
		type="button"
	>
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
