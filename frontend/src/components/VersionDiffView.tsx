"use client";

import React, { useState, useEffect } from "react";
import { compareVersions } from "@/lib/api";
import {
  GitCompare,
  TrendingUp,
  TrendingDown,
  CheckCircle2,
  AlertTriangle,
  Flame,
  RefreshCw,
  Compass,
  ArrowRight,
} from "lucide-react";
import clsx from "clsx";
import type { VersionComparison } from "@sentinel/shared";

interface VersionDiffViewProps {
  agentId: string;
  availableVersions: number[];
  initialV1?: number;
  initialV2?: number;
}

export function VersionDiffView({
  agentId,
  availableVersions,
  initialV1 = 1,
  initialV2 = 2,
}: VersionDiffViewProps) {
  const [v1, setV1] = useState(initialV1);
  const [v2, setV2] = useState(initialV2);
  const [comparison, setComparison] = useState<VersionComparison | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchComparison = async (ver1: number, ver2: number) => {
    try {
      setLoading(true);
      setError(null);
      const data = await compareVersions(agentId, ver1, ver2);
      setComparison(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to compare versions");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchComparison(v1, v2);
  }, [v1, v2, agentId]);

  const failureTypes = [
    { key: "unsafe_destructive_action", label: "Unsafe Destructive Action", icon: Flame, color: "text-rose-400" },
    { key: "tool_loop", label: "Tool Infinite Loop", icon: RefreshCw, color: "text-amber-400" },
    { key: "hallucinated_confidence", label: "Hallucinated Confidence", icon: AlertTriangle, color: "text-orange-400" },
    { key: "goal_drift", label: "Goal Drift", icon: Compass, color: "text-indigo-400" },
  ];

  return (
    <div className="space-y-6">
      {/* Version Pickers Header */}
      <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
            <GitCompare className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-bold text-white">Version-over-Version Regression Analysis</h3>
            <p className="text-xs text-slate-400">Compare prompt guardrail efficacy and failure mode fixes between snapshots</p>
          </div>
        </div>

        {/* Pickers */}
        <div className="flex items-center gap-3 bg-slate-950 p-2 rounded-xl border border-slate-800">
          <div className="flex items-center gap-1.5">
            <span className="text-xs font-mono text-slate-500">Base:</span>
            <select
              value={v1}
              onChange={(e) => setV1(Number(e.target.value))}
              className="px-2.5 py-1 rounded bg-slate-900 border border-slate-700 text-xs font-mono text-cyan-300 focus:outline-none"
            >
              {availableVersions.map((v) => (
                <option key={v} value={v}>
                  v{v}
                </option>
              ))}
            </select>
          </div>

          <ArrowRight className="w-4 h-4 text-slate-600" />

          <div className="flex items-center gap-1.5">
            <span className="text-xs font-mono text-slate-500">Target:</span>
            <select
              value={v2}
              onChange={(e) => setV2(Number(e.target.value))}
              className="px-2.5 py-1 rounded bg-slate-900 border border-slate-700 text-xs font-mono text-cyan-300 focus:outline-none"
            >
              {availableVersions.map((v) => (
                <option key={v} value={v}>
                  v{v}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {loading ? (
        <div className="py-16 text-center text-slate-500 font-mono text-xs flex flex-col items-center gap-3">
          <RefreshCw className="w-5 h-5 animate-spin text-cyan-400" />
          <span>Computing version differential metrics...</span>
        </div>
      ) : error ? (
        <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 text-center space-y-2">
          <span className="text-xs text-amber-400 font-mono">Notice: {error}</span>
          <p className="text-xs text-slate-500">
            Ensure both Version {v1} and Version {v2} have completed evaluation runs.
          </p>
        </div>
      ) : comparison ? (
        <div className="space-y-6">
          {/* Delta KPI Highlight Card */}
          <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div
                className={clsx(
                  "w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-xl",
                  comparison.delta.scoreDiff > 0 && "bg-emerald-500/10 border border-emerald-500/30 text-emerald-400",
                  comparison.delta.scoreDiff === 0 && "bg-slate-800 border border-slate-700 text-slate-400",
                  comparison.delta.scoreDiff < 0 && "bg-rose-500/10 border border-rose-500/30 text-rose-400"
                )}
              >
                {comparison.delta.scoreDiff > 0 ? (
                  <TrendingUp className="w-6 h-6" />
                ) : comparison.delta.scoreDiff < 0 ? (
                  <TrendingDown className="w-6 h-6" />
                ) : (
                  "—"
                )}
              </div>

              <div>
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">Reliability Score Delta</span>
                <div className="text-2xl font-bold font-mono text-white mt-0.5">
                  {comparison.delta.scoreDiff > 0 ? `+${comparison.delta.scoreDiff.toFixed(1)}%` : `${comparison.delta.scoreDiff.toFixed(1)}%`}
                  <span className="text-xs font-normal text-slate-400 font-sans ml-2">
                    ({comparison.v1.reliabilityScore.toFixed(1)}% in v{v1} → {comparison.v2.reliabilityScore.toFixed(1)}% in v{v2})
                  </span>
                </div>
              </div>
            </div>

            {/* Regression Status Pill */}
            <div className="flex items-center gap-2">
              {comparison.delta.improvedFailures.length > 0 && (
                <span className="text-xs px-3 py-1.5 rounded-full bg-emerald-950 border border-emerald-800/60 text-emerald-300 font-medium flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  {comparison.delta.improvedFailures.length} Failure Mode(s) Resolved
                </span>
              )}
              {comparison.delta.regressedFailures.length > 0 && (
                <span className="text-xs px-3 py-1.5 rounded-full bg-rose-950 border border-rose-800/60 text-rose-300 font-medium flex items-center gap-1.5">
                  <Flame className="w-3.5 h-3.5" />
                  {comparison.delta.regressedFailures.length} Regression(s) Detected
                </span>
              )}
            </div>
          </div>

          {/* Detailed Failure Breakdown Comparison Table */}
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
            <h4 className="font-semibold text-sm text-slate-200">Failure Taxonomy Differential</h4>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs font-mono">
                <thead>
                  <tr className="border-b border-slate-800 text-slate-400">
                    <th className="pb-3 font-medium">Failure Category</th>
                    <th className="pb-3 font-medium text-center">Version {v1} Count</th>
                    <th className="pb-3 font-medium text-center">Version {v2} Count</th>
                    <th className="pb-3 font-medium text-right">Verdict</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  {failureTypes.map((ft) => {
                    const countV1 = comparison.v1.failureDistribution[ft.key] || 0;
                    const countV2 = comparison.v2.failureDistribution[ft.key] || 0;
                    const isImproved = countV2 < countV1;
                    const isRegressed = countV2 > countV1;
                    const Icon = ft.icon;

                    return (
                      <tr key={ft.key} className="hover:bg-slate-950/40 transition-colors">
                        <td className="py-3 flex items-center gap-2 text-slate-200">
                          <Icon className={clsx("w-4 h-4", ft.color)} />
                          <span>{ft.label}</span>
                        </td>
                        <td className="py-3 text-center text-slate-400">{countV1}</td>
                        <td className="py-3 text-center text-slate-200 font-semibold">{countV2}</td>
                        <td className="py-3 text-right">
                          {isImproved ? (
                            <span className="text-emerald-400 font-semibold">
                              Fixed (-{countV1 - countV2})
                            </span>
                          ) : isRegressed ? (
                            <span className="text-rose-400 font-semibold">
                              Regressed (+{countV2 - countV1})
                            </span>
                          ) : (
                            <span className="text-slate-500">Unchanged</span>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
