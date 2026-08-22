import type { Metadata } from "next";
import "./globals.css";

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
      <body className="antialiased bg-slate-950 text-slate-100 min-h-screen flex flex-col">
        <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center font-bold text-white shadow-lg shadow-cyan-500/20">
                S
              </div>
              <span className="font-semibold text-lg tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
                Sentinel AI
              </span>
              <span className="text-xs uppercase px-2 py-0.5 rounded-full bg-cyan-950/80 text-cyan-400 border border-cyan-800/50 font-mono">
                CI/CD Engine
              </span>
            </div>
            <nav className="flex items-center gap-6 text-sm">
              <a href="/agents" className="text-slate-300 hover:text-white transition-colors">
                Agents
              </a>
              <a href="/agents/new" className="text-slate-300 hover:text-white transition-colors">
                New Agent
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="text-xs text-slate-400 hover:text-slate-200 border border-slate-800 px-3 py-1.5 rounded-md hover:bg-slate-900 transition-all"
              >
                Docs & Spec
              </a>
            </nav>
          </div>
        </header>
        <main className="flex-1 max-w-7xl w-full mx-auto px-6 py-8">{children}</main>
      </body>
    </html>
  );
}
