// src/App.jsx
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";

// Backgrounds
import StarsBackground from "./components/three/StarsBackground";
import NebulaBackground from "./components/ui/NebulaBackground";

// UI
import LoadingScreen from "./components/ui/LoadingScreen";
import ScrollProgress from "./components/ui/ScrollProgress";
import CursorGlow from "./components/ui/CursorGlow";

// Sections
import Navbar from "./components/sections/Navbar";
import Hero from "./components/sections/Hero";
import Education from "./components/sections/Education";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-space-black text-white overflow-x-hidden">
      {/* Loading screen */}
      <AnimatePresence>
        {loading && <LoadingScreen key="loading" />}
      </AnimatePresence>

      {!loading && (
        <>
          {/* Fixed backgrounds */}
          <NebulaBackground />
          <StarsBackground />

          {/* Fixed UI elements */}
          <ScrollProgress />
          <CursorGlow />
          

          {/* Main content */}
          <div className="relative z-10">
            <Navbar />
            <main>
              <Hero />
              <Education />
              <Skills />
              <Projects />
              <Contact />
            </main>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
