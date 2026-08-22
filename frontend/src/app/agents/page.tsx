"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  getAgents,
  runEvaluation,
  pollEvaluationJob,
  type AgentSummary,
} from "@/lib/api";
import { CreateAgentModal } from "@/components/CreateAgentModal";
import {
  Bot,
  Plus,
  Play,
  Layers,
  Sparkles,
  Search,
  RefreshCw,
  Award,
  ChevronRight,
  TrendingUp,
  Activity,
  Filter,
  CheckCircle2,
  AlertTriangle,
  Zap,
} from "lucide-react";
import clsx from "clsx";

export default function AgentsPage() {
  const [agents, setAgents] = useState<AgentSummary[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [domainFilter, setDomainFilter] = useState("all");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [runningJobId, setRunningJobId] = useState<string | null>(null);
  const [runningAgentId, setRunningAgentId] = useState<string | null>(null);
  const [evalProgress, setEvalProgress] = useState<number>(0);

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

  const handleQuickRun = async (e: React.MouseEvent, agentId: string) => {
    e.preventDefault();
    e.stopPropagation();

    if (runningAgentId) return;

    try {
      setRunningAgentId(agentId);
      setEvalProgress(0);

      const { jobId } = await runEvaluation(agentId, {
        autoGenerateScenarios: true,
      });
      setRunningJobId(jobId);

      await pollEvaluationJob(jobId, (job) => {
        setEvalProgress(job.progressPercent);
      });

      await fetchAgents();
    } catch (err) {
      console.error("Quick evaluation failed:", err);
    } finally {
      setRunningAgentId(null);
      setRunningJobId(null);
      setEvalProgress(0);
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

  const totalEvaluations = agents.reduce((acc, a) => acc + (a.scenarioCount || 0), 0);
  const avgReliability =
    agents.length > 0
      ? agents.reduce((acc, a) => acc + (a.latestReliabilityScore || 0), 0) / agents.length
      : 100;

  return (
    <div className="space-y-8">
      {/* 1. Hero Header Banner */}
      <div className="p-8 rounded-3xl glass-card border border-white/[0.08] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl -mb-20 pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono">
              <Zap className="w-3.5 h-3.5" /> Autonomous AI Agent CI/CD Evaluation Harness
            </div>
            <h1 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
              Agent Studio & Continuous Verification
            </h1>
            <p className="text-sm text-zinc-400 max-w-2xl leading-relaxed">
              Synthesize adversarial scenarios, execute safe sandboxed turn loops, categorize failure taxonomy modes, and track reliability regressions version-over-version.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-zinc-950 font-bold text-xs flex items-center gap-2 transition-all shadow-[0_0_20px_rgba(6,182,212,0.25)] hover:shadow-[0_0_25px_rgba(6,182,212,0.45)] active:scale-95"
            >
              <Plus className="w-4 h-4 stroke-[2.5]" />
              <span>Configure New Agent</span>
            </button>
          </div>
        </div>

        {/* Aggregate KPI Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-6 border-t border-white/[0.06]">
          <div className="space-y-1">
            <span className="text-[11px] font-mono uppercase text-zinc-500">Active Agents</span>
            <div className="text-2xl font-bold font-mono text-white">{agents.length}</div>
          </div>
          <div className="space-y-1">
            <span className="text-[11px] font-mono uppercase text-zinc-500">Test Scenarios</span>
            <div className="text-2xl font-bold font-mono text-cyan-400">{totalEvaluations}</div>
          </div>
          <div className="space-y-1">
            <span className="text-[11px] font-mono uppercase text-zinc-500">Mean Reliability</span>
            <div className="text-2xl font-bold font-mono text-emerald-400">{avgReliability.toFixed(1)}%</div>
          </div>
          <div className="space-y-1">
            <span className="text-[11px] font-mono uppercase text-zinc-500">Harness Guardrails</span>
            <div className="text-2xl font-bold font-mono text-indigo-400">Max 6 Turns</div>
          </div>
        </div>
      </div>

      {/* 2. Filter & Search Controls */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Search */}
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search agents, domains..."
            className="w-full pl-9 pr-4 py-2 rounded-xl glass-input text-xs text-zinc-100 placeholder-zinc-500 focus:outline-none"
          />
        </div>

        {/* Domain Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0">
          <button
            onClick={() => setDomainFilter("all")}
            className={clsx(
              "px-3 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap",
              domainFilter === "all"
                ? "bg-white/10 text-white border border-white/15 shadow-sm"
                : "text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.04]"
            )}
          >
            All Domains ({agents.length})
          </button>
          {domains.map((dom) => (
            <button
              key={dom}
              onClick={() => setDomainFilter(dom)}
              className={clsx(
                "px-3 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap",
                domainFilter === dom
                  ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 shadow-sm"
                  : "text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.04]"
              )}
            >
              {dom}
            </button>
          ))}
        </div>
      </div>

      {/* 3. Agents Grid */}
      {loading ? (
        <div className="py-24 flex flex-col items-center justify-center text-zinc-500 gap-3">
          <RefreshCw className="w-6 h-6 animate-spin text-cyan-400" />
          <span className="text-xs font-mono">Syncing agents from Supabase PostgreSQL...</span>
        </div>
      ) : filteredAgents.length === 0 ? (
        <div className="py-20 text-center rounded-3xl glass-card border border-white/[0.08] p-8 space-y-4">
          <Bot className="w-12 h-12 text-zinc-600 mx-auto" />
          <h3 className="text-base font-bold text-white">No Agents Found</h3>
          <p className="text-xs text-zinc-400 max-w-sm mx-auto">
            {search || domainFilter !== "all"
              ? "No agents matched your current filter criteria."
              : "Create your first AI agent or apply a quickstart template to launch the continuous evaluation harness."}
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-zinc-950 font-bold text-xs inline-flex items-center gap-1.5"
          >
            <Plus className="w-3.5 h-3.5 stroke-[2.5]" /> Configure First Agent
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAgents.map((agent) => {
            const isRunning = runningAgentId === agent.id;
            const score = agent.latestReliabilityScore ?? 100;
            const isHigh = score >= 85;
            const isMed = score >= 60 && score < 85;

            return (
              <Link
                key={agent.id}
                href={`/agents/${agent.id}`}
                className="group relative rounded-2xl glass-card border border-white/[0.08] hover:border-cyan-500/40 p-6 flex flex-col justify-between space-y-5 transition-all"
              >
                {/* Header */}
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-zinc-900 border border-white/[0.08] text-zinc-300">
                        {agent.domain}
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950/70 text-cyan-400 border border-cyan-500/30">
                        v{agent.latestVersion?.version || 1}
                      </span>
                    </div>

                    <span className="text-[11px] font-mono text-zinc-500">
                      {agent.scenarioCount} Scenarios
                    </span>
                  </div>

                  <div>
                    <h3 className="font-bold text-base text-white group-hover:text-cyan-300 transition-colors flex items-center justify-between">
                      <span>{agent.name}</span>
                      <ChevronRight className="w-4 h-4 text-zinc-600 group-hover:text-cyan-400 group-hover:translate-x-0.5 transition-all" />
                    </h3>
                    <p className="text-xs text-zinc-400 mt-1 line-clamp-2 leading-relaxed">
                      {agent.description || "Autonomous agent configuration and guardrails."}
                    </p>
                  </div>
                </div>

                {/* Score & Progress */}
                <div className="space-y-4 pt-4 border-t border-white/[0.06]">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <span className="text-[10px] font-mono uppercase text-zinc-500">Reliability Score</span>
                      <div className="flex items-baseline gap-1.5">
                        <span
                          className={clsx(
                            "text-2xl font-bold font-mono",
                            isHigh && "text-emerald-400",
                            isMed && "text-amber-400",
                            !isHigh && !isMed && "text-rose-400"
                          )}
                        >
                          {score.toFixed(0)}%
                        </span>
                      </div>
                    </div>

                    {/* Quick Evaluation CTA Button */}
                    <button
                      onClick={(e) => handleQuickRun(e, agent.id)}
                      disabled={isRunning}
                      className={clsx(
                        "px-3 py-1.5 rounded-lg text-xs font-semibold font-mono flex items-center gap-1.5 transition-all border",
                        isRunning
                          ? "bg-amber-950/80 text-amber-300 border-amber-800"
                          : "bg-zinc-900 hover:bg-cyan-500/20 text-zinc-300 hover:text-cyan-300 border-white/[0.08] hover:border-cyan-500/30"
                      )}
                    >
                      {isRunning ? (
                        <>
                          <RefreshCw className="w-3.5 h-3.5 animate-spin text-amber-400" />
                          <span>Running ({evalProgress}%)...</span>
                        </>
                      ) : (
                        <>
                          <Play className="w-3 h-3 fill-current text-cyan-400" />
                          <span>Run Suite</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Micro Progress Bar */}
                  <div className="w-full bg-zinc-950 rounded-full h-1 overflow-hidden">
                    <div
                      className={clsx(
                        "h-full transition-all duration-300",
                        isRunning
                          ? "bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.6)]"
                          : isHigh
                          ? "bg-emerald-400"
                          : isMed
                          ? "bg-amber-400"
                          : "bg-rose-400"
                      )}
                      style={{ width: isRunning ? `${evalProgress || 15}%` : `${score}%` }}
                    />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      )}

      {/* Modal */}
      <CreateAgentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSuccess={(id) => {
          fetchAgents();
          window.location.href = `/agents/${id}`;
        }}
      />
    </div>
  );
}
