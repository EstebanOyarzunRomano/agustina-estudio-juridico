import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/images/logo1-sin fondo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "#inicio", label: "Inicio" },
    { href: "#sobre-mi", label: "Sobre Mí" },
    { href: "#servicios", label: "Servicios" },
    { href: "#contacto", label: "Contacto" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-gold/20 transition-all duration-300">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#inicio"
          className="-ml-3 gap-0 flex items-center hover:opacity-90 transition-opacity duration-300"
        >
          <img
            src={logo}
            alt="Agustina Andrade - Abogada"
            className="h-16 w-auto"
          />

          <div className="hidden sm:flex flex-col leading-none">
            <span className="font-heading text-lg tracking-wide text-primary-foreground">
              Agustina Andrade
            </span>

            <span className="text-xs uppercase tracking-[0.25em] text-accent">
              Abogada
            </span>
          </div>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative text-sm uppercase tracking-widest text-primary-foreground/80 hover:text-accent transition-colors duration-300 after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-[-4px] after:left-0 after:bg-accent after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-primary-foreground hover:text-accent transition-colors duration-300"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div
        className={`md:hidden bg-primary border-t border-gold/20 overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-4 py-6">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-sm uppercase tracking-widest text-primary-foreground/80 hover:text-accent transition-colors duration-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
