import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CursorEffect } from '@/components/CursorEffect';
import { WelcomeScreen } from '@/components/WelcomeScreen';
import { HeroSection } from '@/components/HeroSection';
import { GallerySection } from '@/components/GallerySection';
import { MessagesSection } from '@/components/MessagesSection';
import { SurpriseSection } from '@/components/SurpriseSection';
import { useBackgroundMusic } from '@/hooks/useBackgroundMusic';

const Index = () => {
  const [hasEntered, setHasEntered] = useState(false);
  const { play } = useBackgroundMusic();

  const handleEnter = () => {
    setHasEntered(true);
    play(); // Start music when user enters
  };

  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      <CursorEffect />
      
      <AnimatePresence mode="wait">
        {!hasEntered ? (
          <WelcomeScreen key="welcome" onEnter={handleEnter} />
        ) : (
          <motion.div 
            key="main"
            initial={{ 
              opacity: 0,
              scale: 0.8,
              rotateX: -15,
            }}
            animate={{ 
              opacity: 1,
              scale: 1,
              rotateX: 0,
            }}
            transition={{
              duration: 1.2,
              ease: [0.43, 0.13, 0.23, 0.96],
            }}
            style={{ perspective: 1200 }}
          >
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <HeroSection />
            </motion.div>
            
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <GallerySection />
            </motion.div>
            
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <MessagesSection />
            </motion.div>
            
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              <SurpriseSection />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;
