import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" ref={ref} className="section-divider py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xs mono text-zinc-500 uppercase tracking-widest mb-8">Contact</h2>

          <p className="text-zinc-300 text-base mb-2 font-medium">Let's build something.</p>
          <p className="text-zinc-500 text-sm mb-8 max-w-md leading-relaxed">
            If you're working on something interesting — a product, a startup, or a hard problem —
            I'd like to hear about it.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:snehajain161104@gmail.com"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-zinc-100 text-zinc-900 rounded-md text-sm font-medium hover:bg-white transition-colors"
            >
              <Mail size={14} />
              snehajain161104@gmail.com
            </a>
          </div>

          <div className="flex items-center gap-5 mt-8">
            <a
              href="https://github.com/snehajain16"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-zinc-500 hover:text-zinc-100 transition-colors"
            >
              <Github size={14} />
              GitHub
              <ArrowUpRight size={11} />
            </a>
            <a
              href="https://www.linkedin.com/in/sneha-jain-666830259/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-zinc-500 hover:text-zinc-100 transition-colors"
            >
              <Linkedin size={14} />
              LinkedIn
              <ArrowUpRight size={11} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
