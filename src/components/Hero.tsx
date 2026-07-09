import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center pt-14">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-24 w-full">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {/* Status badge */}
          <div className="flex items-center gap-2 mb-10">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="mono text-xs text-zinc-500">Open to founding teams &amp; early-stage roles</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-zinc-100 leading-[1.1] mb-6">
            Building products<br />with code.
          </h1>

          {/* Bio */}
          <p className="text-lg text-zinc-400 leading-relaxed max-w-xl mb-10">
            I'm Sneha Jain — software engineer based in Pune.
            I care about developer tooling, clean interfaces, and software
            that solves real problems rather than imaginary ones.
          </p>

          {/* Social links */}
          <div className="flex items-center gap-5">
            <a
              href="https://github.com/snehajain16"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-zinc-400 hover:text-zinc-100 transition-colors duration-150"
            >
              <Github size={16} />
              GitHub
            </a>
            <span className="text-zinc-700">·</span>
            <a
              href="https://www.linkedin.com/in/sneha-jain-666830259/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-zinc-400 hover:text-zinc-100 transition-colors duration-150"
            >
              <Linkedin size={16} />
              LinkedIn
            </a>
            <span className="text-zinc-700">·</span>
            <a
              href="mailto:snehajain161104@gmail.com"
              className="flex items-center gap-2 text-sm text-zinc-400 hover:text-zinc-100 transition-colors duration-150"
            >
              <Mail size={16} />
              Email
            </a>
            <span className="text-zinc-700">·</span>
            <a
              href="https://leetcode.com/u/snehajain16/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-zinc-400 hover:text-zinc-100 transition-colors duration-150"
            >
              <ExternalLink size={16} />
              LeetCode
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
