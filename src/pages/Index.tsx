import { CursorEffect } from '@/components/CursorEffect';
import { HeroSection } from '@/components/HeroSection';
import { GallerySection } from '@/components/GallerySection';
import { MessagesSection } from '@/components/MessagesSection';
import { SurpriseSection } from '@/components/SurpriseSection';

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background">
      <CursorEffect />
      <HeroSection />
      <GallerySection />
      <MessagesSection />
      <SurpriseSection />
    </div>
  );
};

export default Index;
