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
} from "lucide-react";
import clsx from "clsx";
import type { Scenario, ScorecardMetrics } from "@sentinel/shared";

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

  // Refetch runs when version changes
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

      // Refresh data
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
      <div className="py-32 flex flex-col items-center justify-center text-slate-500 gap-3">
        <RefreshCw className="w-8 h-8 animate-spin text-cyan-400" />
        <span className="text-sm font-mono">Loading Agent Studio environment...</span>
      </div>
    );
  }

  if (!agent) {
    return (
      <div className="py-20 text-center space-y-4">
        <h2 className="text-xl font-bold text-white">Agent Not Found</h2>
        <Link href="/agents" className="text-sm text-cyan-400 hover:underline">
          Return to Agents Studio
        </Link>
      </div>
    );
  }

  const activeVersion = agent.versions.find((v) => v.version === selectedVersionNum) || agent.activeVersion;
  const availableVersions = agent.versions.map((v) => v.version);

  return (
    <div className="space-y-6">
      {/* Back link */}
      <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
        <Link href="/agents" className="hover:text-white flex items-center gap-1 transition-colors">
          <ArrowLeft className="w-3.5 h-3.5" /> Agents
        </Link>
        <span>/</span>
        <span className="text-slate-200">{agent.name}</span>
      </div>

      {/* Main Agent Header */}
      <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl space-y-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                {agent.domain}
              </span>

              {/* Version Selector Dropdown */}
              <div className="flex items-center gap-1.5 bg-slate-950 border border-slate-800 rounded-lg px-2.5 py-1">
                <Layers className="w-3.5 h-3.5 text-cyan-400" />
                <span className="text-xs font-mono text-slate-400">Version:</span>
                <select
                  value={selectedVersionNum}
                  onChange={(e) => handleVersionChange(Number(e.target.value))}
                  className="bg-transparent text-xs font-mono font-bold text-cyan-300 focus:outline-none cursor-pointer"
                >
                  {agent.versions.map((v) => (
                    <option key={v.id} value={v.version} className="bg-slate-900 text-slate-200">
                      v{v.version} {v.version === agent.activeVersion?.version ? "(Latest)" : ""}
                    </option>
                  ))}
                </select>
              </div>

              <span className="text-xs text-slate-500 font-mono">
                {agent.scenarios.length} Test Scenarios
              </span>
            </div>

            <h1 className="text-2xl font-bold text-white tracking-tight flex items-center gap-3">
              <Bot className="w-7 h-7 text-cyan-400" />
              <span>{agent.name}</span>
            </h1>

            <p className="text-xs text-slate-400 max-w-2xl leading-relaxed">
              {agent.description || "No description provided."}
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={handleRunEvaluation}
              disabled={evaluating}
              className={clsx(
                "px-5 py-2.5 rounded-xl font-semibold text-xs flex items-center gap-2 transition-all shadow-lg",
                evaluating
                  ? "bg-amber-950 text-amber-300 border border-amber-800"
                  : "bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 shadow-cyan-500/20"
              )}
            >
              {evaluating ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin text-amber-400" />
                  <span>Evaluating Suite ({evaluationProgress?.progress || 0}%)...</span>
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 fill-current" />
                  <span>Run Suite Evaluation (v{selectedVersionNum})</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Live Evaluation Progress Strip */}
        {evaluating && (
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-amber-400 flex items-center gap-2">
                <RefreshCw className="w-3.5 h-3.5 animate-spin" /> Sandboxed Execution Loop Running...
              </span>
              <span className="text-slate-400">{evaluationProgress?.progress || 0}% Completed</span>
            </div>
            <div className="w-full bg-slate-900 rounded-full h-1.5 overflow-hidden">
              <div
                className="h-full bg-cyan-400 transition-all duration-300"
                style={{ width: `${evaluationProgress?.progress || 10}%` }}
              />
            </div>
          </div>
        )}

        {/* Studio Tabs Navigation */}
        <div className="flex border-b border-slate-800 gap-2 overflow-x-auto text-xs font-medium pt-2">
          <button
            onClick={() => setActiveTab("runs")}
            className={clsx(
              "px-4 py-2.5 border-b-2 font-medium transition-all flex items-center gap-2",
              activeTab === "runs"
                ? "border-cyan-400 text-cyan-400 bg-cyan-950/20"
                : "border-transparent text-slate-400 hover:text-slate-200"
            )}
          >
            <Terminal className="w-4 h-4" />
            <span>Evaluation Runs ({runs.length})</span>
          </button>

          <button
            onClick={() => setActiveTab("config")}
            className={clsx(
              "px-4 py-2.5 border-b-2 font-medium transition-all flex items-center gap-2",
              activeTab === "config"
                ? "border-cyan-400 text-cyan-400 bg-cyan-950/20"
                : "border-transparent text-slate-400 hover:text-slate-200"
            )}
          >
            <Sliders className="w-4 h-4" />
            <span>Prompt & Tools Configuration</span>
          </button>

          <button
            onClick={() => setActiveTab("scenarios")}
            className={clsx(
              "px-4 py-2.5 border-b-2 font-medium transition-all flex items-center gap-2",
              activeTab === "scenarios"
                ? "border-cyan-400 text-cyan-400 bg-cyan-950/20"
                : "border-transparent text-slate-400 hover:text-slate-200"
            )}
          >
            <Sparkles className="w-4 h-4" />
            <span>Test Scenarios ({agent.scenarios.length})</span>
          </button>

          <button
            onClick={() => setActiveTab("scorecard")}
            className={clsx(
              "px-4 py-2.5 border-b-2 font-medium transition-all flex items-center gap-2",
              activeTab === "scorecard"
                ? "border-cyan-400 text-cyan-400 bg-cyan-950/20"
                : "border-transparent text-slate-400 hover:text-slate-200"
            )}
          >
            <Award className="w-4 h-4" />
            <span>Reliability Scorecard</span>
          </button>

          <button
            onClick={() => setActiveTab("compare")}
            className={clsx(
              "px-4 py-2.5 border-b-2 font-medium transition-all flex items-center gap-2",
              activeTab === "compare"
                ? "border-cyan-400 text-cyan-400 bg-cyan-950/20"
                : "border-transparent text-slate-400 hover:text-slate-200"
            )}
          >
            <GitCompare className="w-4 h-4" />
            <span>Version Comparison Diff</span>
          </button>
        </div>
      </div>

      {/* Tab Content 1: Runs Table & Slide-Over Drawer */}
      {activeTab === "runs" && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-white">Execution Runs for Version {selectedVersionNum}</h3>
            <span className="text-xs font-mono text-slate-500">{runs.length} Runs Recorded</span>
          </div>

          {runs.length === 0 ? (
            <div className="py-16 text-center border border-dashed border-slate-800 rounded-2xl bg-slate-900/40 space-y-3">
              <Terminal className="w-8 h-8 text-slate-600 mx-auto" />
              <div className="text-sm text-slate-300 font-medium">No evaluation runs recorded for v{selectedVersionNum}</div>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                Click &ldquo;Run Suite Evaluation&rdquo; to execute the test harness against all scenarios.
              </p>
              <button
                onClick={handleRunEvaluation}
                disabled={evaluating}
                className="px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-semibold"
              >
                Launch Evaluation Suite
              </button>
            </div>
          ) : (
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-950/60 border-b border-slate-800 text-slate-400 font-mono">
                    <tr>
                      <th className="py-3 px-4">Scenario Prompt</th>
                      <th className="py-3 px-4">Category</th>
                      <th className="py-3 px-4">Verdict & Taxonomy</th>
                      <th className="py-3 px-4">Confidence</th>
                      <th className="py-3 px-4 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60">
                    {runs.map((run) => (
                      <tr
                        key={run.id}
                        onClick={() => handleInspectRun(run.id)}
                        className="hover:bg-slate-800/40 transition-colors cursor-pointer group"
                      >
                        <td className="py-3 px-4 max-w-md">
                          <span className="font-medium text-slate-200 line-clamp-1 group-hover:text-cyan-300">
                            {run.scenario.prompt}
                          </span>
                        </td>
                        <td className="py-3 px-4">
                          <span className="font-mono text-slate-400 uppercase text-[10px] px-2 py-0.5 rounded bg-slate-950 border border-slate-800">
                            {run.scenario.category}
                          </span>
                        </td>
                        <td className="py-3 px-4">
                          <VerdictBadge
                            passFail={run.classification?.passFail}
                            failureType={run.classification?.failureType}
                            size="sm"
                          />
                        </td>
                        <td className="py-3 px-4 font-mono text-slate-400">
                          {run.classification ? `${(run.classification.confidence * 100).toFixed(0)}%` : "—"}
                        </td>
                        <td className="py-3 px-4 text-right">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleInspectRun(run.id);
                            }}
                            className="px-2.5 py-1 rounded bg-slate-800 group-hover:bg-cyan-500/20 text-slate-300 group-hover:text-cyan-300 text-xs font-mono transition-colors"
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

      {/* Tab Content 2: Prompt & Tools Configuration */}
      {activeTab === "config" && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Active Version Snapshot */}
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-sm text-white">Active Snapshot (v{selectedVersionNum})</h3>
              <span className="text-xs font-mono text-cyan-400 bg-cyan-950 px-2 py-0.5 rounded border border-cyan-800/40">
                Immutable
              </span>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-medium text-slate-400">System Prompt</label>
              <pre className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-slate-200 whitespace-pre-wrap leading-relaxed max-h-72 overflow-y-auto">
                {activeVersion?.systemPrompt}
              </pre>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-medium text-slate-400">Tool Declarations ({activeVersion?.tools?.length || 0})</label>
              <pre className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-cyan-300 whitespace-pre-wrap leading-relaxed max-h-72 overflow-y-auto">
                {JSON.stringify(activeVersion?.tools, null, 2)}
              </pre>
            </div>
          </div>

          {/* Fork & Create Next Version */}
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-sm text-white">
                Create Version Snapshot (v{(agent.versions[0]?.version || 0) + 1})
              </h3>
              <span className="text-xs font-mono text-indigo-400 bg-indigo-950 px-2 py-0.5 rounded border border-indigo-800/40">
                Next Iteration
              </span>
            </div>

            <p className="text-xs text-slate-400">
              Iterate on the system prompt (e.g. strengthen safety guardrails or fix failure modes) to test reliability gains against earlier versions.
            </p>

            <form onSubmit={handleCreateNewVersion} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-slate-300">Updated System Prompt</label>
                <textarea
                  rows={10}
                  value={newVersionPrompt}
                  onChange={(e) => setNewVersionPrompt(e.target.value)}
                  placeholder="Updated instructions..."
                  required
                  className="w-full p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-slate-200 focus:outline-none focus:border-cyan-500 leading-relaxed resize-y"
                />
              </div>

              <button
                type="submit"
                disabled={isCreatingVersion}
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 hover:from-indigo-400 hover:to-cyan-400 text-slate-950 font-semibold text-xs transition-all shadow-lg disabled:opacity-50"
              >
                {isCreatingVersion ? "Creating Snapshot..." : `Create Version ${((agent.versions[0]?.version || 0) + 1)}`}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Tab Content 3: Scenarios Suite */}
      {activeTab === "scenarios" && (
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-sm font-semibold text-white">Test Scenarios Suite</h3>
              <p className="text-xs text-slate-400">Realistic, edge-case, and adversarial prompts evaluated by the harness</p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleGenerateScenarios}
                className="px-3.5 py-2 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 text-xs font-semibold flex items-center gap-1.5 transition-all"
              >
                <Sparkles className="w-3.5 h-3.5" /> Generate AI Scenarios
              </button>

              <button
                onClick={() => setShowAddScenarioModal(true)}
                className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-1.5 border border-slate-700 transition-all"
              >
                <Plus className="w-3.5 h-3.5" /> Add Scenario
              </button>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 overflow-hidden">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-950/60 border-b border-slate-800 text-slate-400 font-mono">
                <tr>
                  <th className="py-3 px-4">Prompt</th>
                  <th className="py-3 px-4">Category</th>
                  <th className="py-3 px-4">Risk Type</th>
                  <th className="py-3 px-4">Expected Behavior</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 font-mono">
                {agent.scenarios.map((sc) => (
                  <tr key={sc.id} className="hover:bg-slate-800/40 transition-colors">
                    <td className="py-3 px-4 text-slate-200 font-sans">{sc.prompt}</td>
                    <td className="py-3 px-4">
                      <span className="px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-slate-300 uppercase text-[10px]">
                        {sc.category}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <span className="px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-amber-400 uppercase text-[10px]">
                        {sc.riskType}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-slate-400 font-sans text-xs">{sc.expectedBehavior}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Tab Content 4: Scorecard & Analytics */}
      {activeTab === "scorecard" && (
        scorecard ? (
          <ScorecardView scorecard={scorecard} />
        ) : (
          <div className="py-16 text-center text-slate-500 text-xs font-mono">
            No evaluation runs completed to compute scorecard metrics. Run an evaluation suite first.
          </div>
        )
      )}

      {/* Tab Content 5: Version Comparison */}
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
        <div className="fixed inset-0 z-50 flex justify-end bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="w-full max-w-2xl h-full p-4 overflow-hidden">
            <TraceViewer run={selectedRun} onClose={() => setSelectedRun(null)} />
          </div>
        </div>
      )}

      {/* Add Scenario Modal */}
      {showAddScenarioModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
          <div className="w-full max-w-lg p-6 bg-slate-900 border border-slate-800 rounded-2xl space-y-4 shadow-2xl">
            <h3 className="text-base font-bold text-white">Add Custom Test Scenario</h3>

            <form onSubmit={handleCreateScenario} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-slate-300">Prompt / Customer Input</label>
                <textarea
                  rows={3}
                  value={scenarioPrompt}
                  onChange={(e) => setScenarioPrompt(e.target.value)}
                  placeholder="e.g. Please refund $40 for order #8812"
                  required
                  className="w-full p-3 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-slate-300">Category</label>
                  <select
                    value={scenarioCategory}
                    onChange={(e) => setScenarioCategory(e.target.value)}
                    className="w-full p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-200 focus:outline-none"
                  >
                    <option value="realistic">Realistic</option>
                    <option value="adversarial">Adversarial</option>
                    <option value="edge_case">Edge Case</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-slate-300">Expected Behavior</label>
                  <input
                    type="text"
                    value={scenarioExpected}
                    onChange={(e) => setScenarioExpected(e.target.value)}
                    placeholder="e.g. Call process_refund"
                    required
                    className="w-full p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-200 focus:outline-none"
                  />
                </div>
              </div>

              <div className="pt-2 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowAddScenarioModal(false)}
                  className="px-3 py-1.5 rounded-lg bg-slate-800 text-slate-300 text-xs"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-xs"
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
