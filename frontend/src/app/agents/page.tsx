"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { getAgents, runEvaluation, pollEvaluationJob, type AgentSummary } from "@/lib/api";
import { CreateAgentModal } from "@/components/CreateAgentModal";
import {
  Bot,
  Plus,
  Play,
  Activity,
  Layers,
  ChevronRight,
  Search,
  CheckCircle2,
  AlertTriangle,
  RefreshCw,
  Sparkles,
  ShieldAlert,
} from "lucide-react";
import clsx from "clsx";

export default function AgentsPage() {
  const [agents, setAgents] = useState<AgentSummary[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [domainFilter, setDomainFilter] = useState("all");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [runningJobAgentId, setRunningJobAgentId] = useState<string | null>(null);

  const fetchAgents = async () => {
    try {
      setLoading(true);
      const data = await getAgents();
      setAgents(data);
    } catch (err) {
      console.error("Failed to load agents:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAgents();
  }, []);

  const handleQuickRun = async (agentId: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (runningJobAgentId) return;

    try {
      setRunningJobAgentId(agentId);
      const { jobId } = await runEvaluation(agentId, { autoGenerateScenarios: true });
      await pollEvaluationJob(jobId);
      await fetchAgents();
    } catch (err) {
      console.error("Quick run failed:", err);
    } finally {
      setRunningJobAgentId(null);
    }
  };

  const domains = Array.from(new Set(agents.map((a) => a.domain))).filter(Boolean);

  const filteredAgents = agents.filter((agent) => {
    const matchesSearch =
      agent.name.toLowerCase().includes(search.toLowerCase()) ||
      agent.domain.toLowerCase().includes(search.toLowerCase()) ||
      (agent.description && agent.description.toLowerCase().includes(search.toLowerCase()));
    const matchesDomain = domainFilter === "all" || agent.domain === domainFilter;
    return matchesSearch && matchesDomain;
  });

  // Calculate high level KPI totals
  const totalAgents = agents.length;
  const scoredAgents = agents.filter((a) => a.latestReliabilityScore !== null);
  const avgReliability =
    scoredAgents.length > 0
      ? Math.round(
          scoredAgents.reduce((acc, a) => acc + (a.latestReliabilityScore || 0), 0) / scoredAgents.length
        )
      : null;

  return (
    <div className="space-y-8">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800/80 pb-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-white flex items-center gap-2.5">
            <Bot className="w-7 h-7 text-cyan-400" /> Agent Reliability Studio
          </h1>
          <p className="text-sm text-slate-400 mt-1">
            Manage agent configurations, trigger sandboxed evaluations, and track regression scorecards.
          </p>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-semibold text-sm transition-all shadow-lg shadow-cyan-500/20"
        >
          <Plus className="w-4 h-4 stroke-[2.5]" /> New Agent
        </button>
      </div>

      {/* KPI Stats Strip */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-between">
          <div>
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">Registered Agents</span>
            <div className="text-2xl font-bold text-white mt-1">{totalAgents}</div>
          </div>
          <div className="w-10 h-10 rounded-lg bg-cyan-950/60 border border-cyan-800/40 flex items-center justify-center text-cyan-400">
            <Bot className="w-5 h-5" />
          </div>
        </div>

        <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-between">
          <div>
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">Average Reliability</span>
            <div className="text-2xl font-bold text-emerald-400 mt-1">
              {avgReliability !== null ? `${avgReliability}%` : "—"}
            </div>
          </div>
          <div className="w-10 h-10 rounded-lg bg-emerald-950/60 border border-emerald-800/40 flex items-center justify-center text-emerald-400">
            <CheckCircle2 className="w-5 h-5" />
          </div>
        </div>

        <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-between">
          <div>
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">Total Versions Tracked</span>
            <div className="text-2xl font-bold text-indigo-400 mt-1">
              {agents.reduce((acc, a) => acc + (a.totalVersions || 1), 0)}
            </div>
          </div>
          <div className="w-10 h-10 rounded-lg bg-indigo-950/60 border border-indigo-800/40 flex items-center justify-center text-indigo-400">
            <Layers className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search agents by name, domain, or description..."
            className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500"
          />
        </div>

        <div className="flex items-center gap-2">
          <select
            value={domainFilter}
            onChange={(e) => setDomainFilter(e.target.value)}
            className="px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-sm text-slate-300 focus:outline-none focus:border-cyan-500"
          >
            <option value="all">All Domains</option>
            {domains.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Agents Grid */}
      {loading ? (
        <div className="py-20 flex flex-col items-center justify-center text-slate-500 gap-3">
          <RefreshCw className="w-6 h-6 animate-spin text-cyan-400" />
          <span className="text-sm font-mono">Loading active agents...</span>
        </div>
      ) : filteredAgents.length === 0 ? (
        <div className="py-16 text-center border border-dashed border-slate-800 rounded-2xl bg-slate-900/30 space-y-3">
          <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-slate-400 mx-auto">
            <Bot className="w-6 h-6" />
          </div>
          <div className="text-base font-medium text-slate-300">No agents found</div>
          <p className="text-xs text-slate-500 max-w-sm mx-auto">
            {search || domainFilter !== "all"
              ? "Try adjusting your search or domain filter criteria."
              : "Create your first agent configuration to begin running automated evaluations."}
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-semibold"
          >
            + Create Agent
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredAgents.map((agent) => {
            const isEvaluating = runningJobAgentId === agent.id;
            const score = agent.latestReliabilityScore;

            return (
              <Link
                key={agent.id}
                href={`/agents/${agent.id}`}
                className="group relative flex flex-col justify-between p-5 rounded-2xl bg-slate-900/70 hover:bg-slate-900 border border-slate-800 hover:border-cyan-500/40 transition-all shadow-lg hover:shadow-cyan-500/5 overflow-hidden"
              >
                <div className="space-y-4">
                  {/* Top Badges */}
                  <div className="flex items-start justify-between gap-2">
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700 font-mono">
                      {agent.domain}
                    </span>

                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-cyan-950/80 text-cyan-400 border border-cyan-800/40">
                      v{agent.latestVersion?.version || 1}
                    </span>
                  </div>

                  {/* Agent Title & Description */}
                  <div>
                    <h3 className="font-semibold text-base text-slate-100 group-hover:text-cyan-300 transition-colors flex items-center justify-between">
                      <span>{agent.name}</span>
                      <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-cyan-400 group-hover:translate-x-0.5 transition-all" />
                    </h3>
                    <p className="text-xs text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                      {agent.description || "No description provided."}
                    </p>
                  </div>
                </div>

                {/* Score & Quick Action Footer */}
                <div className="pt-5 mt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-mono text-slate-500 block">Reliability</span>
                    {score !== null ? (
                      <div className="flex items-center gap-1.5 mt-0.5">
                        <span
                          className={clsx(
                            "text-lg font-bold font-mono",
                            score >= 80 ? "text-emerald-400" : score >= 50 ? "text-amber-400" : "text-rose-400"
                          )}
                        >
                          {score.toFixed(1)}%
                        </span>
                      </div>
                    ) : (
                      <span className="text-xs text-slate-500 font-mono">Not evaluated</span>
                    )}
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={(e) => handleQuickRun(agent.id, e)}
                      disabled={isEvaluating}
                      className={clsx(
                        "text-xs px-3 py-1.5 rounded-lg border font-medium flex items-center gap-1.5 transition-all",
                        isEvaluating
                          ? "bg-amber-950/60 border-amber-800 text-amber-300"
                          : "bg-slate-800 hover:bg-cyan-500/20 border-slate-700 hover:border-cyan-500/40 text-slate-300 hover:text-cyan-300"
                      )}
                    >
                      {isEvaluating ? (
                        <>
                          <RefreshCw className="w-3 h-3 animate-spin text-amber-400" />
                          <span>Evaluating...</span>
                        </>
                      ) : (
                        <>
                          <Play className="w-3 h-3 fill-current text-cyan-400" />
                          <span>Run Suite</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      )}

      {/* New Agent Modal */}
      <CreateAgentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onCreated={() => fetchAgents()}
      />
    </div>
  );
}
