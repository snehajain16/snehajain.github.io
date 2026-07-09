import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const items = [
  { label: "Building", value: "Lockr — a terminal-native secrets vault. Working on team collaboration features." },
  { label: "Exploring", value: "AI-native developer tools and CLI-first product experiences." },
  { label: "Learning", value: "Distributed systems fundamentals and Rust." },
  { label: "Reading", value: "The Mom Test — Rob Fitzpatrick." },
  { label: "Based in", value: "Pune, India. Open to remote and relocation." },
];

const Now = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="now" ref={ref} className="section-divider py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xs mono text-zinc-500 uppercase tracking-widest">Now</h2>
            <span className="mono text-xs text-zinc-600">Updated July 2026</span>
          </div>

          <div className="space-y-5">
            {items.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 8 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="grid grid-cols-[100px_1fr] gap-4 sm:grid-cols-[120px_1fr]"
              >
                <span className="mono text-xs text-zinc-500 pt-0.5 shrink-0">{item.label}</span>
                <span className="text-sm text-zinc-300 leading-relaxed">{item.value}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Now;
