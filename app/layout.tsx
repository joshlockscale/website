import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lockscale",
  description: "Get 20 Lockout Jobs in 30 Days — Guaranteed",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={cn(inter.className, "min-h-screen bg-background antialiased")}>
        {children}
      </body>
    </html>
  );
}
