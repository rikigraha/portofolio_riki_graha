// Part 8 - src/components/Testimoni.tsx
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, Variants, useReducedMotion } from 'framer-motion';

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  avatar: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      '“Working with Edwin Anderson was a smooth experience from start to finish. He translated our design into clean, responsive code and even suggested improvements we hadn’t thought of. Highly recommended!”',
    name: 'Sarah Tan',
    role: 'Product Manager at Finovate',
    avatar: '/saran_tan.png',
  },
  {
    quote:
      '“Edwin delivered the project ahead of schedule with pixel-perfect fidelity. His communication and ability to translate complex designs into production-ready components made the process effortless.”',
    name: 'Michael Lee',
    role: 'Design Lead at Acme',
    avatar: '/saran_tan.png',
  },
  {
    quote:
      '“A dependable developer who thinks beyond the code — accessibility, performance, and UX are always top of mind. Would hire again.”',
    name: 'Ana Gomez',
    role: 'CTO at Weblify',
    avatar: '/saran_tan.png',
  },
];

const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const starsVariants: Variants = {
  hidden: { opacity: 0, y: -6, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.35, ease: 'easeOut' } },
};

const quoteVariants: Variants = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.38, ease: 'easeOut' } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.25 } },
};

const avatarVariants: Variants = {
  hidden: { opacity: 0, scale: 0.92, y: 6 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.36, ease: 'backOut' } },
};

const metaVariants: Variants = {
  hidden: { opacity: 0, y: 6 },
  show: { opacity: 1, y: 0, transition: { duration: 0.36 } },
};

const navBtnVariants: Variants = {
  hidden: { opacity: 0, y: 6 },
  show: { opacity: 1, y: 0, transition: { duration: 0.28 } },
  hover: { y: -3, scale: 1.03, transition: { duration: 0.12 } },
  tap: { scale: 0.96 },
};

export default function Testimoni() {
  const [index, setIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setIndex((i) => (i + 1) % testimonials.length);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="text-center mb-10">
          <motion.h2
            initial={reduceMotion ? undefined : { opacity: 0, y: 8 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl lg:text-4xl font-extrabold text-black"
          >
            What They Say About Working With Me
          </motion.h2>

          <motion.p
            initial={reduceMotion ? undefined : { opacity: 0, y: 6 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.06 }}
            className="text-sm text-gray-600 mt-2"
          >
            Real words from clients, teammates, and mentors I’ve collaborated with on various projects.
          </motion.p>
        </div>

        <div className="relative flex flex-col items-center">
          <div className="absolute -bottom-8 w-[80%] md:w-[70%] h-6 md:h-8 rounded-xl bg-pink-100/70 transform translate-y-8" />
          <div className="absolute -bottom-4 w-[88%] md:w-[78%] h-6 md:h-8 rounded-xl bg-pink-200/60 transform translate-y-4" />

          <div className="w-full flex justify-center">
            <div className="relative w-[90%] md:w-[78%]">
              {/* decorative layers */}
              <div className="absolute left-0 right-0 top-8 rounded-2xl bg-[#f3c4cc] h-28 md:h-36 shadow-sm opacity-60" />
              <div className="absolute left-0 right-0 top-4 rounded-2xl bg-[#eab7c1] h-36 md:h-44 shadow-sm opacity-80" />

              <div className="relative z-20">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={index}
                    initial={reduceMotion ? undefined : 'hidden'}
                    animate={reduceMotion ? undefined : 'show'}
                    exit={reduceMotion ? undefined : 'exit'}
                    variants={{
                      hidden: { opacity: 0, y: 8, scale: 0.995 },
                      show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.35 } },
                      exit: { opacity: 0, y: -8, scale: 0.99, transition: { duration: 0.25 } },
                    }}
                    className="rounded-2xl bg-[#b86879] text-white p-6 md:p-10 shadow-2xl"
                  >
                    {/* Stars */}
                    <motion.div
                      className="flex justify-center mb-4"
                      variants={containerVariants}
                      initial={reduceMotion ? undefined : 'hidden'}
                      animate={reduceMotion ? undefined : 'show'}
                    >
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <motion.svg
                            key={i}
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="text-yellow-300"
                            variants={starsVariants}
                            whileHover={reduceMotion ? undefined : { scale: 1.12, y: -2 }}
                          >
                            <path d="M12 .587l3.668 7.431L24 9.748l-6 5.847 1.417 8.266L12 19.763 4.583 23.86 6 15.593 0 9.748l8.332-1.73L12 .587z" />
                          </motion.svg>
                        ))}
                      </div>
                    </motion.div>

                    {/* Quote - animated with presence */}
                    <motion.blockquote
                      className="text-center text-sm md:text-base leading-relaxed mb-6"
                      variants={quoteVariants}
                      initial={reduceMotion ? undefined : 'hidden'}
                      animate={reduceMotion ? undefined : 'show'}
                      exit={reduceMotion ? undefined : 'exit'}
                    >
                      {testimonials[index].quote}
                    </motion.blockquote>

                    {/* Avatar + meta */}
                    <div className="flex flex-col items-center">
                      <motion.div
                        className="w-14 h-14 rounded-full overflow-hidden border-2 border-white/30 mb-3"
                        variants={avatarVariants}
                        initial={reduceMotion ? undefined : 'hidden'}
                        animate={reduceMotion ? undefined : 'show'}
                      >
                        <Image
                          src={testimonials[index].avatar}
                          alt={testimonials[index].name}
                          width={56}
                          height={56}
                          style={{ objectFit: 'cover' }}
                        />
                      </motion.div>

                      <motion.div
                        className="font-semibold"
                        variants={metaVariants}
                        initial={reduceMotion ? undefined : 'hidden'}
                        animate={reduceMotion ? undefined : 'show'}
                      >
                        {testimonials[index].name}
                      </motion.div>

                      <motion.div
                        className="text-xs text-white/80"
                        variants={metaVariants}
                        initial={reduceMotion ? undefined : 'hidden'}
                        animate={reduceMotion ? undefined : 'show'}
                      >
                        {testimonials[index].role}
                      </motion.div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                <div className="mt-4 w-full flex justify-center">
                  <div className="w-[70%] h-4 rounded-lg bg-[#e8b9c1] opacity-60" />
                </div>
              </div>
            </div>
          </div>

          {/* NAV BUTTONS */}
          <div className="mt-8 flex items-center gap-4">
            <motion.button
              onClick={prev}
              aria-label="previous testimonial"
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center bg-white text-gray-600 shadow-sm"
              initial={reduceMotion ? undefined : 'hidden'}
              animate={reduceMotion ? undefined : 'show'}
              variants={navBtnVariants}
              whileHover={reduceMotion ? undefined : 'hover'}
              whileTap={reduceMotion ? undefined : 'tap'}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform rotate-180" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 16.293a1 1 0 010-1.414L15.586 11H4a1 1 0 110-2h11.586l-3.293-3.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </motion.button>

            <motion.button
              onClick={next}
              aria-label="next testimonial"
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center bg-white text-gray-600 shadow-sm"
              initial={reduceMotion ? undefined : 'hidden'}
              animate={reduceMotion ? undefined : 'show'}
              variants={navBtnVariants}
              whileHover={reduceMotion ? undefined : 'hover'}
              whileTap={reduceMotion ? undefined : 'tap'}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 16.293a1 1 0 010-1.414L15.586 11H4a1 1 0 110-2h11.586l-3.293-3.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
