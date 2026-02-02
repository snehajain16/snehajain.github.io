import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Game Designer Intern",
    company: "ASK Games IND",
    location: "Satara, India",
    period: "Feb 2025 – Aug 2025",
    description: [
      "Developed 2 educational game prototypes focused on intuitive UI/UX and engagement",
      "Increased learner interaction by 40% through thoughtful design and mechanics",
      "Contributed to the hypercasual game Side2Side, collaborating with a 5-member team",
    ],
  },
  {
    title: "Frontend Developer Intern",
    company: "Astraclean Tech.",
    location: "Bangalore, India",
    period: "Jan 2025 – Mar 2025",
    description: [
      "Developed responsive websites for Astraclean and LegalCheckPro using Next.js and Tailwind CSS",
      "Designed user-focused UI/UX to enhance performance and conversion rates",
      "Integrated real-time APIs and reusable components, improving frontend efficiency by 30%",
    ],
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm">Where I've worked</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">Experience</h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary rounded-full border-4 border-background md:-translate-x-1/2 z-10" />

                {/* Content */}
                <div className={`flex-1 ml-12 md:ml-0 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <div className="glass-card p-6 rounded-xl hover:border-primary/50 transition-colors">
                    <div className="flex items-center gap-2 text-primary text-sm font-mono mb-3">
                      <Calendar size={14} />
                      {exp.period}
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-1">
                      {exp.title}
                    </h3>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
                      <Briefcase size={14} />
                      {exp.company} • {exp.location}
                    </div>
                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-muted-foreground text-sm flex gap-2">
                          <span className="text-primary mt-1.5">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
