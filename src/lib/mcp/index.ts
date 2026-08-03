import { defineMcp } from "@lovable.dev/mcp-js";
import listServicesTool from "./tools/list-services";
import getContactInfoTool from "./tools/get-contact-info";
import getFirmOverviewTool from "./tools/get-firm-overview";

export default defineMcp({
  name: "your-custom-page",
  title: "Your Custom Page",
  version: "0.1.0",
  instructions:
    "Public tools for a law firm website in Río Grande, Tierra del Fuego (Argentina). Use `get_firm_overview` for who the firm is, `list_services` for the practice areas offered, and `get_contact_info` for phone, WhatsApp, email, address and office hours.",
  tools: [getFirmOverviewTool, listServicesTool, getContactInfoTool],
});
