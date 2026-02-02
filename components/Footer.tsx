"use client";

import { FaLinkedin, FaBehance, FaDribbble, FaGithub } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaLinkedin, label: "LinkedIn", href: "#" },
    { icon: FaBehance, label: "Behance", href: "#" },
    { icon: FaDribbble, label: "Dribbble", href: "#" },
    { icon: FaGithub, label: "GitHub", href: "#" },
  ];

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-neutral-900 dark:bg-black text-neutral-300 py-12 border-t border-neutral-800">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="text-center md:text-left">
            <button
              onClick={handleScrollToTop}
              className="text-2xl font-display font-bold text-white hover:text-primary-400 transition-colors duration-200 mb-2"
            >
              Mohamed Saher
            </button>
            <p className="text-sm text-neutral-400">
              Graphic & UI/UX Designer
            </p>
          </div>

          <div className="flex items-center space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="w-10 h-10 bg-neutral-800 hover:bg-primary-600 rounded-lg flex items-center justify-center text-neutral-300 hover:text-white transition-all duration-200"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-neutral-800 text-center text-sm text-neutral-400">
          <p>
            © {currentYear} Mohamed Saher. All rights reserved.
          </p>
          <p className="mt-2">
            Designed & built with attention to detail, accessibility, and performance.
          </p>
        </div>
      </div>
    </footer>
  );
}
