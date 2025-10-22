import { motion } from 'framer-motion';

const messages = [
    {
        id: 1,
        from: 'Papah & Mamah',
        message: 'Tuk putri kami, Via... tetaplah jadi putri kami yang manis tapi kuat, lembut tapi tegar. Raih harapan bersama Kristus, nantikan janjiNya yang terbaik. Jangan lupa doa kami selalu untuk setiap langkahmu...  HBD',
        emoji: '👨‍👩‍👧‍👦',
    },
    {
        id: 2,
        from: 'Alex',
        message: 'Happy birthday Sis! Gimana rasanya umur 25? mulai relate sama lagu Takut Idgitaf belom? Kalau udah juga gk apa yang penting ttp semangat dan percaya sama waktu nya Tuhan. Semoga di usia 25 ini sedikit2 mimpi bisa ke cicil ya, semoga juga Tuhan kasih jodoh yang tepat eak. Segitu aja, sekali lagi Selamat Ulang Tahun',
        emoji: '🥳🤣',
    },
    {
        id: 3,
        from: 'Alle',
        message: 'Selamat Ulang Tahun Kakak, Semoga panjang umur sehat selalu Amin',
        emoji: '💝',
    },
];

export const MessagesSection = () => {
    return (
        <section className="relative min-h-screen py-20 px-4 bg-gradient-pastel overflow-hidden">
            {/* Decorative giraffes */}
            <motion.div
                className="absolute top-20 right-10 text-8xl opacity-20"
                animate={{ rotate: [0, 15, 0], x: [0, 20, 0] }}
                transition={{ duration: 7, repeat: Infinity }}
            >
                🦒
            </motion.div>
            <motion.div
                className="absolute bottom-32 left-5 text-7xl opacity-20"
                animate={{ rotate: [0, -12, 0], y: [0, -25, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
            >
                🦒
            </motion.div>

            {/* --- FLOATING BALLOONS --- */}
            {[...Array(7)].map((_, i) => (
                <motion.div
                    key={`message-balloon-${i}`}
                    className="absolute text-4xl opacity-70"
                    style={{
                        left: `${5 + i * 14}%`,
                        bottom: `${-50 - i * 5}%`,
                        zIndex: 0,
                    }}
                    animate={{
                        y: [0, -1200],
                        opacity: [0, 1, 1, 0],
                        rotate: [0, 10, -10, 0]
                    }}
                    transition={{
                        duration: 20 + Math.random() * 8,
                        repeat: Infinity,
                        ease: "linear",
                        delay: i * 1.5,
                    }}
                >
                    {['🎈', '🎊', '🎀'][i % 3]}
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
                        animate={{ rotate: [0, 10, 0, -10, 0] }}
                        transition={{ duration: 4, repeat: Infinity }}
                    >
                        🦒
                    </motion.div>
                    <h2 className="font-decorative text-6xl md:text-7xl text-primary drop-shadow-md">
                        Pesan Spesial
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {messages.map((msg, index) => (
                        <motion.div
                            key={msg.id}
                            className="bg-card/95 backdrop-blur-sm rounded-3xl p-8 shadow-elegant hover:shadow-soft transition-all ring-1 ring-primary/5"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 2 : -2, y: -8 }}
                        >
                            <div className="text-6xl mb-5 text-center">{msg.emoji}</div>
                            <h3 className="text-2xl font-semibold text-primary mb-4 text-center">
                                {msg.from}
                            </h3>
                            <p className="text-foreground leading-relaxed text-center text-base">
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
                    <div className="bg-card/90 backdrop-blur-md rounded-3xl p-12 inline-block shadow-elegant ring-1 ring-primary/10">
                        <motion.div
                            className="text-7xl mb-4"
                            animate={{ rotate: [0, 5, 0, -5, 0] }}
                            transition={{ duration: 3, repeat: Infinity }}
                        >
                            🦒
                        </motion.div>
                        <p className="text-2xl text-muted-foreground mb-4">
                            Sudah berapa tahun kakak yang luar biasa ini?
                        </p>
                        <motion.div
                            className="text-7xl font-bold text-primary font-decorative"
                            animate={{ scale: [1, 1.08, 1] }}
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