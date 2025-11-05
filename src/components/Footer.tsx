// Part 12 - src/components/Footer.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import { motion, Variants, useReducedMotion } from 'framer-motion';

export default function Footer() {
  const reduceMotion = useReducedMotion();

  const textVariant: Variants = {
    hidden: { opacity: 0, x: -12 },
    show: { opacity: 1, x: 0, transition: { duration: 0.45, ease: 'easeOut' } },
  };

  const iconsVariant: Variants = {
    hidden: { opacity: 0, x: 12 },
    show: { opacity: 1, x: 0, transition: { duration: 0.45, ease: 'easeOut', delay: 0.06 } },
  };

  const iconHover = !reduceMotion
    ? { scale: 1.08, y: -2, transition: { duration: 0.18 } }
    : {};

  return (
    <footer className="bg-black text-white">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-14 md:h-16 py-3">
          {/* Left: copyright - animated */}
          <motion.div
            initial={reduceMotion ? undefined : 'hidden'}
            whileInView={reduceMotion ? undefined : 'show'}
            viewport={{ once: true, amount: 0.25 }}
            variants={textVariant}
            className="text-xs text-white/80"
            aria-hidden={false}
          >
            © {new Date().getFullYear()} Edwin Anderson. All rights reserved.
          </motion.div>

          {/* Right: social icons - animated + hover micro-interactions */}
          <motion.div
            initial={reduceMotion ? undefined : 'hidden'}
            whileInView={reduceMotion ? undefined : 'show'}
            viewport={{ once: true, amount: 0.25 }}
            variants={iconsVariant}
            className="flex items-center gap-3"
            aria-label="social links"
          >
            {/* If you later split icons into separate <Image/> elements, keep the motion wrappers */}
            <motion.button
              whileHover={iconHover}
              whileTap={reduceMotion ? undefined : { scale: 0.98 }}
              className="w-28 h-6 relative focus:outline-none rounded"
              aria-label="Open social links"
              style={{ background: 'transparent', border: 'none', padding: 0 }}
            >
              <Image
                src="/icons/icon_social_media.png"
                alt="social media icons"
                fill
                style={{ objectFit: 'contain' }}
                priority
              />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
