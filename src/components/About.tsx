import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" ref={ref} className="section-divider py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="space-y-4 text-zinc-400 leading-relaxed text-[15px]"
        >
          <h2 className="text-xs mono text-zinc-500 uppercase tracking-widest mb-8">About</h2>
          <p>
            I started writing code because I wanted to build things, not because I wanted a job.
            That's still true. I'm drawn to problems where software can do something genuinely
            useful — not just impressive.
          </p>
          <p>
            My focus right now is on developer tooling and the kind of products where the user
            experience is deeply tied to how well the underlying software is designed. I think
            a lot about what makes a tool feel good to use versus merely functional.
          </p>
          <p>
            I've shipped products that people actually use, worked across the full stack, and
            done two internships where I learned what real codebases look like. I'm interested
            in founding or joining an early-stage team where the problems are hard and the
            speed of iteration matters.
          </p>
          <p>
            Based in Pune. Open to remote.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
