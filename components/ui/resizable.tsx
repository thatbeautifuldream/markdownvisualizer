"use client";

import * as React from "react";
import {
  Group as ResizablePrimitivePanelGroup,
  Panel as ResizablePrimitivePanel,
  Separator as ResizablePrimitiveSeparator,
} from "react-resizable-panels";
import { cn } from "@/lib/utils";

function ResizablePanelGroup({
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitivePanelGroup>) {
  return (
    <ResizablePrimitivePanelGroup
      className={cn(
        "flex h-full w-full data-[panel-group-direction=vertical]:flex-col",
        className,
      )}
      {...props}
    />
  );
}

function ResizablePanel({
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitivePanel>) {
  return (
    <ResizablePrimitivePanel className={cn("h-full", className)} {...props} />
  );
}

function ResizableHandle({
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitiveSeparator>) {
  return (
    <ResizablePrimitiveSeparator
      className={cn(
        "relative flex w-4 shrink-0 items-center justify-center bg-transparent transition-colors before:absolute before:inset-y-0 before:left-1/2 before:w-px before:-translate-x-1/2 before:bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-4 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 [&[aria-orientation=horizontal]]:h-4 [&[aria-orientation=horizontal]]:w-full [&[aria-orientation=horizontal]]:before:inset-x-0 [&[aria-orientation=horizontal]]:before:left-0 [&[aria-orientation=horizontal]]:before:top-1/2 [&[aria-orientation=horizontal]]:before:h-px [&[aria-orientation=horizontal]]:before:w-full [&[aria-orientation=horizontal]]:before:-translate-y-1/2 [&[aria-orientation=horizontal]]:before:translate-x-0 [&[aria-orientation=horizontal]]:after:left-0 [&[aria-orientation=horizontal]]:after:top-1/2 [&[aria-orientation=horizontal]]:after:h-4 [&[aria-orientation=horizontal]]:after:w-full [&[aria-orientation=horizontal]]:after:-translate-y-1/2 [&[aria-orientation=horizontal]]:after:translate-x-0",
        className,
      )}
      {...props}
    />
  );
}

export { ResizablePanelGroup, ResizablePanel, ResizableHandle };
