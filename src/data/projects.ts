export interface ProjectData {
  id: string;
  num: string;
  title: string;
  titleEm: string;
  description: string;
  overview: string;
  overviewExtra?: string;
  tags: string[];
  meta: string[];
  role: string;
  duration: string;
  type: string;
  status: string;
  features: string[];
  process: string;
  processExtra?: string;
  liveLink?: string;
  githubLink?: string;
}

export const projects: ProjectData[] = [
  {
    id: "1",
    num: "01",
    title: "Portfolio",
    titleEm: "Website",
    description: "A personal portfolio built from scratch with custom animations, dark/light theming, and a bold typographic identity.",
    overview: "A personal portfolio website built entirely from scratch — no frameworks, no templates. The goal was to create a distinctive online presence that reflects my identity as a developer and designer, with bold typography, neon accents, and smooth interactions.",
    overviewExtra: "The design centres around a large typographic hero, an oval-cropped profile image, and a dark/light theme toggle. Every section was crafted with attention to spacing, animation timing, and visual hierarchy.",
    tags: ["HTML", "CSS", "JS"],
    meta: ["HTML", "CSS", "JavaScript", "2026", "Personal"],
    role: "Designer & Developer",
    duration: "2 Weeks",
    type: "Personal Project",
    status: "Live",
    features: [
      "Dark / Light theme toggle with localStorage persistence",
      "Animated skill bars triggered on scroll via IntersectionObserver",
      "Slide-out navigation drawer with smooth transitions",
      "Responsive layout for mobile, tablet, and desktop",
      "Oval-cropped profile image with neon border glow",
      "Neon typographic hero with massive stacked name"
    ],
    process: "The biggest challenge was getting the layered typography effect right — having the giant SHINN / GEE text sit behind the portrait while still being fully readable. This was solved by sizing the text to extend well beyond the image boundaries so the letters are visible on either side.",
    processExtra: "Theme switching was implemented using CSS custom properties toggled via a data-theme attribute on the root element, with transitions applied to background and colour properties for a smooth fade.",
    githubLink: "https://github.com/choo12204"
  },
  {
    id: "2",
    num: "02",
    title: "E-Commerce",
    titleEm: "Dashboard",
    description: "A responsive admin dashboard with real-time charts, product management, and a clean minimal UI for an online store.",
    overview: "A fully responsive admin dashboard built for an online retail store. The client needed a central hub to manage products, track orders, monitor revenue, and handle customer data — all from a clean, intuitive interface.",
    overviewExtra: "Built with React on the frontend and a Node.js/MongoDB backend, the dashboard features real-time data updates, sortable tables, and a chart system that visualises sales trends at a glance.",
    tags: ["React", "Tailwind", "Node.js"],
    meta: ["React", "Tailwind CSS", "Node.js", "MongoDB", "2025", "Client Work"],
    role: "Full-Stack Developer",
    duration: "6 Weeks",
    type: "Client Project",
    status: "Delivered",
    features: [
      "Real-time sales charts with weekly, monthly, and yearly views",
      "Product management with image upload, stock tracking, and categories",
      "Order management with status filtering and invoice generation",
      "Customer database with search, sort, and export to CSV",
      "Role-based access control for admin and staff accounts",
      "Fully responsive — works on tablet and mobile too"
    ],
    process: "The trickiest part was designing the real-time update system. Rather than polling, I used WebSocket connections to push stock and order updates to the dashboard instantly, keeping the UI always in sync with the database.",
    processExtra: "Accessibility was a key requirement — all tables are keyboard navigable and screen reader friendly, with ARIA labels throughout.",
    githubLink: "https://github.com/choo12204"
  },
  {
    id: "3",
    num: "03",
    title: "Mobile",
    titleEm: "Weather App",
    description: "A sleek weather app with live forecasts, animated backgrounds based on conditions, and location-aware data.",
    overview: "A sleek cross-platform weather application built with React Native and Expo. It pulls live forecast data from the OpenWeather API and presents it with animated backgrounds that dynamically shift based on current conditions — sunny, rainy, stormy, or foggy.",
    overviewExtra: "The app detects the user's location automatically and supports manual city search. A 7-day forecast, hourly breakdown, and wind/humidity stats are all presented in a minimal card-based layout.",
    tags: ["React Native", "API"],
    meta: ["React Native", "OpenWeather API", "Expo", "2025", "Personal"],
    role: "Mobile Developer",
    duration: "3 Weeks",
    type: "Personal Project",
    status: "iOS & Android",
    features: [
      "GPS-based automatic location detection on app launch",
      "Manual city search with autocomplete suggestions",
      "Animated background gradients that match weather conditions",
      "7-day forecast with high/low temperatures",
      "Hourly temperature graph with smooth scrolling",
      "Wind speed, humidity, UV index, and visibility stats"
    ],
    process: "Handling inconsistent API responses for edge-case weather conditions (dust storms, volcanic ash) required building a robust fallback system for background themes and icons. Each condition maps to a carefully designed gradient and an animated particle overlay.",
    processExtra: "Expo's managed workflow made deployment to both platforms seamless, but required careful handling of location permissions across iOS and Android permission systems.",
    githubLink: "https://github.com/choo12204"
  },
  {
    id: "4",
    num: "04",
    title: "Brand",
    titleEm: "Identity System",
    description: "A complete visual identity for a local café — logo, typography, colour palette, and social media templates.",
    overview: "A complete visual identity designed for a local artisan café. The client wanted to move away from a generic café aesthetic and establish a distinctive, memorable brand that felt warm, craft-forward, and modern.",
    overviewExtra: "The project included logo design, a full typography system, colour palette, iconography, packaging concepts, and a suite of ready-to-use social media templates.",
    tags: ["Figma", "Illustrator"],
    meta: ["Figma", "Illustrator", "Brand Design", "2025", "Client Work"],
    role: "Brand Designer",
    duration: "4 Weeks",
    type: "Client Project",
    status: "Delivered",
    features: [
      "Primary logo, secondary logo, and icon-only mark in all formats",
      "Typography pairing — display face + body face with usage rules",
      "7-colour brand palette with light/dark variants and hex/CMYK values",
      "Packaging mockups for coffee cups, bags, and kraft boxes",
      "12 Instagram post templates + 4 Story templates",
      "Brand guidelines PDF with usage dos and don'ts"
    ],
    process: "The biggest challenge was balancing the client's desire for a \"handcrafted\" feel with the need for a brand system that would scale cleanly to digital applications. The solution was a hybrid approach — an organic hand-drawn logo mark paired with a very structured geometric type system.",

    processExtra: "Multiple rounds of feedback and refinement were conducted through Figma's sharing and commenting tools, keeping the client closely involved throughout the design process.",
    githubLink: "https://github.com/choo12204"
  }
];
