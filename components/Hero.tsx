"use client";

import { motion } from "framer-motion";
import { HiArrowDown } from "react-icons/hi";

export default function Hero() {
  const handleScroll = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative pt-16 md:pt-20"
    >
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-foreground mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            Mohamed Saher
          </motion.h1>

          <motion.h2
            className="text-xl sm:text-2xl md:text-3xl font-display font-medium text-neutral-600 dark:text-neutral-400 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1, ease: "easeOut" }}
          >
            Graphic & UI/UX Designer
          </motion.h2>

          <motion.p
            className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2, ease: "easeOut" }}
          >
            7 Years of Freelance Experience
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3, ease: "easeOut" }}
          >
            <button
              onClick={() => handleScroll("#case-studies")}
              className="btn-primary min-w-[200px]"
            >
              View Case Studies
            </button>
            <button
              onClick={() => handleScroll("#contact")}
              className="btn-secondary min-w-[200px]"
            >
              Contact Me
            </button>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.5 }}
      >
        <button
          onClick={() => handleScroll("#about")}
          className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors duration-200"
          aria-label="Scroll to about section"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <HiArrowDown className="w-6 h-6 text-neutral-600 dark:text-neutral-400" />
          </motion.div>
        </button>
      </motion.div>
    </section>
  );
}
