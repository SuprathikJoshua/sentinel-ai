"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShieldCheck, PlusCircle, LayoutDashboard, Terminal, Activity } from "lucide-react";
import clsx from "clsx";

export function Navbar() {
  const pathname = usePathname();
  const [dbStatus, setDbStatus] = useState<"connected" | "checking" | "disconnected">("checking");

  useEffect(() => {
    async function checkHealth() {
      try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";
        const res = await fetch(`${apiUrl}/health`);
        const data = await res.json();
        if (data.status === "healthy" && data.db === "connected") {
          setDbStatus("connected");
        } else {
          setDbStatus("disconnected");
        }
      } catch {
        setDbStatus("disconnected");
      }
    }

    checkHealth();
    const interval = setInterval(checkHealth, 15000);
    return () => clearInterval(interval);
  }, []);

  const navItems = [
    { href: "/agents", label: "Agents Studio", icon: LayoutDashboard },
    { href: "/agents/new", label: "New Agent", icon: PlusCircle },
  ];

  return (
    <header className="border-b border-slate-800/80 bg-slate-950/80 backdrop-blur sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-indigo-600 flex items-center justify-center font-bold text-white shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400">
                Sentinel AI
              </span>
              <span className="text-[10px] uppercase font-mono tracking-wider text-cyan-400 -mt-1">
                Reliability Engine
              </span>
            </div>
          </Link>

          <span className="hidden sm:inline-flex text-xs uppercase px-2.5 py-0.5 rounded-full bg-cyan-950/80 text-cyan-300 border border-cyan-800/60 font-mono ml-2">
            CI/CD Harness
          </span>
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-2 sm:gap-4">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href || (item.href !== "/" && pathname?.startsWith(item.href) && item.href !== "/agents/new");
            return (
              <Link
                key={item.href}
                href={item.href}
                className={clsx(
                  "flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium transition-all",
                  isActive
                    ? "bg-slate-800 text-cyan-400 border border-slate-700 shadow-sm"
                    : "text-slate-400 hover:text-slate-200 hover:bg-slate-900"
                )}
              >
                <Icon className="w-4 h-4" />
                <span>{item.label}</span>
              </Link>
            );
          })}

          <div className="h-4 w-px bg-slate-800 mx-1 hidden sm:block" />

          {/* Live DB Indicator */}
          <div className="flex items-center gap-2 text-xs font-mono px-3 py-1 rounded-full bg-slate-900 border border-slate-800">
            <Activity className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-400 hidden md:inline">API:</span>
            <span
              className={clsx(
                "inline-flex items-center gap-1.5 font-medium",
                dbStatus === "connected" && "text-emerald-400",
                dbStatus === "checking" && "text-amber-400",
                dbStatus === "disconnected" && "text-rose-400"
              )}
            >
              <span
                className={clsx(
                  "w-2 h-2 rounded-full",
                  dbStatus === "connected" && "bg-emerald-400 shadow-sm shadow-emerald-400 animate-pulse",
                  dbStatus === "checking" && "bg-amber-400 animate-ping",
                  dbStatus === "disconnected" && "bg-rose-400"
                )}
              />
              {dbStatus === "connected" ? "Live" : dbStatus === "checking" ? "Checking" : "Offline"}
            </span>
          </div>
        </nav>
      </div>
    </header>
  );
}
