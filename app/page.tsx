import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import CaseStudies from "@/components/CaseStudies";
import DesignPrinciples from "@/components/DesignPrinciples";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main id="main-content">
      <Header />
      <Hero />
      <About />
      <Skills />
      <CaseStudies />
      <DesignPrinciples />
      <Contact />
      <Footer />
    </main>
  );
}
