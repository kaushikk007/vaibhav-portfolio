import { profile } from '../../data/profile';
import Reveal from '../layout/Reveal';

export default function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-14">
      <div className="grid md:grid-cols-2 gap-16 items-start">
        {/* Left: Section label + heading */}
        <Reveal>
          <p className="font-mono text-xs text-accent tracking-widest uppercase mb-4">
            01 / About
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight">
            I build infrastructure
            <br />
            <span className="text-white/40">that doesn't break.</span>
          </h2>
        </Reveal>

        {/* Right: Content */}
        <div className="space-y-6">
          <Reveal delay={100}>
            <p className="font-body text-gray-300 leading-relaxed text-base">
              {profile.summary}
            </p>
          </Reveal>
          <Reveal delay={200}>
            <p className="font-body text-gray-400 leading-relaxed text-sm">
              Outside the day job, I'm an AWS Community Builder in the Dev Tools category, sharing cloud insights with 10,000+ engineers on LinkedIn. Currently exploring Agentic AI on AWS — Bedrock, AgentCore, and Strands.
            </p>
          </Reveal>

          {/* Key achievements */}
          <div className="grid grid-cols-3 gap-4 pt-4">
            {[
              { stat: profile.costStat + ' cost', label: 'reduction delivered' },
              { stat: profile.deploySpeedStat + ' faster', label: 'provisioning' },
              { stat: profile.uptimeStat, label: 'production uptime' },
            ].map((item, idx) => (
              <Reveal key={item.label} delay={250 + idx * 100}>
                <div className="border border-border p-4 h-full hover:border-accent/50 hover:bg-surface transition-colors duration-300">
                  <p className="font-mono text-accent font-semibold text-sm">{item.stat}</p>
                  <p className="font-body text-muted text-xs mt-1">{item.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
