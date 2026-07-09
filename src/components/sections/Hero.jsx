import { useState, useEffect } from 'react';
import { profile, links } from '../../data/profile';
import { ArrowRight, MapPin, Download } from 'lucide-react';

const stats = [
  { end: 13, suffix: '×', label: 'AWS Certified' },
  { end: 5, suffix: '+', label: 'Years Experience' },
  { end: 50, suffix: '+', label: 'AWS Accounts Governed' },
  { end: 10, suffix: 'k+', label: 'Community Followers' },
];

function CountUp({ end, suffix, duration = 2000, delay = 700 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let raf;
    let startTime = null;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;

      if (elapsed < delay) {
        raf = requestAnimationFrame(animate);
        return;
      }

      const progress = Math.min((elapsed - delay) / duration, 1);
      // ease-in-out cubic: slow start, smooth middle, slow end
      const eased = progress < 0.5
        ? 4 * progress ** 3
        : 1 - (-2 * progress + 2) ** 3 / 2;

      setCount(Math.round(eased * end));
      if (progress < 1) raf = requestAnimationFrame(animate);
      else setCount(end);
    };

    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [end, duration, delay]);

  return <>{count}{suffix}</>;
}

function TypewriterTagline({ text }) {
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let timeout;
    if (typing) {
      if (displayed.length < text.length) {
        timeout = setTimeout(() => setDisplayed(text.slice(0, displayed.length + 1)), 55);
      } else {
        timeout = setTimeout(() => setTyping(false), 2500);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 25);
      } else {
        timeout = setTimeout(() => setTyping(true), 400);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, text]);

  return (
    <p className="font-mono text-muted text-sm md:text-base mt-6 mb-8 max-w-xl opacity-0 animate-fade-up animate-delay-200">
      <span className="text-accent">// </span>
      {displayed}
      <span className="text-accent animate-pulse">▋</span>
    </p>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(249,115,22,0.6) 1px, transparent 1px),
            linear-gradient(90deg, rgba(249,115,22,0.6) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Radial glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 pt-32 pb-14 w-full">
        <div className="flex flex-col md:flex-row md:items-center md:gap-16">

          {/* Left — text content */}
          <div className="flex-1">
            <h1 className="font-display text-5xl md:text-7xl font-bold text-white leading-tight mb-4 opacity-0 animate-fade-up animate-delay-100">
              Cloud{' '}
              <span className="text-accent">Architect.</span>
              <br />
              <span className="text-white/60">Infrastructure</span> Engineer.
            </h1>

            <TypewriterTagline text={profile.tagline} />

            <div className="flex items-center gap-1.5 text-muted text-sm font-body mb-10 opacity-0 animate-fade-up animate-delay-300">
              <MapPin size={14} className="text-accent" />
              {profile.location}
            </div>

            <div className="flex flex-wrap gap-4 mb-20 opacity-0 animate-fade-up animate-delay-400">
              <a
                href="#experience"
                className="inline-flex items-center gap-2 bg-accent text-bg font-mono font-semibold text-sm px-6 py-3 hover:bg-accent-muted transition-colors"
              >
                View My Work <ArrowRight size={16} />
              </a>
              <a
                href={links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-border text-muted font-mono text-sm px-6 py-3 hover:border-accent hover:text-white transition-colors"
              >
                LinkedIn Profile
              </a>
              <a
                href="/Vaibhav_Kaushik_CloudArchitect_CV .pdf"
                download
                className="inline-flex items-center gap-2 border border-border text-muted font-mono text-sm px-6 py-3 hover:border-accent hover:text-white transition-colors"
              >
                <Download size={14} />
                Download CV
              </a>
            </div>
          </div>

          {/* Right — photo */}
          <div className="flex-shrink-0 flex justify-center md:justify-end opacity-0 animate-fade-up animate-delay-200 mb-12 md:mb-0">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-full bg-accent/20 blur-2xl scale-110" />
              {/* Orange border ring */}
              <div className="absolute inset-0 rounded-full border-2 border-accent/40" />
              <img
                src="/IMG_7460.jpg"
                alt={profile.name}
                className="relative w-full h-full rounded-full object-cover object-top border-2 border-accent/20"
              />
            </div>
          </div>

        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border opacity-0 animate-fade-up animate-delay-500">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-bg px-6 py-5">
              <p className="font-display text-3xl font-bold text-accent">
                <CountUp end={stat.end} suffix={stat.suffix} />
              </p>
              <p className="font-body text-xs text-muted mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
