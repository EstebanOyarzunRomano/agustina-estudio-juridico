import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import ScrollReveal from "./ScrollReveal";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  });

  const [enviando, setEnviando] = useState(false);
  const [estado, setEstado] = useState<"exito" | "error" | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setEnviando(true);
    setEstado(null);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          nombre: formData.nombre,
          email: formData.email,
          telefono: formData.telefono || "No informado",
          mensaje: formData.mensaje,
        },
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      );

      setEstado("exito");

      setFormData({
        nombre: "",
        email: "",
        telefono: "",
        mensaje: "",
      });
    } catch (error) {
      console.error("Error al enviar la consulta:", error);
      setEstado("error");
    } finally {
      setEnviando(false);
    }
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

          {/* Información de contacto */}
          <ScrollReveal animation="animate-fade-in-left">
            <div className="space-y-8">
              {[
                {
                  icon: Phone,
                  label: "Teléfono",
                  value: "2964 407447",
                },
                {
                  icon: Mail,
                  label: "Email",
                  value: "andradeagustina.rg@gmail.com",
                },
                {
                  icon: MapPin,
                  label: "Dirección",
                  value: "Perú 85, Río Grande, Tierra del Fuego",
                },
                {
                  icon: Clock,
                  label: "Horario",
                  value: "Lunes a Viernes, 15:00 a 19:00 hs",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 flex items-center justify-center bg-primary text-primary-foreground flex-shrink-0 group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-500">
                    <item.icon size={20} strokeWidth={1.5} />
                  </div>

                  <div>
                    <p className="text-sm uppercase tracking-widest text-muted-foreground mb-1">
                      {item.label}
                    </p>

                    <p className="text-foreground font-light">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Formulario */}
          <ScrollReveal animation="animate-fade-in-right">
            <form onSubmit={handleSubmit} className="space-y-5">

              {[
                {
                  type: "text",
                  placeholder: "Nombre completo",
                  key: "nombre" as const,
                  required: true,
                },
                {
                  type: "email",
                  placeholder: "Email",
                  key: "email" as const,
                  required: true,
                },
                {
                  type: "tel",
                  placeholder: "Teléfono",
                  key: "telefono" as const,
                  required: false,
                },
              ].map((field) => (
                <input
                  key={field.key}
                  type={field.type}
                  placeholder={field.placeholder}
                  required={field.required}
                  value={formData[field.key]}
                  disabled={enviando}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      [field.key]: e.target.value,
                    })
                  }
                  className="w-full bg-card border border-border px-5 py-3.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent focus:shadow-md transition-all duration-300 text-sm disabled:opacity-60"
                />
              ))}

              <textarea
                placeholder="Describí brevemente tu consulta..."
                rows={5}
                required
                value={formData.mensaje}
                disabled={enviando}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    mensaje: e.target.value,
                  })
                }
                className="w-full bg-card border border-border px-5 py-3.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent focus:shadow-md transition-all duration-300 text-sm resize-none disabled:opacity-60"
              />

              <button
                type="submit"
                disabled={enviando}
                className="w-full bg-primary text-primary-foreground py-4 text-sm uppercase tracking-widest font-medium hover:bg-navy-light hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
              >
                {enviando ? "Enviando..." : "Enviar Consulta"}
              </button>

              {estado === "exito" && (
                <div className="border border-primary/20 bg-primary/5 px-6 py-5 text-center animate-fade-in">
                  <div className="flex items-center justify-center gap-3 mb-2">
                    <div className="w-7 h-7 rounded-full border border-primary flex items-center justify-center">
                      <span className="text-primary text-sm">✓</span>
                    </div>

                    <p className="font-heading text-lg text-primary">
                      Consulta enviada
                    </p>
                  </div>

                  <p className="text-sm text-muted-foreground font-light">
                    Gracias por contactarnos. Nos pondremos en contacto a la brevedad.
                  </p>
                </div>
              )}

              {estado === "error" && (
                <div className="border border-red-500/20 bg-red-500/5 px-6 py-4 text-center">
                  <p className="font-medium text-red-700 mb-1">
                    No pudimos enviar la consulta
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Intentá nuevamente en unos instantes.
                  </p>
                </div>
              )}

            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;