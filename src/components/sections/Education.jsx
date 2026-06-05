// src/components/sections/About.jsx
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const educationData = [
  {
    degree: "Bachelor of Software Engineering",
    institution: "University of Lahore",
    year: "2022 — 2026",
    icon: "🎓",
    color: "#38bdf8",
    description:
      "Studying core software engineering principles including Data Structures, OOP, Databases, AI, and full-stack development. Actively building real-world projects alongside academics.",
    tags: ["DSA", "OOP", "Databases", "AI/ML", "Web Dev", "Mobile Dev"],
  },
  {
    degree: "ICS — Physics",
    institution: "Punjab Group of Colleges Faisalabad",
    year: "2020 — 2022",
    icon: "🏫",
    color: "#8b5cf6",
    description:
      "Completed Intermediate in Computer Science with Physics. Built a strong analytical foundation and was introduced to programming fundamentals.",
    tags: ["Computer Science", "Physics", "Mathematics", "Programming Basics"],
  },
];

const About = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="about" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-electric-blue/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-neon-purple/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-electric-blue/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="font-mono text-electric-blue text-sm tracking-widest uppercase mb-3">
            &gt;_ Academic Background
          </div>
          <h2 className="section-heading text-4xl lg:text-5xl">
            <span className="gradient-text">Education</span>
          </h2>
          <div className="mt-4 flex items-center justify-center gap-3">
            <div className="h-px w-24 bg-gradient-to-r from-transparent to-electric-blue" />
            <div className="w-2 h-2 rounded-full bg-electric-blue animate-ping" />
            <div className="h-px w-24 bg-gradient-to-l from-transparent to-electric-blue" />
          </div>
          <p className="mt-6 text-slate-400 max-w-lg mx-auto font-exo">
            A journey from curiosity to code — building knowledge one degree at a time.
          </p>
        </motion.div>

        {/* Timeline */}
        <div ref={ref} className="relative max-w-4xl mx-auto">

          {/* Vertical line */}
          <div className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-electric-blue/60 via-neon-purple/40 to-transparent -translate-x-1/2" />

          <div className="flex flex-col gap-12">
            {educationData.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.7 }}
                className={`relative flex flex-col lg:flex-row items-start gap-6 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div
                  className="absolute left-6 lg:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 z-10 mt-6"
                  style={{
                    borderColor: edu.color,
                    background: "#0f172a",
                    boxShadow: `0 0 12px ${edu.color}80`,
                  }}
                />

                {/* Spacer for timeline centering on desktop */}
                <div className="hidden lg:block lg:w-1/2" />

                {/* Card */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -4 }}
                  className="ml-12 lg:ml-0 lg:w-1/2 rounded-2xl p-6 relative overflow-hidden group"
                  style={{
                    background: "rgba(15,23,42,0.8)",
                    backdropFilter: "blur(16px)",
                    border: `1px solid ${edu.color}30`,
                    boxShadow: `0 0 30px ${edu.color}10`,
                  }}
                >
                  {/* Corner glow */}
                  <div
                    className="absolute top-0 right-0 w-24 h-24 opacity-20 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at top right, ${edu.color}60, transparent 70%)`,
                    }}
                  />

                  {/* Year badge */}
                  <div
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono mb-4"
                    style={{
                      background: `${edu.color}15`,
                      border: `1px solid ${edu.color}40`,
                      color: edu.color,
                    }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full animate-ping" style={{ background: edu.color }} />
                    {edu.year}
                  </div>

                  {/* Icon + Degree */}
                  <div className="flex items-start gap-3 mb-3">
                    <span className="text-3xl">{edu.icon}</span>
                    <div>
                      <h3 className="font-orbitron font-bold text-white text-base leading-tight">
                        {edu.degree}
                      </h3>
                      <p className="font-rajdhani font-semibold text-sm mt-0.5" style={{ color: edu.color }}>
                        {edu.institution}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-400 font-exo text-sm leading-relaxed mb-4">
                    {edu.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {edu.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-lg font-mono text-xs transition-colors"
                        style={{
                          background: `${edu.color}10`,
                          border: `1px solid ${edu.color}25`,
                          color: `${edu.color}cc`,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Hover overlay */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                    style={{ background: `radial-gradient(circle at 50% 50%, ${edu.color}06, transparent 70%)` }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
