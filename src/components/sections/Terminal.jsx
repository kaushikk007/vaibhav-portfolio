import { useState, useEffect } from 'react';
import useInView from '../../hooks/useInView';

const lines = [
  { type: 'cmd',    text: 'whoami' },
  { type: 'out',    text: 'vaibhav-kaushik' },
  { type: 'spacer' },
  { type: 'cmd',    text: 'aws sts get-caller-identity' },
  { type: 'out',    text: '{' },
  { type: 'out',    text: '  "UserId":  "AIDAVK13AWSCERTS",' },
  { type: 'out',    text: '  "Account": "************7391",' },
  { type: 'out',    text: '  "Arn":     "arn:aws:iam::****:user/cloud-architect"' },
  { type: 'out',    text: '}' },
  { type: 'spacer' },
  { type: 'cmd',    text: 'echo $AVAILABILITY' },
  { type: 'out',    text: 'open to senior cloud roles · London', accent: true },
  { type: 'spacer' },
  { type: 'cursor' },
];

const DELAYS = { cmd: 700, out: 160, spacer: 80, cursor: 0 };

export default function Terminal() {
  const [ref, inView] = useInView({ threshold: 0.3 });
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    if (!inView || visibleCount >= lines.length) return;
    const delay = DELAYS[lines[visibleCount].type] ?? 200;
    const t = setTimeout(() => setVisibleCount((c) => c + 1), delay);
    return () => clearTimeout(t);
  }, [inView, visibleCount]);

  return (
    <section ref={ref} className="max-w-6xl mx-auto px-6 pt-4 pb-8">
      <div className="border border-border bg-surface overflow-hidden">
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-bg">
          <span className="w-3 h-3 rounded-full bg-red-500/70" />
          <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
          <span className="w-3 h-3 rounded-full bg-green-500/70" />
          <span className="ml-4 font-mono text-xs text-muted">bash — vaibhav@cloud-architect</span>
        </div>

        {/* Terminal body */}
        <div className="px-6 py-5 font-mono text-sm space-y-0.5 min-h-[320px]">
          {lines.slice(0, visibleCount).map((line, idx) => {
            if (line.type === 'spacer') return <div key={idx} className="h-2" />;
            if (line.type === 'cursor') {
              return (
                <div key={idx} className="flex items-center gap-2">
                  <span className="text-accent">$</span>
                  <span className="w-2 h-4 bg-accent animate-pulse inline-block" />
                </div>
              );
            }
            if (line.type === 'cmd') {
              return (
                <div key={idx} className="flex items-center gap-2">
                  <span className="text-accent select-none">$</span>
                  <span className="text-white">{line.text}</span>
                </div>
              );
            }
            return (
              <div key={idx} className={`pl-4 ${line.accent ? 'text-accent' : 'text-muted'}`}>
                {line.text}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
