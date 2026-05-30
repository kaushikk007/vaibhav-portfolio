import { links } from '../../data/profile';

const footerLinks = [
  { label: 'LinkedIn', href: links.linkedin },
  { label: 'YouTube', href: links.youtube },
  { label: 'X / Twitter', href: links.twitter },
  { label: 'Dev.to', href: links.devto },
  { label: 'Medium', href: links.medium },
  { label: 'Credly', href: links.credly },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <p className="font-mono text-accent font-semibold text-sm tracking-widest uppercase mb-1">
              Vaibhav Kaushik
            </p>
            <p className="font-body text-muted text-sm">
              Cloud Architect · AWS Community Builder · London
            </p>
          </div>

          <div className="flex flex-wrap gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-sm text-muted hover:text-accent transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <p className="font-mono text-xs text-subtle">
            Built by a Cloud Architect, not a developer.
          </p>
        </div>
      </div>
    </footer>
  );
}
