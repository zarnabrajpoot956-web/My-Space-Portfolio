// src/components/ui/LoadingScreen.jsx
import { motion } from "framer-motion";

const LoadingScreen = ({ onComplete }) => {
  return (
    <motion.div
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center"
      style={{ background: "#050816" }}
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      onAnimationComplete={onComplete}
    >
      {/* Stars */}
      {[...Array(40)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-0.5 h-0.5 rounded-full bg-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            repeatDelay: Math.random() * 2,
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}

      {/* Logo removed (DX removed) */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.2 }}
        className="w-20 h-20 rounded-full bg-gradient-to-br from-electric-blue to-neon-purple flex items-center justify-center mb-8 shadow-2xl shadow-electric-blue/40"
      />

      {/* Title removed (DevXplorer removed) */}

      {/* Subtitle removed (Initializing text removed) */}

      {/* Progress bar */}
      <div className="w-48 h-0.5 bg-slate-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="h-full rounded-full"
          style={{
            background: "linear-gradient(90deg, #38bdf8, #8b5cf6, #22d3ee)",
            boxShadow: "0 0 10px rgba(56,189,248,0.8)",
          }}
        />
      </div>

      {/* Orbiting dot */}
      <motion.div
        className="absolute"
        animate={{ rotate: 360 }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        style={{ width: 200, height: 200 }}
      >
        <div className="absolute top-0 left-1/2 w-3 h-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-electric-blue shadow-lg shadow-electric-blue/80" />
      </motion.div>
    </motion.div>
  );
};

export default LoadingScreen;