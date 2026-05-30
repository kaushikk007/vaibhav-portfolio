import { certifications } from '../../data/profile';

const tierConfig = {
  pro: { label: 'Professional', color: 'text-orange-300 border-orange-300/40 bg-orange-300/5' },
  specialty: { label: 'Specialty', color: 'text-purple-300 border-purple-300/40 bg-purple-300/5' },
  associate: { label: 'Associate', color: 'text-blue-300 border-blue-300/40 bg-blue-300/5' },
  foundational: { label: 'Foundational', color: 'text-green-300 border-green-300/40 bg-green-300/5' },
  other: { label: 'Other', color: 'text-gray-300 border-gray-300/40 bg-gray-300/5' },
};

export default function Certifications() {
  return (
    <section id="certifications" className="max-w-6xl mx-auto px-6 py-14">
      <p className="font-mono text-xs text-accent tracking-widest uppercase mb-4">
        04 / Certifications
      </p>
      <div className="flex items-end justify-between mb-16">
        <h2 className="font-display text-4xl font-bold text-white">
          13 AWS Certifications.
        </h2>
        <p className="font-mono text-xs text-muted hidden md:block">
          Fully certified across all levels
        </p>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-3 mb-8">
        {Object.entries(tierConfig).map(([key, val]) => (
          <div
            key={key}
            className={`inline-flex items-center gap-1.5 border px-3 py-1 text-xs font-mono ${val.color}`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-current" />
            {val.label}
          </div>
        ))}
      </div>

      {/* Cert grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
        {certifications.map((cert, idx) => {
          const tier = tierConfig[cert.tier];
          const isOrphan = idx === certifications.length - 1 && certifications.length % 3 === 1;
          return (
            <div
              key={idx}
              className={`bg-bg p-5 group hover:bg-surface transition-colors${isOrphan ? ' lg:col-span-3' : ''}`}
            >
              <div className="flex items-start justify-between mb-2">
                <p className="font-display text-sm font-semibold text-white group-hover:text-accent transition-colors">
                  AWS {cert.name}
                </p>
                <span className="font-mono text-xs text-subtle">{String(idx + 1).padStart(2, '0')}</span>
              </div>
              <span
                className={`inline-flex items-center gap-1.5 text-xs font-mono border px-2 py-0.5 ${tier.color}`}
              >
                {cert.level}
              </span>
            </div>
          );
        })}
      </div>

      {/* Credly link */}
      <div className="mt-8 text-center">
        <a
          href="https://credly.com/users/vaibhav-kaushik.551d449c"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-sm text-muted hover:text-accent transition-colors"
        >
          Verify on Credly →
        </a>
      </div>
    </section>
  );
}
