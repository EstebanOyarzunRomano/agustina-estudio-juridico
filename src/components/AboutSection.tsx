import { Scale, BookOpen, Award } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const AboutSection = () => {
  return (
    <section id="sobre-mi" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <ScrollReveal className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-5xl text-foreground mb-4">
            Sobre Mí
          </h2>
          <div className="gold-divider mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg font-light leading-relaxed">
            Abogada matriculada con vocación de servicio y compromiso con la justicia. 
            Brindo asesoramiento personalizado en diversas ramas del derecho.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              icon: Scale,
              title: "Ética Profesional",
              description:
                "Cada caso se aborda con integridad, transparencia y un profundo respeto por los valores que rigen la profesión.",
            },
            {
              icon: BookOpen,
              title: "Formación Continua",
              description:
                "Actualización permanente en las últimas reformas legislativas y jurisprudencia para brindar el mejor servicio.",
            },
            {
              icon: Award,
              title: "Compromiso Total",
              description:
                "Dedicación completa a cada cliente, buscando siempre la solución más favorable y eficiente para cada situación.",
            },
          ].map((item, index) => (
            <ScrollReveal
              key={index}
              animation="animate-slide-up"
              delay={index * 400}
            >
              <div className="bg-card p-8 text-center border border-border hover:border-accent/40 hover:shadow-lg hover:-translate-y-2 transition-all duration-500 group">
                <div className="w-14 h-14 mx-auto mb-6 flex items-center justify-center bg-primary text-primary-foreground group-hover:bg-accent group-hover:text-accent-foreground group-hover:scale-110 transition-all duration-500">
                  <item.icon size={28} strokeWidth={1.5} />
                </div>
                <h3 className="font-heading text-xl text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground font-light leading-relaxed text-sm">
                  {item.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
