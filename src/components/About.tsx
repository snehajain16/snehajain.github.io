import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, MapPin, Award } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { value: "9.08", label: "CGPA" },
    { value: "2+", label: "Internships" },
    { value: "5+", label: "Projects" },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm">Get to know me</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">About Me</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-muted-foreground leading-relaxed mb-6">
              I am a passionate Software Developer pursuing a B.Tech in Computer Science 
              Engineering at Walchand Institute of Technology, Solapur. With a strong 
              foundation in Java, data structures, and object-oriented programming, I've 
              focused my career path on backend development.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              My experience spans full-stack web development using technologies like 
              React.js, Spring Boot, and Node.js. I'm particularly drawn to building 
              scalable, production-ready systems with clean architecture and robust APIs.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Currently seeking Java/Spring Boot internship or fresher backend roles 
              where I can contribute to real-world projects and continue growing as a developer.
            </p>
          </motion.div>

          {/* Info cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            <div className="glass-card p-6 rounded-xl">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <GraduationCap className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Education</h3>
                  <p className="text-muted-foreground text-sm">
                    B.Tech in Computer Science Engineering
                  </p>
                  <p className="text-muted-foreground text-sm">
                    Walchand Institute of Technology, Solapur
                  </p>
                  <p className="text-primary text-sm font-mono mt-1">2022 - 2026</p>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 rounded-xl">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <MapPin className="text-accent" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Location</h3>
                  <p className="text-muted-foreground text-sm">
                    Pune, Maharashtra, India
                  </p>
                  <p className="text-muted-foreground text-sm">
                    Open to remote opportunities
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 rounded-xl">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Award className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Certification</h3>
                  <p className="text-muted-foreground text-sm">
                    Infosys Springboard – Java Foundation
                  </p>
                  <p className="text-muted-foreground text-sm">
                    Core Java, OOP, Collections, Exception Handling
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-3 gap-6 mt-16"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center glass-card p-6 rounded-xl"
            >
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
