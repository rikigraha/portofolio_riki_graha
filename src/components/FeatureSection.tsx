// Part 3 - src/components/FeaturesSection.tsx
'use client';

import { motion, Variants, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const iconVariants: Variants = {
  hidden: { scale: 0.6, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: { type: 'spring', stiffness: 350, damping: 20, mass: 0.5 },
  },
  hover: { scale: 1.08, rotate: [0, 6, -4, 0], transition: { duration: 0.5 } },
};

export default function FeaturesSection() {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    // Simple static render
    return (
      <section className="py-10 px-6 md:px-12 bg-white min-h-[379px]">
        <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center gap-8">
          {[
            {
              img: '/icons/icon_framework.png',
              title: 'COMPONENT-BASED DEVELOPMENT',
              desc: 'Reusable, scalable code built with modern frameworks like React or Vue.',
            },
            {
              img: '/icons/icon_pixel.png',
              title: 'PIXEL-PERFECT UI IMPLEMENTATION',
              desc: 'Accurate translation of design specs into clean, maintainable code.',
            },
            {
              img: '/icons/icon_phone.png',
              title: 'RESPONSIVE & ACCESSIBLE DESIGN',
              desc: 'Interfaces that adapt seamlessly and work for everyone, everywhere.',
            },
          ].map((f, i) => (
            <div key={i} className="flex flex-col items-center text-center max-w-xs">
              <div className="w-12 h-12 mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                <Image src={f.img} alt={f.title} width={28} height={28} style={{ objectFit: 'contain' }} />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2 text-gray-900">{f.title}</h3>
              <p className="text-sm text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="py-10 px-6 md:px-12 bg-white min-h-[379px]">
      <motion.div
        className="container mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.35 }}
      >
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
          {/* Feature 1 */}
          <motion.article
            variants={itemVariants}
            whileHover={{ y: -6, scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 280, damping: 20 }}
            className="flex flex-col items-center text-center max-w-xs px-4 py-6 rounded-lg"
            aria-labelledby="feat-1-title"
            role="article"
          >
            <motion.div
              variants={iconVariants}
              whileHover="hover"
              className="w-12 h-12 mb-4 bg-gray-100 rounded-full flex items-center justify-center shadow-sm"
              aria-hidden
            >
              <Image
                src="/icons/icon_framework.png"
                alt="Component-Based Development"
                width={28}
                height={28}
                style={{ objectFit: 'contain' }}
              />
            </motion.div>

            <h3 id="feat-1-title" className="text-lg md:text-xl font-bold mb-2 text-gray-900">
              COMPONENT-BASED DEVELOPMENT
            </h3>
            <p className="text-sm text-gray-600">
              Reusable, scalable code built with modern frameworks like React or Vue.
            </p>
          </motion.article>

          {/* Feature 2 */}
          <motion.article
            variants={itemVariants}
            whileHover={{ y: -6, scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 280, damping: 20 }}
            className="flex flex-col items-center text-center max-w-xs px-4 py-6 rounded-lg"
            aria-labelledby="feat-2-title"
            role="article"
          >
            <motion.div
              variants={iconVariants}
              whileHover="hover"
              className="w-12 h-12 mb-4 bg-gray-100 rounded-full flex items-center justify-center shadow-sm"
              aria-hidden
            >
              <Image
                src="/icons/icon_pixel.png"
                alt="Pixel-Perfect UI Implementation"
                width={28}
                height={28}
                style={{ objectFit: 'contain' }}
              />
            </motion.div>

            <h3 id="feat-2-title" className="text-lg md:text-xl font-bold mb-2 text-gray-900">
              PIXEL-PERFECT UI IMPLEMENTATION
            </h3>
            <p className="text-sm text-gray-600">
              Accurate translation of design specs into clean, maintainable code.
            </p>
          </motion.article>

          {/* Feature 3 */}
          <motion.article
            variants={itemVariants}
            whileHover={{ y: -6, scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 280, damping: 20 }}
            className="flex flex-col items-center text-center max-w-xs px-4 py-6 rounded-lg"
            aria-labelledby="feat-3-title"
            role="article"
          >
            <motion.div
              variants={iconVariants}
              whileHover="hover"
              className="w-12 h-12 mb-4 bg-gray-100 rounded-full flex items-center justify-center shadow-sm"
              aria-hidden
            >
              <Image
                src="/icons/icon_phone.png"
                alt="Responsive & Accessible Design"
                width={28}
                height={28}
                style={{ objectFit: 'contain' }}
              />
            </motion.div>

            <h3 id="feat-3-title" className="text-lg md:text-xl font-bold mb-2 text-gray-900">
              RESPONSIVE & ACCESSIBLE DESIGN
            </h3>
            <p className="text-sm text-gray-600">
              Interfaces that adapt seamlessly and work for everyone, everywhere.
            </p>
          </motion.article>
        </div>
      </motion.div>
    </section>
  );
}
