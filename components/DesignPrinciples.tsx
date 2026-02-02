"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  HiOutlineViewGrid,
  HiOutlineTemplate,
  HiOutlineEye,
  HiOutlineUserCircle,
  HiOutlineLightningBolt,
  HiOutlineAdjustments
} from "react-icons/hi";

const principles = [
  {
    title: "Visual Hierarchy",
    description: "Guiding users through content with intentional scale, contrast, and positioning. Every element has a purpose and importance level.",
    icon: HiOutlineViewGrid,
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Consistency",
    description: "Maintaining uniform patterns, components, and interactions throughout the experience. Predictability builds user confidence.",
    icon: HiOutlineTemplate,
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Accessibility",
    description: "Designing for all users, regardless of abilities. WCAG compliance, keyboard navigation, and inclusive color contrast are non-negotiable.",
    icon: HiOutlineUserCircle,
    color: "from-emerald-500 to-teal-500"
  },
  {
    title: "Grid Systems",
    description: "Leveraging structured layouts (8pt grid) to create harmony, alignment, and scalability across all screen sizes.",
    icon: HiOutlineAdjustments,
    color: "from-orange-500 to-red-500"
  },
  {
    title: "White Space",
    description: "Embracing breathing room to reduce cognitive load, improve readability, and create a sense of premium quality.",
    icon: HiOutlineEye,
    color: "from-indigo-500 to-purple-500"
  },
  {
    title: "Usability-First",
    description: "Beauty serves function. Every design decision is validated against user needs, cognitive load, and interaction efficiency.",
    icon: HiOutlineLightningBolt,
    color: "from-yellow-500 to-amber-500"
  }
];

export default function DesignPrinciples() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="principles" className="section-padding">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4 text-center">
            Design Principles
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-16 text-center max-w-2xl mx-auto">
            The fundamental beliefs that guide my design decisions
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {principles.map((principle, index) => (
              <motion.div
                key={principle.title}
                className="card hover:shadow-lg group cursor-default relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ y: -4 }}
              >
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${principle.color}`}></div>
                
                <div className="relative z-10">
                  <principle.icon className="w-12 h-12 text-primary-600 dark:text-primary-400 mb-4 group-hover:scale-110 transition-transform duration-200" />
                  
                  <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                    {principle.title}
                  </h3>
                  
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-16 max-w-4xl mx-auto card bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 border-primary-200 dark:border-primary-800"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <h3 className="text-xl font-display font-semibold text-foreground mb-4">
              My Design Philosophy
            </h3>
            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed mb-4">
              Great design is invisible. It doesn&apos;t call attention to itself—it empowers users to 
              accomplish their goals efficiently and delightfully. I believe in respecting UX laws 
              like Fitts&apos;s Law and Hick&apos;s Law, maintaining low cognitive load, and ensuring every 
              interactive element is discoverable and intuitive.
            </p>
            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
              Motion and animation should always serve a purpose: providing feedback, guiding attention, 
              or smoothing transitions. Beautiful aesthetics matter, but they must never compromise 
              usability or accessibility. Every design decision is a balance between form and function, 
              art and science.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
