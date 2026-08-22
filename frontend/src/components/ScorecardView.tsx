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
  Layers,
  Award,
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
      color: "#f59e0b", // Amber
    },
    {
      name: "Hallucination",
      count: scorecard.failureDistribution["hallucinated_confidence"] || 0,
      color: "#fb923c", // Orange
    },
    {
      name: "Destructive Action",
      count: scorecard.failureDistribution["unsafe_destructive_action"] || 0,
      color: "#f43f5e", // Rose
    },
    {
      name: "Goal Drift",
      count: scorecard.failureDistribution["goal_drift"] || 0,
      color: "#6366f1", // Indigo
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
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-cyan-400 bg-cyan-950/60 border border-cyan-800/40 px-2 py-0.5 rounded">
              Active Suite: v{scorecard.version}
            </span>
            <span className="text-xs text-slate-500 font-mono">•</span>
            <span className="text-xs text-slate-400 font-mono">Agent ID: {scorecard.agentId}</span>
          </div>
          <h2 className="text-2xl font-bold text-white tracking-tight mt-1 flex items-center gap-2">
            <Award className="w-6 h-6 text-cyan-400" /> Reliability Scorecard & Audit
          </h2>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href={`/agents/${scorecard.agentId}/compare?v1=1&v2=${scorecard.version}`}
            className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-2 border border-slate-700 transition-all shadow-sm"
          >
            <GitCompare className="w-4 h-4 text-indigo-400" /> Compare Versions
          </Link>

          <button
            onClick={() => downloadReport(scorecard.agentId, scorecard.agentName)}
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 text-xs font-semibold flex items-center gap-2 transition-all shadow-lg shadow-cyan-500/20"
          >
            <Download className="w-4 h-4" /> Export Markdown Audit
          </button>
        </div>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Main Reliability Score Gauge */}
        <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between space-y-3">
          <span className="text-xs font-mono uppercase tracking-wider text-slate-400">Reliability Score</span>
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
          <div className="w-full bg-slate-950 rounded-full h-2 overflow-hidden">
            <div
              className={clsx(
                "h-full transition-all duration-500",
                isHighReliability && "bg-emerald-400",
                isMedReliability && "bg-amber-400",
                !isHighReliability && !isMedReliability && "bg-rose-400"
              )}
              style={{ width: `${scorecard.reliabilityScore}%` }}
            />
          </div>
        </div>

        {/* Total Scenarios Evaluated */}
        <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
          <span className="text-xs font-mono uppercase tracking-wider text-slate-400">Evaluations Run</span>
          <div className="text-3xl font-bold font-mono text-white">{scorecard.totalRuns}</div>
          <span className="text-xs text-slate-500 font-mono block">Automated test scenarios</span>
        </div>

        {/* Passed Scenarios */}
        <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
          <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5" /> Passed Scenarios
          </span>
          <div className="text-3xl font-bold font-mono text-emerald-400">{scorecard.passedRuns}</div>
          <span className="text-xs text-slate-500 font-mono block">Satisfied expected behavior</span>
        </div>

        {/* Failed Scenarios */}
        <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
          <span className="text-xs font-mono uppercase tracking-wider text-rose-400 flex items-center gap-1.5">
            <XCircle className="w-3.5 h-3.5" /> Failures Detected
          </span>
          <div className="text-3xl font-bold font-mono text-rose-400">{scorecard.failedRuns}</div>
          <span className="text-xs text-slate-500 font-mono block">Flagged by LLM judge rubric</span>
        </div>
      </div>

      {/* Visualizations Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Failure Taxonomy Breakdown */}
        <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-sm text-white">Failure Mode Taxonomy Breakdown</h3>
              <p className="text-xs text-slate-400">Distribution across the 4 core AI failure categories</p>
            </div>
          </div>

          <div className="h-64 w-full pt-4">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={failureData} layout="vertical" margin={{ top: 5, right: 30, left: 40, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" horizontal={false} />
                <XAxis type="number" stroke="#64748b" fontSize={11} />
                <YAxis dataKey="name" type="category" stroke="#cbd5e1" fontSize={11} width={120} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#020617",
                    borderColor: "#334155",
                    borderRadius: "0.75rem",
                    fontSize: "12px",
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
        <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-sm text-white">Historical Reliability Trajectory</h3>
              <p className="text-xs text-slate-400">Regression tracking across agent iterations</p>
            </div>
            <span className="text-xs font-mono text-cyan-400 flex items-center gap-1">
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
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                <XAxis dataKey="version" stroke="#64748b" fontSize={11} />
                <YAxis domain={[0, 100]} stroke="#64748b" fontSize={11} unit="%" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#020617",
                    borderColor: "#334155",
                    borderRadius: "0.75rem",
                    fontSize: "12px",
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
