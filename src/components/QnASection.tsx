// Part 9 - src/components/QnASection.tsx
'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion, Variants } from 'framer-motion';

type QA = {
  q: string;
  a: string;
};

const DATA: QA[] = [
  {
    q: 'What technologies do you work with?',
    a:
      'I mainly work with HTML, CSS, JavaScript, and frameworks like React, Next.js, and Vue. I also have experience using Tailwind CSS, TypeScript, and working with APIs.',
  },
  {
    q: 'Do you work on freelance or remote projects?',
    a:
      'Yes — I take freelance and remote projects. I prefer well-defined scope and milestones so I can deliver quality work on time. Contact me with your project brief and timeline.',
  },
  {
    q: 'Can you convert Figma or Sketch designs into code?',
    a:
      'Absolutely. I translate Figma / Sketch designs into responsive, component-driven code, keeping design fidelity, spacing, typography, and accessibility in mind.',
  },
  {
    q: 'Do you collaborate with backend developers or teams?',
    a:
      'Yes. I have experience integrating frontend with REST/GraphQL APIs and working alongside backend teams for authentication, data modelling, and deployment flows.',
  },
  {
    q: 'Are you available for full-time roles?',
    a:
      'Occasionally I consider full-time opportunities — reach out with details about the role, team size, and expectations and I will respond with my availability.',
  },
];

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.06 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 6 },
  show: { opacity: 1, y: 0, transition: { duration: 0.42, ease: 'easeOut' } },
};

const numberVariants: Variants = {
  hidden: { opacity: 0, x: -6 },
  show: { opacity: 1, x: 0, transition: { duration: 0.35 } },
};

const qVariants: Variants = {
  hidden: { opacity: 0, x: -4 },
  show: { opacity: 1, x: 0, transition: { duration: 0.42 } },
};

const btnVariants: Variants = {
  hidden: { opacity: 0, scale: 0.98 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.35 } },
  hover: { scale: 1.06, boxShadow: '0 6px 18px rgba(0,0,0,0.08)', transition: { duration: 0.15 } },
  tap: { scale: 0.98 },
};

const answerVariants: Variants = {
  hidden: { opacity: 0, height: 0 },
  show: { opacity: 1, height: 'auto', transition: { duration: 0.32, ease: 'easeOut' } },
  exit: { opacity: 0, height: 0, transition: { duration: 0.28 } },
};

export default function QnASection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // first item open by default
  const reduceMotion = useReducedMotion();

  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1100px] mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={reduceMotion ? undefined : 'hidden'}
          whileInView={reduceMotion ? undefined : 'show'}
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: { opacity: 0, y: 8 },
            show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-black inline-block border-b-2 border-transparent">
            Let’s Clear Things Up
          </h2>
          <p className="mt-3 text-sm text-gray-600 max-w-2xl mx-auto">
            I’ve answered a few questions that usually come up when working with a frontend developer like me.
          </p>
        </motion.div>

        {/* Q/A list container */}
        <motion.div
          variants={reduceMotion ? undefined : containerVariants}
          initial={reduceMotion ? undefined : 'hidden'}
          whileInView={reduceMotion ? undefined : 'show'}
          viewport={{ once: true, amount: 0.2 }}
          className="mt-8 border border-gray-200 rounded-md overflow-hidden"
        >
          {DATA.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <motion.div
                key={idx}
                layout
                variants={reduceMotion ? undefined : itemVariants}
                className="relative"
              >
                <div className="grid grid-cols-[48px_1fr_64px] gap-4 items-center px-6 md:px-8 py-5 md:py-6">
                  {/* Number */}
                  <motion.div
                    aria-hidden
                    variants={reduceMotion ? undefined : numberVariants}
                    className="text-sm text-gray-500 font-medium"
                  >
                    {String(idx + 1).padStart(2, '0')}
                  </motion.div>

                  {/* Question */}
                  <div>
                    <motion.button
                      onClick={() => setOpenIndex(isOpen ? null : idx)}
                      aria-expanded={isOpen}
                      className="w-full text-left flex items-center gap-4 focus:outline-none"
                      variants={reduceMotion ? undefined : qVariants}
                      whileTap={reduceMotion ? undefined : { scale: 0.995 }}
                      transition={{ duration: 0.18 }}
                    >
                      <h3 className="text-base md:text-lg font-semibold text-gray-800">
                        {item.q}
                      </h3>
                    </motion.button>
                  </div>

                  {/* +/- button */}
                  <div className="flex justify-center">
                    <motion.button
                      onClick={() => setOpenIndex(isOpen ? null : idx)}
                      aria-label={isOpen ? 'Collapse' : 'Expand'}
                      className={`w-9 h-9 md:w-10 md:h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-700 transition`}
                      variants={reduceMotion ? undefined : btnVariants}
                      whileHover={reduceMotion ? undefined : 'hover'}
                      whileTap={reduceMotion ? undefined : 'tap'}
                      initial={reduceMotion ? undefined : 'hidden'}
                      animate={reduceMotion ? undefined : 'show'}
                    >
                      {/* show minus when open, plus when closed */}
                      {isOpen ? (
                        <motion.span
                          initial={{ rotate: 0 }}
                          animate={{ rotate: 0 }}
                          className="text-lg leading-none"
                        >
                          −
                        </motion.span>
                      ) : (
                        <motion.span
                          initial={{ rotate: 0 }}
                          animate={{ rotate: 0 }}
                          className="text-lg leading-none"
                        >
                          +
                        </motion.span>
                      )}
                    </motion.button>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-gray-100" />

                {/* Answer (animated) */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="answer"
                      layout
                      initial={reduceMotion ? { opacity: 1, height: 'auto' } : 'hidden'}
                      animate={reduceMotion ? { opacity: 1, height: 'auto' } : 'show'}
                      exit={reduceMotion ? { opacity: 0, height: 0 } : 'exit'}
                      variants={reduceMotion ? undefined : answerVariants}
                      transition={{ duration: 0.28 }}
                      className="px-6 md:px-8 py-4 bg-white text-gray-600"
                    >
                      <p className="text-sm leading-relaxed">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
