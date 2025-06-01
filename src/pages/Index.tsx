
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import Services from "../components/Services";
import About from "../components/About";
import Process from "../components/Process";
import CaseStudies from "../components/CaseStudies";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-corepivot-50">
      <Navigation />
      <Hero />
      <Services />
      <About />
      <Process />
      <CaseStudies />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
