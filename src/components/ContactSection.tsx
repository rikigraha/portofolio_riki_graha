// src/components/ContactSection.tsx
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, Variants, useReducedMotion } from 'framer-motion';

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.08, when: 'beforeChildren' },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const buttonVariants: Variants = {
  idle: { scale: 1 },
  hover: { scale: 1.03, boxShadow: '0px 10px 30px rgba(0,0,0,0.12)' },
  tap: { scale: 0.98 },
};

export default function ContactSection() {
  const [sending, setSending] = useState(false);
  const reduceMotion = useReducedMotion();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    await new Promise((r) => setTimeout(r, 800));
    alert('Message sent (demo). Replace with real endpoint.');
    setSending(false);
    (e.target as HTMLFormElement).reset();
  };

  const thumbs = ['/portofolio_1.png', '/portofolio_2.png', '/portofolio_3.png'];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          variants={reduceMotion ? undefined : containerVariants}
          initial={reduceMotion ? undefined : 'hidden'}
          whileInView={reduceMotion ? undefined : 'show'}
          viewport={{ once: true, amount: 0.25 }}
        >
          {/* LEFT: heading + description + thumbnails */}
          <motion.div variants={reduceMotion ? undefined : fadeUp}>
            <motion.h2
              variants={reduceMotion ? undefined : fadeUp}
              className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3"
            >
              Let&apos;s Work Together
            </motion.h2>

            <motion.p
              variants={reduceMotion ? undefined : fadeUp}
              className="text-gray-600 mb-6 max-w-xl"
            >
              Have a project in mind or just want to say hi? Drop me a message — I’d love to hear from you.
            </motion.p>

            {/* thumbnails row */}
            <motion.div className="flex items-center gap-4" variants={reduceMotion ? undefined : {}}>
              {thumbs.map((src, i) => (
                <motion.div
                  key={i}
                  className="w-24 h-16 rounded-md overflow-hidden border border-gray-100 shadow-sm"
                  initial={reduceMotion ? undefined : { opacity: 0, y: 8, scale: 0.98 }}
                  whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  whileHover={!reduceMotion ? { scale: 1.05 } : undefined}
                >
                  <Image src={src} alt={`portfolio-${i}`} width={160} height={100} style={{ objectFit: 'cover' }} />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT: contact form card */}
          <motion.div
            className="relative flex justify-center lg:justify-end"
            variants={reduceMotion ? undefined : fadeUp}
          >
            {/* form card */}
            <motion.div
              className="relative w-full max-w-md bg-white rounded-2xl shadow-xl border border-gray-100 p-6 md:p-8"
              initial={reduceMotion ? undefined : { opacity: 0, y: 8 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45 }}
            >
              <form onSubmit={handleSubmit} className="space-y-4">
                <motion.div className="mb-1" variants={reduceMotion ? undefined : fadeUp}>
                  <label htmlFor="name" className="text-sm text-gray-600 block mb-2">Name</label>
                  <input id="name" name="name" required className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-200" placeholder="Enter your name" />
                </motion.div>

                <motion.div variants={reduceMotion ? undefined : fadeUp}>
                  <label htmlFor="email" className="text-sm text-gray-600 block mb-2">Email</label>
                  <input id="email" name="email" type="email" required className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-200" placeholder="Enter your email" />
                </motion.div>

                <motion.div variants={reduceMotion ? undefined : fadeUp}>
                  <label htmlFor="message" className="text-sm text-gray-600 block mb-2">Message</label>
                  <textarea id="message" name="message" rows={5} required className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-200" placeholder="Enter your message" />
                </motion.div>

                <motion.div className="pt-2" variants={reduceMotion ? undefined : fadeUp}>
                  <motion.button
                    type="submit"
                    className="w-full bg-[#b86879] text-white py-3 rounded-full font-semibold shadow"
                    disabled={sending}
                    variants={buttonVariants}
                    initial="idle"
                    whileHover={!reduceMotion ? 'hover' : undefined}
                    whileTap={!reduceMotion ? 'tap' : undefined}
                    transition={{ duration: 0.18 }}
                  >
                    {sending ? 'Sending...' : `Let's Talk`}
                  </motion.button>
                </motion.div>
              </form>
            </motion.div>

            {/* people image overlapping on top of card */}
            <motion.div
              className="absolute -top-12 right-0 transform translate-x-8 lg:-translate-x-6 pointer-events-none"
              initial={reduceMotion ? undefined : { opacity: 0, y: -6, scale: 0.98 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-32 h-32 rounded-t-xl overflow-visible">
                <Image src="/people.png" alt="people" width={160} height={160} style={{ objectFit: 'contain' }} priority />
              </div>
            </motion.div>
          </motion.div>
        </motion.div> {/* end grid */}

        {/* footer copyright */}
        <motion.div
          className="mt-12 text-sm text-gray-500"
          initial={reduceMotion ? undefined : { opacity: 0 }}
          whileInView={reduceMotion ? undefined : { opacity: 1 }}
          viewport={{ once: true }}
        >
          © {new Date().getFullYear()} Edwin Anderson. All rights reserved.
        </motion.div>
      </div>
    </section>
  );
}
