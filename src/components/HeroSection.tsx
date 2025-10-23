import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import heroBg from '@/assets/hero-bg.jpg';

export const HeroSection = () => {
  const [confetti, setConfetti] = useState<Array<{ id: number; left: string; delay: number }>>([]);

  useEffect(() => {
    const confettiArray = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: Math.random() * 2,
    }));
    setConfetti(confettiArray);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-hero opacity-90" />
        <img 
          src={heroBg} 
          alt="Birthday celebration" 
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      {/* Confetti */}
      <div className="absolute inset-0 pointer-events-none">
        {confetti.map((item) => (
          <motion.div
            key={item.id}
            className="absolute w-2 h-2 rounded-full"
            style={{
              left: item.left,
              background: `hsl(${Math.random() * 360}, 70%, 70%)`,
            }}
            animate={{
              y: ['0vh', '100vh'],
              rotate: [0, 360],
              opacity: [1, 0],
            }}
            transition={{
              duration: 3,
              delay: item.delay,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        ))}
      </div>

      {/* Floating balloons and giraffes */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`balloon-${i}`}
          className="absolute text-6xl"
          style={{
            left: `${25 + i * 25}%`,
            bottom: '-10%',
          }}
          animate={{
            y: [-50, -150],
            x: [0, Math.sin(i) * 20],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
        >
          🎈
        </motion.div>
      ))}
      
      {/* Cute giraffes */}
      {[...Array(2)].map((_, i) => (
        <motion.div
          key={`giraffe-${i}`}
          className="absolute text-7xl"
          style={{
            left: i === 0 ? '10%' : '85%',
            bottom: '5%',
          }}
          animate={{
            rotate: [0, 5, 0, -5, 0],
            y: [0, -15, 0],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          🦒
        </motion.div>
      ))}

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-8xl">🦒</span>
        </motion.div>
        
        <motion.h1
          className="font-decorative text-7xl md:text-9xl text-primary mb-6 drop-shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Happy Birthday, Kak!
        </motion.h1>
        <motion.p
          className="text-2xl md:text-3xl text-foreground font-light max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Untuk kakak tersayang yang luar biasa ✨
        </motion.p>
        
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.button
            className="bg-primary text-primary-foreground px-10 py-5 rounded-full text-lg font-semibold shadow-elegant hover:shadow-soft transition-all backdrop-blur-sm"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Lihat Kenangan Kita 💝
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
