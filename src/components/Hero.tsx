// Part 1 - src/components/Hero.tsx
'use client';

import React from 'react';
import { motion, Variants, useReducedMotion } from 'framer-motion';
import Image from 'next/image';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, ease: 'easeOut' },
  },
};
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};
const iconItem: Variants = {
  hidden: { opacity: 0, x: -12, scale: 0.95 },
  show: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.45 } },
  hover: { scale: 1.08 },
};
const scaleHover = { scale: 1.03, transition: { duration: 0.25 } };

const techIcons = [
  { src: '/icons/js.svg', alt: 'JavaScript' },
  { src: '/icons/css.svg', alt: 'CSS' },
  { src: '/icons/html.svg', alt: 'HTML' },
  { src: '/icons/react.svg', alt: 'React' },
];

const Hero: React.FC = () => {
  const reduce = useReducedMotion();

  return (
    <section className="relative min-h-svh overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/frame_1618873848.png"
          alt="Background"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>

      {/* ==== Tech Icons (Desktop aside) ==== */}
      <div className="hidden lg:block">
        <motion.aside
          initial={reduce ? undefined : 'hidden'}
          animate={reduce ? undefined : 'show'}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
          }}
          className="fixed left-8 top-1/3 z-40"
          aria-hidden
        >
          <div className="bg-white/10 backdrop-blur rounded-3xl p-3 shadow-lg">
            <ul className="flex flex-col gap-4 items-center">
              {techIcons.map((icon) => (
                <motion.li
                  key={icon.src}
                  variants={iconItem}
                  whileHover={!reduce ? 'hover' : undefined}
                  className="w-12 h-12 rounded-full flex items-center justify-center bg-white/10"
                >
                  <div className="relative w-6 h-6">
                    <Image src={icon.src} alt={icon.alt} fill style={{ objectFit: 'contain' }} priority />
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.aside>
      </div>

      {/* ==== Container ==== */}
      <motion.div
        className="container mx-auto px-5 sm:px-6 md:px-10 relative z-20"
        initial={reduce ? false : 'hidden'}
        animate="show"
        variants={containerVariants}
      >
        {/* Navbar: compact di mobile, pill di md+ */}
        <motion.nav variants={fadeUp} className="flex justify-between items-center py-4 sm:py-6">
          {/* Brand (mobile) */}
          <div className="lg:hidden text-white/90 font-semibold tracking-wide">
            EA<span className="opacity-60">.dev</span>
          </div>
          {/* Menu pill (md+) */}
          <div className="hidden md:flex w-full justify-center">
            <motion.ul className="inline-flex items-center gap-5 bg-black/20 backdrop-blur rounded-full px-5 py-2.5 shadow-md">
              {['Home', 'About', 'Skill', 'Projects', 'FAQ', 'Contact'].map((item) => (
                <motion.li
                  key={item}
                  variants={fadeUp}
                  whileHover={reduce ? undefined : { scale: 1.04 }}
                  className="text-white text-base font-medium select-none"
                >
                  <a href={`#${item.toLowerCase()}`} className="px-2.5 py-1 block">
                    {item}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </div>
          {/* Hamburger dummy (mobile) */}
          <button className="md:hidden w-10 h-10 grid place-items-center rounded-full bg-white/10 text-white/90">
            <span className="sr-only">Menu</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </motion.nav>

        {/* ==== Main ==== */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12 items-start">
          {/* Left column (heading + desc) */}
          <motion.div variants={fadeUp} className="text-white order-1">
            <h1 className="text-[32px] xs:text-[36px] sm:text-[40px] md:text-[48px] lg:text-[56px] font-extrabold leading-tight mb-4 sm:mb-6">
              Hi, I&apos;m Edwin Anderson
            </h1>
            <p className="text-sm sm:text-base max-w-md leading-relaxed opacity-90">
              a frontend developer passionate about creating seamless digital experiences that are fast, responsive, and user-friendly.
            </p>
          </motion.div>

          {/* Center column (portrait + badges + big title) */}
          <div className="order-2 lg:order- flex flex-col items-center">
            {/* Foto: ukurannya beda untuk mobile/desktop */}
            <motion.div
              variants={fadeUp}
              whileHover={reduce ? undefined : scaleHover}
              className="relative w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] md:w-[320px] md:h-80 lg:w-[360px] lg:h-[360px] rounded-2xl overflow-hidden shadow-2xl bg-white"
            >
              <Image src="/edwin.jpg" alt="Edwin Anderson" fill style={{ objectFit: 'cover' }} priority />
            </motion.div>

            {/* Status & badge */}
            <motion.div variants={fadeUp} className="mt-4 sm:mt-5 text-white text-center">
              <div className="italic font-semibold opacity-95">Junior</div>
              <motion.span
                variants={fadeUp}
                className="inline-block mt-2 sm:mt-3 bg-red-600 text-white px-3 sm:px-4 py-1 rounded-full text-[11px] sm:text-xs font-semibold"
              >
                Available for Hire
              </motion.span>
            </motion.div>

            {/* Big title */}
            <motion.div variants={fadeUp} className="mt-6 sm:mt-8 text-center select-none">
              <div className="text-[50px] sm:text-[76px] md:text-[100px] lg:text-[140px] font-extrabold leading-none text-yellow-400">
                FRONTEND
              </div>
              <div className="text-[50px] sm:text-[76px] md:text-[100px] lg:text-[140px] font-extrabold leading-none text-yellow-400 -mt-2 sm:-mt-4">
                DEVELOPER
              </div>
            </motion.div>

            {/* ==== Tech Icons Bar (MOBILE/TABLET) ==== */}
            <motion.div
              variants={fadeUp}
              className="mt-6 lg:hidden w-full flex justify-center"
              aria-label="Tech stack"
            >
              <div className="bg-white/10 backdrop-blur rounded-full px-4 py-2 flex items-center gap-4">
                {techIcons.map((icon) => (
                  <motion.div
                    key={icon.src}
                    whileHover={!reduce ? { scale: 1.08 } : undefined}
                    className="w-9 h-9 rounded-full bg-white/10 grid place-items-center"
                  >
                    <div className="relative w-5 h-5">
                      <Image src={icon.src} alt={icon.alt} fill style={{ objectFit: 'contain' }} />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right column (stats + CTA) */}
          <motion.div variants={fadeUp} className="text-white space-y-5 lg:space-y-6 pl-0 lg:pl-6 order-3">
            <div className="grid grid-cols-2 gap-y-5 gap-x-8 text-center md:text-left">
              <div>
                <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold">2+</div>
                <div className="text-xs opacity-80 mt-1">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold">99%</div>
                <div className="text-xs opacity-80 mt-1">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold">3</div>
                <div className="text-xs opacity-80 mt-1">Project Delivered</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold">50</div>
                <div className="text-xs opacity-80 mt-1">Clients Worldwide</div>
              </div>
            </div>

            <motion.button
              variants={fadeUp}
              whileHover={reduce ? undefined : { x: 8 }}
              className="mt-2 sm:mt-3 bg-yellow-400 text-black px-5 sm:px-6 py-3 rounded-full font-semibold shadow-lg self-start"
            >
              Contact Me →
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
