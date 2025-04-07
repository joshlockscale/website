"use client";

import { Icon } from "@iconify/react";

export function Footer() {
  return (
    <footer className="py-10 border-t">
      <div className="container flex items-center justify-between gap-x-10 gap-y-5 flex-wrap">
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <Icon
              icon="solar:bolt-circle-bold-duotone"
              className="text-primary size-7 [&>path:first-child]:opacity-100 [&>path:last-child]:fill-white rounded-full"
            />
            <span className="font-heading text-xl font-extrabold">Logo</span>
          </div>
        </div>
        <div className="w-full md:w-auto order-last md:order-none flex items-center justify-center">
          <p className="text-muted-foreground text-sm text-center">
            © 2025 Lockscale. All rights reserved.
          </p>
        </div>
        <div className="flex flex-1 items-center justify-end gap-2">
          <a href="https://www.facebook.com/Lockcale">
            <Icon icon="mdi:facebook" className="size-5" />
          </a>
          <a href="https://twitter.com/Lockcale">
            <Icon icon="mdi:twitter" className="size-5" />
          </a>
          <a href="https://www.instagram.com/Lockcale">
            <Icon icon="mdi:instagram" className="size-5" />
          </a>
          <a href="https://www.linkedin.com/company/Lockcale">
            <Icon icon="mdi:linkedin" className="size-5" />
          </a>
          <a href="https://www.youtube.com/Lockcale">
            <Icon icon="mdi:youtube" className="size-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
