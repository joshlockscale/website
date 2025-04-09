"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Script from "next/script";

export default function BookPage() {
  return (
    <>
      <Header />
      <main>
        <section className="relative overflow-hidden bg-gradient-to-b from-neutral-950 to-neutral-900">
          <div className="container relative z-10 mx-auto px-6 py-32 md:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="font-heading text-4xl font-bold md:text-6xl">Book Your Call</h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Schedule your 30-minute intro call to discuss how we can help you get more locksmith jobs.
              </p>
            </div>
            <div className="mt-16">
              <div 
                className="calendly-inline-widget mx-auto rounded-lg bg-card" 
                data-url="https://calendly.com/raiaan-lockscale/30min" 
                style={{ minWidth: "320px", height: "700px" }}
              />
              <Script
                src="https://assets.calendly.com/assets/external/widget.js"
                strategy="lazyOnload"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 