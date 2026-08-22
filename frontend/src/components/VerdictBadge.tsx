import React from "react";
import clsx from "clsx";
import { CheckCircle2, XCircle, AlertTriangle, RefreshCw, Flame, Compass, HelpCircle } from "lucide-react";

interface VerdictBadgeProps {
  passFail?: "pass" | "fail" | string | null;
  failureType?: string | null;
  size?: "sm" | "md" | "lg";
  showLabel?: boolean;
}

export function VerdictBadge({
  passFail,
  failureType,
  size = "md",
  showLabel = true,
}: VerdictBadgeProps) {
  const isPass = passFail?.toLowerCase() === "pass";

  if (isPass) {
    return (
      <span
        className={clsx(
          "inline-flex items-center gap-1.5 font-medium rounded-full border transition-all",
          "bg-emerald-950/60 text-emerald-300 border-emerald-500/40 shadow-sm shadow-emerald-500/10",
          size === "sm" && "px-2 py-0.5 text-xs",
          size === "md" && "px-2.5 py-1 text-xs",
          size === "lg" && "px-3.5 py-1.5 text-sm"
        )}
      >
        <CheckCircle2 className={clsx(size === "sm" ? "w-3 h-3" : size === "lg" ? "w-4 h-4" : "w-3.5 h-3.5", "text-emerald-400")} />
        {showLabel && <span>PASS</span>}
      </span>
    );
  }

  // Handle failure taxonomy
  switch (failureType) {
    case "unsafe_destructive_action":
      return (
        <span
          className={clsx(
            "inline-flex items-center gap-1.5 font-medium rounded-full border transition-all",
            "bg-rose-950/70 text-rose-300 border-rose-500/50 shadow-sm shadow-rose-500/20",
            size === "sm" && "px-2 py-0.5 text-xs",
            size === "md" && "px-2.5 py-1 text-xs",
            size === "lg" && "px-3.5 py-1.5 text-sm"
          )}
        >
          <Flame className={clsx(size === "sm" ? "w-3 h-3" : size === "lg" ? "w-4 h-4" : "w-3.5 h-3.5", "text-rose-400")} />
          {showLabel && <span>Unsafe Destructive Action</span>}
        </span>
      );

    case "tool_loop":
      return (
        <span
          className={clsx(
            "inline-flex items-center gap-1.5 font-medium rounded-full border transition-all",
            "bg-amber-950/70 text-amber-300 border-amber-500/50 shadow-sm shadow-amber-500/20",
            size === "sm" && "px-2 py-0.5 text-xs",
            size === "md" && "px-2.5 py-1 text-xs",
            size === "lg" && "px-3.5 py-1.5 text-sm"
          )}
        >
          <RefreshCw className={clsx(size === "sm" ? "w-3 h-3" : size === "lg" ? "w-4 h-4" : "w-3.5 h-3.5", "text-amber-400")} />
          {showLabel && <span>Tool Loop</span>}
        </span>
      );

    case "hallucinated_confidence":
      return (
        <span
          className={clsx(
            "inline-flex items-center gap-1.5 font-medium rounded-full border transition-all",
            "bg-orange-950/70 text-orange-300 border-orange-500/50 shadow-sm shadow-orange-500/20",
            size === "sm" && "px-2 py-0.5 text-xs",
            size === "md" && "px-2.5 py-1 text-xs",
            size === "lg" && "px-3.5 py-1.5 text-sm"
          )}
        >
          <AlertTriangle className={clsx(size === "sm" ? "w-3 h-3" : size === "lg" ? "w-4 h-4" : "w-3.5 h-3.5", "text-orange-400")} />
          {showLabel && <span>Hallucinated Confidence</span>}
        </span>
      );

    case "goal_drift":
      return (
        <span
          className={clsx(
            "inline-flex items-center gap-1.5 font-medium rounded-full border transition-all",
            "bg-indigo-950/70 text-indigo-300 border-indigo-500/50 shadow-sm shadow-indigo-500/20",
            size === "sm" && "px-2 py-0.5 text-xs",
            size === "md" && "px-2.5 py-1 text-xs",
            size === "lg" && "px-3.5 py-1.5 text-sm"
          )}
        >
          <Compass className={clsx(size === "sm" ? "w-3 h-3" : size === "lg" ? "w-4 h-4" : "w-3.5 h-3.5", "text-indigo-400")} />
          {showLabel && <span>Goal Drift</span>}
        </span>
      );

    default:
      return (
        <span
          className={clsx(
            "inline-flex items-center gap-1.5 font-medium rounded-full border transition-all",
            "bg-red-950/60 text-red-300 border-red-500/40 shadow-sm shadow-red-500/10",
            size === "sm" && "px-2 py-0.5 text-xs",
            size === "md" && "px-2.5 py-1 text-xs",
            size === "lg" && "px-3.5 py-1.5 text-sm"
          )}
        >
          <XCircle className={clsx(size === "sm" ? "w-3 h-3" : size === "lg" ? "w-4 h-4" : "w-3.5 h-3.5", "text-red-400")} />
          {showLabel && <span>FAIL</span>}
        </span>
      );
  }
}
