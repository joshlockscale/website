"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Script from "next/script";
import { useEffect } from "react";

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: {
        url: string;
        parentElement: Element | null;
      }) => void;
    };
  }
}

export default function BookPage() {
  useEffect(() => {
    // Ensure Calendly widget is initialized when component mounts
    if (typeof window.Calendly !== 'undefined') {
      window.Calendly.initInlineWidget({
        url: 'https://calendly.com/raiaan-lockscale/30min',
        parentElement: document.querySelector('.calendly-inline-widget'),
      });
    }
  }, []);

  return (
    <>
      <Header />
      <section className="relative py-20">
        <div className="absolute inset-0 size-full -z-10">
          <svg
            aria-hidden="true"
            className="fill-foreground/15 pointer-events-none absolute inset-0 size-full -z-10"
          >
            <defs>
              <pattern
                id="dot-pattern"
                width="25"
                height="25"
                patternUnits="userSpaceOnUse"
                patternContentUnits="userSpaceOnUse"
                x="0"
                y="0"
              >
                <circle id="pattern-circle" cx="10" cy="10" r="1.25" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" strokeWidth="0" fill="url(#dot-pattern)" />
          </svg>
          <div className="absolute inset-0 size-full bg-radial-[at_50%_50%] from-transparent via-background/5 to-background via-70% to-95%" />
        </div>
        <div className="container flex flex-col items-center">
          <div className="w-full max-w-3xl">
            <div 
              className="calendly-inline-widget"
              style={{ position: "relative", minWidth: "320px", height: "700px" }}
            />
            <Script 
              src="https://assets.calendly.com/assets/external/widget.js"
              strategy="afterInteractive"
              onLoad={() => {
                if (typeof window.Calendly !== 'undefined') {
                  window.Calendly.initInlineWidget({
                    url: 'https://calendly.com/raiaan-lockscale/30min',
                    parentElement: document.querySelector('.calendly-inline-widget'),
                  });
                }
              }}
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
} 