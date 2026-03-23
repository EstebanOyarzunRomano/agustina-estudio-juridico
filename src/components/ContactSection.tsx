import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import ScrollReveal from "./ScrollReveal";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Gracias por tu consulta. Nos pondremos en contacto a la brevedad.");
    setFormData({ nombre: "", email: "", telefono: "", mensaje: "" });
  };

  return (
    <section id="contacto" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <ScrollReveal className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-5xl text-foreground mb-4">
            Contacto
          </h2>
          <div className="gold-divider mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg font-light">
            Agendá tu consulta.
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact info */}
          <ScrollReveal animation="animate-fade-in-left">
            <div className="space-y-8">
              {[
                { icon: Phone, label: "Teléfono", value: "2964 61-8615" },
                { icon: Mail, label: "Email", value: "contacto@estudiojuridico.com" },
                { icon: MapPin, label: "Dirección", value: "Perú 85, Río Grande, Tierra del Fuego" },
                { icon: Clock, label: "Horario", value: "Lunes a Viernes, 15:00 a 19:00 hs" },
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4 group">
                  <div className="w-12 h-12 flex items-center justify-center bg-primary text-primary-foreground flex-shrink-0 group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-500">
                    <item.icon size={20} strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-widest text-muted-foreground mb-1">
                      {item.label}
                    </p>
                    <p className="text-foreground font-light">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Form */}
          <ScrollReveal animation="animate-fade-in-right">
            <form onSubmit={handleSubmit} className="space-y-5">
              {[
                { type: "text", placeholder: "Nombre completo", key: "nombre" as const, required: true },
                { type: "email", placeholder: "Email", key: "email" as const, required: true },
                { type: "tel", placeholder: "Teléfono", key: "telefono" as const, required: false },
              ].map((field) => (
                <input
                  key={field.key}
                  type={field.type}
                  placeholder={field.placeholder}
                  required={field.required}
                  value={formData[field.key]}
                  onChange={(e) => setFormData({ ...formData, [field.key]: e.target.value })}
                  className="w-full bg-card border border-border px-5 py-3.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent focus:shadow-md transition-all duration-300 text-sm"
                />
              ))}
              <textarea
                placeholder="Describí brevemente tu consulta..."
                rows={5}
                required
                value={formData.mensaje}
                onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                className="w-full bg-card border border-border px-5 py-3.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent focus:shadow-md transition-all duration-300 text-sm resize-none"
              />
              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground py-4 text-sm uppercase tracking-widest font-medium hover:bg-navy-light hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
              >
                Enviar Consulta
              </button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
