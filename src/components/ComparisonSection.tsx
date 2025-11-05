// Part 5 - src/components/ComparisonSection.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import { motion, Variants, useReducedMotion } from 'framer-motion';

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 6 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.08,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 12, scale: 0.995 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

const avatarVariants: Variants = {
  hidden: { opacity: 0, scale: 0.6, rotate: -6 },
  show: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { type: 'spring', stiffness: 260, damping: 18, mass: 0.6 },
  },
};

const titleVariants: Variants = {
  hidden: { opacity: 0, y: 6 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -8 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
};

const iconVariants: Variants = {
  hover: { scale: 1.08, rotate: [-6, 6, -2, 0], transition: { duration: 0.35 } },
  tap: { scale: 0.95 },
};

const ComparisonSection: React.FC = () => {
  const reduceMotion = useReducedMotion();

  const comparisonCards = [
    {
      title: 'With Me',
      items: [
        'React Expert',
        'Precise Website Implementation',
        'TypeScript Proficiency',
        'Clean, Maintainable Code',
        'Responsive Website Development',
        'Performance Optimization',
        'UI Design Proficiency (Figma)',
      ],
      bgColor: '#f2a33a',
      textColor: 'text-white',
      iconColor: 'text-green-600',
      image: '/code_with_me.png',
      avatarTop: -36,
      avatarSize: 84,
      ringWidth: 8,
    },
    {
      title: 'Another Talent',
      items: [
        'Basic React Knowledge',
        'Inconsistent Design Translation',
        'Little to No TypeScript Knowledge',
        'Unstructured Code',
        'Inconsistent Responsiveness',
        'Slow and Heavy Websites',
        'No Design Skills',
      ],
      bgColor: '#ffffff',
      textColor: 'text-gray-900',
      iconColor: 'text-red-500',
      image: '/code_another_talent.png',
      avatarTop: -34,
      avatarSize: 72,
      ringWidth: 6,
    },
  ];

  return (
    <section className="py-16 px-6 lg:px-12 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">More Than Just Code</h2>
          <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
            We care about design, performance, and user experience all in one.
          </p>
        </div>

        {/* container animated */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start"
          variants={reduceMotion ? undefined : containerVariants}
          initial={reduceMotion ? undefined : 'hidden'}
          whileInView={reduceMotion ? undefined : 'show'}
          viewport={{ once: true, amount: 0.18 }}
        >
          {comparisonCards.map((card, idx) => (
            <motion.div
              key={idx}
              className="relative overflow-visible rounded-2xl"
              style={{
                background: card.bgColor,
                borderRadius: 16,
                minHeight: 420,
                boxShadow: idx === 1 ? '0 6px 30px rgba(0,0,0,0.04)' : undefined,
              }}
              variants={reduceMotion ? undefined : cardVariants}
              initial={reduceMotion ? undefined : 'hidden'}
              whileInView={reduceMotion ? undefined : 'show'}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
            >
              {/* Avatar absolute (centered horizontally) */}
              <motion.div
                style={{
                  position: 'absolute',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  top: card.avatarTop,
                  zIndex: 30,
                }}
                variants={reduceMotion ? undefined : avatarVariants}
                initial={reduceMotion ? undefined : 'hidden'}
                whileInView={reduceMotion ? undefined : 'show'}
                viewport={{ once: true, amount: 0.5 }}
                whileHover={reduceMotion ? undefined : { y: -4 }}
              >
                <motion.div
                  whileHover="hover"
                  whileTap="tap"
                  style={{
                    width: card.avatarSize,
                    height: card.avatarSize,
                    borderRadius: 9999,
                    overflow: 'hidden',
                    border: `${card.ringWidth}px solid rgba(255,255,255,0.95)`,
                    background: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 8px 20px rgba(0,0,0,0.12)',
                  }}
                >
                  <Image
                    src={card.image}
                    alt={card.title}
                    width={card.avatarSize}
                    height={card.avatarSize}
                    style={{ objectFit: 'cover' }}
                    priority
                  />
                </motion.div>
              </motion.div>

              {/* Konten kartu */}
              <div className="pt-8 pb-10 px-8">
                {/* Title */}
                <motion.h3
                  className={`text-center text-lg font-semibold ${card.textColor} mb-8`}
                  style={{ marginTop: card.avatarSize / 2 }}
                  variants={reduceMotion ? undefined : titleVariants}
                >
                  {card.title}
                </motion.h3>

                {/* Item list */}
                <div className="mx-auto" style={{ maxWidth: 420 }}>
                  {card.items.map((it, i) => (
                    <motion.div
                      key={i}
                      className="flex items-start gap-4 py-3"
                      variants={reduceMotion ? undefined : itemVariants}
                      whileHover={reduceMotion ? undefined : { scale: 1.01 }}
                    >
                      <motion.div
                        className="mt-1 shrink-0"
                        variants={reduceMotion ? undefined : iconVariants}
                        style={{ translateZ: 0 }}
                      >
                        {idx === 0 ? (
                          <motion.svg
                            xmlns="http://www.w3.org/2000/svg"
                            className={`${card.iconColor} w-5 h-5`}
                            viewBox="0 0 24 24"
                            fill="none"
                            initial={false}
                          >
                            <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                          </motion.svg>
                        ) : (
                          <motion.svg
                            xmlns="http://www.w3.org/2000/svg"
                            className={`${card.iconColor} w-5 h-5`}
                            viewBox="0 0 24 24"
                            fill="none"
                            initial={false}
                          >
                            <path d="M6 18L18 6M6 6L18 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                          </motion.svg>
                        )}
                      </motion.div>

                      <motion.p
                        className={`${card.textColor} text-sm leading-relaxed`}
                        variants={reduceMotion ? undefined : itemVariants}
                      >
                        {it}
                      </motion.p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* subtle inset border for right white card */}
              {idx === 1 && (
                <div className="absolute inset-0 rounded-2xl pointer-events-none" style={{ boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.04)' }} />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ComparisonSection;
