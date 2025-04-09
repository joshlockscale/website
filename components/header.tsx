"use client";

import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b bg-background/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/images/logo.png" alt="Lockscale Logo" width={40} height={40} className="mr-0" />
          <span className="font-heading text-xl font-extrabold">Lockscale</span>
        </Link>
        <div className="flex-1 flex items-center justify-center gap-8">
          <Link
            href="/#about"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            About
          </Link>
          <Link
            href="/#system"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            The System
          </Link>
          <Link
            href="/#features"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Features
          </Link>
          <Link
            href="/#testimonials"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Testimonials
          </Link>
        </div>
        <div className="flex items-center">
          <Link
            href="/book"
            className="inline-flex h-9 items-center justify-center rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
          >
            Book a Call
          </Link>
        </div>
      </div>
    </header>
  );
}
