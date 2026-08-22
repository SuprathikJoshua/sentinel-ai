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
  Copy,
  Check,
  X,
  Code2,
  Cpu,
} from "lucide-react";
import clsx from "clsx";
import type { RunDetail } from "@/lib/api";

interface TraceViewerProps {
  run: RunDetail;
  onClose?: () => void;
}

export function TraceViewer({ run, onClose }: TraceViewerProps) {
  const [expandedTools, setExpandedTools] = useState<Record<number, boolean>>({});
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const toggleToolExpand = (idx: number) => {
    setExpandedTools((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const trace = run.trace;
  const classification = run.classification;
  const isPass = classification?.passFail === "pass";

  return (
    <div className="flex flex-col h-full bg-zinc-950 rounded-2xl border border-white/10 shadow-2xl overflow-hidden glass-panel-elevated">
      {/* 1. Header Banner & Verdict */}
      <div className="p-6 border-b border-white/[0.08] bg-zinc-900/60 backdrop-blur-md space-y-4">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono text-zinc-400 bg-zinc-900 border border-white/[0.08] px-2 py-0.5 rounded">
                Run ID: {run.id.slice(-8)}
              </span>
              <span className="text-zinc-600">•</span>
              <span className="text-[11px] font-mono text-cyan-400 bg-cyan-950/70 border border-cyan-500/30 px-2 py-0.5 rounded">
                v{run.agentVersion?.version || 1}
              </span>
            </div>
            <h2 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
              <span>{run.agentVersion?.agent?.name || "Agent Execution"}</span>
            </h2>
          </div>

          <div className="flex items-center gap-2.5">
            <VerdictBadge
              passFail={classification?.passFail}
              failureType={classification?.failureType}
              size="md"
            />
            {onClose && (
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg text-zinc-400 hover:text-white bg-zinc-900 hover:bg-zinc-800 border border-white/[0.08] transition-colors"
                title="Close Drawer"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* LLM Judge Verdict Card */}
        {classification ? (
          <div
            className={clsx(
              "p-4 rounded-xl border space-y-3 transition-all",
              isPass
                ? "bg-emerald-950/20 border-emerald-500/30 text-emerald-200"
                : "bg-rose-950/20 border-rose-500/30 text-rose-200"
            )}
          >
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="font-semibold flex items-center gap-1.5">
                {isPass ? <ShieldCheck className="w-4 h-4 text-emerald-400" /> : <ShieldAlert className="w-4 h-4 text-rose-400" />}
                LLM-as-a-Judge Evaluation Verdict
              </span>
              <span className="text-zinc-400 font-mono text-[11px]">
                Confidence: <strong className="text-white">{(classification.confidence * 100).toFixed(0)}%</strong>
              </span>
            </div>

            {/* Confidence Bar */}
            <div className="w-full bg-zinc-900 rounded-full h-1.5 overflow-hidden">
              <div
                className={clsx(
                  "h-full transition-all duration-500",
                  isPass ? "bg-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.5)]" : "bg-rose-500 shadow-[0_0_10px_rgba(244,63,94,0.5)]"
                )}
                style={{ width: `${classification.confidence * 100}%` }}
              />
            </div>

            <div className="text-xs leading-relaxed text-zinc-300">
              <span className="font-semibold text-zinc-400 font-mono text-[10px] uppercase tracking-wider block mb-1">
                Judge Reasoning
              </span>
              <p className="bg-black/60 p-3 rounded-lg border border-white/[0.06] font-mono text-zinc-200 text-[11px] leading-relaxed">
                &ldquo;{classification.reasoning}&rdquo;
              </p>
            </div>
          </div>
        ) : (
          <div className="p-4 rounded-xl bg-zinc-900 border border-white/[0.08] text-zinc-400 text-xs font-mono">
            Evaluation in progress or classification pending...
          </div>
        )}

        {/* Telemetry Chips Strip */}
        <div className="flex flex-wrap items-center gap-2.5 text-xs font-mono text-zinc-400 pt-1">
          <div className="flex items-center gap-1.5 bg-black/50 border border-white/[0.08] px-2.5 py-1 rounded-lg">
            <Repeat className="w-3.5 h-3.5 text-cyan-400" />
            <span>Turns:</span>
            <strong className={clsx(trace?.hitTurnLimit ? "text-rose-400" : "text-zinc-200")}>
              {trace?.turnCount || 1} / 6
            </strong>
            {trace?.hitTurnLimit && (
              <span className="text-[9px] text-rose-400 font-semibold px-1 rounded bg-rose-950/80 border border-rose-800">
                CAP REACHED
              </span>
            )}
          </div>

          <div className="flex items-center gap-1.5 bg-black/50 border border-white/[0.08] px-2.5 py-1 rounded-lg">
            <Wrench className="w-3.5 h-3.5 text-amber-400" />
            <span>Tool Invocations:</span>
            <strong className="text-zinc-200">{trace?.toolCallsCount || 0}</strong>
          </div>

          <div className="flex items-center gap-1.5 bg-black/50 border border-white/[0.08] px-2.5 py-1 rounded-lg">
            <Clock className="w-3.5 h-3.5 text-indigo-400" />
            <span>Duration:</span>
            <strong className="text-zinc-200">{run.durationMs ? `${run.durationMs}ms` : "—"}</strong>
          </div>
        </div>
      </div>

      {/* 2. Target Scenario Card */}
      <div className="px-6 py-3.5 border-b border-white/[0.06] bg-zinc-900/30 space-y-1.5">
        <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 flex items-center gap-1.5">
          <Sparkles className="w-3 h-3 text-cyan-400" /> Test Scenario & Expected Behavior
        </span>
        <div className="p-3 rounded-xl bg-black/40 border border-white/[0.06] space-y-1.5">
          <div className="text-xs font-medium text-zinc-200 leading-relaxed">&ldquo;{run.scenario.prompt}&rdquo;</div>
          <div className="flex flex-wrap items-center gap-2 pt-1 border-t border-white/[0.04] text-[11px]">
            <span className="text-zinc-500 font-mono">Category:</span>
            <span className="px-2 py-0.5 rounded bg-zinc-900 border border-white/[0.08] text-zinc-300 font-mono text-[10px] uppercase">
              {run.scenario.category}
            </span>
            <span className="text-zinc-500 font-mono ml-2">Expected:</span>
            <span className="text-zinc-300 font-mono text-[11px]">{run.scenario.expectedBehavior}</span>
          </div>
        </div>
      </div>

      {/* 3. Chronological Conversation History */}
      <div className="flex-1 overflow-y-auto p-6 space-y-3.5">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500">
            Chronological Telemetry Stream
          </span>
          <span className="text-[10px] font-mono text-zinc-500">
            {trace?.messages?.length || 0} Total Events
          </span>
        </div>

        {!trace?.messages || trace.messages.length === 0 ? (
          <div className="p-8 text-center text-zinc-500 text-xs font-mono">
            No trace messages recorded for this execution.
          </div>
        ) : (
          trace.messages.map((msg, idx) => {
            const isUser = msg.role === "user";
            const isAssistant = msg.role === "assistant";
            const isTool = msg.role === "tool";
            const isSystem = msg.role === "system";

            if (isSystem) return null;

            return (
              <div
                key={idx}
                className={clsx(
                  "p-4 rounded-xl border transition-all space-y-2.5",
                  isUser && "bg-cyan-950/10 border-cyan-500/20 text-cyan-100",
                  isAssistant && "bg-zinc-900/60 border-white/[0.07] text-zinc-200",
                  isTool && "bg-amber-950/10 border-amber-500/20 text-amber-100"
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
                    <span className="font-semibold capitalize text-zinc-300">{msg.role}</span>
                  </div>

                  <span className="text-[10px] font-mono text-zinc-500">Step #{idx + 1}</span>
                </div>

                {/* Content Message */}
                {msg.content && (
                  <div className="text-xs font-mono whitespace-pre-wrap leading-relaxed bg-black/50 p-3 rounded-lg border border-white/[0.04] text-zinc-200">
                    {msg.content}
                  </div>
                )}

                {/* Intercepted Tool Calls */}
                {msg.toolCalls && msg.toolCalls.length > 0 && (
                  <div className="space-y-2 pt-2 border-t border-white/[0.06]">
                    <span className="text-[10px] font-mono text-amber-400 font-semibold flex items-center gap-1.5">
                      <Terminal className="w-3 h-3" /> Intercepted Tool Call ({msg.toolCalls.length})
                    </span>

                    {msg.toolCalls.map((tc, tcIdx) => {
                      const isExpanded = expandedTools[idx * 100 + tcIdx] ?? true;
                      const argsJson = JSON.stringify(tc.args, null, 2);
                      const resultJson = JSON.stringify(tc.result, null, 2);

                      return (
                        <div
                          key={tcIdx}
                          className="rounded-lg bg-black/60 border border-amber-500/20 overflow-hidden text-xs"
                        >
                          <button
                            type="button"
                            onClick={() => toggleToolExpand(idx * 100 + tcIdx)}
                            className="w-full px-3 py-2 bg-amber-950/30 hover:bg-amber-950/50 border-b border-amber-500/20 flex items-center justify-between font-mono text-amber-300 transition-colors"
                          >
                            <span className="font-semibold flex items-center gap-1.5 text-xs">
                              {isExpanded ? <ChevronDown className="w-3.5 h-3.5" /> : <ChevronRight className="w-3.5 h-3.5" />}
                              {tc.name}(...)
                            </span>
                            <span className="text-[9px] text-amber-400 bg-amber-950/80 px-1.5 py-0.5 rounded border border-amber-800">
                              Synthetic Intercept
                            </span>
                          </button>

                          {isExpanded && (
                            <div className="p-3 space-y-2.5 font-mono text-[11px]">
                              <div>
                                <div className="flex items-center justify-between mb-1">
                                  <span className="text-zinc-500 uppercase tracking-wider text-[9px]">
                                    Input Arguments:
                                  </span>
                                  <button
                                    onClick={() => handleCopy(argsJson, `args-${idx}-${tcIdx}`)}
                                    className="text-zinc-400 hover:text-white text-[10px] flex items-center gap-1"
                                  >
                                    {copiedKey === `args-${idx}-${tcIdx}` ? (
                                      <Check className="w-3 h-3 text-emerald-400" />
                                    ) : (
                                      <Copy className="w-3 h-3" />
                                    )}
                                  </button>
                                </div>
                                <pre className="p-2.5 rounded bg-zinc-950 text-cyan-300 overflow-x-auto border border-white/[0.06] text-[11px] leading-relaxed">
                                  {argsJson}
                                </pre>
                              </div>

                              {tc.result !== undefined && (
                                <div>
                                  <div className="flex items-center justify-between mb-1">
                                    <span className="text-zinc-500 uppercase tracking-wider text-[9px]">
                                      Synthetic Return Output:
                                    </span>
                                    <button
                                      onClick={() => handleCopy(resultJson, `res-${idx}-${tcIdx}`)}
                                      className="text-zinc-400 hover:text-white text-[10px] flex items-center gap-1"
                                    >
                                      {copiedKey === `res-${idx}-${tcIdx}` ? (
                                        <Check className="w-3 h-3 text-emerald-400" />
                                      ) : (
                                        <Copy className="w-3 h-3" />
                                      )}
                                    </button>
                                  </div>
                                  <pre className="p-2.5 rounded bg-zinc-950 text-emerald-300 overflow-x-auto border border-white/[0.06] text-[11px] leading-relaxed">
                                    {resultJson}
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
