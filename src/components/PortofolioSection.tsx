// src/components/PortfolioSection.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import { motion, Variants, useReducedMotion } from 'framer-motion';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, when: 'beforeChildren' },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 18, scale: 0.995 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
};

const imageVariants: Variants = {
  hidden: { scale: 0.97, opacity: 0 },
  show: { scale: 1, opacity: 1, transition: { duration: 0.6, ease: 'circOut' } },
};

const badgeVariants: Variants = {
  hidden: { y: 8, scale: 0.9, opacity: 0 },
  show: { y: 0, scale: 1, opacity: 1, transition: { duration: 0.45, ease: 'backOut' } },
};

const titleVariants: Variants = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

const buttonVariants: Variants = {
  hidden: { opacity: 0, y: 8, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45 } },
  hover: { y: -3, boxShadow: '0px 8px 22px rgba(0,0,0,0.12)', transition: { duration: 0.25 } },
};

const PortfolioSection: React.FC = () => {
  const reduceMotion = useReducedMotion();

  const portfolioCards = [
    { title: 'Portfolio 1', description: 'Web Development', image: '/portofolio_1.png' },
    { title: 'Portfolio 2', description: 'Web Development', image: '/portofolio_2.png' },
    { title: 'Portfolio 3', description: 'Web Development', image: '/portofolio_3.png' },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1440px] mx-auto px-8">
        {/* Header */}
        <div className="flex items-start justify-between mb-10">
          <div className="max-w-xl">
            <motion.h2
              initial={reduceMotion ? undefined : 'hidden'}
              whileInView={reduceMotion ? undefined : 'show'}
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                hidden: { opacity: 0, y: 8 },
                show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight"
            >
              Design to <span className="text-pink-500">Code Accuracy</span>
            </motion.h2>

            <motion.p
              initial={reduceMotion ? undefined : { opacity: 0, y: 6 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="mt-3 text-gray-600 text-sm md:text-base"
            >
              We translated design mockups into pixel-perfect, responsive components, ensuring a smooth user experience across all devices.
            </motion.p>
          </div>

          <motion.div
            initial={reduceMotion ? undefined : { opacity: 0, y: 6 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="hidden md:flex"
          >
            <button className="items-center gap-3 rounded-full border border-gray-200 px-5 py-3 text-sm text-gray-600 bg-white shadow-sm hover:shadow-md transition-shadow">
              <span>See All</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </motion.div>
        </div>

        {/* Cards */}
        <motion.div
          variants={reduceMotion ? undefined : containerVariants}
          initial={reduceMotion ? undefined : 'hidden'}
          whileInView={reduceMotion ? undefined : 'show'}
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {portfolioCards.map((card, i) => (
            <motion.article
              key={i}
              className="flex flex-col items-center"
              variants={reduceMotion ? undefined : cardVariants}
              initial={reduceMotion ? undefined : 'hidden'}
              whileInView={reduceMotion ? undefined : 'show'}
              viewport={{ once: true, amount: 0.25 }}
            >
              <div className="relative w-full max-w-[360px]">
                {/* Frame + shadow */}
                <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100">
                  {/* Aspect ratio wrapper */}
                  <motion.div
                    className="relative w-full aspect-4/3 bg-gray-50"
                    variants={reduceMotion ? undefined : imageVariants}
                    initial={reduceMotion ? undefined : 'hidden'}
                    whileInView={reduceMotion ? undefined : 'show'}
                    viewport={{ once: true, amount: 0.25 }}
                  >
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover"
                      sizes="(min-width:1024px) 360px, (min-width:640px) 50vw, 100vw"
                      priority={i === 0}
                    />
                  </motion.div>
                </div>

                {/* Badge */}
                <motion.div
                  className="absolute left-1/2 -translate-x-1/2 -bottom-5 w-[70%] md:w-[65%] lg:w-[60%]"
                  variants={reduceMotion ? undefined : badgeVariants}
                  initial={reduceMotion ? undefined : 'hidden'}
                  whileInView={reduceMotion ? undefined : 'show'}
                  viewport={{ once: true, amount: 0.25 }}
                >
                  <motion.div
                    whileHover={!reduceMotion ? { scale: 1.02 } : undefined}
                    className="bg-yellow-500 text-white text-xs font-semibold text-center py-2 rounded-full shadow-md"
                  >
                    Best Portfolio
                  </motion.div>
                </motion.div>
              </div>

              {/* Content */}
              <motion.div
                className="mt-12 w-full max-w-[360px] text-center"
                variants={reduceMotion ? undefined : titleVariants}
                initial={reduceMotion ? undefined : 'hidden'}
                whileInView={reduceMotion ? undefined : 'show'}
                viewport={{ once: true, amount: 0.25 }}
              >
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">{card.title}</h3>
                <p className="mt-3 text-sm text-gray-500">{card.description}</p>

                <motion.div
                  className="mt-6"
                  variants={reduceMotion ? undefined : buttonVariants}
                  initial={reduceMotion ? undefined : 'hidden'}
                  whileInView={reduceMotion ? undefined : 'show'}
                  viewport={{ once: true, amount: 0.25 }}
                >
                  <motion.button
                    whileHover={!reduceMotion ? 'hover' : undefined}
                    className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-gray-200 bg-white text-gray-400 shadow-sm"
                  >
                    <span className="text-sm">Web Development</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </motion.button>
                </motion.div>
              </motion.div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;
