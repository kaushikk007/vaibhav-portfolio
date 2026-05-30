import { links } from '../../data/profile';
import { Play, Link, FileText, BookOpen } from 'lucide-react';

const platforms = [
  {
    name: 'YouTube',
    handle: '@VKDevOps',
    description: 'AWS certification strategies, real-world cloud projects, and career guidance for cloud engineers.',
    stats: '38 videos · 400k+ views',
    href: links.youtube,
    icon: Play,
    color: 'text-red-400 border-red-400/20 bg-red-400/5 hover:border-red-400/50',
  },
  {
    name: 'LinkedIn',
    handle: 'vaibhav-kaushik-4824161a0',
    description: 'Cloud architecture insights, AWS governance, and real engineering perspectives. 10k+ engineers follow.',
    stats: '10,000+ followers',
    href: links.linkedin,
    icon: Link,
    color: 'text-blue-400 border-blue-400/20 bg-blue-400/5 hover:border-blue-400/50',
  },
  {
    name: 'Dev.to',
    handle: 'vaibhavoncloud',
    description: 'Deep dives on AWS architecture, multi-account governance, and infrastructure engineering.',
    stats: 'Technical articles',
    href: links.devto,
    icon: FileText,
    color: 'text-gray-300 border-gray-300/20 bg-gray-300/5 hover:border-gray-300/50',
  },
  {
    name: 'Medium',
    handle: 'vaibhavkaushik836',
    description: 'Long-form writing on cloud strategy, AWS certifications, and engineering career advice.',
    stats: 'Long-form articles',
    href: links.medium,
    icon: BookOpen,
    color: 'text-green-400 border-green-400/20 bg-green-400/5 hover:border-green-400/50',
  },
];

export default function Content() {
  return (
    <section id="content" className="bg-surface border-t border-border">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <p className="font-mono text-xs text-accent tracking-widest uppercase mb-4">
          05 / Content
        </p>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16">
          <h2 className="font-display text-4xl font-bold text-white">
            Where I teach.
          </h2>
          <p className="font-body text-muted text-sm max-w-xs">
            Helping cloud and DevOps engineers build real skills, crack certifications, and grow their careers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {platforms.map((p) => {
            const Icon = p.icon;
            return (
              <a
                key={p.name}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group border p-6 transition-all duration-200 ${p.color}`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <Icon size={20} />
                    <div>
                      <p className="font-display font-semibold text-white text-sm">{p.name}</p>
                      <p className="font-mono text-xs text-muted">@{p.handle}</p>
                    </div>
                  </div>
                  <span className="font-mono text-xs text-muted group-hover:translate-x-1 transition-transform">→</span>
                </div>
                <p className="font-body text-gray-400 text-sm leading-relaxed mb-4">{p.description}</p>
                <p className="font-mono text-xs text-muted">{p.stats}</p>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
