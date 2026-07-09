import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Now", href: "#now" },
  { label: "Projects", href: "#projects" },
  { label: "Stack", href: "#stack" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-zinc-800 bg-zinc-950/90 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-3xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="text-sm font-semibold text-zinc-100 tracking-tight hover:text-white transition-colors"
        >
          SJ
        </a>

        <div className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={(e) => {
                e.preventDefault();
                handleNav(l.href);
              }}
              className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors duration-150"
            >
              {l.label}
            </a>
          ))}
        </div>

        <button
          className="md:hidden p-1 text-zinc-400 hover:text-zinc-100 transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-zinc-800 bg-zinc-950 px-4 py-4 flex flex-col gap-1">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={(e) => {
                e.preventDefault();
                handleNav(l.href);
              }}
              className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors py-2"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navigation;
