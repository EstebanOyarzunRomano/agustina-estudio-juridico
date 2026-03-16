const Footer = () => {
  return (
    <footer className="bg-primary py-10 border-t border-accent/20">
      <div className="container mx-auto px-6 text-center">
        <p className="font-heading text-lg text-primary-foreground mb-2">
          <span className="text-accent">⚖</span> Estudio Jurídico
        </p>
        <p className="text-primary-foreground/50 text-xs uppercase tracking-widest">
          © {new Date().getFullYear()} — Todos los derechos reservados
        </p>
      </div>
    </footer>
  );
};

export default Footer;
