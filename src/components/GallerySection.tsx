import { motion } from 'framer-motion';
import { useState } from 'react';
import memory1 from '@/assets/memory-1.jpg';
import memory2 from '@/assets/memory-2.jpg';
import memory3 from '@/assets/memory-3.jpg';

const photos = [
  { id: 1, src: memory1, caption: 'Momen indah bersama' },
  { id: 2, src: memory2, caption: 'Perayaan spesial' },
  { id: 3, src: memory3, caption: 'Kenangan manis' },
];

export const GallerySection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextPhoto = () => {
    setCurrentIndex((prev) => (prev + 1) % photos.length);
  };

  const prevPhoto = () => {
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
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={photos[currentIndex].src}
              alt={photos[currentIndex].caption}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-8">
              <p className="text-white text-xl font-light text-center drop-shadow-lg">
                {photos[currentIndex].caption}
              </p>
            </div>
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
