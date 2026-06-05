// src/components/sections/Projects.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "../../data/constants";

const ProjectCard = ({ project, index }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative rounded-2xl overflow-hidden group"
      style={{
        background: "rgba(15, 23, 42, 0.7)",
        backdropFilter: "blur(16px)",
        border: `1px solid ${hovered ? project.color + "60" : project.color + "25"}`,
        boxShadow: hovered ? `0 20px 60px ${project.color}20` : "none",
        transition: "all 0.3s ease",
      }}
    >
      {/* Top gradient bar */}
      <div
        className="h-1 w-full"
        style={{ background: `linear-gradient(90deg, transparent, ${project.color}, transparent)` }}
      />

      {/* Visual header */}
      <div className={`relative h-40 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}>
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `linear-gradient(${project.color}30 1px, transparent 1px), linear-gradient(90deg, ${project.color}30 1px, transparent 1px)`,
            backgroundSize: "20px 20px",
          }}
        />
        <div className="relative z-10 text-6xl opacity-40 group-hover:opacity-70 transition-opacity duration-500">
          🤖
        </div>

        {/* Hover overlay with buttons */}
        <motion.div
          animate={{ opacity: hovered ? 1 : 0 }}
          className="absolute inset-0 flex items-center justify-center gap-3"
          style={{ background: "rgba(5,8,22,0.75)", backdropFilter: "blur(4px)" }}
        >
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-full btn-secondary font-rajdhani font-bold text-xs uppercase tracking-wider"
            onClick={(e) => e.stopPropagation()}
          >
            ⌂ GitHub
          </a>
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Category badge */}
        <div className="inline-flex items-center gap-1.5 mb-3">
          <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: project.color }} />
          <span className="font-mono text-xs uppercase tracking-widest" style={{ color: project.color }}>
            {project.category}
          </span>
        </div>

        <h3 className="font-orbitron font-bold text-white text-lg mb-2 group-hover:text-electric-blue transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-slate-400 text-sm font-exo leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-lg font-mono text-xs"
              style={{
                background: `${project.color}10`,
                border: `1px solid ${project.color}30`,
                color: project.color,
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Corner decoration */}
      <div
        className="absolute bottom-0 right-0 w-20 h-20 opacity-10 group-hover:opacity-20 transition-opacity"
        style={{ background: `radial-gradient(circle at bottom right, ${project.color}, transparent 70%)` }}
      />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-electric-blue/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-nebula-pink/5 rounded-full blur-3xl" />
      </div>

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-glow/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="font-mono text-cyan-glow text-sm tracking-widest uppercase mb-3">
            &gt;_ Work Showcase
          </div>
          <h2 className="section-heading text-4xl lg:text-5xl">
            <span className="gradient-text">Projects</span>
          </h2>
          <div className="mt-4 flex items-center justify-center gap-3">
            <div className="h-px w-24 bg-gradient-to-r from-transparent to-cyan-glow" />
            <div className="w-2 h-2 rounded-full bg-cyan-glow animate-ping" />
            <div className="h-px w-24 bg-gradient-to-l from-transparent to-cyan-glow" />
          </div>
        </motion.div>

        {/* Projects grid — 2 cards centered */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* View all on GitHub */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/zarnabrajpoot956-web"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 btn-secondary px-8 py-3.5 rounded-full font-rajdhani font-bold text-sm uppercase tracking-wider"
          >
            View All Projects on GitHub
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
