/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "space-black": "#050816",
        "cosmic-navy": "#0f172a",
        "electric-blue": "#38bdf8",
        "neon-purple": "#8b5cf6",
        "cyan-glow": "#22d3ee",
        "nebula-pink": "#ec4899",
        "star-white": "#e2e8f0",
      },
      fontFamily: {
        orbitron: ["Orbitron", "sans-serif"],
        rajdhani: ["Rajdhani", "sans-serif"],
        exo: ["Exo 2", "sans-serif"],
        mono: ["Share Tech Mono", "monospace"],
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 10s ease-in-out infinite",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
        "spin-slow": "spin 20s linear infinite",
        twinkle: "twinkle 3s ease-in-out infinite",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 1s ease-out forwards",
        meteor: "meteor 5s linear infinite",
        "border-glow": "borderGlow 2s ease-in-out infinite",
        typewriter: "typewriter 4s steps(40) forwards",
        orbit: "orbit 10s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(56,189,248,0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(56,189,248,0.8), 0 0 80px rgba(139,92,246,0.4)" },
        },
        twinkle: {
          "0%, 100%": { opacity: 1, transform: "scale(1)" },
          "50%": { opacity: 0.3, transform: "scale(0.7)" },
        },
        slideUp: {
          from: { opacity: 0, transform: "translateY(40px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: 1 },
          "70%": { opacity: 1 },
          "100%": { transform: "rotate(215deg) translateX(-500px)", opacity: 0 },
        },
        borderGlow: {
          "0%, 100%": { borderColor: "rgba(56,189,248,0.4)" },
          "50%": { borderColor: "rgba(139,92,246,0.8)" },
        },
        orbit: {
          from: { transform: "rotate(0deg) translateX(120px) rotate(0deg)" },
          to: { transform: "rotate(360deg) translateX(120px) rotate(-360deg)" },
        },
      },
      backgroundImage: {
        "cosmic-gradient": "radial-gradient(ellipse at center, #0f172a 0%, #050816 100%)",
        "neon-gradient": "linear-gradient(135deg, #38bdf8, #8b5cf6, #22d3ee)",
        "card-gradient": "linear-gradient(135deg, rgba(56,189,248,0.05) 0%, rgba(139,92,246,0.05) 100%)",
      },
    },
  },
  plugins: [],
};
