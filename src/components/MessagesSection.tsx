import { motion } from 'framer-motion';

const messages = [
  {
    id: 1,
    from: 'Keluarga',
    message: 'Selamat ulang tahun untuk kakak terhebat! Semoga selalu bahagia dan sukses dalam segala hal. Kami sangat bangga denganmu!',
    emoji: '👨‍👩‍👧‍👦',
  },
  {
    id: 2,
    from: 'Sahabat',
    message: 'Happy birthday bestie! Terima kasih sudah selalu ada. Semoga tahun ini penuh dengan kebahagiaan dan pencapaian baru!',
    emoji: '👯‍♀️',
  },
  {
    id: 3,
    from: 'Adik',
    message: 'Selamat ulang tahun Kak! Kakak adalah inspirasi dan panutan terbaik. Love you so much! 💕',
    emoji: '💝',
  },
];

export const MessagesSection = () => {
  return (
    <section className="min-h-screen py-20 px-4 bg-gradient-pastel">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="font-decorative text-6xl md:text-7xl text-center text-primary mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Pesan Spesial
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {messages.map((msg, index) => (
            <motion.div
              key={msg.id}
              className="bg-card rounded-3xl p-8 shadow-card hover:shadow-soft transition-all"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 2 : -2 }}
            >
              <div className="text-6xl mb-4 text-center">{msg.emoji}</div>
              <h3 className="text-2xl font-semibold text-primary mb-3 text-center">
                {msg.from}
              </h3>
              <p className="text-foreground leading-relaxed text-center">
                {msg.message}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Birthday counter */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="bg-card/80 backdrop-blur-sm rounded-3xl p-10 inline-block shadow-soft">
            <p className="text-2xl text-muted-foreground mb-3">
              Sudah berapa tahun kakak yang luar biasa ini?
            </p>
            <motion.div
              className="text-7xl font-bold text-primary"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ✨ Sangat Berharga ✨
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
