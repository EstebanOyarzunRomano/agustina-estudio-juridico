import { Users, FileText, Home, Briefcase, Heart, Shield } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const services = [
  {
    icon: Users,
    title: "Derecho de Familia",
    description: "Divorcios, tenencia, alimentos, adopción y todo lo relacionado con el ámbito familiar.",
  },
  {
    icon: FileText,
    title: "Derecho Civil",
    description: "Contratos, sucesiones, daños y perjuicios, y asesoramiento en cuestiones civiles.",
  },
  {
    icon: Briefcase,
    title: "Derecho Laboral",
    description: "Defensa de derechos laborales, despidos, accidentes de trabajo e indemnizaciones.",
  },
  {
    icon: Home,
    title: "Derecho Inmobiliario",
    description: "Compraventa de inmuebles, locaciones, escrituras y regularización de propiedades.",
  },
  {
    icon: Heart,
    title: "Mediación",
    description: "Resolución alternativa de conflictos con enfoque conciliador y resultados efectivos.",
  },
  {
    icon: Shield,
    title: "Defensa Penal",
    description: "Asistencia y representación legal en procesos penales con total confidencialidad.",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicios" className="py-24 bg-primary">
      <div className="container mx-auto px-6">
        <ScrollReveal className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-5xl text-primary-foreground mb-4">
            Áreas de Práctica
          </h2>
          <div className="gold-divider mx-auto mb-6" />
          <p className="text-primary-foreground/70 max-w-2xl mx-auto text-lg font-light">
            Asesoramiento legal integral en las principales ramas del derecho.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <ScrollReveal
              key={index}
              animation="animate-scale-in"
              delay={index * 300}
            >
              <div className="border border-primary-foreground/15 p-8 hover:border-accent/50 hover:bg-primary-foreground/5 transition-all duration-500 group cursor-default">
                <service.icon
                  size={32}
                  strokeWidth={1.5}
                  className="text-accent mb-5 group-hover:scale-110 transition-transform duration-500"
                />
                <h3 className="font-heading text-xl text-primary-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-primary-foreground/60 font-light text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
