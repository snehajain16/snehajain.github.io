import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ExternalLink, Folder } from "lucide-react";

const projects = [
  {
    title: "ExpenseFlow",
    description:
      "Full-stack expense tracker with receipt upload and transaction simplification to reduce redundant payments.",
    tech: ["React.js", "Node.js", "MongoDB", "JWT"],
    github: "https://github.com/snehajain16",
    color: "from-primary to-emerald-600",
  },
  {
    title: "Placement Management System",
    description:
      "Role-based placement backend using Spring Boot, enabling admins to manage companies and job postings, and students to apply for roles.",
    tech: ["Java", "Spring Boot", "MySQL", "REST APIs"],
    github: "https://github.com/snehajain16",
    color: "from-accent to-orange-500",
  },
  {
    title: "Encryption Decryption Tool",
    description:
      "Java-based encryption tool using custom cryptographic logic and key-based transformations for secure data handling.",
    tech: ["Java", "Swing GUI", "Cryptography"],
    github: "https://github.com/snehajain16",
    color: "from-violet-500 to-purple-600",
  },
  {
    title: "Chess Engine",
    description:
      "Two-player chess engine with Swing GUI, implementing move validation, check/checkmate detection, and turn-based logic.",
    tech: ["Java", "Swing", "Game Logic"],
    github: "https://github.com/snehajain16",
    color: "from-blue-500 to-cyan-500",
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 relative bg-secondary/30">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm">What I've built</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">Featured Projects</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="glass-card rounded-xl overflow-hidden h-full hover:border-primary/50 transition-all duration-300">
                {/* Gradient header */}
                <div className={`h-2 bg-gradient-to-r ${project.color}`} />
                
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-muted rounded-lg">
                      <Folder className="text-primary" size={24} />
                    </div>
                    <div className="flex gap-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <Github size={20} />
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <ExternalLink size={20} />
                      </a>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-muted text-muted-foreground text-xs font-mono rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/snehajain16"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground rounded-lg font-medium hover:bg-secondary transition-all"
          >
            <Github size={18} />
            View More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
