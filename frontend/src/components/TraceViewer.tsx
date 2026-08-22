"use client";

import React, { useState } from "react";
import { VerdictBadge } from "./VerdictBadge";
import {
  User,
  Bot,
  Wrench,
  ChevronDown,
  ChevronRight,
  Clock,
  Repeat,
  Sparkles,
  ShieldCheck,
  ShieldAlert,
  Terminal,
  Layers,
} from "lucide-react";
import clsx from "clsx";
import type { RunDetail } from "@/lib/api";

interface TraceViewerProps {
  run: RunDetail;
  onClose?: () => void;
}

export function TraceViewer({ run, onClose }: TraceViewerProps) {
  const [expandedTools, setExpandedTools] = useState<Record<number, boolean>>({});
  const [showFullJudgeReasoning, setShowFullJudgeReasoning] = useState(true);

  const toggleToolExpand = (idx: number) => {
    setExpandedTools((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  const trace = run.trace;
  const classification = run.classification;
  const isPass = classification?.passFail === "pass";

  return (
    <div className="flex flex-col h-full bg-slate-950 rounded-2xl border border-slate-800/80 shadow-2xl overflow-hidden">
      {/* 1. Header Banner & Verdict */}
      <div className="p-6 border-b border-slate-800 bg-slate-900/60 space-y-4">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2.5">
              <span className="text-xs font-mono text-slate-400">Run ID: {run.id}</span>
              <span className="text-slate-600">•</span>
              <span className="text-xs font-mono text-cyan-400 bg-cyan-950/60 border border-cyan-800/40 px-2 py-0.5 rounded">
                v{run.agentVersion?.version || 1}
              </span>
            </div>
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span>{run.agentVersion?.agent?.name || "Agent Execution"}</span>
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <VerdictBadge
              passFail={classification?.passFail}
              failureType={classification?.failureType}
              size="lg"
            />
            {onClose && (
              <button
                onClick={onClose}
                className="px-3 py-1 text-xs text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
              >
                Close Drawer
              </button>
            )}
          </div>
        </div>

        {/* LLM Judge Verdict Card */}
        {classification ? (
          <div
            className={clsx(
              "p-4 rounded-xl border space-y-2.5 transition-all",
              isPass
                ? "bg-emerald-950/30 border-emerald-500/30 text-emerald-200"
                : "bg-rose-950/30 border-rose-500/30 text-rose-200"
            )}
          >
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="font-semibold flex items-center gap-1.5">
                {isPass ? <ShieldCheck className="w-4 h-4 text-emerald-400" /> : <ShieldAlert className="w-4 h-4 text-rose-400" />}
                LLM-as-a-Judge Evaluation Verdict
              </span>
              <span className="text-slate-400">
                Confidence: <strong className="text-white">{(classification.confidence * 100).toFixed(0)}%</strong>
              </span>
            </div>

            {/* Confidence Bar */}
            <div className="w-full bg-slate-900/80 rounded-full h-1.5 overflow-hidden">
              <div
                className={clsx("h-full transition-all", isPass ? "bg-emerald-400" : "bg-rose-500")}
                style={{ width: `${classification.confidence * 100}%` }}
              />
            </div>

            <div className="text-xs leading-relaxed text-slate-300">
              <span className="font-semibold text-slate-400 font-mono text-[11px] uppercase block mb-1">
                Judge Rationale:
              </span>
              <p className="bg-slate-950/60 p-3 rounded-lg border border-slate-800/80 font-mono text-slate-200">
                &ldquo;{classification.reasoning}&rdquo;
              </p>
            </div>
          </div>
        ) : (
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 text-xs font-mono">
            Evaluation in progress or classification pending...
          </div>
        )}

        {/* Telemetry Chips Strip */}
        <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-400 pt-1">
          <div className="flex items-center gap-1.5 bg-slate-950 border border-slate-800 px-3 py-1 rounded-lg">
            <Repeat className="w-3.5 h-3.5 text-cyan-400" />
            <span>Turns:</span>
            <strong className={clsx(trace?.hitTurnLimit ? "text-rose-400" : "text-slate-200")}>
              {trace?.turnCount || 1} / 6
            </strong>
            {trace?.hitTurnLimit && (
              <span className="text-[10px] text-rose-400 font-semibold px-1 rounded bg-rose-950/60">
                CAP HIT
              </span>
            )}
          </div>

          <div className="flex items-center gap-1.5 bg-slate-950 border border-slate-800 px-3 py-1 rounded-lg">
            <Wrench className="w-3.5 h-3.5 text-amber-400" />
            <span>Tool Invocations:</span>
            <strong className="text-slate-200">{trace?.toolCallsCount || 0}</strong>
          </div>

          <div className="flex items-center gap-1.5 bg-slate-950 border border-slate-800 px-3 py-1 rounded-lg">
            <Clock className="w-3.5 h-3.5 text-indigo-400" />
            <span>Duration:</span>
            <strong className="text-slate-200">{run.durationMs ? `${run.durationMs}ms` : "—"}</strong>
          </div>
        </div>
      </div>

      {/* 2. Target Scenario Card */}
      <div className="px-6 py-4 border-b border-slate-800/80 bg-slate-900/30 space-y-2">
        <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" /> Test Scenario & Expected Behavior
        </span>
        <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
          <div className="text-sm font-medium text-slate-200">&ldquo;{run.scenario.prompt}&rdquo;</div>
          <div className="flex flex-wrap items-center gap-2 pt-1 border-t border-slate-900 text-xs">
            <span className="text-slate-500 font-mono">Category:</span>
            <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300 font-mono">
              {run.scenario.category}
            </span>
            <span className="text-slate-500 font-mono ml-2">Expected:</span>
            <span className="text-slate-300 font-mono text-[11px]">{run.scenario.expectedBehavior}</span>
          </div>
        </div>
      </div>

      {/* 3. Chronological Conversation History */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        <span className="text-xs font-mono uppercase tracking-wider text-slate-500 block mb-2">
          Chronological Telemetry Stream
        </span>

        {!trace?.messages || trace.messages.length === 0 ? (
          <div className="p-8 text-center text-slate-500 text-xs font-mono">
            No trace messages recorded for this execution.
          </div>
        ) : (
          trace.messages.map((msg, idx) => {
            const isUser = msg.role === "user";
            const isAssistant = msg.role === "assistant";
            const isTool = msg.role === "tool";
            const isSystem = msg.role === "system";

            if (isSystem) return null; // System prompt is shown in config tab

            return (
              <div
                key={idx}
                className={clsx(
                  "p-4 rounded-xl border transition-all space-y-3",
                  isUser && "bg-cyan-950/20 border-cyan-800/40 text-cyan-100",
                  isAssistant && "bg-slate-900/80 border-slate-800 text-slate-200",
                  isTool && "bg-amber-950/20 border-amber-800/40 text-amber-100"
                )}
              >
                {/* Message Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 font-mono text-xs">
                    {isUser && (
                      <div className="w-5 h-5 rounded-md bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-300">
                        <User className="w-3 h-3" />
                      </div>
                    )}
                    {isAssistant && (
                      <div className="w-5 h-5 rounded-md bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center text-indigo-300">
                        <Bot className="w-3 h-3" />
                      </div>
                    )}
                    {isTool && (
                      <div className="w-5 h-5 rounded-md bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-300">
                        <Wrench className="w-3 h-3" />
                      </div>
                    )}
                    <span className="font-semibold capitalize text-slate-300">{msg.role}</span>
                  </div>

                  <span className="text-[10px] font-mono text-slate-500">Step #{idx + 1}</span>
                </div>

                {/* Content Message */}
                {msg.content && (
                  <div className="text-sm font-mono whitespace-pre-wrap leading-relaxed bg-slate-950/70 p-3 rounded-lg border border-slate-900">
                    {msg.content}
                  </div>
                )}

                {/* Tool Invocations Intercepted */}
                {msg.toolCalls && msg.toolCalls.length > 0 && (
                  <div className="space-y-2 pt-2 border-t border-slate-800/60">
                    <span className="text-[11px] font-mono text-amber-400 font-semibold flex items-center gap-1.5">
                      <Terminal className="w-3.5 h-3.5" /> Intercepted Tool Calls ({msg.toolCalls.length})
                    </span>

                    {msg.toolCalls.map((tc, tcIdx) => {
                      const isExpanded = expandedTools[idx * 100 + tcIdx] ?? true;
                      return (
                        <div
                          key={tcIdx}
                          className="rounded-lg bg-slate-950 border border-amber-900/40 overflow-hidden text-xs"
                        >
                          <button
                            type="button"
                            onClick={() => toggleToolExpand(idx * 100 + tcIdx)}
                            className="w-full px-3 py-2 bg-amber-950/40 hover:bg-amber-950/60 border-b border-amber-900/30 flex items-center justify-between font-mono text-amber-300"
                          >
                            <span className="font-semibold flex items-center gap-1.5">
                              {isExpanded ? <ChevronDown className="w-3.5 h-3.5" /> : <ChevronRight className="w-3.5 h-3.5" />}
                              {tc.name}(...)
                            </span>
                            <span className="text-[10px] text-amber-400/80 bg-amber-950 px-1.5 py-0.5 rounded">
                              Mock Intercepted
                            </span>
                          </button>

                          {isExpanded && (
                            <div className="p-3 space-y-2 font-mono text-[11px]">
                              <div>
                                <span className="text-slate-500 uppercase tracking-wider text-[10px] block mb-1">
                                  Input Arguments:
                                </span>
                                <pre className="p-2.5 rounded bg-slate-900 text-cyan-300 overflow-x-auto border border-slate-800">
                                  {JSON.stringify(tc.args, null, 2)}
                                </pre>
                              </div>

                              {tc.result !== undefined && (
                                <div>
                                  <span className="text-slate-500 uppercase tracking-wider text-[10px] block mb-1">
                                    Mocked Synthetic Output:
                                  </span>
                                  <pre className="p-2.5 rounded bg-slate-900 text-emerald-300 overflow-x-auto border border-slate-800">
                                    {JSON.stringify(tc.result, null, 2)}
                                  </pre>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
