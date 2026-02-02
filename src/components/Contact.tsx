import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "snehajain161104@gmail.com",
      href: "mailto:snehajain161104@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9284598335",
      href: "tel:+919284598335",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Pune, Maharashtra, India",
      href: "#",
    },
  ];

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm">Get in touch</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">Let's Connect</h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            I'm currently looking for new opportunities. Whether you have a question 
            or just want to say hi, I'll try my best to get back to you!
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactInfo.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card p-6 rounded-xl text-center hover:border-primary/50 transition-all group"
              >
                <div className="inline-flex p-3 bg-primary/10 rounded-lg mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="text-primary" size={24} />
                </div>
                <h3 className="font-semibold text-foreground mb-1">{item.label}</h3>
                <p className="text-muted-foreground text-sm">{item.value}</p>
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <a
              href="mailto:snehajain161104@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-all glow-primary text-lg"
            >
              <Send size={20} />
              Say Hello
            </a>

            <div className="flex justify-center gap-4 mt-8">
              <a
                href="https://github.com/snehajain16"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 glass-card rounded-full text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/sneha-jain-666830259/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 glass-card rounded-full text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:snehajain161104@gmail.com"
                className="p-4 glass-card rounded-full text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
              >
                <Mail size={24} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
