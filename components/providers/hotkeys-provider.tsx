"use client";

import { HotkeysProvider as TanStackHotkeysProvider } from "@tanstack/react-hotkeys";
import type React from "react";

type THotkeysProviderProps = React.ComponentProps<typeof TanStackHotkeysProvider>;

export function HotkeysProvider({ children, ...props }: THotkeysProviderProps) {
	return <TanStackHotkeysProvider {...props}>{children}</TanStackHotkeysProvider>;
}
