// src/components/ui/CursorGlow.jsx
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CursorGlow = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    const handleOver = (e) => {
      if (e.target.closest("button, a, input, textarea")) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };
    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseover", handleOver);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseover", handleOver);
    };
  }, []);

  // Only show on desktop
  if (typeof window !== "undefined" && window.innerWidth < 768) return null;

  return (
    <motion.div
      className="fixed pointer-events-none z-[999] rounded-full mix-blend-screen"
      animate={{
        x: pos.x - (isHovering ? 20 : 12),
        y: pos.y - (isHovering ? 20 : 12),
        width: isHovering ? 40 : 24,
        height: isHovering ? 40 : 24,
      }}
      transition={{ type: "spring", stiffness: 800, damping: 40, mass: 0.5 }}
      style={{
        background: isHovering
          ? "rgba(56,189,248,0.3)"
          : "rgba(56,189,248,0.5)",
        boxShadow: isHovering
          ? "0 0 20px rgba(56,189,248,0.6), 0 0 40px rgba(139,92,246,0.4)"
          : "0 0 10px rgba(56,189,248,0.5)",
      }}
    />
  );
};

export default CursorGlow;
