import React from "react";
import Hero from "@/components/ui/portfolio-hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function App() {
  return (
    <div className="bg-white text-black min-h-screen">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&family=Playfair+Display:wght@700;900&display=swap"
        rel="stylesheet"
      />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
