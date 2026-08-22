"use client";

import React, { useEffect, useState, use } from "react";
import Link from "next/link";
import { getScorecard } from "@/lib/api";
import { ScorecardView } from "@/components/ScorecardView";
import { ArrowLeft, RefreshCw } from "lucide-react";
import type { ScorecardMetrics } from "@sentinel/shared";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function AgentScorecardPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const agentId = resolvedParams.id;

  const [scorecard, setScorecard] = useState<ScorecardMetrics | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function load() {
      try {
        setLoading(true);
        const data = await getScorecard(agentId);
        setScorecard(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load scorecard");
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [agentId]);

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
        <Link href={`/agents/${agentId}`} className="hover:text-white flex items-center gap-1 transition-colors">
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Studio
        </Link>
        <span>/</span>
        <span className="text-slate-200">Reliability Scorecard</span>
      </div>

      {loading ? (
        <div className="py-28 flex flex-col items-center justify-center text-slate-500 gap-3">
          <RefreshCw className="w-8 h-8 animate-spin text-cyan-400" />
          <span className="text-sm font-mono">Aggregating scorecard metrics...</span>
        </div>
      ) : error ? (
        <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 text-center space-y-3">
          <span className="text-sm text-amber-400 font-mono">{error}</span>
          <p className="text-xs text-slate-500">
            No evaluation runs found for this agent. Return to the studio and run an evaluation suite.
          </p>
          <Link
            href={`/agents/${agentId}`}
            className="inline-block px-4 py-2 rounded-lg bg-cyan-500 text-slate-950 text-xs font-semibold"
          >
            Launch Evaluation Suite
          </Link>
        </div>
      ) : scorecard ? (
        <ScorecardView scorecard={scorecard} />
      ) : null}
    </div>
  );
}
