import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ArrowUpRight } from "lucide-react";

const projects = [
  {
    name: "Lockr",
    tagline: "Terminal-native secrets vault for developers.",
    problem:
      "API keys, tokens, and credentials scattered across .env files and notes apps — one bad commit away from a breach.",
    solution:
      "A CLI-first vault with GPG-encrypted storage, optional Git-based sync, and a terminal UI that gets out of your way.",
    stack: ["Python", "GPG/OpenSSL", "TUI", "Git"],
    learned: "Encryption at rest is simpler than most developers think. The real challenge is UX in a constrained medium.",
    github: "https://github.com/snehajain16/lockr",
  },
  {
    name: "ExpenseFlow",
    tagline: "Personal finance tracking without the friction.",
    problem:
      "Most finance apps are either too powerful (and unused) or too simple (and useless). Setting up categories takes longer than the actual tracking.",
    solution:
      "A single-page tracker with instant categorization, receipt upload, and transaction deduplication. No spreadsheet required.",
    stack: ["React", "Node.js", "MongoDB", "JWT"],
    learned: "Good personal finance UX is about reducing the time between 'I spent money' and 'I recorded it'.",
    github: "https://github.com/snehajain16/expenseflow",
  },
  {
    name: "Six Thinking Hats AI",
    tagline: "Structured multi-perspective reasoning with local LLMs.",
    problem:
      "LLMs default to agreeable, one-dimensional responses. For complex decisions you need structured disagreement.",
    solution:
      "A multi-agent pipeline that runs six LLM instances in parallel — each adopting a distinct thinking role — then aggregates into a unified decision output via FastAPI.",
    stack: ["Python", "FastAPI", "Ollama", "Local LLMs"],
    learned: "Prompt engineering for role constraint is as important as the model itself. Weak constraints collapse into consensus.",
    github: "https://github.com/snehajain16/six-thinking-hats-ai",
  },
  {
    name: "gh-readme-ai",
    tagline: "Auto-generate production-ready READMEs from your codebase.",
    problem:
      "Developers ship code and skip documentation. README files are either empty or written once and never updated.",
    solution:
      "A CLI + GitHub Action that reads project structure, infers purpose and usage from code, and generates a structured README using Jinja2 templates.",
    stack: ["Python", "GitHub API", "Jinja2", "GitHub Actions"],
    learned: "Automation only works when the output is good enough to ship. Templating > generation for consistency.",
    github: "https://github.com/snehajain16/gh-readme-ai",
  },
  {
    name: "PyAudit",
    tagline: "Python code quality in one command.",
    problem:
      "Running Flake8, Bandit, and other linters separately means inconsistent reports and no single source of truth for CI.",
    solution:
      "A unified CLI tool that aggregates linting, security analysis, and style checks into one structured report with GitHub Actions integration.",
    stack: ["Python", "Flake8", "Bandit", "GitHub API"],
    learned: "Developer tooling is a product. Output formatting and exit codes matter as much as correctness.",
    github: "https://github.com/snehajain16/pyaudit",
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" ref={ref} className="section-divider py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xs mono text-zinc-500 uppercase tracking-widest mb-8">Projects</h2>

          <div className="space-y-12">
            {projects.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group"
              >
                {/* Header */}
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div>
                    <h3 className="text-base font-semibold text-zinc-100 group-hover:text-white transition-colors">
                      {p.name}
                    </h3>
                    <p className="text-sm text-zinc-500 mt-0.5">{p.tagline}</p>
                  </div>
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs text-zinc-500 hover:text-zinc-300 transition-colors shrink-0 mt-1"
                  >
                    <Github size={13} />
                    <ArrowUpRight size={11} />
                  </a>
                </div>

                {/* Case study content */}
                <div className="mt-4 border border-zinc-800 rounded-lg p-4 space-y-3 bg-zinc-900/40">
                  <div className="grid grid-cols-[60px_1fr] gap-3 sm:grid-cols-[80px_1fr]">
                    <span className="mono text-xs text-zinc-600 pt-0.5">Problem</span>
                    <span className="text-sm text-zinc-400 leading-relaxed">{p.problem}</span>
                  </div>
                  <div className="grid grid-cols-[60px_1fr] gap-3 sm:grid-cols-[80px_1fr]">
                    <span className="mono text-xs text-zinc-600 pt-0.5">Solution</span>
                    <span className="text-sm text-zinc-400 leading-relaxed">{p.solution}</span>
                  </div>
                  <div className="grid grid-cols-[60px_1fr] gap-3 sm:grid-cols-[80px_1fr]">
                    <span className="mono text-xs text-zinc-600 pt-0.5">Learned</span>
                    <span className="text-sm text-zinc-400 leading-relaxed">{p.learned}</span>
                  </div>
                  <div className="grid grid-cols-[60px_1fr] gap-3 sm:grid-cols-[80px_1fr]">
                    <span className="mono text-xs text-zinc-600 pt-0.5">Stack</span>
                    <div className="flex flex-wrap gap-1.5">
                      {p.stack.map((t) => (
                        <span key={t} className="tag">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 pt-6 border-t border-zinc-800">
            <a
              href="https://github.com/snehajain16"
              target="_blank"
              rel="noopener noreferrer"
              className="link-arrow text-sm"
            >
              <Github size={14} />
              More on GitHub
              <ArrowUpRight size={12} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
