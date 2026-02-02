"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { HiArrowRight } from "react-icons/hi";

const caseStudies = [
  {
    title: "FinTech Banking App",
    category: "UI/UX Design",
    duration: "3 months",
    role: "Lead UI/UX Designer",
    problem: "A financial technology startup needed a mobile banking app that could compete with traditional banks while building trust with first-time users. The challenge was to simplify complex financial operations without sacrificing functionality.",
    solution: "Designed a clean, minimalist interface with clear visual hierarchy and progressive disclosure. Implemented a comprehensive design system with reusable components. Created an onboarding flow that educates users while reducing friction.",
    process: [
      "User research and competitive analysis",
      "Information architecture and user flows",
      "Low-fidelity wireframes and prototypes",
      "High-fidelity UI design and design system",
      "Usability testing and iterations"
    ],
    results: [
      "42% increase in user onboarding completion",
      "38% reduction in customer support tickets",
      "4.8/5 average user rating in app stores",
      "Featured in Apple App Store as 'App of the Day'"
    ],
    tags: ["Mobile", "Finance", "Design System"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "E-Commerce Platform Redesign",
    category: "Branding & UI/UX",
    duration: "4 months",
    role: "Design Lead",
    problem: "An established e-commerce platform was experiencing high cart abandonment rates and poor mobile conversion. The existing design felt dated and didn't reflect the premium nature of their product offerings.",
    solution: "Conducted a complete brand refresh and UI overhaul. Redesigned the checkout flow with a focus on reducing friction. Implemented a modern, grid-based layout system that works seamlessly across devices. Created a cohesive visual language with improved typography and color palette.",
    process: [
      "Stakeholder interviews and analytics review",
      "User journey mapping and pain point analysis",
      "Brand identity refresh",
      "Responsive wireframes and prototyping",
      "A/B testing and conversion optimization"
    ],
    results: [
      "65% decrease in cart abandonment",
      "89% increase in mobile conversions",
      "127% improvement in average session duration",
      "Brand recognition increased by 43%"
    ],
    tags: ["Web", "E-Commerce", "Branding"],
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "SaaS Dashboard & Design System",
    category: "Design Systems",
    duration: "5 months",
    role: "Senior Product Designer",
    problem: "A B2B SaaS company had a complex analytics platform with inconsistent UI patterns across features. New feature development was slow, and users struggled to navigate between different sections of the product.",
    solution: "Built a comprehensive design system from the ground up with atomic design principles. Created detailed documentation and component library in Figma. Redesigned the navigation architecture and information hierarchy. Established clear guidelines for data visualization.",
    process: [
      "Design audit and pattern inventory",
      "Design system architecture and tokens",
      "Component library creation in Figma",
      "Developer handoff and documentation",
      "Implementation support and governance"
    ],
    results: [
      "70% faster feature design and development",
      "UI consistency improved across 50+ screens",
      "Developer-designer collaboration improved by 85%",
      "User task completion rate increased by 54%"
    ],
    tags: ["SaaS", "B2B", "Design System"],
    color: "from-emerald-500 to-teal-500"
  },
  {
    title: "Health & Wellness Mobile App",
    category: "UI/UX & Motion Design",
    duration: "3 months",
    role: "UI/UX Designer",
    problem: "A health and wellness startup needed an app that motivated users to maintain healthy habits without feeling overwhelming. The challenge was creating an experience that felt supportive rather than judgmental.",
    solution: "Designed a warm, friendly interface with thoughtful micro-interactions. Implemented gamification elements that celebrated progress without creating pressure. Created custom illustrations and animations that reinforced positive behaviors. Focused on accessibility and inclusive design.",
    process: [
      "User persona development and empathy mapping",
      "Behavioral psychology research",
      "Wireframing and interaction design",
      "UI design with custom illustrations",
      "Motion design and micro-interactions"
    ],
    results: [
      "83% user retention after 30 days",
      "Daily active user rate of 67%",
      "4.9/5 rating with 10K+ reviews",
      "92% of users report improved wellbeing"
    ],
    tags: ["Mobile", "Health", "Motion UI"],
    color: "from-orange-500 to-red-500"
  }
];

export default function CaseStudies() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="case-studies" className="section-padding bg-neutral-50 dark:bg-neutral-900/50">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4 text-center">
            Case Studies
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-16 text-center max-w-2xl mx-auto">
            Selected projects showcasing my design process and impact
          </p>

          <div className="max-w-6xl mx-auto space-y-12">
            {caseStudies.map((study, index) => (
              <motion.article
                key={study.title}
                className="card hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-1">
                    <div className={`aspect-square rounded-lg bg-gradient-to-br ${study.color} mb-4 flex items-center justify-center`}>
                      <span className="text-white text-6xl font-display font-bold opacity-20">
                        {index + 1}
                      </span>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div>
                        <span className="font-medium text-neutral-600 dark:text-neutral-400">Category:</span>
                        <span className="ml-2 text-foreground">{study.category}</span>
                      </div>
                      <div>
                        <span className="font-medium text-neutral-600 dark:text-neutral-400">Duration:</span>
                        <span className="ml-2 text-foreground">{study.duration}</span>
                      </div>
                      <div>
                        <span className="font-medium text-neutral-600 dark:text-neutral-400">Role:</span>
                        <span className="ml-2 text-foreground">{study.role}</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {study.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="md:col-span-2 space-y-6">
                    <div>
                      <h3 className="text-2xl font-display font-bold text-foreground mb-2">
                        {study.title}
                      </h3>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-wide mb-2">
                        The Challenge
                      </h4>
                      <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                        {study.problem}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-wide mb-2">
                        The Solution
                      </h4>
                      <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                        {study.solution}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-wide mb-2">
                        Design Process
                      </h4>
                      <ul className="space-y-2">
                        {study.process.map((step, stepIndex) => (
                          <li key={stepIndex} className="flex items-start">
                            <span className="inline-block w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span className="text-neutral-700 dark:text-neutral-300">
                              {step}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-wide mb-2">
                        Impact & Results
                      </h4>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {study.results.map((result, resultIndex) => (
                          <div
                            key={resultIndex}
                            className="flex items-start bg-neutral-100 dark:bg-neutral-800 p-3 rounded-lg"
                          >
                            <HiArrowRight className="w-4 h-4 text-primary-600 dark:text-primary-400 mt-0.5 mr-2 flex-shrink-0" />
                            <span className="text-sm text-neutral-700 dark:text-neutral-300">
                              {result}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
