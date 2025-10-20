import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Gift, Sparkles } from 'lucide-react';

interface WelcomeScreenProps {
  onEnter: () => void;
}

export const WelcomeScreen = ({ onEnter }: WelcomeScreenProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-elegant"
    >
      {/* Animated Giraffes */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[10%] top-[20%] text-6xl opacity-50"
      >
        🦒
      </motion.div>
      
      <motion.div
        animate={{
          y: [0, -15, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
        className="absolute right-[10%] bottom-[20%] text-6xl opacity-50"
      >
        🦒
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="mb-8 inline-block"
        >
          <Gift className="w-24 h-24 text-primary drop-shadow-lg" />
        </motion.div>

        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="font-sacramento text-7xl md:text-8xl mb-4 text-primary drop-shadow-lg"
        >
          Ada Sesuatu Untukmu...
        </motion.h1>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="font-poppins text-xl md:text-2xl mb-12 text-foreground/80 flex items-center justify-center gap-2"
        >
          <Sparkles className="w-6 h-6" />
          Kejutan spesial menantimu
          <Sparkles className="w-6 h-6" />
        </motion.p>

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
        >
          <Button
            onClick={onEnter}
            size="lg"
            className="font-poppins text-lg px-12 py-6 rounded-full shadow-elegant hover:shadow-[0_20px_50px_-10px] hover:scale-105 transition-all duration-300 backdrop-blur-sm bg-white/90 text-primary hover:bg-white group"
          >
            <span className="mr-2">🎁</span>
            Buka Kejutan
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="ml-2"
            >
              →
            </motion.span>
          </Button>
        </motion.div>

        {/* Floating hearts */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.6,
            }}
            className="absolute text-3xl"
            style={{
              left: `${20 + i * 15}%`,
              bottom: '10%',
            }}
          >
            💝
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
