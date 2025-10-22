import { motion } from 'framer-motion';
import { useState } from 'react';
import memory1 from '@/assets/memory-1.jpg';
import memory2 from '@/assets/memory-2.jpg';
import memory3 from '@/assets/memory-3.jpg';

const photos = [
  { id: 1, src: memory1, caption: '👶 Kelahiran - Awal Perjalanan' },
  { id: 2, src: memory2, caption: '🎓 Masa Remaja - Berkembang' },
  { id: 3, src: memory3, caption: '🌟 Dewasa - Bersinar' },
];

export const GallerySection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextPhoto = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % photos.length);
  };

  const prevPhoto = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  return (
    <section id="gallery" className="relative min-h-screen py-20 px-4 bg-gradient-elegant overflow-hidden">
      {/* Giraffe decorations */}
      <motion.div
        className="absolute top-10 left-5 text-6xl opacity-30"
        animate={{ rotate: [0, 10, 0], y: [0, -20, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        🦒
      </motion.div>
      <motion.div
        className="absolute bottom-20 right-10 text-7xl opacity-30"
        animate={{ rotate: [0, -10, 0], y: [0, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        🦒
      </motion.div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="text-6xl mb-4"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            🦒
          </motion.div>
          <h2 className="font-decorative text-6xl md:text-7xl text-primary drop-shadow-md">
            Galeri Kenangan
          </h2>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          {/* Main photo display */}
          <motion.div
            key={currentIndex}
            className="relative aspect-square rounded-3xl overflow-hidden shadow-elegant ring-2 ring-primary/10"
            initial={{ 
              opacity: 0, 
              scale: 0.8,
              x: direction > 0 ? 300 : -300,
              rotateY: direction > 0 ? 45 : -45,
              filter: 'blur(10px)'
            }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              x: 0,
              rotateY: 0,
              filter: 'blur(0px)'
            }}
            exit={{ 
              opacity: 0, 
              scale: 0.8,
              x: direction > 0 ? -300 : 300,
              rotateY: direction > 0 ? -45 : 45,
              filter: 'blur(10px)'
            }}
            transition={{ 
              duration: 0.8,
              ease: [0.43, 0.13, 0.23, 0.96]
            }}
            style={{ perspective: 1200 }}
          >
            <motion.img
              src={photos[currentIndex].src}
              alt={photos[currentIndex].caption}
              className="w-full h-full object-cover"
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8 }}
            />
            <motion.div 
              className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-8"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <p className="text-white text-xl font-light text-center drop-shadow-lg">
                {photos[currentIndex].caption}
              </p>
            </motion.div>
          </motion.div>

          {/* Navigation buttons */}
          <motion.button
            onClick={prevPhoto}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-card/90 backdrop-blur-md text-primary p-5 rounded-full shadow-elegant hover:bg-card hover:scale-110 transition-all"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            ❮
          </motion.button>
          <motion.button
            onClick={nextPhoto}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-card/90 backdrop-blur-md text-primary p-5 rounded-full shadow-elegant hover:bg-card hover:scale-110 transition-all"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            ❯
          </motion.button>

          {/* Thumbnails */}
          <div className="flex justify-center gap-4 mt-8">
            {photos.map((photo, index) => (
              <motion.button
                key={photo.id}
                onClick={() => setCurrentIndex(index)}
                className={`w-20 h-20 rounded-xl overflow-hidden transition-all ${
                  index === currentIndex ? 'ring-4 ring-primary scale-110' : 'opacity-50'
                }`}
                whileHover={{ scale: 1.1 }}
              >
                <img
                  src={photo.src}
                  alt={photo.caption}
                  className="w-full h-full object-cover"
                />
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
