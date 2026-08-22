"use client";

import React from "react";
import {
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Flame,
  RefreshCw,
  Compass,
  HelpCircle,
  ShieldCheck,
  ShieldAlert,
} from "lucide-react";
import clsx from "clsx";
import type { FailureType } from "@sentinel/shared";

interface VerdictBadgeProps {
  passFail?: "pass" | "fail" | null;
  failureType?: FailureType | string | null;
  size?: "sm" | "md" | "lg";
  showLabel?: boolean;
}

export function VerdictBadge({
  passFail,
  failureType,
  size = "md",
  showLabel = true,
}: VerdictBadgeProps) {
  if (!passFail) {
    return (
      <span
        className={clsx(
          "inline-flex items-center gap-1.5 rounded-full font-mono font-medium bg-zinc-900/80 text-zinc-400 border border-white/[0.08]",
          size === "sm" && "text-[10px] px-2 py-0.5",
          size === "md" && "text-xs px-2.5 py-1",
          size === "lg" && "text-sm px-3.5 py-1.5"
        )}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-zinc-500 animate-pulse" />
        {showLabel && "Pending"}
      </span>
    );
  }

  if (passFail === "pass") {
    return (
      <span
        className={clsx(
          "inline-flex items-center gap-1.5 rounded-full font-mono font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shadow-[0_0_12px_rgba(16,185,129,0.15)]",
          size === "sm" && "text-[10px] px-2 py-0.5",
          size === "md" && "text-xs px-2.5 py-1",
          size === "lg" && "text-sm px-3.5 py-1.5"
        )}
      >
        <ShieldCheck className={clsx(size === "sm" ? "w-3 h-3" : size === "md" ? "w-3.5 h-3.5" : "w-4 h-4")} />
        {showLabel && <span>PASS</span>}
      </span>
    );
  }

  // Failure type styling
  const failureConfigs: Record<
    string,
    { label: string; icon: React.ComponentType<{ className?: string }>; bg: string; text: string; border: string; glow: string }
  > = {
    unsafe_destructive_action: {
      label: "Unsafe Destructive Action",
      icon: Flame,
      bg: "bg-rose-500/10",
      text: "text-rose-400",
      border: "border-rose-500/25",
      glow: "shadow-[0_0_12px_rgba(244,63,94,0.2)]",
    },
    tool_loop: {
      label: "Tool Infinite Loop",
      icon: RefreshCw,
      bg: "bg-amber-500/10",
      text: "text-amber-400",
      border: "border-amber-500/25",
      glow: "shadow-[0_0_12px_rgba(245,158,11,0.2)]",
    },
    hallucinated_confidence: {
      label: "Hallucinated Confidence",
      icon: AlertTriangle,
      bg: "bg-orange-500/10",
      text: "text-orange-400",
      border: "border-orange-500/25",
      glow: "shadow-[0_0_12px_rgba(249,115,22,0.2)]",
    },
    goal_drift: {
      label: "Goal Drift",
      icon: Compass,
      bg: "bg-indigo-500/10",
      text: "text-indigo-400",
      border: "border-indigo-500/25",
      glow: "shadow-[0_0_12px_rgba(99,102,241,0.2)]",
    },
    none: {
      label: "None",
      icon: CheckCircle2,
      bg: "bg-emerald-500/10",
      text: "text-emerald-400",
      border: "border-emerald-500/20",
      glow: "shadow-[0_0_12px_rgba(16,185,129,0.15)]",
    },
  };

  const config = failureConfigs[failureType || "unsafe_destructive_action"] || {
    label: failureType || "Failure",
    icon: XCircle,
    bg: "bg-rose-500/10",
    text: "text-rose-400",
    border: "border-rose-500/25",
    glow: "shadow-[0_0_12px_rgba(244,63,94,0.2)]",
  };

  const Icon = config.icon;

  return (
    <span
      className={clsx(
        "inline-flex items-center gap-1.5 rounded-full font-mono font-semibold border transition-all",
        config.bg,
        config.text,
        config.border,
        config.glow,
        size === "sm" && "text-[10px] px-2 py-0.5",
        size === "md" && "text-xs px-2.5 py-1",
        size === "lg" && "text-sm px-3.5 py-1.5"
      )}
    >
      <Icon className={clsx(size === "sm" ? "w-3 h-3" : size === "md" ? "w-3.5 h-3.5" : "w-4 h-4")} />
      {showLabel && <span>FAIL: {config.label}</span>}
    </span>
  );
}
