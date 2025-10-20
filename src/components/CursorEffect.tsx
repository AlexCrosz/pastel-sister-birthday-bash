import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Particle {
  id: number;
  x: number;
  y: number;
}

export const CursorEffect = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    let particleId = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const newParticle: Particle = {
        id: particleId++,
        x: e.clientX,
        y: e.clientY,
      };

      setParticles((prev) => [...prev, newParticle]);

      setTimeout(() => {
        setParticles((prev) => prev.filter((p) => p.id !== newParticle.id));
      }, 1000);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-50">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute text-xl"
          initial={{ opacity: 1, scale: 0, x: particle.x, y: particle.y }}
          animate={{
            opacity: 0,
            scale: 1,
            x: particle.x + (Math.random() - 0.5) * 50,
            y: particle.y - 50,
          }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          💖
        </motion.div>
      ))}
    </div>
  );
};
