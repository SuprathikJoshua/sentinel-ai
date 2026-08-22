"use client";

import React from "react";
import Link from "next/link";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  Cell,
} from "recharts";
import { downloadReport } from "@/lib/api";
import {
  CheckCircle2,
  XCircle,
  TrendingUp,
  Download,
  GitCompare,
  Flame,
  RefreshCw,
  AlertTriangle,
  Compass,
  Award,
  ShieldCheck,
  Zap,
} from "lucide-react";
import clsx from "clsx";
import type { ScorecardMetrics } from "@sentinel/shared";

interface ScorecardViewProps {
  scorecard: ScorecardMetrics;
}

export function ScorecardView({ scorecard }: ScorecardViewProps) {
  const failureData = [
    {
      name: "Tool Loop",
      count: scorecard.failureDistribution["tool_loop"] || 0,
      color: "#f59e0b",
    },
    {
      name: "Hallucination",
      count: scorecard.failureDistribution["hallucinated_confidence"] || 0,
      color: "#fb923c",
    },
    {
      name: "Destructive Action",
      count: scorecard.failureDistribution["unsafe_destructive_action"] || 0,
      color: "#f43f5e",
    },
    {
      name: "Goal Drift",
      count: scorecard.failureDistribution["goal_drift"] || 0,
      color: "#6366f1",
    },
  ];

  const trajectoryData = scorecard.versionHistory.map((vh) => ({
    version: `v${vh.version}`,
    score: vh.reliabilityScore,
    total: vh.totalRuns,
    passed: vh.passedRuns,
  }));

  const isHighReliability = scorecard.reliabilityScore >= 85;
  const isMedReliability = scorecard.reliabilityScore >= 60 && scorecard.reliabilityScore < 85;

  return (
    <div className="space-y-8">
      {/* Top Header Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/[0.08] pb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono text-cyan-400 bg-cyan-950/70 border border-cyan-500/30 px-2 py-0.5 rounded">
              Active Snapshot: v{scorecard.version}
            </span>
            <span className="text-zinc-600 font-mono">•</span>
            <span className="text-[11px] text-zinc-400 font-mono">Agent ID: {scorecard.agentId.slice(-8)}</span>
          </div>
          <h2 className="text-2xl font-bold text-white tracking-tight mt-1.5 flex items-center gap-2.5">
            <Award className="w-6 h-6 text-cyan-400" />
            <span>Reliability Scorecard & Continuous Audit</span>
          </h2>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href={`/agents/${scorecard.agentId}/compare?v1=1&v2=${scorecard.version}`}
            className="px-3.5 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-200 text-xs font-semibold flex items-center gap-2 border border-white/10 transition-all shadow-sm active:scale-95"
          >
            <GitCompare className="w-4 h-4 text-indigo-400" />
            <span>Compare Versions</span>
          </Link>

          <button
            onClick={() => downloadReport(scorecard.agentId, scorecard.agentName)}
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-zinc-950 text-xs font-semibold flex items-center gap-2 transition-all shadow-[0_0_15px_rgba(6,182,212,0.2)] hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] active:scale-95"
          >
            <Download className="w-4 h-4" />
            <span>Export Markdown Audit</span>
          </button>
        </div>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Main Reliability Score Gauge */}
        <div className="p-5 rounded-2xl glass-card border border-white/[0.08] flex flex-col justify-between space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400">Reliability Score</span>
            <ShieldCheck className={clsx("w-4 h-4", isHighReliability ? "text-emerald-400" : isMedReliability ? "text-amber-400" : "text-rose-400")} />
          </div>
          <div className="flex items-baseline gap-2">
            <span
              className={clsx(
                "text-4xl font-extrabold font-mono tracking-tight",
                isHighReliability && "text-emerald-400",
                isMedReliability && "text-amber-400",
                !isHighReliability && !isMedReliability && "text-rose-400"
              )}
            >
              {scorecard.reliabilityScore.toFixed(1)}%
            </span>
          </div>
          <div className="w-full bg-zinc-950 rounded-full h-1.5 overflow-hidden border border-white/[0.04]">
            <div
              className={clsx(
                "h-full transition-all duration-500",
                isHighReliability && "bg-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.5)]",
                isMedReliability && "bg-amber-400 shadow-[0_0_10px_rgba(245,158,11,0.5)]",
                !isHighReliability && !isMedReliability && "bg-rose-400 shadow-[0_0_10px_rgba(244,63,94,0.5)]"
              )}
              style={{ width: `${scorecard.reliabilityScore}%` }}
            />
          </div>
        </div>

        {/* Total Scenarios Evaluated */}
        <div className="p-5 rounded-2xl glass-card border border-white/[0.08] space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400">Evaluations Run</span>
            <Zap className="w-4 h-4 text-cyan-400" />
          </div>
          <div className="text-3xl font-bold font-mono text-white">{scorecard.totalRuns}</div>
          <span className="text-[11px] text-zinc-500 font-mono block">Automated test scenarios</span>
        </div>

        {/* Passed Scenarios */}
        <div className="p-5 rounded-2xl glass-card border border-white/[0.08] space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-400">Passed Scenarios</span>
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="text-3xl font-bold font-mono text-emerald-400">{scorecard.passedRuns}</div>
          <span className="text-[11px] text-zinc-500 font-mono block">Satisfied expected behavior</span>
        </div>

        {/* Failed Scenarios */}
        <div className="p-5 rounded-2xl glass-card border border-white/[0.08] space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-mono uppercase tracking-wider text-rose-400">Failures Detected</span>
            <XCircle className="w-4 h-4 text-rose-400" />
          </div>
          <div className="text-3xl font-bold font-mono text-rose-400">{scorecard.failedRuns}</div>
          <span className="text-[11px] text-zinc-500 font-mono block">Flagged by LLM judge rubric</span>
        </div>
      </div>

      {/* Visualizations Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Failure Taxonomy Breakdown */}
        <div className="p-6 rounded-2xl glass-card border border-white/[0.08] space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-bold text-sm text-white">Failure Mode Taxonomy Breakdown</h3>
              <p className="text-xs text-zinc-400">Distribution across the 4 core AI failure categories</p>
            </div>
          </div>

          <div className="h-64 w-full pt-4">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={failureData} layout="vertical" margin={{ top: 5, right: 30, left: 30, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#27272a" horizontal={false} />
                <XAxis type="number" stroke="#71717a" fontSize={11} />
                <YAxis dataKey="name" type="category" stroke="#e4e4e7" fontSize={11} width={120} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#09090b",
                    borderColor: "#3f3f46",
                    borderRadius: "0.75rem",
                    fontSize: "12px",
                    color: "#f4f4f5",
                    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.5)",
                  }}
                />
                <Bar dataKey="count" radius={[0, 6, 6, 0]}>
                  {failureData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Version Trajectory Trend */}
        <div className="p-6 rounded-2xl glass-card border border-white/[0.08] space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-bold text-sm text-white">Historical Reliability Trajectory</h3>
              <p className="text-xs text-zinc-400">Regression tracking across agent iterations</p>
            </div>
            <span className="text-xs font-mono text-cyan-400 flex items-center gap-1 bg-cyan-950/50 px-2 py-0.5 rounded border border-cyan-500/20">
              <TrendingUp className="w-3.5 h-3.5" /> {trajectoryData.length} Snapshots
            </span>
          </div>

          <div className="h-64 w-full pt-4">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={trajectoryData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="#06b6d4" stopOpacity={0.0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#27272a" />
                <XAxis dataKey="version" stroke="#71717a" fontSize={11} />
                <YAxis domain={[0, 100]} stroke="#71717a" fontSize={11} unit="%" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#09090b",
                    borderColor: "#3f3f46",
                    borderRadius: "0.75rem",
                    fontSize: "12px",
                    color: "#f4f4f5",
                    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.5)",
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="score"
                  stroke="#06b6d4"
                  strokeWidth={2.5}
                  fillOpacity={1}
                  fill="url(#colorScore)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
