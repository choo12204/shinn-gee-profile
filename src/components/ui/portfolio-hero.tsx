import React, { useState, useEffect, useRef, useMemo } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

// Inline Button component
const Button = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className = "", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={`inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

// BlurText animation component
interface BlurTextProps {
  text: string;
  delay?: number;
  animateBy?: "words" | "letters";
  direction?: "top" | "bottom";
  className?: string;
  style?: React.CSSProperties;
}

const BlurText: React.FC<BlurTextProps> = ({
  text,
  delay = 50,
  animateBy = "words",
  direction = "top",
  className = "",
  style,
}) => {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const segments = useMemo(() => {
    return animateBy === "words" ? text.split(" ") : text.split("");
  }, [text, animateBy]);

  return (
    <p ref={ref} className={`inline-flex flex-wrap ${className}`} style={style}>
      {segments.map((segment, i) => (
        <span
          key={i}
          style={{
            display: "inline-block",
            filter: inView ? "blur(0px)" : "blur(10px)",
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : `translateY(${direction === "top" ? "-20px" : "20px"})`,
            transition: `all 0.5s ease-out ${i * delay}ms`,
          }}
        >
          {segment}
          {animateBy === "words" && i < segments.length - 1 ? "\u00A0" : ""}
        </span>
      ))}
    </p>
  );
};

export default function Component() {
  const [isDark, setIsDark] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        buttonRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    if (newTheme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const menuItems = [
    { label: "HOME", href: "#", highlight: true },
    { label: "ABOUT", href: "#about" },
    { label: "PROJECTS", href: "#projects" },
    { label: "EXPERIENCE", href: "#" },
    { label: "EDUCATION", href: "#" },
    { label: "WRITING", href: "#" },
    { label: "CONTACT", href: "#contact" },
  ];

  return (
    <div 
      className="min-h-screen text-foreground transition-colors"
      style={{
        backgroundColor: isDark ? "hsl(0 0% 0%)" : "hsl(0 0% 98%)",
        color: isDark ? "hsl(0 0% 100%)" : "hsl(0 0% 10%)",
      }}
    >
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 px-6 py-6">
        <nav className="flex items-center justify-between max-w-screen-2xl mx-auto">
          {/* Menu Button */}
          <div className="relative">
            <button
              ref={buttonRef}
              type="button"
              className="p-2 transition-colors duration-300 z-50 text-neutral-500 hover:text-black dark:hover:text-white"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-8 h-8 transition-colors duration-300" strokeWidth={2} />
              ) : (
                <Menu className="w-8 h-8 transition-colors duration-300" strokeWidth={2} />
              )}
            </button>

            {isMenuOpen && (
              <div
                ref={menuRef}
                className="absolute top-full left-0 w-[200px] md:w-[240px] border-none shadow-2xl mt-2 ml-4 p-4 rounded-lg z-[100]"
                style={{
                  backgroundColor: isDark ? "hsl(0 0% 0%)" : "hsl(0 0% 98%)",
                }}
              >
                {menuItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="block text-lg md:text-xl font-bold tracking-tight py-1.5 px-2 cursor-pointer transition-colors duration-300"
                    style={{
                      color: item.highlight ? "#C3E41D" : isDark ? "hsl(0 0% 100%)" : "hsl(0 0% 10%)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#C3E41D";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = item.highlight ? "#C3E41D" : (isDark ? "hsl(0 0% 100%)" : "hsl(0 0% 10%)");
                    }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Signature */}
          <div className="text-4xl" style={{ color: isDark ? "hsl(0 0% 100%)" : "hsl(0 0% 10%)", fontFamily: "'Brush Script MT', 'Lucida Handwriting', cursive" }}>
            S.
          </div>

          {/* Theme Toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            className="relative w-16 h-8 rounded-full hover:opacity-80 transition-opacity"
            style={{ backgroundColor: isDark ? "hsl(0 0% 15%)" : "hsl(0 0% 90%)" }}
            aria-label="Toggle theme"
          >
            <div
              className="absolute top-1 left-1 w-6 h-6 rounded-full transition-transform duration-300"
              style={{
                backgroundColor: isDark ? "hsl(0 0% 100%)" : "hsl(0 0% 10%)",
                transform: isDark ? "translateX(2rem)" : "translateX(0)",
              }}
            />
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20 pb-24">
        {/* Massive Name - Left Aligned / Dynamic */}
        <div className="w-full max-w-[1600px] mx-auto px-4 md:px-12 lg:px-24 flex flex-col md:flex-row items-center justify-between z-10">
          <div className="relative text-left flex-1">
            <h1 className="font-['Anton'] text-[120px] sm:text-[160px] md:text-[200px] lg:text-[260px] xl:text-[300px] leading-[0.8] tracking-wider uppercase m-0 p-0 drop-shadow-2xl transition-colors duration-300"
                style={{ color: isDark ? "hsl(0 0% 100%)" : "hsl(0 0% 10%)" }}>
              SHINN<br/>
              <span style={{ color: "#C3E41D" }}>GEE</span>
            </h1>
            <p className="font-['Oswald'] text-lg sm:text-xl md:text-2xl mt-8 max-w-lg uppercase tracking-widest border-l-4 pl-4 transition-colors duration-300"
               style={{ 
                 color: isDark ? "rgb(209 213 219)" : "rgb(75 85 99)",
                 borderColor: "#C3E41D" 
               }}>
              Designing the future of robotics through code.
            </p>
          </div>

          {/* Profile Picture */}
          <div className="mt-16 md:mt-0 flex-shrink-0 relative group perspective-1000">
            <div className="w-[220px] h-[320px] sm:w-[280px] sm:h-[400px] md:w-[400px] md:h-[550px] overflow-hidden shadow-2xl relative z-10 transition-transform duration-700 group-hover:scale-105" 
                 style={{ 
                   clipPath: 'polygon(15% 0, 100% 0, 85% 100%, 0% 100%)',
                   border: `4px solid ${isDark ? '#222' : '#ddd'}`
                 }}>
              <img
                src="https://raw.githubusercontent.com/choo12204/my-portfolio/main/IMG_4185.JPG"
                alt="Shinn Gee Profile"
                className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700"
              />
            </div>
            {/* Background Accent */}
            <div className="absolute top-6 left-6 w-[220px] h-[320px] sm:w-[280px] sm:h-[400px] md:w-[400px] md:h-[550px] opacity-80 z-0 transition-transform duration-700 group-hover:translate-x-4 group-hover:translate-y-4" 
                 style={{ 
                   backgroundColor: "#C3E41D",
                   clipPath: 'polygon(15% 0, 100% 0, 85% 100%, 0% 100%)' 
                 }}>
            </div>
          </div>
        </div>

        {/* Marquee Separator */}
        <div className="absolute bottom-6 md:bottom-10 left-0 w-full overflow-hidden py-3 sm:py-4 z-20 border-y-4 shadow-2xl transform -rotate-1 scale-110"
             style={{ 
               backgroundColor: "#C3E41D",
               borderColor: isDark ? "#000" : "#fff" 
             }}>
          <div className="whitespace-nowrap flex font-['Anton'] text-black text-3xl sm:text-4xl md:text-5xl tracking-widest uppercase" style={{ animation: "marquee 20s linear infinite" }}>
            <span className="mx-6">ROBOTICS ENGINEER</span> • <span className="mx-6">CREATIVE DEVELOPER</span> • <span className="mx-6">DESIGNER</span> • <span className="mx-6">INNOVATOR</span> • 
            <span className="mx-6">ROBOTICS ENGINEER</span> • <span className="mx-6">CREATIVE DEVELOPER</span> • <span className="mx-6">DESIGNER</span> • <span className="mx-6">INNOVATOR</span> •
            <span className="mx-6">ROBOTICS ENGINEER</span> • <span className="mx-6">CREATIVE DEVELOPER</span> • <span className="mx-6">DESIGNER</span> • <span className="mx-6">INNOVATOR</span> •
            <span className="mx-6">ROBOTICS ENGINEER</span> • <span className="mx-6">CREATIVE DEVELOPER</span> • <span className="mx-6">DESIGNER</span> • <span className="mx-6">INNOVATOR</span>
          </div>
        </div>
        
        {/* CSS for Marquee */}
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .perspective-1000 { perspective: 1000px; }
        `}} />
      </main>
    </div>
  );
}
