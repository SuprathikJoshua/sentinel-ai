import Link from "next/link";
import {
  ShieldAlert,
  Sparkles,
  Zap,
  Bot,
  Terminal,
  Activity,
  Award,
  GitCompare,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Lock,
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="space-y-12 pb-12">
      {/* Hero Banner */}
      <section className="relative rounded-3xl glass-card border border-white/[0.08] p-8 md:p-14 overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl -mb-20 pointer-events-none" />

        <div className="relative z-10 max-w-3xl space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono">
            <Zap className="w-3.5 h-3.5" />
            <span>Continuous Verification & Regression Harness</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight font-sans">
            CI/CD for Autonomous <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">
              AI Agents
            </span>
          </h1>

          <p className="text-zinc-400 text-base md:text-lg leading-relaxed max-w-2xl">
            Stress-test agent prompts, function calling, and tool workflows against adversarial scenarios in a safe turn-capped sandbox. Detect and fix destructive actions, tool loops, and hallucinations before production deployment.
          </p>

          <div className="pt-3 flex flex-wrap items-center gap-4">
            <Link
              href="/agents/new"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-zinc-950 font-bold text-xs transition-all shadow-[0_0_20px_rgba(6,182,212,0.25)] hover:shadow-[0_0_25px_rgba(6,182,212,0.45)] active:scale-95"
            >
              + Configure New Agent
            </Link>

            <Link
              href="/agents"
              className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-200 font-semibold text-xs transition-all border border-white/10 active:scale-95"
            >
              Open Agent Studio →
            </Link>
          </div>
        </div>
      </section>

      {/* 4 Core Engine Pillars */}
      <section className="space-y-6">
        <div>
          <h2 className="text-xl font-bold text-white tracking-tight">Continuous Reliability Engine Architecture</h2>
          <p className="text-xs text-zinc-400 mt-1">Multi-stage pipeline guaranteeing agent safety, alignment, and determinism</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl glass-card border border-white/[0.08] space-y-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-mono text-xs font-bold shadow-[0_0_15px_rgba(6,182,212,0.2)]">
              01
            </div>
            <h3 className="font-bold text-sm text-zinc-100">Adversarial Scenario Synthesis</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Synthesizes realistic edge-case tasks and targeted prompt injections to probe agent guardrails under social engineering and authority bypass attempts.
            </p>
          </div>

          <div className="p-6 rounded-2xl glass-card border border-white/[0.08] space-y-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 font-mono text-xs font-bold shadow-[0_0_15px_rgba(99,102,241,0.2)]">
              02
            </div>
            <h3 className="font-bold text-sm text-zinc-100">Sandboxed Execution Loop</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Runs agents against mock tool executors in an isolated environment capped at 6 turns, capturing complete multi-turn transcripts and telemetry.
            </p>
          </div>

          <div className="p-6 rounded-2xl glass-card border border-white/[0.08] space-y-3">
            <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400 font-mono text-xs font-bold shadow-[0_0_15px_rgba(244,63,94,0.2)]">
              03
            </div>
            <h3 className="font-bold text-sm text-zinc-100">LLM-as-a-Judge Taxonomy Classifier</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Evaluates execution traces into canonical failure modes: Tool Loop, Hallucinated Confidence, Unsafe Destructive Action, and Goal Drift.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
