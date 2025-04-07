"use client";

import { Badge } from "@/components/ui/badge";
import { Icon } from "@iconify/react";

export function Features() {
  return (
    <section className="relative py-20">
      <div className="container flex flex-col gap-6 items-center">
        <div className="flex flex-col gap-3 items-center">
          <Badge className="gap-1.5 bg-primary/10 text-primary">The System</Badge>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl max-w-2xl text-balance text-center">
            Lockscale Job Engine™
          </h2>
        </div>
        <p className="text-muted-foreground text-base max-w-xl text-balance text-center">
          Everything you need to dominate your local market and flood your phone with real emergency
          lockout jobs, done for you
        </p>
        <div className="grid w-full grid-cols-1 md:grid-cols-2 max-w-2xl gap-12 mt-4">
          <div className="flex gap-4 items-start">
            <div className="rounded-md p-3 bg-primary/10 text-primary">
              <Icon icon="lucide:layout-grid" className="size-4" />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="font-semibold text-lg">Top-of-Google Placement</h3>
              <p className="text-muted-foreground text-base">
                Your business will show up first when someone’s locked out and searching for help
              </p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="rounded-md p-3 bg-primary/10 text-primary">
              <Icon icon="lucide:sparkles" className="size-4" />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="font-semibold text-lg">High-Intent Leads</h3>
              <p className="text-muted-foreground text-base">
                We drive real calls from people nearby who are actively searching for locksmith
                services
              </p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="rounded-md p-3 bg-primary/10 text-primary">
              <Icon icon="lucide:pencil-ruler" className="size-4" />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="font-semibold text-lg">Built for Profitability</h3>
              <p className="text-muted-foreground text-base">
                Every part of the system is built to make you more than you spend so you stay busy
                and profitable
              </p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="rounded-md p-3 bg-primary/10 text-primary">
              <Icon icon="lucide:palette" className="size-4" />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="font-semibold text-lg">Fully Managed for You</h3>
              <p className="text-muted-foreground text-base">
                We handle everything from setup to daily optimization so you can stay focused on
                serving customers
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
