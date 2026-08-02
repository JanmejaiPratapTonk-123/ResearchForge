export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 text-center">
      <div className="max-w-md rounded-xl border border-slate-800 bg-slate-900/50 p-8 shadow-xl backdrop-blur">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400 border border-emerald-500/20">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
          Scaffold Active (M1.5)
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-white mb-2">
          ResearchForge
        </h1>
        <p className="text-sm text-slate-400 mb-6">
          An open-source AI-powered research operating system.
        </p>
        <div className="text-xs text-slate-500 border-t border-slate-800 pt-4">
          Next.js web frontend scaffold is running successfully.
        </div>
      </div>
    </main>
  );
}
