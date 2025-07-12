'use client';

import { motion, Variants } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Download, Mail } from 'lucide-react';

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white dark:from-gray-950 dark:to-gray-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.1)_1px,transparent_0)] bg-[length:20px_20px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Greeting */}
          <motion.div variants={itemVariants} className="space-y-4">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-lg text-gray-600 dark:text-gray-300 font-medium"
            >
              Hello, I'm
            </motion.p>
            
            <motion.h1
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.8, type: 'spring' }}
              className="text-6xl md:text-8xl font-bold text-gray-900 dark:text-white"
            >
              David Newman
            </motion.h1>
          </motion.div>

          {/* Tagline */}
          <motion.div variants={itemVariants} className="space-y-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="text-2xl md:text-3xl text-gray-700 dark:text-gray-200 font-light max-w-3xl mx-auto leading-relaxed"
            >
              Full Stack Software Developer crafting{' '}
              <span className="text-blue-600 dark:text-blue-400 font-medium">impactful systems</span> with{' '}
              <span className="text-blue-600 dark:text-blue-400 font-medium">modern UI</span>, automation, and deployment strategies
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.6 }}
              className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            >
              B.S. in Computer Science from VCU • Richmond, VA • Specializing in React.js, Flask, Python, and PostgreSQL
            </motion.p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/projects"
                className="inline-flex items-center px-8 py-4 bg-blue-600 dark:bg-blue-700 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 dark:hover:bg-blue-800 transition-all duration-200 group"
              >
                View My Projects
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 font-semibold rounded-lg hover:border-gray-400 dark:hover:border-gray-400 hover:text-gray-900 dark:hover:text-white transition-all duration-200 group"
              >
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 