"use client";

import { Badge } from "@/components/ui/badge";
import { Icon } from "@iconify/react";
import {
  AccordionTrigger,
  AccordionContent,
  AccordionItem,
  Accordion,
} from "@/components/ui/accordion";
import { CardContent, Card } from "@/components/ui/card";

export function Faq() {
  return (
    <section className="relative py-20">
      <div className="container flex flex-col gap-6 items-center">
        <div className="flex flex-col gap-3 items-center">
          <Badge className="gap-1.5 bg-primary/10 text-primary">FAQ</Badge>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl max-w-2xl text-balance text-center">
            Questions? Answers.
          </h2>
        </div>
        <p className="text-muted-foreground text-base max-w-xl text-balance text-center"></p>
        <Accordion collapsible type="single" className="flex flex-col gap-4 w-full max-w-3xl">
          <Card className="shadow-none py-0">
            <CardContent className="px-0">
              <AccordionItem value="IrCr0Hs6kIv" className="border-b-0">
                <AccordionTrigger className="hover:no-underline items-center p-6">
                  <span className="font-semibold text-base">What exactly do I get?</span>
                  <Icon
                    icon="lucide:chevron-down"
                    className="size-4 transition-transform duration-200"
                  />
                </AccordionTrigger>
                <AccordionContent className="p-6 pt-0">
                  <p className="text-muted-foreground text-base">
                    A fully built system that brings in real job calls from people actively looking
                    for a locksmith near you. It’s designed to run in the background while you focus
                    on doing the work.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </CardContent>
          </Card>
          <Card className="shadow-none py-0">
            <CardContent className="px-0">
              <AccordionItem value="xux8d7aRVg8" className="border-b-0">
                <AccordionTrigger className="hover:no-underline items-center p-6">
                  <span className="font-semibold text-base">
                    How soon will I start getting jobs?
                  </span>
                  <Icon
                    icon="lucide:chevron-down"
                    className="size-4 transition-transform duration-200"
                  />
                </AccordionTrigger>
                <AccordionContent className="p-6 pt-0">
                  <p className="text-muted-foreground text-base">
                    Our team will have everything launched for you within a week. You don’t pay for
                    setup time, and most clients start getting job calls in the first few days after
                    we go live.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </CardContent>
          </Card>
          <Card className="shadow-none py-0">
            <CardContent className="px-0">
              <AccordionItem value="mK2iYgWSpXM" className="border-b-0">
                <AccordionTrigger className="hover:no-underline items-center p-6">
                  <span className="font-semibold text-base">Is there anything I need to do?</span>
                  <Icon
                    icon="lucide:chevron-down"
                    className="size-4 transition-transform duration-200"
                  />
                </AccordionTrigger>
                <AccordionContent className="p-6 pt-0">
                  <p className="text-muted-foreground text-base">
                    Nothing. We handle the setup, performance, and ongoing management. Your only job
                    is picking up the phone when someone calls.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </CardContent>
          </Card>
          <Card className="shadow-none py-0">
            <CardContent className="px-0">
              <AccordionItem value="jlGS5Fi4Uee" className="border-b-0">
                <AccordionTrigger className="hover:no-underline items-center p-6">
                  <span className="font-semibold text-base">How do you charge?</span>
                  <Icon
                    icon="lucide:chevron-down"
                    className="size-4 transition-transform duration-200"
                  />
                </AccordionTrigger>
                <AccordionContent className="p-6 pt-0">
                  <p className="text-muted-foreground text-base">
                    We charge a one-time fee to build, launch, and run everything for you. After
                    that, the system’s yours - listings, accounts, the whole setup. We’ll explain
                    how it works on the call.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </CardContent>
          </Card>
          <Card className="shadow-none py-0">
            <CardContent className="px-0">
              <AccordionItem value="DdCitybGH3G" className="border-b-0">
                <AccordionTrigger className="hover:no-underline items-center p-6">
                  <span className="font-semibold text-base">What's your guarantee?</span>
                  <Icon
                    icon="lucide:chevron-down"
                    className="size-4 transition-transform duration-200"
                  />
                </AccordionTrigger>
                <AccordionContent className="p-6 pt-0">
                  <p className="text-muted-foreground text-base">
                    We guarantee 120 real calls from people looking for a locksmith within 3 months.
                    If those don’t turn into at least 60 jobs (20 per month), we’ll keep working
                    until you get there at no extra cost.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </CardContent>
          </Card>
        </Accordion>
      </div>
    </section>
  );
}
