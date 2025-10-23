import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
// PERHATIAN: PATH RELATIF DAN EKSTENSI SUDAH DIPERBAIKI
import memory1 from '../assets/Kecil1.jpg';
import memory2 from '../assets/Kecil2.jpg';
import memory3 from '../assets/Kecil3.jpg';
import memory4 from '../assets/Kecil4.png'; // Ekstensi PNG
import memory5 from '../assets/Remaja1.jpg';
import memory6 from '../assets/Remaja2.jpg';  
import memory7 from '../assets/Remaja3.jpg'; 
import memory8 from '../assets/Remaja4.jpg'; 
import memory9 from '../assets/Kuliah1.jpg';
import memory10 from '../assets/Kuliah2.jpg';
import memory11 from '../assets/Kuliah3.jpg';
import memory12 from '../assets/Kuliah4.png';
import memory13 from '../assets/Kecil5.jpg';

// --- STRUKTUR DATA BERDASARKAN KATEGORI ---
const photoSections = [
    {
        title: '👶 Masa Bayi & Kanak-Kanak',
        slug: 'bayi',
        photos: [
            { id: 1, src: memory1, caption: 'Anak Kecil juga nih' },
            { id: 2, src: memory2, caption: 'Udah mulai Hobi Menggamabar belum?.' }, 
            { id: 3, src: memory3, caption: 'Senyum dikit boleh dong.' },
            { id: 4, src: memory4, caption: 'Bobo dulu digendong papah.' },
            { id: 13, src: memory13, caption: 'Pegang Papah & Mamah.' },
        ],
    },
    {
        title: '🎓 Masa Remaja & Sekolah',
        slug: 'remaja',
        photos: [
            { id: 5, src: memory5, caption: 'Eh ini pas umur berapa?' },
            { id: 6, src: memory6, caption: 'Halo anak SANMAR.' }, 
            { id: 7, src: memory7, caption: 'Mari Berkebun.' },
            { id: 8, src: memory8, caption: 'Sangat EMO' },
        ],
    },
    {
        title: '🌟 Masa Kuliah & Dewasa',
        slug: 'dewasa',
        photos: [
            { id: 9, src: memory9, caption: 'Wisuda Nih' },
            { id: 10, src: memory10, caption: 'Semangat Fresh Graduate' },
            { id: 11, src: memory11, caption: 'Bareng Anak Kecil' },
            { id: 12, src: memory12, caption: 'Abis Nemenin Adik Kecil.' },
        ],
    },
];

export const GallerySection = () => {
    // --- STATE LOGIC BARU ---
    const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
    const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0); 
    const [direction, setDirection] = useState(0);

    const activeSection = photoSections[currentSectionIndex];
    const activePhotos = activeSection.photos;
    const currentPhoto = activePhotos[currentPhotoIndex];
    
    const changeSection = (newIndex: number) => {
        setCurrentSectionIndex(newIndex);
        setCurrentPhotoIndex(0);
        setDirection(0); 
    }

    const nextPhoto = () => {
        setDirection(1);
        setCurrentPhotoIndex((prev) => (prev + 1) % activePhotos.length);
    };

    const prevPhoto = () => {
        setDirection(-1);
        setCurrentPhotoIndex((prev) => (prev - 1 + activePhotos.length) % activePhotos.length);
    };
    // --- AKHIR STATE LOGIC BARU ---

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

            {/* --- FLOATING BALLOONS --- */}
            {[...Array(5)].map((_, i) => (
                <motion.div
                    key={`gallery-balloon-${i}`}
                    className="absolute text-5xl opacity-80"
                    style={{
                        left: `${2 + i * 20}%`,
                        bottom: `${-50 - i * 10}%`,
                        zIndex: 0, 
                    }}
                    animate={{
                        y: [0, -1000],
                        opacity: [0, 1, 1, 0],
                        rotate: [0, 8, -8, 0]
                    }}
                    transition={{
                        duration: 18 + Math.random() * 7,
                        repeat: Infinity,
                        ease: "linear",
                        delay: Math.random() * 4,
                    }}
                >
                    {['🎈', '💖', '🎁', '✨'][i % 4]}
                </motion.div>
            ))}
            {/* --- AKHIR FLOATING BALLOONS --- */}
            
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

                {/* --- NAVIGASI KATEGORI --- */}
                <div className="flex justify-center flex-wrap gap-4 mb-10 p-2 bg-white/70 backdrop-blur-md rounded-xl shadow-lg max-w-4xl mx-auto">
                    {photoSections.map((section, index) => (
                        <motion.button
                            key={section.slug}
                            onClick={() => changeSection(index)}
                            className={`px-6 py-2 rounded-full font-bold transition-all text-sm md:text-base ${
                                index === currentSectionIndex
                                    ? 'bg-primary text-white shadow-md'
                                    : 'bg-transparent text-primary/80 hover:bg-primary/10'
                            }`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {section.title}
                        </motion.button>
                    ))}
                </div>
                {/* ------------------------- */}

                <div className="relative max-w-3xl mx-auto">
                    {/* Main photo display menggunakan AnimatePresence */}
                    <AnimatePresence initial={false} mode="wait">
                        <motion.div
                            key={`${currentSectionIndex}-${currentPhotoIndex}`}
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
                                src={currentPhoto.src}
                                alt={currentPhoto.caption}
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
                                <p className="text-white text-3xl font-sacramento text-center drop-shadow-lg">
                                    {currentPhoto.caption}
                                </p>
                            </motion.div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation buttons */}
                    <motion.button
                        onClick={prevPhoto}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-card/90 backdrop-blur-md text-primary p-5 rounded-full shadow-elegant hover:bg-card hover:scale-110 transition-all z-20"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        ❮
                    </motion.button>
                    <motion.button
                        onClick={nextPhoto}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-card/90 backdrop-blur-md text-primary p-5 rounded-full shadow-elegant hover:bg-card hover:scale-110 transition-all z-20"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        ❯
                    </motion.button>

                    {/* Thumbnails */}
                    <div className="flex justify-center gap-4 mt-8 overflow-x-auto p-2">
                        {activePhotos.map((photo, index) => (
                            <motion.button
                                key={photo.id}
                                onClick={() => setCurrentPhotoIndex(index)}
                                className={`flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden transition-all ${
                                    index === currentPhotoIndex ? 'ring-4 ring-primary scale-110' : 'opacity-50'
                                }`}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
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
