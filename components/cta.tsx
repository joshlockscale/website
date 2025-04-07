"use client";

import { Button } from "@/components/ui/button";

export function Cta() {
  return (
    <section className="relative py-36">
      <div className="container flex flex-col gap-10 md:flex-row items-center justify-between">
        <div className="flex flex-col gap-2">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl max-w-2xl text-balance">
            Unlock More Jobs Today
          </h2>
          <p className="text-muted-foreground text-base max-w-xl text-balance">
            Transform your locksmith business with a job-generating system that you actually own.
            Built once. Yours forever.
          </p>
        </div>
        <div>
          <Button variant="default" size="default">
            🗓️ Book a Call
          </Button>
        </div>
      </div>
    </section>
  );
}
