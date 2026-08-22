"use client";

import React, { useEffect, useState, use } from "react";
import Link from "next/link";
import { getRun, type RunDetail } from "@/lib/api";
import { TraceViewer } from "@/components/TraceViewer";
import { ArrowLeft, RefreshCw } from "lucide-react";

interface PageProps {
  params: Promise<{ id: string; runId: string }>;
}

export default function RunTracePage({ params }: PageProps) {
  const resolvedParams = use(params);
  const agentId = resolvedParams.id;
  const runId = resolvedParams.runId;

  const [run, setRun] = useState<RunDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function load() {
      try {
        setLoading(true);
        const data = await getRun(runId);
        setRun(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load run details");
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [runId]);

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
        <Link href={`/agents/${agentId}`} className="hover:text-white flex items-center gap-1 transition-colors">
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Studio
        </Link>
        <span>/</span>
        <span className="text-slate-200">Execution Run Trace ({runId})</span>
      </div>

      {loading ? (
        <div className="py-28 flex flex-col items-center justify-center text-slate-500 gap-3">
          <RefreshCw className="w-8 h-8 animate-spin text-cyan-400" />
          <span className="text-sm font-mono">Loading trace timeline...</span>
        </div>
      ) : error ? (
        <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 text-center space-y-3">
          <span className="text-sm text-rose-400 font-mono">{error}</span>
        </div>
      ) : run ? (
        <div className="h-[80vh]">
          <TraceViewer run={run} />
        </div>
      ) : null}
    </div>
  );
}
