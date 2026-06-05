// src/components/sections/Contact.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const InputField = ({ label, type = "text", name, value, onChange, placeholder, isTextarea }) => (
  <div className="flex flex-col gap-2">
    <label className="font-mono text-xs text-slate-500 uppercase tracking-widest">{label}</label>
    {isTextarea ? (
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={5}
        className="input-glow bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-slate-300 font-exo text-sm placeholder-slate-600 resize-none transition-all duration-300 focus:bg-slate-900/80 focus:text-white"
      />
    ) : (
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="input-glow bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-slate-300 font-exo text-sm placeholder-slate-600 transition-all duration-300 focus:bg-slate-900/80 focus:text-white"
      />
    )}
  </div>
);

const Contact = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    await new Promise((r) => setTimeout(r, 1500));
    setSending(false);
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-80 h-80 bg-electric-blue/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-nebula-pink/5 rounded-full blur-3xl" />
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-electric-blue/40 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${4 + Math.random() * 6}s`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-electric-blue/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="font-mono text-electric-blue text-sm tracking-widest uppercase mb-3">
            &gt;_ Let's Connect
          </div>
          <h2 className="section-heading text-4xl lg:text-5xl">
            <span className="text-white">Get In </span>
            <span className="gradient-text">Touch</span>
          </h2>
          <div className="mt-4 flex items-center justify-center gap-3">
            <div className="h-px w-24 bg-gradient-to-r from-transparent to-electric-blue" />
            <div className="w-2 h-2 rounded-full bg-electric-blue animate-ping" />
            <div className="h-px w-24 bg-gradient-to-l from-transparent to-electric-blue" />
          </div>
          <p className="mt-6 text-slate-400 max-w-lg mx-auto font-exo">
            Ready to build something extraordinary? Whether you have a project in mind
            or just want to discuss the future of the web — I'd love to hear from you.
          </p>
        </motion.div>

        <div ref={ref} className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <form onSubmit={handleSubmit} className="glass glow-border-blue rounded-2xl p-6 lg:p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <InputField label="Your Name" name="name" value={form.name} onChange={handleChange} placeholder="Your name" />
                <InputField label="Email Address" type="email" name="email" value={form.email} onChange={handleChange} placeholder="Your email" />
              </div>

              <InputField label="Message" name="message" value={form.message} onChange={handleChange} placeholder="Tell me about your project..." isTextarea />

              <motion.button
                type="submit"
                disabled={sending || sent}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full btn-primary py-4 rounded-xl font-rajdhani font-bold uppercase tracking-wider text-sm flex items-center justify-center gap-2 disabled:opacity-60"
              >
                <span className="relative z-10">
                  {sent ? "✓ Message Sent!" : sending ? "Transmitting..." : "🚀 Send Message"}
                </span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
