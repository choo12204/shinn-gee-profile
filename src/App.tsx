import React from "react";
import Hero from "@/components/ui/portfolio-hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function App() {
  return (
    <div className="bg-black text-white">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@700&family=Antic&display=swap"
      />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
