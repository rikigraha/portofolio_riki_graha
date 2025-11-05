// Part 4 - src/components/TechnologiesSection.tsx
'use client';

import React from 'react';
import { motion, Variants, useReducedMotion } from 'framer-motion';
import Image from 'next/image';

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      // use cubic-bezier style array for easing
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 18, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function TechnologiesSection(): React.ReactElement {
  const reduceMotion = useReducedMotion();

  const techCards = [
    {
      name: 'HTML',
      description: 'Crafting semantic, accessible HTML structures.',
      icon: '/icons/html.svg',
    },
    {
      name: 'CSS',
      description: 'Crafting semantic, accessible HTML structures.',
      icon: '/icons/css.svg',
    },
    {
      name: 'JavaScript',
      description: 'Crafting semantic, accessible HTML structures.',
      icon: '/icons/js.svg',
    },
    {
      name: 'React',
      description: 'Crafting semantic, accessible HTML structures.',
      icon: '/icons/react.svg',
    },
  ];

  return (
    <section className="py-10 px-12 bg-linear-to-br from-[#9E385E] to-[#F5E6F0] min-h-[660px]">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Code, Design, and Everything in Between</h2>
          <p className="text-sm md:text-base text-gray-200">
            These are the technologies that power my workflow and bring ideas to life.
          </p>
        </div>

        {/* Grid Tech Cards  */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={reduceMotion ? undefined : containerVariants}
          initial="hidden"
          whileInView={reduceMotion ? undefined : 'show'}
          viewport={{ once: true, amount: 0.2 }}
        >
          {techCards.map((card) => (
            <motion.article
              key={card.name}
              className="bg-white rounded-2xl p-6 text-center flex flex-col items-center justify-center space-y-4 shadow-sm"
              variants={reduceMotion ? undefined : cardVariant}
              initial="hidden"
              whileInView={reduceMotion ? undefined : 'show'}
              viewport={{ once: true, amount: 0.25 }}
              role="article"
              aria-label={`${card.name} technology card`}
            >
              <div className="w-16 h-16 mb-4 flex items-center justify-center">
                <Image
                  src={card.icon}
                  alt={card.name}
                  width={48}
                  height={48}
                  style={{ objectFit: 'contain' }}
                />
              </div>

              <h3 className="text-xl font-bold text-gray-900">{card.name}</h3>
              <p className="text-xs text-gray-600">{card.description}</p>
            </motion.article>
          ))}
        </motion.div>

        {/* Tombol navigasi */}
        <div className="flex justify-center mt-8 space-x-4">
          <button
            aria-label="previous"
            className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            aria-label="next"
            className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
