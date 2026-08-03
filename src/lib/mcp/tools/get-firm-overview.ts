import { defineTool } from "@lovable.dev/mcp-js";

const overview = {
  name: "Estudio Jurídico",
  tagline: "Defensa Legal con Excelencia",
  summary:
    "Abogada matriculada con vocación de servicio y compromiso con la justicia. Brinda asesoramiento legal personalizado en diversas ramas del derecho, en Río Grande, Tierra del Fuego.",
  values: [
    {
      title: "Ética Profesional",
      description:
        "Cada caso se aborda con integridad, transparencia y un profundo respeto por los valores que rigen la profesión.",
    },
    {
      title: "Formación Continua",
      description:
        "Actualización permanente en las últimas reformas legislativas y jurisprudencia para brindar el mejor servicio.",
    },
    {
      title: "Compromiso Total",
      description:
        "Dedicación completa a cada cliente, buscando siempre la solución más favorable y eficiente para cada situación.",
    },
  ],
};

export default defineTool({
  name: "get_firm_overview",
  title: "Get firm overview",
  description: "Get a public overview of the law firm: who it is, what it stands for, and its core professional values.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [
      {
        type: "text",
        text: [
          `${overview.name} — ${overview.tagline}`,
          "",
          overview.summary,
          "",
          ...overview.values.map((v) => `- ${v.title}: ${v.description}`),
        ].join("\n"),
      },
    ],
    structuredContent: overview,
  }),
});
