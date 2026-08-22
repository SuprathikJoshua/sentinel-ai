"use client";

import React, { useEffect, useState, use } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { getAgent } from "@/lib/api";
import { VersionDiffView } from "@/components/VersionDiffView";
import { ArrowLeft, RefreshCw } from "lucide-react";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function AgentComparePage({ params }: PageProps) {
  const resolvedParams = use(params);
  const agentId = resolvedParams.id;
  const searchParams = useSearchParams();

  const v1Param = parseInt(searchParams.get("v1") || "1", 10);
  const v2Param = parseInt(searchParams.get("v2") || "2", 10);

  const [availableVersions, setAvailableVersions] = useState<number[]>([1, 2]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        setLoading(true);
        const agent = await getAgent(agentId);
        const vers = agent.versions.map((v) => v.version);
        setAvailableVersions(vers.length > 0 ? vers : [1]);
      } catch (err) {
        console.error("Failed to load agent versions:", err);
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
        <span className="text-slate-200">Version Comparison Diff</span>
      </div>

      {loading ? (
        <div className="py-28 flex flex-col items-center justify-center text-slate-500 gap-3">
          <RefreshCw className="w-8 h-8 animate-spin text-cyan-400" />
          <span className="text-sm font-mono">Loading versions...</span>
        </div>
      ) : (
        <VersionDiffView
          agentId={agentId}
          availableVersions={availableVersions}
          initialV1={v1Param}
          initialV2={v2Param}
        />
      )}
    </div>
  );
}
