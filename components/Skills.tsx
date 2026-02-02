"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  HiOutlineDesktopComputer, 
  HiOutlineLightBulb, 
  HiOutlineColorSwatch,
  HiOutlineSparkles,
  HiOutlineUserGroup 
} from "react-icons/hi";

const skills = [
  {
    name: "UI/UX Design",
    description: "Crafting intuitive interfaces that prioritize user needs",
    icon: HiOutlineDesktopComputer,
  },
  {
    name: "Branding & Visual Identity",
    description: "Creating memorable brand experiences and cohesive identities",
    icon: HiOutlineColorSwatch,
  },
  {
    name: "Design Systems",
    description: "Building scalable, consistent design frameworks",
    icon: HiOutlineLightBulb,
  },
  {
    name: "Motion UI",
    description: "Purposeful animations that enhance usability",
    icon: HiOutlineSparkles,
  },
  {
    name: "User-Centered Design",
    description: "Designing with empathy and research-backed insights",
    icon: HiOutlineUserGroup,
  },
];

const tools = [
  { name: "Figma", category: "Design" },
  { name: "Adobe XD", category: "Design" },
  { name: "Photoshop", category: "Graphics" },
  { name: "Illustrator", category: "Graphics" },
  { name: "After Effects", category: "Motion" },
  { name: "Sketch", category: "Design" },
  { name: "InVision", category: "Prototyping" },
  { name: "Miro", category: "Collaboration" },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-16 text-center">
            Skills & Expertise
          </h2>

          <div className="max-w-6xl mx-auto space-y-16">
            <div>
              <h3 className="text-2xl font-display font-semibold text-foreground mb-8">
                Core Competencies
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="card hover:shadow-lg hover:scale-[1.02] cursor-default"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <skill.icon className="w-10 h-10 text-primary-600 mb-4" />
                    <h4 className="text-lg font-display font-semibold text-foreground mb-2">
                      {skill.name}
                    </h4>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                      {skill.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-display font-semibold text-foreground mb-8">
                Tools & Software
              </h3>
              <motion.div
                className="card"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {tools.map((tool, index) => (
                    <motion.div
                      key={tool.name}
                      className="text-center p-4 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors duration-200"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.2, delay: 0.3 + index * 0.03 }}
                    >
                      <div className="font-medium text-foreground mb-1">
                        {tool.name}
                      </div>
                      <div className="text-xs text-neutral-500 dark:text-neutral-400">
                        {tool.category}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
