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
    <section id="gallery" className="min-h-screen py-20 px-4 bg-card">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="font-decorative text-6xl md:text-7xl text-center text-primary mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Galeri Kenangan
        </motion.h2>

        <div className="relative max-w-3xl mx-auto">
          {/* Main photo display */}
          <motion.div
            key={currentIndex}
            className="relative aspect-square rounded-3xl overflow-hidden shadow-card"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={photos[currentIndex].src}
              alt={photos[currentIndex].caption}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
              <p className="text-white text-xl font-light text-center">
                {photos[currentIndex].caption}
              </p>
            </div>
          </motion.div>

          {/* Navigation buttons */}
          <button
            onClick={prevPhoto}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-card/80 backdrop-blur-sm text-primary p-4 rounded-full shadow-soft hover:bg-card transition-all"
          >
            ❮
          </button>
          <button
            onClick={nextPhoto}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-card/80 backdrop-blur-sm text-primary p-4 rounded-full shadow-soft hover:bg-card transition-all"
          >
            ❯
          </button>

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
