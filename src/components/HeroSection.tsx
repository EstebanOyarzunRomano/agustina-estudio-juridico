import heroImage from "@/assets/images/hero.jpeg";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Estudio jurídico profesional"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/75" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto animate-fade-in-up">
        <div className="gold-divider mx-auto mb-8" />
        <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl text-primary-foreground leading-tight mb-6">
          Defensa Legal con{" "}
          <span className="text-accent italic">Excelencia</span>
        </h1>
        <p className="text-primary-foreground/80 text-lg md:text-xl font-light leading-relaxed mb-10 max-w-2xl mx-auto">
          Compromiso, profesionalismo y dedicación al servicio de tus derechos. 
          Asesoramiento legal integral para cada etapa de tu vida.
        </p>
        <a
          href="#contacto"
          className="inline-block bg-accent text-accent-foreground px-10 py-4 text-sm uppercase tracking-widest font-medium hover:bg-gold-light transition-colors duration-300"
        >
          Solicitar Consulta
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
