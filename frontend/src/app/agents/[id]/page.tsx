"use client";

import React, { useEffect, useState, use } from "react";
import Link from "next/link";
import {
  getAgent,
  getAgentRuns,
  getRun,
  getScorecard,
  runEvaluation,
  pollEvaluationJob,
  generateAgentScenarios,
  createAgentScenario,
  createAgentVersion,
  type AgentDetail,
  type RunDetail,
} from "@/lib/api";
import { VerdictBadge } from "@/components/VerdictBadge";
import { TraceViewer } from "@/components/TraceViewer";
import { ScorecardView } from "@/components/ScorecardView";
import { VersionDiffView } from "@/components/VersionDiffView";
import {
  Bot,
  Play,
  Layers,
  Wrench,
  Sparkles,
  Award,
  GitCompare,
  Terminal,
  Plus,
  RefreshCw,
  Clock,
  ArrowLeft,
  ChevronRight,
  Sliders,
  CheckCircle2,
  FileCode,
  ShieldAlert,
  Copy,
  Check,
  Zap,
} from "lucide-react";
import clsx from "clsx";
import type { ScorecardMetrics } from "@sentinel/shared";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function AgentDetailPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const agentId = resolvedParams.id;

  const [agent, setAgent] = useState<AgentDetail | null>(null);
  const [selectedVersionNum, setSelectedVersionNum] = useState<number>(1);
  const [activeTab, setActiveTab] = useState<"runs" | "config" | "scenarios" | "scorecard" | "compare">("runs");

  const [runs, setRuns] = useState<any[]>([]);
  const [selectedRun, setSelectedRun] = useState<RunDetail | null>(null);
  const [scorecard, setScorecard] = useState<ScorecardMetrics | null>(null);

  const [loading, setLoading] = useState(true);
  const [evaluating, setEvaluating] = useState(false);
  const [evaluationProgress, setEvaluationProgress] = useState<{ progress: number; status: string } | null>(null);

  // New scenario form modal state
  const [showAddScenarioModal, setShowAddScenarioModal] = useState(false);
  const [scenarioPrompt, setScenarioPrompt] = useState("");
  const [scenarioCategory, setScenarioCategory] = useState("realistic");
  const [scenarioExpected, setScenarioExpected] = useState("");

  // New version form state
  const [newVersionPrompt, setNewVersionPrompt] = useState("");
  const [isCreatingVersion, setIsCreatingVersion] = useState(false);

  const loadAgentData = async () => {
    try {
      setLoading(true);
      const agentData = await getAgent(agentId);
      setAgent(agentData);

      const latestV = agentData.activeVersion?.version || 1;
      setSelectedVersionNum(latestV);
      setNewVersionPrompt(agentData.activeVersion?.systemPrompt || "");

      const [runsData, scorecardData] = await Promise.all([
        getAgentRuns(agentId, { version: latestV }),
        getScorecard(agentId).catch(() => null),
      ]);

      setRuns(runsData);
      setScorecard(scorecardData);
    } catch (err) {
      console.error("Failed to load agent detail:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadAgentData();
  }, [agentId]);

  const handleVersionChange = async (verNum: number) => {
    setSelectedVersionNum(verNum);
    try {
      const runsData = await getAgentRuns(agentId, { version: verNum });
      setRuns(runsData);
    } catch (err) {
      console.error("Failed to filter runs by version:", err);
    }
  };

  const handleRunEvaluation = async () => {
    if (evaluating) return;
    try {
      setEvaluating(true);
      setEvaluationProgress({ progress: 0, status: "QUEUED" });

      const targetVersion = agent?.versions.find((v) => v.version === selectedVersionNum);
      const { jobId } = await runEvaluation(agentId, {
        versionId: targetVersion?.id,
        autoGenerateScenarios: true,
      });

      await pollEvaluationJob(jobId, (job) => {
        setEvaluationProgress({
          progress: job.progressPercent,
          status: job.status,
        });
      });

      await loadAgentData();
    } catch (err) {
      console.error("Evaluation execution failed:", err);
    } finally {
      setEvaluating(false);
      setEvaluationProgress(null);
    }
  };

  const handleInspectRun = async (runId: string) => {
    try {
      const detail = await getRun(runId);
      setSelectedRun(detail);
    } catch (err) {
      console.error("Failed to inspect run:", err);
    }
  };

  const handleGenerateScenarios = async () => {
    try {
      setLoading(true);
      const targetVersion = agent?.versions.find((v) => v.version === selectedVersionNum);
      await generateAgentScenarios(agentId, { count: 6, includeGuardrails: true, versionId: targetVersion?.id });
      await loadAgentData();
    } catch (err) {
      console.error("Failed to generate scenarios:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateScenario = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!scenarioPrompt.trim()) return;

    try {
      await createAgentScenario(agentId, {
        prompt: scenarioPrompt,
        category: scenarioCategory as any,
        riskType: "none",
        expectedBehavior: scenarioExpected || "Satisfy customer intent safely",
      });

      setShowAddScenarioModal(false);
      setScenarioPrompt("");
      setScenarioExpected("");
      await loadAgentData();
    } catch (err) {
      console.error("Failed to create scenario:", err);
    }
  };

  const handleCreateNewVersion = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newVersionPrompt.trim() || !agent?.activeVersion) return;

    try {
      setIsCreatingVersion(true);
      await createAgentVersion(agentId, {
        systemPrompt: newVersionPrompt,
        tools: agent.activeVersion.tools,
      });
      await loadAgentData();
      setActiveTab("runs");
    } catch (err) {
      console.error("Failed to create new version:", err);
    } finally {
      setIsCreatingVersion(false);
    }
  };

  if (loading && !agent) {
    return (
      <div className="py-32 flex flex-col items-center justify-center text-zinc-500 gap-3">
        <RefreshCw className="w-8 h-8 animate-spin text-cyan-400" />
        <span className="text-xs font-mono">Loading Agent Studio workspace...</span>
      </div>
    );
  }

  if (!agent) {
    return (
      <div className="py-20 text-center space-y-4">
        <h2 className="text-xl font-bold text-white">Agent Not Found</h2>
        <Link href="/agents" className="text-xs text-cyan-400 hover:underline">
          Return to Agents Studio
        </Link>
      </div>
    );
  }

  const activeVersion = agent.versions.find((v) => v.version === selectedVersionNum) || agent.activeVersion;
  const availableVersions = agent.versions.map((v) => v.version);

  return (
    <div className="space-y-6">
      {/* Breadcrumb Header */}
      <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
        <Link href="/agents" className="hover:text-white flex items-center gap-1 transition-colors">
          <ArrowLeft className="w-3.5 h-3.5" /> Agents
        </Link>
        <span className="text-zinc-600">/</span>
        <span className="text-zinc-200">{agent.name}</span>
      </div>

      {/* Main Agent Header Card */}
      <div className="p-6 sm:p-8 rounded-3xl glass-card border border-white/[0.08] shadow-2xl space-y-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2.5">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-zinc-900 text-zinc-300 border border-white/[0.08]">
                {agent.domain}
              </span>

              {/* Version Selector Dropdown */}
              <div className="flex items-center gap-1.5 bg-black/50 border border-white/[0.08] rounded-lg px-2.5 py-1">
                <Layers className="w-3.5 h-3.5 text-cyan-400" />
                <span className="text-[11px] font-mono text-zinc-400">Version:</span>
                <select
                  value={selectedVersionNum}
                  onChange={(e) => handleVersionChange(Number(e.target.value))}
                  className="bg-transparent text-[11px] font-mono font-bold text-cyan-300 focus:outline-none cursor-pointer"
                >
                  {agent.versions.map((v) => (
                    <option key={v.id} value={v.version} className="bg-zinc-900 text-zinc-200">
                      v{v.version} {v.version === agent.activeVersion?.version ? "(Latest)" : ""}
                    </option>
                  ))}
                </select>
              </div>

              <span className="text-[11px] text-zinc-500 font-mono">
                {agent.scenarios.length} Scenarios Configured
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center gap-3">
              <Bot className="w-7 h-7 text-cyan-400" />
              <span>{agent.name}</span>
            </h1>

            <p className="text-xs text-zinc-400 max-w-2xl leading-relaxed">
              {agent.description || "Autonomous agent configuration and evaluation telemetry."}
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={handleRunEvaluation}
              disabled={evaluating}
              className={clsx(
                "px-5 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2 transition-all shadow-lg active:scale-95",
                evaluating
                  ? "bg-amber-950/80 text-amber-300 border border-amber-800"
                  : "bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-zinc-950 shadow-[0_0_20px_rgba(6,182,212,0.25)] hover:shadow-[0_0_25px_rgba(6,182,212,0.45)]"
              )}
            >
              {evaluating ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin text-amber-400" />
                  <span>Evaluating Suite ({evaluationProgress?.progress || 0}%)...</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Run Suite Evaluation (v{selectedVersionNum})</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Live Evaluation Progress Strip */}
        {evaluating && (
          <div className="p-4 rounded-xl bg-black/60 border border-white/[0.08] space-y-2">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-amber-400 flex items-center gap-2">
                <RefreshCw className="w-3.5 h-3.5 animate-spin" /> Sandboxed Execution Loop Running...
              </span>
              <span className="text-zinc-400">{evaluationProgress?.progress || 0}% Completed</span>
            </div>
            <div className="w-full bg-zinc-900 rounded-full h-1.5 overflow-hidden">
              <div
                className="h-full bg-cyan-400 transition-all duration-300 shadow-[0_0_10px_rgba(6,182,212,0.6)]"
                style={{ width: `${evaluationProgress?.progress || 10}%` }}
              />
            </div>
          </div>
        )}

        {/* Studio Tabs Navigation */}
        <div className="flex border-b border-white/[0.08] gap-1 overflow-x-auto text-xs font-medium pt-2">
          <button
            onClick={() => setActiveTab("runs")}
            className={clsx(
              "px-3.5 py-2.5 border-b-2 font-medium transition-all flex items-center gap-2 whitespace-nowrap",
              activeTab === "runs"
                ? "border-cyan-400 text-cyan-400 bg-cyan-950/20"
                : "border-transparent text-zinc-400 hover:text-zinc-200"
            )}
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>Evaluation Runs ({runs.length})</span>
          </button>

          <button
            onClick={() => setActiveTab("config")}
            className={clsx(
              "px-3.5 py-2.5 border-b-2 font-medium transition-all flex items-center gap-2 whitespace-nowrap",
              activeTab === "config"
                ? "border-cyan-400 text-cyan-400 bg-cyan-950/20"
                : "border-transparent text-zinc-400 hover:text-zinc-200"
            )}
          >
            <Sliders className="w-3.5 h-3.5" />
            <span>Prompt & Tools Configuration</span>
          </button>

          <button
            onClick={() => setActiveTab("scenarios")}
            className={clsx(
              "px-3.5 py-2.5 border-b-2 font-medium transition-all flex items-center gap-2 whitespace-nowrap",
              activeTab === "scenarios"
                ? "border-cyan-400 text-cyan-400 bg-cyan-950/20"
                : "border-transparent text-zinc-400 hover:text-zinc-200"
            )}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Test Scenarios ({agent.scenarios.length})</span>
          </button>

          <button
            onClick={() => setActiveTab("scorecard")}
            className={clsx(
              "px-3.5 py-2.5 border-b-2 font-medium transition-all flex items-center gap-2 whitespace-nowrap",
              activeTab === "scorecard"
                ? "border-cyan-400 text-cyan-400 bg-cyan-950/20"
                : "border-transparent text-zinc-400 hover:text-zinc-200"
            )}
          >
            <Award className="w-3.5 h-3.5" />
            <span>Reliability Scorecard</span>
          </button>

          <button
            onClick={() => setActiveTab("compare")}
            className={clsx(
              "px-3.5 py-2.5 border-b-2 font-medium transition-all flex items-center gap-2 whitespace-nowrap",
              activeTab === "compare"
                ? "border-cyan-400 text-cyan-400 bg-cyan-950/20"
                : "border-transparent text-zinc-400 hover:text-zinc-200"
            )}
          >
            <GitCompare className="w-3.5 h-3.5" />
            <span>Version Comparison Diff</span>
          </button>
        </div>
      </div>

      {/* Tab 1: Runs Table */}
      {activeTab === "runs" && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-white">Execution Runs for Version {selectedVersionNum}</h3>
            <span className="text-xs font-mono text-zinc-500">{runs.length} Runs Recorded</span>
          </div>

          {runs.length === 0 ? (
            <div className="py-16 text-center border border-dashed border-white/10 rounded-3xl glass-card p-8 space-y-3">
              <Terminal className="w-8 h-8 text-zinc-600 mx-auto" />
              <div className="text-sm text-zinc-300 font-medium">No evaluation runs recorded for v{selectedVersionNum}</div>
              <p className="text-xs text-zinc-500 max-w-sm mx-auto">
                Click &ldquo;Run Suite Evaluation&rdquo; to execute the test harness against all scenarios.
              </p>
              <button
                onClick={handleRunEvaluation}
                disabled={evaluating}
                className="px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-zinc-950 text-xs font-bold"
              >
                Launch Evaluation Suite
              </button>
            </div>
          ) : (
            <div className="rounded-2xl border border-white/[0.08] glass-card overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs font-mono">
                  <thead className="bg-black/50 border-b border-white/[0.08] text-zinc-400">
                    <tr>
                      <th className="py-3.5 px-4 font-medium">Scenario Prompt</th>
                      <th className="py-3.5 px-4 font-medium">Category</th>
                      <th className="py-3.5 px-4 font-medium">Verdict & Taxonomy</th>
                      <th className="py-3.5 px-4 font-medium">Confidence</th>
                      <th className="py-3.5 px-4 font-medium text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/[0.04]">
                    {runs.map((run) => (
                      <tr
                        key={run.id}
                        onClick={() => handleInspectRun(run.id)}
                        className="hover:bg-white/[0.03] transition-colors cursor-pointer group"
                      >
                        <td className="py-3.5 px-4 max-w-md">
                          <span className="font-medium text-zinc-200 line-clamp-1 group-hover:text-cyan-300 font-sans">
                            {run.scenario.prompt}
                          </span>
                        </td>
                        <td className="py-3.5 px-4">
                          <span className="font-mono text-zinc-400 uppercase text-[10px] px-2 py-0.5 rounded bg-zinc-900 border border-white/[0.08]">
                            {run.scenario.category}
                          </span>
                        </td>
                        <td className="py-3.5 px-4">
                          <VerdictBadge
                            passFail={run.classification?.passFail}
                            failureType={run.classification?.failureType}
                            size="sm"
                          />
                        </td>
                        <td className="py-3.5 px-4 font-mono text-zinc-400">
                          {run.classification ? `${(run.classification.confidence * 100).toFixed(0)}%` : "—"}
                        </td>
                        <td className="py-3.5 px-4 text-right">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleInspectRun(run.id);
                            }}
                            className="px-2.5 py-1 rounded-lg bg-zinc-900 group-hover:bg-cyan-500/20 text-zinc-300 group-hover:text-cyan-300 text-xs font-mono border border-white/[0.06] transition-colors"
                          >
                            Inspect Trace →
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Tab 2: Prompt & Tools Config */}
      {activeTab === "config" && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Active Version Snapshot */}
          <div className="p-6 rounded-2xl glass-card border border-white/[0.08] space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-sm text-white">Active Snapshot (v{selectedVersionNum})</h3>
              <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-500/30">
                Immutable
              </span>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-medium text-zinc-400">System Prompt</label>
              <pre className="p-4 rounded-xl bg-black/60 border border-white/[0.06] text-xs font-mono text-zinc-200 whitespace-pre-wrap leading-relaxed max-h-72 overflow-y-auto">
                {activeVersion?.systemPrompt}
              </pre>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-medium text-zinc-400">Tool Declarations ({activeVersion?.tools?.length || 0})</label>
              <pre className="p-4 rounded-xl bg-black/60 border border-white/[0.06] text-xs font-mono text-cyan-300 whitespace-pre-wrap leading-relaxed max-h-72 overflow-y-auto">
                {JSON.stringify(activeVersion?.tools, null, 2)}
              </pre>
            </div>
          </div>

          {/* Create Next Version */}
          <div className="p-6 rounded-2xl glass-card border border-white/[0.08] space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-sm text-white">
                Create Version Snapshot (v{(agent.versions[0]?.version || 0) + 1})
              </h3>
              <span className="text-[10px] font-mono text-indigo-400 bg-indigo-950/80 px-2 py-0.5 rounded border border-indigo-500/30">
                Next Iteration
              </span>
            </div>

            <p className="text-xs text-zinc-400 leading-relaxed">
              Iterate on the system prompt (e.g. strengthen safety guardrails or fix failure modes) to test reliability gains against earlier versions.
            </p>

            <form onSubmit={handleCreateNewVersion} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-zinc-300">Updated System Prompt</label>
                <textarea
                  rows={9}
                  value={newVersionPrompt}
                  onChange={(e) => setNewVersionPrompt(e.target.value)}
                  placeholder="Updated instructions..."
                  required
                  className="w-full p-3.5 rounded-xl glass-input text-xs font-mono text-zinc-200 focus:outline-none leading-relaxed resize-y"
                />
              </div>

              <button
                type="submit"
                disabled={isCreatingVersion}
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 hover:from-indigo-400 hover:to-cyan-400 text-zinc-950 font-bold text-xs transition-all shadow-lg disabled:opacity-50 active:scale-95"
              >
                {isCreatingVersion ? "Creating Snapshot..." : `Create Version Snapshot v${((agent.versions[0]?.version || 0) + 1)}`}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Tab 3: Scenarios Suite */}
      {activeTab === "scenarios" && (
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-sm font-bold text-white">Test Scenarios Suite</h3>
              <p className="text-xs text-zinc-400">Realistic, edge-case, and adversarial prompts evaluated by the harness</p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleGenerateScenarios}
                className="px-3.5 py-2 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 text-xs font-semibold flex items-center gap-1.5 transition-all shadow-sm active:scale-95"
              >
                <Sparkles className="w-3.5 h-3.5" /> Generate AI Scenarios
              </button>

              <button
                onClick={() => setShowAddScenarioModal(true)}
                className="px-3.5 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-200 text-xs font-semibold flex items-center gap-1.5 border border-white/10 transition-all active:scale-95"
              >
                <Plus className="w-3.5 h-3.5" /> Add Scenario
              </button>
            </div>
          </div>

          <div className="rounded-2xl border border-white/[0.08] glass-card overflow-hidden">
            <table className="w-full text-left text-xs font-mono">
              <thead className="bg-black/50 border-b border-white/[0.08] text-zinc-400">
                <tr>
                  <th className="py-3.5 px-4 font-medium">Prompt</th>
                  <th className="py-3.5 px-4 font-medium">Category</th>
                  <th className="py-3.5 px-4 font-medium">Risk Type</th>
                  <th className="py-3.5 px-4 font-medium">Expected Behavior</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.04]">
                {agent.scenarios.map((sc) => (
                  <tr key={sc.id} className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-3.5 px-4 text-zinc-200 font-sans">{sc.prompt}</td>
                    <td className="py-3.5 px-4">
                      <span className="px-2 py-0.5 rounded bg-zinc-900 border border-white/[0.08] text-zinc-300 uppercase text-[10px]">
                        {sc.category}
                      </span>
                    </td>
                    <td className="py-3.5 px-4">
                      <span className="px-2 py-0.5 rounded bg-zinc-900 border border-white/[0.08] text-amber-400 uppercase text-[10px]">
                        {sc.riskType}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-zinc-400 font-sans text-xs">{sc.expectedBehavior}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Tab 4: Scorecard View */}
      {activeTab === "scorecard" && (
        scorecard ? (
          <ScorecardView scorecard={scorecard} />
        ) : (
          <div className="py-16 text-center text-zinc-500 text-xs font-mono">
            No evaluation runs completed to compute scorecard metrics. Run an evaluation suite first.
          </div>
        )
      )}

      {/* Tab 5: Version Comparison */}
      {activeTab === "compare" && (
        <VersionDiffView
          agentId={agent.id}
          availableVersions={availableVersions}
          initialV1={availableVersions.length > 1 ? availableVersions[availableVersions.length - 1] : 1}
          initialV2={availableVersions[0]}
        />
      )}

      {/* Slide-Over Drawer for Trace Inspection */}
      {selectedRun && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/80 backdrop-blur-md animate-in fade-in duration-150">
          <div className="w-full max-w-2xl h-full p-4 overflow-hidden">
            <TraceViewer run={selectedRun} onClose={() => setSelectedRun(null)} />
          </div>
        </div>
      )}

      {/* Add Scenario Modal */}
      {showAddScenarioModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="w-full max-w-lg p-6 bg-zinc-950 border border-white/10 rounded-2xl space-y-4 shadow-2xl glass-panel-elevated">
            <h3 className="text-sm font-bold text-white">Add Custom Test Scenario</h3>

            <form onSubmit={handleCreateScenario} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-zinc-300">Prompt / Customer Input</label>
                <textarea
                  rows={3}
                  value={scenarioPrompt}
                  onChange={(e) => setScenarioPrompt(e.target.value)}
                  placeholder="e.g. Please refund $40 for order #8812"
                  required
                  className="w-full p-3 rounded-lg glass-input text-xs text-zinc-200 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-zinc-300">Category</label>
                  <select
                    value={scenarioCategory}
                    onChange={(e) => setScenarioCategory(e.target.value)}
                    className="w-full p-2.5 rounded-lg glass-input text-xs text-zinc-200 focus:outline-none"
                  >
                    <option value="realistic">Realistic</option>
                    <option value="adversarial">Adversarial</option>
                    <option value="edge_case">Edge Case</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-zinc-300">Expected Behavior</label>
                  <input
                    type="text"
                    value={scenarioExpected}
                    onChange={(e) => setScenarioExpected(e.target.value)}
                    placeholder="e.g. Call process_refund"
                    required
                    className="w-full p-2.5 rounded-lg glass-input text-xs text-zinc-200 focus:outline-none"
                  />
                </div>
              </div>

              <div className="pt-2 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowAddScenarioModal(false)}
                  className="px-3 py-1.5 rounded-lg bg-zinc-900 text-zinc-300 text-xs font-medium border border-white/[0.08]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-zinc-950 font-bold text-xs"
                >
                  Save Scenario
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
