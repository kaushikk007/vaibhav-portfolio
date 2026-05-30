import { experience } from '../../data/profile';

export default function Experience() {
  return (
    <section id="experience" className="max-w-6xl mx-auto px-6 py-14">
      <p className="font-mono text-xs text-accent tracking-widest uppercase mb-4">
        02 / Experience
      </p>
      <h2 className="font-display text-4xl font-bold text-white mb-16">
        Where I've worked.
      </h2>

      <div className="space-y-0">
        {experience.map((job, idx) => (
          <div
            key={job.company}
            className="grid md:grid-cols-[240px_1fr] gap-0 border-t border-border last:border-b"
          >
            {/* Left: metadata */}
            <div className="py-8 md:pr-8 flex flex-col justify-start">
              <p className="font-display font-semibold text-white text-base mb-1">{job.company}</p>
              <p className="font-mono text-xs text-accent mb-2">{job.role}</p>
              <p className="font-mono text-xs text-muted">{job.period}</p>
              <div className="mt-3">
                <span className="font-mono text-xs text-subtle border border-subtle px-2 py-0.5">
                  0{idx + 1}
                </span>
              </div>
            </div>

            {/* Right: highlights */}
            <div className="py-8 md:pl-8 md:border-l border-border">
              <ul className="space-y-3">
                {job.highlights.map((point, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <span className="text-accent font-mono text-xs mt-1 flex-shrink-0">→</span>
                    <span className="font-body text-gray-400 text-sm leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
