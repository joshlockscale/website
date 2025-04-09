"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Script from "next/script";
import Head from "next/head";

export default function BookPage() {
  return (
    <>
      <Head>
        <link rel="preload" href="https://assets.calendly.com/assets/external/widget.js" as="script" />
      </Head>
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
              data-url="https://calendly.com/raiaan-lockscale/30min" 
              style={{ height: "650px" }}
            />
            <Script
              src="https://assets.calendly.com/assets/external/widget.js"
              strategy="beforeInteractive"
              async
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
} 