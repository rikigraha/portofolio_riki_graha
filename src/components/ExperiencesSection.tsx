// Part 7 - src/components/ExperiencesSection.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import { motion, Variants, useReducedMotion } from 'framer-motion';

const headerVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

const subtextVariants: Variants = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.06 } },
};

const listContainer: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12, when: 'beforeChildren' } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

const logoVariants: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.45, ease: 'backOut' } },
  hover: { scale: 1.06, rotate: 0.5, transition: { duration: 0.2 } },
};

const roleVariants: Variants = {
  hidden: { opacity: 0, x: -6 },
  show: { opacity: 1, x: 0, transition: { duration: 0.45 } },
};

const descVariants: Variants = {
  hidden: { opacity: 0, x: 8 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const experiences = [
  {
    year: '2025 - Present',
    role: 'Frontend\nDeveloper',
    logo: '/icons/icon_airbnb.png',
    desc:
      'Built responsive web interfaces using modern frameworks like React.js, ensuring seamless integration with backend systems. Optimized performance, implemented accessible designs, and delivered clean, reusable code to enhance user experience and scalability.',
  },
  {
    year: '2025 - Present',
    role: 'Frontend\nDeveloper',
    logo: '/icons/icon_aistasker.png',
    desc:
      'Built responsive web interfaces using modern frameworks like React.js, ensuring seamless integration with backend systems. Optimized performance, implemented accessible designs, and delivered clean, reusable code to enhance user experience and scalability.',
  },
  {
    year: '2025 - Present',
    role: 'Frontend\nDeveloper',
    logo: '/icons/icon_slack.png',
    desc:
      'Built responsive web interfaces using modern frameworks like React.js, ensuring seamless integration with backend systems. Optimized performance, implemented accessible designs, and delivered clean, reusable code to enhance user experience and scalability.',
  },
];

export default function ExperiencesSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="bg-[#071018] text-white py-20">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start mb-8">
          <motion.div
            initial={reduceMotion ? undefined : 'hidden'}
            whileInView={reduceMotion ? undefined : 'show'}
            viewport={{ once: true, amount: 0.3 }}
            variants={reduceMotion ? undefined : headerVariants}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
              Experiences That
              <br />
              <span className="text-[#f2b007]">Shaped Me!</span>
            </h2>
          </motion.div>

          <motion.div
            className="col-span-2 lg:col-span-2 text-sm text-white/70 lg:pl-8"
            initial={reduceMotion ? undefined : 'hidden'}
            whileInView={reduceMotion ? undefined : 'show'}
            viewport={{ once: true, amount: 0.3 }}
            variants={reduceMotion ? undefined : subtextVariants}
          >
            <p>
              From startups to side projects, every step has been a chance to learn, build, and level up.
            </p>
          </motion.div>
        </div>

        {/* List with stagger */}
        <motion.div
          initial={reduceMotion ? undefined : 'hidden'}
          whileInView={reduceMotion ? undefined : 'show'}
          viewport={{ once: true, amount: 0.15 }}
          variants={reduceMotion ? undefined : listContainer}
          className="space-y-6"
        >
          {experiences.map((exp, idx) => (
            <motion.article
              key={idx}
              className="flex flex-col lg:flex-row items-start gap-6 pt-6 border-t border-white/5"
              variants={reduceMotion ? undefined : itemVariants}
            >
              {/* Left: year + role */}
              <motion.div
                className="w-full lg:w-1/4 text-left"
                variants={reduceMotion ? undefined : roleVariants}
              >
                <div className="text-xs text-white/60">{exp.year}</div>
                <div className="mt-3 text-sm font-semibold whitespace-pre-line">{exp.role}</div>
              </motion.div>

              {/* Center: logo box */}
              <motion.div
                className="w-full lg:w-1/4 flex justify-center lg:justify-start"
                variants={reduceMotion ? undefined : logoVariants}
                initial={reduceMotion ? undefined : 'hidden'}
                whileInView={reduceMotion ? undefined : 'show'}
                viewport={{ once: true, amount: 0.25 }}
                whileHover={!reduceMotion ? 'hover' : undefined}
                style={{ willChange: 'transform, opacity' }}
              >
                <motion.div
                  className="rounded-2xl border border-white/6 p-6 bg-transparent flex items-center justify-center w-[140px] h-20"
                  aria-hidden={false}
                >
                  <Image
                    src={exp.logo}
                    alt={`logo-${idx}`}
                    width={120}
                    height={48}
                    style={{ objectFit: 'contain' }}
                    priority={idx === 0} // first image priority
                  />
                </motion.div>
              </motion.div>

              {/* Right: description */}
              <motion.div
                className="w-full lg:w-1/2 text-sm text-white/70"
                variants={reduceMotion ? undefined : descVariants}
              >
                <p>{exp.desc}</p>
              </motion.div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
