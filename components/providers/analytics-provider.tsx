"use client";

import { GoogleAnalytics } from "@next/third-parties/google";
import { useEffect } from "react";
import clarity from "@microsoft/clarity";
import { env } from "@/env";

function Clarity() {
	useEffect(() => {
		if (typeof window !== "undefined") {
			clarity.init(env.NEXT_PUBLIC_CLARITY_ID);
		}
	}, []);

	return null;
}

export function AnalyticsProvider() {
  return (
    <>
      <Clarity />
      <GoogleAnalytics gaId={env.NEXT_PUBLIC_GA_ID} />
    </>
  );
}
