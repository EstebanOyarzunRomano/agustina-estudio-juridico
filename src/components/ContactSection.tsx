import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form handling placeholder
    alert("Gracias por tu consulta. Nos pondremos en contacto a la brevedad.");
    setFormData({ nombre: "", email: "", telefono: "", mensaje: "" });
  };

  return (
    <section id="contacto" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-5xl text-foreground mb-4">
            Contacto
          </h2>
          <div className="gold-divider mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg font-light">
            Agendá tu consulta. Primera entrevista sin cargo.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact info */}
          <div className="space-y-8">
            {[
              { icon: Phone, label: "Teléfono", value: "+54 11 1234-5678" },
              { icon: Mail, label: "Email", value: "contacto@estudiojuridico.com" },
              { icon: MapPin, label: "Dirección", value: "Av. Corrientes 1234, Piso 8°, CABA" },
              { icon: Clock, label: "Horario", value: "Lunes a Viernes, 9:00 a 18:00 hs" },
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center bg-primary text-primary-foreground flex-shrink-0">
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

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              placeholder="Nombre completo"
              required
              value={formData.nombre}
              onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
              className="w-full bg-card border border-border px-5 py-3.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors text-sm"
            />
            <input
              type="email"
              placeholder="Email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-card border border-border px-5 py-3.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors text-sm"
            />
            <input
              type="tel"
              placeholder="Teléfono"
              value={formData.telefono}
              onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
              className="w-full bg-card border border-border px-5 py-3.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors text-sm"
            />
            <textarea
              placeholder="Describí brevemente tu consulta..."
              rows={5}
              required
              value={formData.mensaje}
              onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
              className="w-full bg-card border border-border px-5 py-3.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors text-sm resize-none"
            />
            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground py-4 text-sm uppercase tracking-widest font-medium hover:bg-navy-light transition-colors duration-300"
            >
              Enviar Consulta
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
