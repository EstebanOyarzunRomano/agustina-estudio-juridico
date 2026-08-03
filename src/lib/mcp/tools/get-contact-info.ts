import { defineTool } from "@lovable.dev/mcp-js";

const contact = {
  phone: "2964 61-8615",
  whatsapp: "2964 61-8615",
  email: "contacto@estudiojuridico.com",
  address: "Perú 85, Río Grande, Tierra del Fuego, Argentina",
  officeHours: "Lunes a Viernes, 15:00 a 19:00 hs",
};

export default defineTool({
  name: "get_contact_info",
  title: "Get contact information",
  description: "Get the law firm's public contact details: phone, WhatsApp, email, office address and opening hours.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [
      {
        type: "text",
        text: [
          `Teléfono: ${contact.phone}`,
          `WhatsApp: ${contact.whatsapp}`,
          `Email: ${contact.email}`,
          `Dirección: ${contact.address}`,
          `Horario: ${contact.officeHours}`,
        ].join("\n"),
      },
    ],
    structuredContent: contact,
  }),
});
