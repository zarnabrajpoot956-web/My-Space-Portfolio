// src/components/sections/Experience.jsx
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { experiences } from "../../data/constants";

const typeColors = {
  work: { color: "#38bdf8", bg: "rgba(56,189,248,0.1)", border: "rgba(56,189,248,0.3)" },
  education: { color: "#8b5cf6", bg: "rgba(139,92,246,0.1)", border: "rgba(139,92,246,0.3)" },
  certification: { color: "#22d3ee", bg: "rgba(34,211,238,0.1)", border: "rgba(34,211,238,0.3)" },
  achievement: { color: "#fbbf24", bg: "rgba(251,191,36,0.1)", border: "rgba(251,191,36,0.3)" },
};

const ExperienceCard = ({ exp, index, isLeft }) => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });
  const colors = typeColors[exp.type] || typeColors.work;

  return (
    <div ref={ref} className={`flex items-center gap-6 ${isLeft ? "flex-row-reverse" : ""} mb-8`}>
      {/* Card */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? 40 : -40 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="flex-1 group"
      >
        <div
          className="relative rounded-2xl p-6 hover:scale-[1.02] transition-transform duration-300 overflow-hidden"
          style={{
            background: "rgba(15, 23, 42, 0.7)",
            backdropFilter: "blur(16px)",
            border: `1px solid ${colors.border}`,
            boxShadow: `0 0 30px ${colors.color}10`,
          }}
        >
          {/* Top accent */}
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{ background: `linear-gradient(90deg, transparent, ${colors.color}, transparent)` }}
          />

          {/* Content */}
          <div className="flex items-start justify-between mb-3 gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xl">{exp.icon}</span>
                <span
                  className="font-mono text-xs uppercase tracking-widest px-2 py-0.5 rounded-full"
                  style={{ color: colors.color, background: colors.bg }}
                >
                  {exp.type}
                </span>
              </div>
              <h3 className="font-orbitron font-bold text-white text-base group-hover:text-electric-blue transition-colors">
                {exp.title}
              </h3>
              <div className="font-rajdhani font-semibold text-sm mt-1" style={{ color: colors.color }}>
                {exp.company}
              </div>
            </div>
            <div
              className="shrink-0 font-mono text-xs px-3 py-1.5 rounded-full whitespace-nowrap"
              style={{ color: colors.color, background: colors.bg, border: `1px solid ${colors.border}` }}
            >
              {exp.date}
            </div>
          </div>

          <p className="text-slate-400 text-sm font-exo leading-relaxed">
            {exp.description}
          </p>

          {/* Bottom glow */}
          <div
            className="absolute bottom-0 right-0 w-24 h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{ background: `radial-gradient(circle at bottom right, ${colors.color}15, transparent)` }}
          />
        </div>
      </motion.div>

      {/* Center dot */}
      <motion.div
        initial={{ scale: 0 }}
        animate={inView ? { scale: 1 } : {}}
        transition={{ delay: index * 0.1 + 0.2 }}
        className="relative shrink-0 z-10"
      >
        <div
          className="w-4 h-4 rounded-full"
          style={{
            background: colors.color,
            boxShadow: `0 0 15px ${colors.color}80, 0 0 30px ${colors.color}40`,
          }}
        />
        <div
          className="absolute inset-0 rounded-full animate-ping"
          style={{ background: colors.color, opacity: 0.3 }}
        />
      </motion.div>

      {/* Spacer for opposite side */}
      <div className="flex-1 hidden lg:block" />
    </div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-neon-purple/5 rounded-full blur-3xl" />
      </div>

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-purple/40 to-transparent" />

      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="font-mono text-neon-purple text-sm tracking-widest uppercase mb-3">
            &gt;_ Journey
          </div>
          <h2 className="section-heading text-4xl lg:text-5xl">
            <span className="text-white">My </span>
            <span className="gradient-text">Experience</span>
          </h2>
          <div className="mt-4 flex items-center justify-center gap-3">
            <div className="h-px w-24 bg-gradient-to-r from-transparent to-neon-purple" />
            <div className="w-2 h-2 rounded-full bg-neon-purple animate-ping" />
            <div className="h-px w-24 bg-gradient-to-l from-transparent to-neon-purple" />
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 hidden lg:block"
            style={{ background: "linear-gradient(180deg, #38bdf8, #8b5cf6, #22d3ee, #ec4899)" }} />

          {/* Mobile line */}
          <div className="absolute left-2 top-0 bottom-0 w-px lg:hidden"
            style={{ background: "linear-gradient(180deg, #38bdf8, #8b5cf6, #22d3ee)" }} />

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <ExperienceCard
                key={index}
                exp={exp}
                index={index}
                isLeft={index % 2 !== 0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
