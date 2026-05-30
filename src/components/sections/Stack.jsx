import { stack } from '../../data/profile';

export default function Stack() {
  return (
    <section id="stack" className="bg-surface border-y border-border">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <p className="font-mono text-xs text-accent tracking-widest uppercase mb-4">
          03 / Stack
        </p>
        <h2 className="font-display text-4xl font-bold text-white mb-16">
          What I work with.
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {stack.map((group) => (
            <div key={group.category} className="bg-surface p-8">
              <p className="font-mono text-xs text-accent tracking-widest uppercase mb-5">
                {group.category}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="font-mono text-xs text-gray-300 border border-border bg-bg px-3 py-1.5 hover:border-accent hover:text-accent transition-colors cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Currently exploring callout */}
        <div className="mt-8 border border-accent/30 bg-accent/5 p-6">
          <p className="font-mono text-xs text-accent uppercase tracking-widest mb-2">
            Currently exploring
          </p>
          <p className="font-body text-gray-300 text-sm">
            Agentic AI on AWS — <span className="text-accent">AWS AgentCore</span>,{' '}
            <span className="text-accent">Strands</span>, and{' '}
            <span className="text-accent">KIRO</span> for building intelligent, autonomous cloud workflows.
          </p>
        </div>
      </div>
    </section>
  );
}
