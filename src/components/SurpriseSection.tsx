import { motion } from 'framer-motion';
import { useState } from 'react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

export const SurpriseSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-4 bg-card">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="font-decorative text-6xl md:text-7xl text-primary mb-8"
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
              className="relative bg-gradient-to-r from-primary via-secondary to-accent text-white px-12 py-6 rounded-full text-2xl font-semibold shadow-soft"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                boxShadow: [
                  '0 10px 40px -10px hsl(330 70% 65% / 0.4)',
                  '0 10px 40px -10px hsl(270 60% 75% / 0.4)',
                  '0 10px 40px -10px hsl(150 60% 70% / 0.4)',
                  '0 10px 40px -10px hsl(330 70% 65% / 0.4)',
                ],
              }}
              transition={{
                boxShadow: { duration: 3, repeat: Infinity },
              }}
              onClick={() => setIsPlaying(true)}
            >
              🎉 Play Surprise 🎉
            </motion.button>
          </DialogTrigger>
          <DialogContent className="max-w-3xl">
            <div className="text-center py-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-8xl mb-6">🎂🎉🎈</div>
                <h3 className="font-decorative text-5xl text-primary mb-4">
                  Selamat Ulang Tahun!
                </h3>
                <p className="text-xl text-foreground leading-relaxed mb-6">
                  Kakak adalah seseorang yang sangat berarti dalam hidup kami.
                  Terima kasih telah menjadi sosok yang inspiratif dan penuh kasih.
                  Semoga tahun ini membawa lebih banyak kebahagiaan, kesuksesan,
                  dan momen indah yang tak terlupakan!
                </p>
                <div className="bg-gradient-pastel rounded-2xl p-6 inline-block">
                  <p className="text-2xl font-semibold text-primary">
                    Kami mencintaimu! 💖
                  </p>
                </div>
              </motion.div>
            </div>
          </DialogContent>
        </Dialog>

        {/* Decorative elements */}
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
          <p className="text-muted-foreground italic text-lg">
            "Dibuat dengan penuh cinta untuk kakak tersayang"
          </p>
          <p className="text-primary font-decorative text-3xl mt-4">
            Happy Birthday! 💖
          </p>
        </motion.div>
      </div>
    </section>
  );
};
