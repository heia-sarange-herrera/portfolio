'use client';

import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';

export default function Hero() {
    return (
        <motion.section
            className="min-h-screen flex flex-col items-center justify-center px-4 text-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
        >
            {/* Illustration */}
            <motion.img
                src="https://raw.githubusercontent.com/openpeeps/openpeeps/master/patterns/peep-56.svg"
                alt="Open Peeps Dev"
                className="w-40 sm:w-48 h-auto mb-6"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
            />

            {/* Name */}
            <motion.h1
                className="text-4xl sm:text-5xl font-bold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
            >
                Hi, I’m{" "}
                <span className="bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-300 bg-clip-text text-transparent">
                    Heia
                </span>
            </motion.h1>

            {/* Typing Tagline */}
            <motion.p
                className="mt-2 text-lg text-gray-600 min-h-[30px]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
            >
                <Typewriter
                    words={['Frontend Developer.', 'Minimalist Designer.', 'Web Enthusiast.']}
                    loop={true}
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                />
            </motion.p>
            
        </motion.section>
    );
}
