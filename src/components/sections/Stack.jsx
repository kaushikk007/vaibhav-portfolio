import { stack } from '../../data/profile';
import Reveal from '../layout/Reveal';
import useTilt from '../../hooks/useTilt';

function StackCard({ group, delay }) {
  const tilt = useTilt(8);

  return (
    <Reveal delay={delay} variant="scale" className="bg-surface">
      <div
        ref={tilt.ref}
        onMouseMove={tilt.onMouseMove}
        onMouseLeave={tilt.onMouseLeave}
        className="p-8 h-full transition-transform duration-200 ease-out will-change-transform hover:shadow-[0_0_30px_-8px_rgba(249,115,22,0.3)]"
      >
        <p className="font-mono text-xs text-accent tracking-widest uppercase mb-5">
          {group.category}
        </p>
        <div className="flex flex-wrap gap-2">
          {group.items.map((item) => (
            <span
              key={item}
              className="font-mono text-xs text-gray-300 border border-border bg-bg px-3 py-1.5 hover:border-accent hover:text-accent hover:-translate-y-0.5 transition-all duration-200 cursor-default"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

export default function Stack() {
  return (
    <section id="stack" className="bg-surface border-y border-border">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <Reveal>
          <p className="font-mono text-xs text-accent tracking-widest uppercase mb-4">
            03 / Stack
          </p>
          <h2 className="font-display text-4xl font-bold text-white mb-16">
            What I work with.
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {stack.map((group, idx) => (
            <StackCard key={group.category} group={group} delay={idx * 80} />
          ))}
        </div>

        {/* Currently exploring callout */}
        <Reveal delay={100}>
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
        </Reveal>
      </div>
    </section>
  );
}
