import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    role: "Game Designer Intern",
    company: "ASK Games IND",
    period: "Feb 2025 – Aug 2025",
    location: "Satara",
    bullets: [
      "Built 2 educational game prototypes with a focus on interaction design and learner engagement.",
      "Collaborated with a 5-person team to ship Side2Side, a hypercasual mobile game.",
      "Improved learner interaction metrics by 40% through iterative UX testing.",
    ],
  },
  {
    role: "Frontend Developer Intern",
    company: "Astraclean Tech.",
    period: "Jan 2025 – Mar 2025",
    location: "Bangalore",
    bullets: [
      "Developed responsive websites for Astraclean and LegalCheckPro using Next.js and Tailwind CSS.",
      "Integrated real-time APIs and built a reusable component library that cut frontend development time by ~30%.",
      "Owned the end-to-end UI from design handoff to production deployment.",
    ],
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" ref={ref} className="section-divider py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xs mono text-zinc-500 uppercase tracking-widest mb-8">Experience</h2>

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 12 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-3">
                  <div>
                    <span className="text-sm font-medium text-zinc-100">{exp.role}</span>
                    <span className="text-zinc-600 text-sm"> · {exp.company}</span>
                  </div>
                  <span className="mono text-xs text-zinc-600 shrink-0">{exp.period}</span>
                </div>
                <ul className="space-y-1.5 pl-0">
                  {exp.bullets.map((b, j) => (
                    <li key={j} className="flex gap-2 text-sm text-zinc-400 leading-relaxed">
                      <span className="text-zinc-700 mt-1.5 shrink-0">–</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
