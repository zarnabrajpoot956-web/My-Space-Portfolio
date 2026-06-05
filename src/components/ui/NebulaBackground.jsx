// src/components/ui/NebulaBackground.jsx
const NebulaBackground = () => (
  <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
    {/* Deep space gradient */}
    <div className="absolute inset-0"
      style={{
        background: "radial-gradient(ellipse at 20% 50%, rgba(15,23,42,0.8) 0%, #050816 70%)",
      }}
    />

    {/* Nebula clouds */}
    <div
      className="absolute -top-32 -left-32 w-96 h-96 rounded-full opacity-[0.07] blur-3xl"
      style={{ background: "radial-gradient(circle, #8b5cf6, #38bdf8, transparent)" }}
    />
    <div
      className="absolute top-1/3 -right-32 w-80 h-80 rounded-full opacity-[0.06] blur-3xl"
      style={{
        background: "radial-gradient(circle, #22d3ee, #8b5cf6, transparent)",
        animation: "float 18s ease-in-out infinite",
      }}
    />
    <div
      className="absolute bottom-1/4 left-1/4 w-72 h-72 rounded-full opacity-[0.05] blur-3xl"
      style={{
        background: "radial-gradient(circle, #ec4899, #8b5cf6, transparent)",
        animation: "float 22s ease-in-out infinite reverse",
      }}
    />
    <div
      className="absolute top-2/3 right-1/3 w-64 h-64 rounded-full opacity-[0.04] blur-3xl"
      style={{
        background: "radial-gradient(circle, #38bdf8, #22d3ee, transparent)",
        animation: "float 15s ease-in-out infinite",
        animationDelay: "3s",
      }}
    />

    {/* Grid overlay */}
    <div
      className="absolute inset-0 opacity-[0.015]"
      style={{
        backgroundImage:
          "linear-gradient(rgba(56,189,248,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.5) 1px, transparent 1px)",
        backgroundSize: "80px 80px",
      }}
    />

    {/* Noise texture */}
    <div className="noise-overlay" />
  </div>
);

export default NebulaBackground;
