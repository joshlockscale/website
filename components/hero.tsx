"use client";

import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { Icon } from "@iconify/react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
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
      <div className="container flex flex-col gap-6 items-center">
        <Badge variant="secondary" className="gap-2 pl-0.5">
          <div className="flex items-center">
            <Avatar className="size-7 border-2 border-secondary">
              <AvatarImage
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww"
                alt="Avatar"
                className="object-cover"
              />
              <AvatarFallback />
            </Avatar>
            <Avatar className="size-7 border-2 border-secondary -ml-3">
              <AvatarImage
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fHww"
                alt="Avatar"
                className="object-cover"
              />
              <AvatarFallback />
            </Avatar>
            <Avatar className="size-7 border-2 border-secondary -ml-3">
              <AvatarImage
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D"
                alt="Avatar"
                className="object-cover"
              />
              <AvatarFallback />
            </Avatar>
          </div>
          Trusted by 50+ Local Businesses
          <Icon icon="lucide:chevron-right" className="size-4" />
        </Badge>
        <h1 className="font-heading font-bold text-4xl sm:text-5xl max-w-2xl text-balance text-center">
          Get 20 Lockout Jobs in 30 Days — Guaranteed
        </h1>
        <p className="text-muted-foreground text-base sm:text-lg max-w-xl text-balance text-center">
          Never rely on word of mouth or slow seasons again with a system that books urgent lockout
          jobs for you, on autopilot.
        </p>
        <div className="flex gap-2">
          <Button variant="default" size="default">
            🗓️ Book a Call
          </Button>
          <Button variant="secondary" size="default">
            Learn More
          </Button>
        </div>
        <div className="relative w-full max-w-4xl mt-4 rounded-lg overflow-hidden border-4 border-gray-400 shadow-lg">
          <video
            className="w-full h-full"
            controls
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="/images/video-poster.jpg"
          >
            <source src="https://81jkcsdgmt5mmogx.public.blob.vercel-storage.com/vsl-OUMvFvOx4Qi4Hn5vzvejvixnFK7AzW.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
}
