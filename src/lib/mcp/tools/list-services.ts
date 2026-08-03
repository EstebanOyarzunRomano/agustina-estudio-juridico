import { defineTool } from "@lovable.dev/mcp-js";

const services = [
  {
    title: "Derecho de Familia",
    description: "Divorcios, tenencia, alimentos, adopción y todo lo relacionado con el ámbito familiar.",
  },
  {
    title: "Derecho Civil",
    description: "Contratos, sucesiones, daños y perjuicios, y asesoramiento en cuestiones civiles.",
  },
  {
    title: "Derecho Laboral",
    description: "Defensa de derechos laborales, despidos, accidentes de trabajo e indemnizaciones.",
  },
  {
    title: "Derecho Inmobiliario",
    description: "Compraventa de inmuebles, locaciones, escrituras y regularización de propiedades.",
  },
  {
    title: "Mediación",
    description: "Resolución alternativa de conflictos con enfoque conciliador y resultados efectivos.",
  },
  {
    title: "Defensa Penal",
    description: "Asistencia y representación legal en procesos penales con total confidencialidad.",
  },
];

export default defineTool({
  name: "list_services",
  title: "List legal services",
  description: "List the areas of law and legal services offered by the firm, with a short description of each.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [
      {
        type: "text",
        text: services.map((s) => `- ${s.title}: ${s.description}`).join("\n"),
      },
    ],
    structuredContent: { services },
  }),
});
