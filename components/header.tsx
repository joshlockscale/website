"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Icon } from "@iconify/react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b bg-background/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between">
        <div className="w-[200px]">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/images/logo.png" alt="Lockscale Logo" width={40} height={40} className="mr-0" />
            <span className="font-heading text-xl font-extrabold">Lockscale</span>
          </Link>
        </div>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
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
            href="/#testimonials"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Testimonials
          </Link>
          <Link
            href="/#qa"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Q&A
          </Link>
        </nav>
        <div className="w-[200px] flex items-center justify-end">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden mr-4"
          >
            <Icon icon={isMenuOpen ? "lucide:x" : "lucide:menu"} className="h-6 w-6" />
          </button>
          <Link
            href="/book"
            className="inline-flex h-9 items-center justify-center rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
          >
            Book a Call
          </Link>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <nav className="container py-4">
            <div className="flex flex-col gap-4">
              <Link
                href="/#about"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/#system"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                onClick={() => setIsMenuOpen(false)}
              >
                The System
              </Link>
              <Link
                href="/#testimonials"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
              </Link>
              <Link
                href="/#qa"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                onClick={() => setIsMenuOpen(false)}
              >
                Q&A
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
