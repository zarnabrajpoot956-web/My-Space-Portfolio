// src/data/constants.js

export const navLinks = [
  { id: "home",     title: "Home" },
  { id: "about",    title: "Education" },
  { id: "skills",   title: "Skills" },
  { id: "projects", title: "Projects" },
  { id: "contact",  title: "Contact" },
];

export const projects = [
  {
    id: 1,
    title: "Behavioural Anomaly Detection System",
    description:
      "FYP — An AI-powered surveillance system that transitions traditional CCTV from passive recording to proactive alerting. Uses YOLOv8 deep learning to detect weapons in real time via webcam or IP camera, with a React dashboard and Flask API backend.",
    tags: ["YOLOv8", "Python", "OpenCV", "Flask", "React.js", "Deep Learning"],
    category: "AI Projects",
    color: "#38bdf8",
    github: "https://github.com/zarnabrajpoot956-web",
    demo: "#",
    gradient: "from-blue-600/20 to-cyan-600/20",
  },
  {
    id: 2,
    title: "AI Chatbot",
    description:
      "An intelligent conversational chatbot built with Python and Ollama LLM tools. Supports natural language understanding, context-aware replies, and can be integrated into web applications via API.",
    tags: ["Python", "Ollama", "Chatbot", "AI", "Flask", "NLP"],
    category: "AI Projects",
    color: "#8b5cf6",
    github: "https://github.com/zarnabrajpoot956-web",
    demo: "#",
    gradient: "from-purple-600/20 to-pink-600/20",
  },
];

export const stats = [];
export const experiences = [];
export const socials = [
  { name: "GitHub",   icon: "github",   url: "https://github.com/zarnabrajpoot956-web" },
  { name: "LinkedIn", icon: "linkedin", url: "https://www.linkedin.com/in/zarnab956" },
];