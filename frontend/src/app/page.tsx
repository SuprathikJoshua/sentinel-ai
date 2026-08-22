export default function HomePage() {
  return (
    <div className="space-y-10">
      {/* Hero Banner */}
      <section className="relative rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-900/60 via-slate-900/20 to-transparent p-8 md:p-12 overflow-hidden shadow-2xl">
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <span>●</span> Automated Agent Evaluation & Reliability Pipeline
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
            CI/CD for Autonomous <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">
              AI Agents
            </span>
          </h1>
          <p className="text-slate-400 text-base md:text-lg leading-relaxed">
            Test agent configurations against realistic and adversarial scenarios in a sandboxed harness.
            Catch tool loops, hallucinated confidence, and unsafe destructive actions before deploying to production.
          </p>
          <div className="pt-2 flex flex-wrap gap-4">
            <a
              href="/agents/new"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-sm transition-all shadow-lg shadow-cyan-500/25"
            >
              + Configure New Agent
            </a>
            <a
              href="/agents"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium text-sm transition-all border border-slate-700"
            >
              View Registered Agents
            </a>
          </div>
        </div>
      </section>

      {/* 5 Core Engine Pillars */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-white tracking-tight">Reliability Engine Architecture</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="p-6 rounded-xl border border-slate-800/80 bg-slate-900/40 space-y-2.5">
            <div className="w-10 h-10 rounded-lg bg-cyan-950/60 border border-cyan-800/40 flex items-center justify-center text-cyan-400 font-mono text-sm">
              01
            </div>
            <h3 className="font-semibold text-slate-200">Scenario Generation</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Generates diverse edge-case scenarios and adversarial prompt injections tailored to the agent's specific domain and tool interfaces.
            </p>
          </div>

          <div className="p-6 rounded-xl border border-slate-800/80 bg-slate-900/40 space-y-2.5">
            <div className="w-10 h-10 rounded-lg bg-indigo-950/60 border border-indigo-800/40 flex items-center justify-center text-indigo-400 font-mono text-sm">
              02
            </div>
            <h3 className="font-semibold text-slate-200">Sandboxed Execution</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Executes the agent in an isolated loop with mock tool response interception, recording full multi-turn traces and turn-limit metrics.
            </p>
          </div>

          <div className="p-6 rounded-xl border border-slate-800/80 bg-slate-900/40 space-y-2.5">
            <div className="w-10 h-10 rounded-lg bg-blue-950/60 border border-blue-800/40 flex items-center justify-center text-blue-400 font-mono text-sm">
              03
            </div>
            <h3 className="font-semibold text-slate-200">Failure Mode Classifier</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              LLM Judge categorizes failures into taxonomy: tool loops, hallucinated confidence, unsafe destructive actions, and goal drift.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
