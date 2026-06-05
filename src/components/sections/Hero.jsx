// src/components/sections/Hero.jsx
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import HeroScene from "../three/HeroScene";

const SocialIcon = ({ href, label, children }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    whileHover={{ scale: 1.2, y: -4 }}
    whileTap={{ scale: 0.9 }}
    className="w-10 h-10 glass glow-border-blue rounded-full flex items-center justify-center text-electric-blue hover:text-white hover:bg-electric-blue/20 transition-all duration-300"
  >
    {children}
  </motion.a>
);

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Cosmic gradient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-electric-blue/5 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-neon-purple/5 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-glow/5 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "2s" }} />
      </div>

      {/* Meteors */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute h-px bg-gradient-to-r from-transparent via-electric-blue to-transparent"
          style={{
            top: `${10 + i * 15}%`,
            left: `${Math.random() * 60}%`,
            width: `${80 + Math.random() * 120}px`,
            transform: "rotate(-45deg)",
            animation: `meteor-fall ${3 + i * 0.7}s linear ${i * 1.2}s infinite`,
            opacity: 0.6,
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto px-6 pt-24 pb-16 grid lg:grid-cols-2 gap-12 items-center w-full">
        {/* Left: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col gap-6 z-10"
        >
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 glass glow-border-blue px-4 py-2 rounded-full w-fit"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-ping" />
            <span className="w-2 h-2 rounded-full bg-green-400 absolute" />
            <span className="font-mono text-xs text-green-400 tracking-widest">
              AVAILABLE FOR WORK
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="font-mono text-electric-blue text-sm tracking-widest mb-3 uppercase">
              &gt;_ Hello World, I'm
            </div>
            <h1 className="section-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight">
              <span className="text-white">Zarnab </span>
              <span className="gradient-text">Waheed</span>
            </h1>
          </motion.div>

          {/* Typewriter */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-lg sm:text-xl lg:text-2xl font-rajdhani font-medium text-slate-300"
          >
            <span className="text-slate-500">// </span>
            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                2000,
                "Frontend & Backend Engineer",
                2000,
                "AI & Machine Learning Enthusiast",
                2000,
                "Flutter Mobile App Developer",
                2000,
                "Laravel & Flask API Builder",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-electric-blue"
            />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="text-slate-400 font-exo text-base lg:text-lg leading-relaxed max-w-xl"
          >
            A{" "}
            <span className="text-electric-blue font-medium">
              Full Stack Developer
            </span>{" "}
            with strong experience in React, Node.js, Laravel, Flask, and Flutter.
            Passionate about AI, Machine Learning, and building scalable,
            user-friendly applications with modern technologies.
          </motion.p>

          {/* CTA Buttons REMOVED */}

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="flex items-center gap-3 pt-2"
          >
            <span className="text-slate-600 text-xs font-mono uppercase tracking-widest">
              Connect
            </span>
            <div className="h-px w-8 bg-slate-700" />
            <SocialIcon
              href="https://github.com/zarnabrajpoot956-web"
              label="GitHub"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </SocialIcon>

            <SocialIcon
              href="https://www.linkedin.com/in/zarnab956"
              label="LinkedIn"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </SocialIcon>
          </motion.div>
        </motion.div>

        {/* Right: 3D Scene */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
          className="h-[400px] sm:h-[500px] lg:h-[600px] w-full relative"
        >
          <div className="absolute inset-0 rounded-full bg-electric-blue/5 blur-3xl animate-pulse-glow" />
          <HeroScene />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="font-mono text-xs text-slate-500 tracking-widest uppercase">
          Scroll
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-electric-blue to-transparent animate-pulse" />
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-1.5 h-1.5 rounded-full bg-electric-blue"
        />
      </motion.div>
    </section>
  );
};

export default Hero;    