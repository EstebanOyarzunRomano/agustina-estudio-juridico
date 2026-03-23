import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5491112345678?text=Hola%2C%20quisiera%20hacer%20una%20consulta%20legal."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#1ebe57] text-white p-4 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 animate-fade-in"
    >
      <MessageCircle size={28} strokeWidth={2} />
    </a>
  );
};

export default WhatsAppButton;
