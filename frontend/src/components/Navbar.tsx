"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ShieldAlert,
  Bot,
  Activity,
  Plus,
  GitBranch,
  Terminal,
  Layers,
  Sparkles,
} from "lucide-react";
import clsx from "clsx";

export function Navbar() {
  const pathname = usePathname();
  const [health, setHealth] = useState<{ status: string; db: string } | null>(null);

  useEffect(() => {
    async function checkHealth() {
      try {
        const res = await fetch("http://localhost:4000/health", { cache: "no-store" });
        if (res.ok) {
          const data = await res.json();
          setHealth({ status: data.status, db: data.db });
        } else {
          setHealth({ status: "degraded", db: "disconnected" });
        }
      } catch {
        setHealth({ status: "offline", db: "offline" });
      }
    }
    checkHealth();
    const interval = setInterval(checkHealth, 8000);
    return () => clearInterval(interval);
  }, []);

  const navLinks = [
    { href: "/agents", label: "Agent Studio", icon: Bot },
    { href: "/agents/new", label: "New Agent", icon: Plus },
  ];

  const isHealthy = health?.status === "healthy" && health?.db === "connected";

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/[0.08] bg-black/60 backdrop-blur-xl transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        {/* Left: Brand Identity */}
        <div className="flex items-center gap-6">
          <Link href="/agents" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center text-cyan-400 group-hover:border-cyan-500/50 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all">
              <ShieldAlert className="w-4 h-4 text-cyan-400 group-hover:scale-105 transition-transform" />
            </div>
            <div className="flex items-baseline gap-1.5">
              <span className="font-bold text-sm tracking-tight text-white font-sans">
                Sentinel<span className="text-cyan-400 font-extrabold">.ai</span>
              </span>
              <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-white/[0.06] text-zinc-400 border border-white/[0.08]">
                v1.0
              </span>
            </div>
          </Link>

          {/* Nav links */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = pathname === link.href || (link.href !== "/agents/new" && pathname.startsWith(link.href) && !pathname.endsWith("/new"));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={clsx(
                    "flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-medium transition-all",
                    isActive
                      ? "text-white bg-white/[0.08] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]"
                      : "text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.04]"
                  )}
                >
                  <Icon className={clsx("w-3.5 h-3.5", isActive ? "text-cyan-400" : "text-zinc-400")} />
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Right: Health Telemetry & Action CTA */}
        <div className="flex items-center gap-3">
          {/* Live Engine Status Pill */}
          <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-zinc-900/90 border border-white/[0.08] text-[11px] font-mono">
            <span
              className={clsx(
                "w-2 h-2 rounded-full",
                isHealthy
                  ? "bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.7)] animate-pulse"
                  : health?.status === "degraded"
                  ? "bg-amber-400 shadow-[0_0_8px_rgba(245,158,11,0.7)]"
                  : "bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.7)]"
              )}
            />
            <span className="text-zinc-300">
              {isHealthy ? "Harness Online" : health?.status ? health.status.toUpperCase() : "Connecting..."}
            </span>
          </div>

          <Link
            href="/agents/new"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-zinc-950 font-semibold text-xs transition-all shadow-[0_0_15px_rgba(6,182,212,0.2)] hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] active:scale-95"
          >
            <Plus className="w-3.5 h-3.5 stroke-[2.5]" />
            <span className="hidden sm:inline">New Agent</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
