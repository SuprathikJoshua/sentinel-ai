import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Sentinel AI — CI/CD for AI Agents",
  description: "Automated scenario generation, sandboxed execution, failure mode classification, and reliability regression tracking for autonomous AI agents.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased bg-slate-950 text-slate-100 min-h-screen flex flex-col font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
        <Navbar />
        <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-8">{children}</main>
      </body>
    </html>
  );
}
