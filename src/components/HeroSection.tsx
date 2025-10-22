import { motion } from 'framer-motion';
// Asumsikan ini adalah gambar latar belakang di assets
import heroBg from '../assets/hero-bg.jpg'; 

export const HeroSection = () => {
    return (
        <section 
            id="hero" 
            className="relative min-h-screen flex items-center justify-center text-center p-4 overflow-hidden"
        >
            {/* Background Image/Overlay */}
            <div className="absolute inset-0 z-0">
                <img 
                    src={heroBg} 
                    alt="Birthday Background" 
                    className="w-full h-full object-cover opacity-70"
                />
                {/* Gradient overlay untuk kontras teks */}
                <div className="absolute inset-0 bg-primary/20 backdrop-brightness-90"></div>
            </div>

            <div className="relative z-10 max-w-4xl mx-auto">
                <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
                >
                    <motion.p
                        className="font-sacramento text-6xl text-white drop-shadow-lg mb-4"
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        Happy Birthday!
                    </motion.p>
                    <motion.h1
                        className="text-8xl md:text-9xl font-bold text-accent drop-shadow-xl mb-6"
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                    >
                        Kakak Tersayang 🦒
                    </motion.h1>
                    <motion.p
                        className="font-poppins text-xl md:text-2xl text-white/90 drop-shadow-md"
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                    >
                        Semoga hari ini penuh dengan kebahagiaan, tawa, dan semua kejutan yang indah!
                    </motion.p>
                </motion.div>
            </div>
        </section>
    );
};