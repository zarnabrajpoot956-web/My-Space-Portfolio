# 🚀 Space Portfolio — Futuristic 3D Developer Portfolio

A cinematic, immersive space-themed developer portfolio built with **React**, **Three.js**, **React Three Fiber**, **Framer Motion**, and **Tailwind CSS**.

---

## ✨ Features

- 🌌 **Immersive 3D Space Scene** — React Three Fiber with floating astronaut, rotating planet, orbit rings, and cosmic particles
- ⭐ **Animated Star Field** — 5000-particle Three.js background with slow rotation
- 🎬 **Cinematic Animations** — Framer Motion page transitions, stagger reveals, parallax
- 💬 **AI Chatbot Assistant (ARIA)** — Floating chat widget with smart responses
- 📊 **Skills Dashboard** — Animated progress bars with glassmorphism cards
- 🃏 **Project Showcase** — Tilt/hover effects with live demo + GitHub links
- 📅 **Experience Timeline** — Animated vertical timeline with glow effects
- 📬 **Contact Form** — Glassmorphism form with input glow effects
- 🖱️ **Custom Cursor** — Glowing cursor that reacts to interactive elements
- 📜 **Scroll Progress Bar** — Gradient progress indicator
- ⏳ **Loading Screen** — Cinematic intro with orbiting animation
- 📱 **Fully Responsive** — Optimized for desktop, tablet, and mobile

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React 18 | UI Framework |
| Three.js | 3D Graphics Engine |
| @react-three/fiber | React renderer for Three.js |
| @react-three/drei | Three.js helpers |
| Framer Motion | Animations & transitions |
| Tailwind CSS | Utility-first styling |
| react-type-animation | Typewriter effect |
| react-intersection-observer | Scroll-triggered animations |
| maath | Math utilities for R3F |

---

## 📁 Project Structure

```
space-portfolio/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── three/
│   │   │   ├── StarsBackground.jsx    # 3D animated star field
│   │   │   └── HeroScene.jsx          # Main 3D planet/astronaut scene
│   │   ├── sections/
│   │   │   ├── Navbar.jsx             # Sticky glass navbar
│   │   │   ├── Hero.jsx               # Fullscreen hero + typewriter
│   │   │   ├── About.jsx              # About + stats cards
│   │   │   ├── Skills.jsx             # Skill dashboard
│   │   │   ├── Projects.jsx           # Project showcase
│   │   │   ├── Experience.jsx         # Timeline
│   │   │   ├── Contact.jsx            # Contact form
│   │   │   └── Footer.jsx             # Footer
│   │   └── ui/
│   │       ├── ChatBot.jsx            # AI assistant widget
│   │       ├── CursorGlow.jsx         # Custom cursor
│   │       ├── LoadingScreen.jsx      # Intro loader
│   │       ├── NebulaBackground.jsx   # CSS nebula effects
│   │       └── ScrollProgress.jsx     # Scroll bar
│   ├── data/
│   │   └── constants.js               # All content data
│   ├── App.jsx                        # Root component
│   ├── index.js                       # Entry point
│   └── index.css                      # Global styles + Tailwind
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

---

## 🚀 Installation & Setup

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Steps

```bash
# 1. Clone or download the project
cd space-portfolio

# 2. Install dependencies
npm install

# 3. Start development server
npm start

# 4. Build for production
npm run build
```

The app will open at **http://localhost:3000**

---

## 🎨 Customization

### Update Your Info
Edit `src/data/constants.js` to update:
- Your name and bio (in Hero/About sections)
- Skills and proficiency levels
- Projects (title, description, links, tags)
- Experience/education timeline
- Contact details

### Change Colors
Edit `tailwind.config.js` and `src/index.css`:
```css
:root {
  --electric-blue: #38bdf8;   /* Primary accent */
  --neon-purple: #8b5cf6;     /* Secondary accent */
  --cyan-glow: #22d3ee;       /* Tertiary accent */
}
```

### Add Real Email (Contact Form)
Install EmailJS and update `Contact.jsx`:
```bash
npm install @emailjs/browser
```

---

## 📦 Dependencies

```json
{
  "react": "^18.2.0",
  "@react-three/fiber": "^8.15.0",
  "@react-three/drei": "^9.88.0",
  "three": "^0.157.0",
  "framer-motion": "^10.16.0",
  "react-type-animation": "^3.2.0",
  "react-intersection-observer": "^9.5.3",
  "maath": "^0.10.4",
  "tailwindcss": "^3.3.0"
}
```

---

## 🌐 Deployment

### Netlify
```bash
npm run build
# Drop the /build folder into Netlify
```

### Vercel
```bash
npm install -g vercel
vercel
```

### GitHub Pages
```bash
npm install gh-pages --save-dev
# Add to package.json: "homepage": "https://yourusername.github.io/space-portfolio"
npm run build && npx gh-pages -d build
```

---

## ⚡ Performance Tips

- The Three.js canvas uses `dpr={[1, 2]}` for sharp rendering on retina displays
- Stars use `maath` for efficient random sphere generation
- `Suspense` boundaries prevent blocking renders
- `useInView` with `triggerOnce: true` ensures animations only run once

---

## 📄 License

MIT © Alex Cosmos — Free to use and customize

---

> "The cosmos is within us. We are made of star-stuff." — Carl Sagan
