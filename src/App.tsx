import React, { useEffect } from "react";
import { ExperienceHero } from "@/components/ui/experience-hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Lenis from "lenis";

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  return (
    <div className="bg-[#020202] text-white min-h-screen selection:bg-white selection:text-black">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&family=Anton&family=Oswald:wght@400;700&display=swap"
        rel="stylesheet"
      />
      <ExperienceHero />
      <div className="relative z-10 bg-[#020202]">
        <About />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}
