"use client";

import { Icon } from "@iconify/react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="py-10 border-t">
      <div className="container flex items-center justify-between gap-x-10 gap-y-5 flex-wrap">
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <Image src="/images/logo.png" alt="Lockscale Logo" width={40} height={40} className="mr-0" />
            <span className="font-heading text-xl font-extrabold">Lockscale</span>
          </div>
        </div>
        <div className="w-full md:w-auto order-last md:order-none flex items-center justify-center">
          <p className="text-muted-foreground text-sm text-center">
            © 2025 Lockscale. All rights reserved.
          </p>
        </div>
        <div className="flex flex-1 items-center justify-end gap-2">
          <Icon icon="mdi:facebook" className="size-5" />
          <Icon icon="mdi:twitter" className="size-5" />
          <Icon icon="mdi:instagram" className="size-5" />
          <Icon icon="mdi:linkedin" className="size-5" />
          <Icon icon="mdi:youtube" className="size-5" />
        </div>
      </div>
    </footer>
  );
}
