import { motion } from 'framer-motion';
import { useState } from 'react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

export const SurpriseSection = () => {
    // State isPlaying ini tidak memengaruhi audio global, hanya sebagai indikator visual
    const [isPlaying, setIsPlaying] = useState(false); 

    return (
        <section className="relative min-h-screen flex items-center justify-center py-20 px-4 bg-gradient-elegant overflow-hidden">
            {/* Dancing giraffes */}
            <motion.div
                className="absolute top-10 left-10 text-9xl opacity-25"
                animate={{ 
                    rotate: [0, 8, 0, -8, 0],
                    y: [0, -30, 0],
                    x: [0, 15, 0]
                }}
                transition={{ duration: 5, repeat: Infinity }}
            >
                🦒
            </motion.div>
            <motion.div
                className="absolute bottom-10 right-10 text-8xl opacity-25"
                animate={{ 
                    rotate: [0, -10, 0, 10, 0],
                    y: [0, -25, 0],
                    x: [0, -15, 0]
                }}
                transition={{ duration: 6, repeat: Infinity }}
            >
                🦒
            </motion.div>

            {/* --- FLOATING BALLOONS --- */}
            {[...Array(8)].map((_, i) => (
                <motion.div
                    key={`surprise-balloon-${i}`}
                    className="absolute text-5xl opacity-80"
                    style={{
                        left: `${5 + i * 12}%`,
                        bottom: `${-30 - i * 7}%`, 
                        zIndex: 0,
                    }}
                    animate={{
                        y: [0, -800],
                        opacity: [0, 1, 1, 0],
                        rotate: [0, 7, -7, 0]
                    }}
                    transition={{
                        duration: 17 + Math.random() * 6, 
                        repeat: Infinity,
                        ease: "linear",
                        delay: Math.random() * 3,
                    }}
                >
                    {['🎈', '🎉', '🎁', '🎂'][i % 4]}
                </motion.div>
            ))}
            {/* --- AKHIR FLOATING BALLOONS --- */}
            
            <div className="max-w-4xl mx-auto text-center relative z-10">
                <motion.div
                    className="text-7xl mb-6"
                    animate={{ scale: [1, 1.15, 1], rotate: [0, 10, 0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                >
                    🦒
                </motion.div>
                
                <motion.h2
                    className="font-decorative text-6xl md:text-7xl text-primary mb-8 drop-shadow-lg"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    Ada Kejutan Untukmu!
                </motion.h2>

                <motion.p
                    className="text-2xl text-muted-foreground mb-12"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    Klik tombol di bawah untuk melihat kejutan spesial 🎁
                </motion.p>

                <Dialog>
                    <DialogTrigger asChild>
                        <motion.button
                            className="relative bg-gradient-to-r from-primary via-secondary to-accent text-white px-14 py-7 rounded-full text-2xl font-semibold shadow-elegant backdrop-blur-sm"
                            whileHover={{ scale: 1.1, y: -5 }}
                            whileTap={{ scale: 0.95 }}
                            animate={{
                                boxShadow: [
                                    '0 15px 50px -15px hsl(340 75% 68% / 0.45)',
                                    '0 15px 50px -15px hsl(280 65% 78% / 0.45)',
                                    '0 15px 50px -15px hsl(160 55% 72% / 0.45)',
                                    '0 15px 50px -15px hsl(340 75% 68% / 0.45)',
                                ],
                            }}
                            transition={{
                                boxShadow: { duration: 3, repeat: Infinity },
                            }}
                            onClick={() => setIsPlaying(true)}
                        >
                            🦒 Play Surprise 🎉
                        </motion.button>
                    </DialogTrigger>
                    <DialogContent className="max-w-3xl bg-gradient-elegant">
                        <div className="text-center py-10">
                            <motion.div
                                initial={{ scale: 0, rotate: -180 }}
                                animate={{ scale: 1, rotate: 0 }}
                                transition={{ duration: 0.6, type: "spring" }}
                            >
                                <motion.div 
                                    className="text-8xl mb-6"
                                    animate={{ rotate: [0, 10, 0, -10, 0] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                >
                                    🎂🦒🎉
                                </motion.div>
                                <h3 className="font-decorative text-5xl text-primary mb-6 drop-shadow-md">
                                    Selamat Ulang Tahun!
                                </h3>
                                <p className="text-xl text-foreground leading-relaxed mb-8 px-4">
                                    Kakak adalah seseorang yang sangat berarti dalam hidup kami.
                                    Terima kasih telah menjadi sosok yang inspiratif dan penuh kasih.
                                    Semoga tahun ini membawa lebih banyak kebahagiaan, kesuksesan,
                                    dan momen indah yang tak terlupakan!
                                </p>
                                <div className="bg-card/90 backdrop-blur-md rounded-2xl p-8 inline-block shadow-elegant">
                                    <motion.div
                                        animate={{ scale: [1, 1.05, 1] }}
                                        transition={{ duration: 1.5, repeat: Infinity }}
                                    >
                                        <p className="text-2xl font-semibold text-primary">
                                            Kami mencintaimu! 💖🦒
                                        </p>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </div>
                    </DialogContent>
                </Dialog>

                {/* Decorative elements (Confetti/Sparkles) */}
                <div className="relative mt-20">
                    {[...Array(10)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute text-4xl"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                            }}
                            animate={{
                                y: [0, -20, 0],
                                rotate: [0, 360],
                            }}
                            transition={{
                                duration: 3 + Math.random() * 2,
                                repeat: Infinity,
                                delay: Math.random() * 2,
                            }}
                        >
                            {['🎈', '🎉', '🎊', '✨', '💝'][Math.floor(Math.random() * 5)]}
                        </motion.div>
                    ))}
                </div>

                {/* Footer note */}
                <motion.div
                    className="mt-32 text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <motion.div
                        className="text-6xl mb-4"
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        🦒
                    </motion.div>
                    <p className="text-muted-foreground italic text-lg mb-3">
                        "Dibuat dengan penuh cinta untuk kakak tersayang"
                    </p>
                    <p className="text-primary font-decorative text-3xl">
                        Happy Birthday! 💖🦒
                    </p>
                </motion.div>
            </div>
        </section>
    );
};