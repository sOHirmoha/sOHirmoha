"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-neutral-50 dark:bg-neutral-900/50">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-16 text-center">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="order-2 md:order-1"
            >
              <div className="space-y-6">
                <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
                  I&apos;m a passionate designer with a focus on creating meaningful digital experiences. 
                  With 7 years of freelance experience, I&apos;ve helped businesses and startups craft 
                  compelling visual identities and user-centered design systems.
                </p>
                
                <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
                  My approach combines strategic thinking with aesthetic sensibility. I believe great 
                  design isn&apos;t just about making things look beautiful—it&apos;s about solving problems, 
                  improving usability, and creating experiences that resonate with users.
                </p>

                <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
                  I specialize in UI/UX design, branding, and design systems, with a strong foundation 
                  in design thinking methodology. Every project is an opportunity to push boundaries 
                  while maintaining clarity, consistency, and accessibility.
                </p>

                <div className="pt-4">
                  <h3 className="text-xl font-display font-semibold text-foreground mb-4">
                    What I Bring to the Table
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-neutral-700 dark:text-neutral-300">
                        User-centered design thinking and problem-solving
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-neutral-700 dark:text-neutral-300">
                        Deep understanding of visual hierarchy and composition
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-neutral-700 dark:text-neutral-300">
                        Expertise in building scalable design systems
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-neutral-700 dark:text-neutral-300">
                        Commitment to accessibility and inclusive design
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="order-1 md:order-2"
            >
              <div className="relative aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl transform rotate-3"></div>
                <div className="absolute inset-0 bg-neutral-200 dark:bg-neutral-800 rounded-2xl overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-8xl font-display font-bold text-neutral-400 dark:text-neutral-600">
                      MS
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
