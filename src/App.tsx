import React from "react";
import Hero from "@/components/ui/portfolio-hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function App() {
  return (
    <div className="bg-black text-white">
      <link
        href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Bebas+Neue&family=Cormorant+Garamond:wght@300;400;700&display=swap"
        rel="stylesheet"
      />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
