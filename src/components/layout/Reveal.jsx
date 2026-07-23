import useInView from '../../hooks/useInView';

const hiddenState = {
  up: 'opacity-0 translate-y-8',
  scale: 'opacity-0 scale-75',
  left: 'opacity-0 -translate-x-10',
  right: 'opacity-0 translate-x-10',
};

export default function Reveal({ children, delay = 0, className = '', variant = 'up' }) {
  const [ref, inView] = useInView();

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out motion-reduce:transition-none ${
        inView ? 'opacity-100 translate-y-0 translate-x-0 scale-100' : hiddenState[variant]
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
