// src/components/ui/ScrollProgress.jsx
import { motion, useScroll } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-0.5 z-[100] origin-left"
      style={{
        scaleX: scrollYProgress,
        background: "linear-gradient(90deg, #38bdf8, #8b5cf6, #22d3ee)",
        boxShadow: "0 0 10px rgba(56,189,248,0.8)",
      }}
    />
  );
};

export default ScrollProgress;
