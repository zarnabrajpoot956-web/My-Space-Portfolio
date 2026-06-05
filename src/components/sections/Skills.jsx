// src/components/sections/Skills.jsx
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const skillCategories = [
  {
    category: "Frontend",
    color: "#38bdf8",
    icon: "🎨",
    skills: [
      { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "React.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Flutter", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
      { name: "Three.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg" },
      { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
      { name: "WordPress", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg" },
      { name: "OOP", logo: null, emoji: "🧩" },
    ],
  },
  {
    category: "Backend",
    color: "#8b5cf6",
    icon: "⚙️",
    skills: [
      { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "PHP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
      { name: "Laravel", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" },
      { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "Flask", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
      { name: "C#", logo: null, emoji: "💠" },
    ],
  },
  {
    category: "AI / Machine Learning",
    color: "#22d3ee",
    icon: "🤖",
    skills: [
      { name: "Artificial Intelligence", logo: null, emoji: "🧠" },
      { name: "Machine Learning", logo: null, emoji: "📊" },
      { name: "Deep Learning", logo: null, emoji: "🔬" },
      { name: "Python (AI)", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "Ollama", logo: null, emoji: "🦙" },
      { name: "Google Colab", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" },
      { name: "Chatbot", logo: null, emoji: "💬" },
    ],
  },
];

const SkillPill = ({ skill, color, delay, inView }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8, y: 10 }}
    animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
    transition={{ delay, duration: 0.4 }}
    whileHover={{ scale: 1.08, y: -4 }}
    className="flex flex-col items-center gap-2 group cursor-default"
  >
    <div
      className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:shadow-lg"
      style={{
        background: "rgba(15,23,42,0.8)",
        border: `1px solid ${color}30`,
      }}
    >
      {skill.logo ? (
        <img src={skill.logo} alt={skill.name} className="w-8 h-8 object-contain" />
      ) : (
        <span className="text-2xl">{skill.emoji}</span>
      )}
    </div>

    <span className="font-mono text-xs text-center text-slate-400">
      {skill.name}
    </span>
  </motion.div>
);

const SkillCard = ({ category, color, icon, skills, index }) => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      className="relative rounded-2xl p-6 overflow-hidden group"
      style={{
        background: "rgba(15, 23, 42, 0.7)",
        backdropFilter: "blur(16px)",
        border: `1px solid ${color}25`,
      }}
    >
      <div className="flex items-center gap-3 mb-6">
        <span className="text-xl">{icon}</span>
        <h3 className="font-bold uppercase tracking-widest" style={{ color }}>
          {category}
        </h3>
      </div>

      <div className="flex flex-wrap gap-4">
        {skills.map((skill, i) => (
          <SkillPill
            key={skill.name}
            skill={skill}
            color={color}
            delay={index * 0.1 + i * 0.05}
            inView={inView}
          />
        ))}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold">
            My <span className="text-purple-400">Skills</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto">
            Frontend, Backend, AI and more technologies I work with.
          </p>
        </motion.div>

        {/* Skills */}
        <div className="flex flex-col gap-6">
          {skillCategories.map((cat, index) => (
            <SkillCard key={cat.category} {...cat} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
