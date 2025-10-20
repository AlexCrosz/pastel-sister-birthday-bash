import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
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
    <div className="relative min-h-screen bg-background">
      <CursorEffect />
      
      <AnimatePresence mode="wait">
        {!hasEntered ? (
          <WelcomeScreen key="welcome" onEnter={handleEnter} />
        ) : (
          <div key="main">
            <HeroSection />
            <GallerySection />
            <MessagesSection />
            <SurpriseSection />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;
