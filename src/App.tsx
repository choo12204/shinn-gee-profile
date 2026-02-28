import React from "react";
import Hero from "@/components/ui/portfolio-hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function App() {
  return (
    <div className="bg-black text-white">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Anton&family=Oswald:wght@400;500;700&display=swap"
      />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
