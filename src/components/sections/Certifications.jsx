import { useState } from 'react';
import { certifications, links } from '../../data/profile';
import { ExternalLink } from 'lucide-react';
import Reveal from '../layout/Reveal';
import useTilt from '../../hooks/useTilt';

const tierConfig = {
  pro:          { label: 'Professional',  color: 'border-orange-400/30 bg-orange-400/5',  dot: 'bg-orange-400',  text: 'text-orange-300' },
  specialty:    { label: 'Specialty',     color: 'border-purple-400/30 bg-purple-400/5',  dot: 'bg-purple-400',  text: 'text-purple-300' },
  associate:    { label: 'Associate',     color: 'border-blue-400/30 bg-blue-400/5',      dot: 'bg-blue-400',    text: 'text-blue-300'   },
  foundational: { label: 'Foundational',  color: 'border-green-400/30 bg-green-400/5',    dot: 'bg-green-400',   text: 'text-green-300'  },
  gcp:          { label: 'Google Cloud',  color: 'border-cyan-400/30 bg-cyan-400/5',      dot: 'bg-cyan-400',    text: 'text-cyan-300'   },
  microsoft:    { label: 'Microsoft',     color: 'border-sky-400/30 bg-sky-400/5',        dot: 'bg-sky-400',     text: 'text-sky-300'    },
};

const tierOrder = ['pro', 'specialty', 'associate', 'foundational', 'gcp', 'microsoft'];

function BadgeCard({ cert }) {
  const [imgFailed, setImgFailed] = useState(false);
  const tilt = useTilt(8);
  const tier = tierConfig[cert.tier];

  return (
    <a
      ref={tilt.ref}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
      href={links.credly}
      target="_blank"
      rel="noopener noreferrer"
      className={`group flex flex-col items-center gap-4 p-5 border rounded-lg ${tier.color} hover:border-accent/50 hover:bg-surface hover:shadow-[0_0_25px_-8px_rgba(249,115,22,0.35)] transition-all duration-200 will-change-transform`}
    >
      {/* Badge image */}
      <div className="w-24 h-24 flex items-center justify-center flex-shrink-0">
        {cert.badge && !imgFailed ? (
          <img
            src={cert.badge}
            alt={`AWS ${cert.name} ${cert.level}`}
            className="w-full h-full object-contain drop-shadow-lg group-hover:scale-105 transition-transform duration-200"
            onError={() => setImgFailed(true)}
          />
        ) : (
          <div className={`w-20 h-20 rounded-full border-2 ${tier.color} flex items-center justify-center`}>
            <span className={`font-mono text-xs font-bold ${tier.text}`}>
              {cert.name.split(' ').map((w) => w[0]).join('').slice(0, 3)}
            </span>
          </div>
        )}
      </div>

      {/* Name + level */}
      <div className="text-center">
        <p className="font-display text-sm font-semibold text-white group-hover:text-accent transition-colors leading-snug">
          {cert.tier === 'gcp' ? `GCP ${cert.name}`
            : cert.tier === 'microsoft' ? cert.name
            : `AWS ${cert.name}`}
        </p>
        <span className={`font-mono text-xs mt-1 inline-block ${tier.text}`}>
          {cert.level}
        </span>
      </div>
    </a>
  );
}

export default function Certifications() {
  const grouped = tierOrder
    .map((tier) => ({
      tier,
      certs: certifications.filter((c) => c.tier === tier),
    }))
    .filter((g) => g.certs.length > 0);

  return (
    <section id="certifications" className="max-w-6xl mx-auto px-6 py-24">
      <Reveal>
        <p className="font-mono text-xs text-accent tracking-widest uppercase mb-4">
          04 / Certifications
        </p>
        <div className="flex items-end justify-between mb-12">
          <h2 className="font-display text-4xl font-bold text-white">
            17 Cloud Certifications.
          </h2>
          <a
            href={links.credly}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-1.5 font-mono text-xs text-muted hover:text-accent transition-colors"
          >
            Verify on Credly <ExternalLink size={12} />
          </a>
        </div>
      </Reveal>

      <div className="space-y-12">
        {/* AWS tiers — full width */}
        {grouped
          .filter(({ tier }) => !['gcp', 'microsoft'].includes(tier))
          .map(({ tier, certs }) => {
            const cfg = tierConfig[tier];
            return (
              <Reveal key={tier}>
                <div className="flex items-center gap-3 mb-5">
                  <span className={`w-2 h-2 rounded-full ${cfg.dot}`} />
                  <h3 className={`font-mono text-sm font-semibold ${cfg.text}`}>{cfg.label}</h3>
                  <span className="font-mono text-xs text-muted">{certs.length} of {certs.length}</span>
                  <div className="flex-1 h-px bg-border" />
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3">
                  {certs.map((cert, idx) => (
                    <Reveal key={idx} variant="scale" delay={idx * 40}>
                      <BadgeCard cert={cert} />
                    </Reveal>
                  ))}
                </div>
              </Reveal>
            );
          })}

        {/* GCP + Microsoft side by side */}
        {['gcp', 'microsoft'].some((t) => grouped.find((g) => g.tier === t)) && (
          <div className="grid md:grid-cols-2 gap-8">
            {['gcp', 'microsoft']
              .map((tier) => grouped.find((g) => g.tier === tier))
              .filter(Boolean)
              .map(({ tier, certs }, groupIdx) => {
                const cfg = tierConfig[tier];
                return (
                  <Reveal key={tier} delay={groupIdx * 100}>
                    <div className="flex items-center gap-3 mb-5">
                      <span className={`w-2 h-2 rounded-full ${cfg.dot}`} />
                      <h3 className={`font-mono text-sm font-semibold ${cfg.text}`}>{cfg.label}</h3>
                      <span className="font-mono text-xs text-muted">{certs.length} of {certs.length}</span>
                      <div className="flex-1 h-px bg-border" />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      {certs.map((cert, idx) => (
                        <Reveal key={idx} variant="scale" delay={idx * 40}>
                          <BadgeCard cert={cert} />
                        </Reveal>
                      ))}
                    </div>
                  </Reveal>
                );
              })}
          </div>
        )}
      </div>

      <div className="mt-10 md:hidden text-center">
        <a
          href={links.credly}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 font-mono text-sm text-muted hover:text-accent transition-colors"
        >
          Verify on Credly <ExternalLink size={14} />
        </a>
      </div>
    </section>
  );
}
