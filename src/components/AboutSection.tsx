// Part 2 - src/components/AboutSection.tsx
'use client';

import { motion, useReducedMotion, Variants } from 'framer-motion';

const container: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.12,
      when: 'beforeChildren',
    },
  },
};

const itemFadeUp: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const emojiPop: Variants = {
  hidden: { scale: 0.6, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: { type: 'spring', stiffness: 400, damping: 28, mass: 0.6 },
  },
};

export default function AboutSection() {
  const reduce = useReducedMotion();

  // reduced motion
  if (reduce) {
    return (
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="container mx-auto">
          <p className="max-w-4xl mx-auto text-center text-lg md:text-xl font-medium text-gray-800 leading-relaxed">
            As frontend developers, we bring designs to life with clean, responsive code that blends creativity 🎨 with usability ✨.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 px-6 md:px-12 bg-white">
      <div className="container mx-auto">
        {/* Animated container */}
        <motion.div
          className="flex justify-center"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.45 }}
        >
          {/* Main paragraph */}
          <motion.p
            variants={itemFadeUp}
            className="max-w-4xl text-center text-lg md:text-xl font-medium text-gray-800 leading-relaxed"
          >
            As frontend developers, we bring designs to life with clean, responsive code that blends creativity{' '}
            {/* emoji with its own animated pop */}
            <motion.span
              aria-hidden="true"
              className="inline-block align-middle"
              variants={emojiPop}
            >
              🎨
            </motion.span>{' '}
            with usability{' '}
            <motion.span
              aria-hidden="true"
              className="inline-block align-middle"
              variants={emojiPop}
            >
              ✨
            </motion.span>
            .
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
