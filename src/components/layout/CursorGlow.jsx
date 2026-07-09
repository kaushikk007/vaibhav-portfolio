import { useState, useEffect } from 'react';

export default function CursorGlow() {
  const [pos, setPos] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-50"
      style={{
        background: `radial-gradient(600px circle at ${pos.x}px ${pos.y}px, rgba(249,115,22,0.07), transparent 40%)`,
      }}
    />
  );
}
