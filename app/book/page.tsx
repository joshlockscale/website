"use client";

import Script from "next/script";

export default function BookPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-neutral-950 to-neutral-900">
      <div className="container mx-auto py-20">
        <div 
          className="calendly-inline-widget mx-auto" 
          data-url="https://calendly.com/raiaan-lockscale/30min" 
          style={{ minWidth: "320px", height: "700px" }}
        />
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="lazyOnload"
        />
      </div>
    </main>
  );
} 