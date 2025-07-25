import { docs } from "@/.source";
import { loader } from "fumadocs-core/source";

// See https://fumadocs.vercel.app/docs/headless/source-api for more info
export const mysqlSource = loader({
  // it assigns a URL to your pages
  baseUrl: "/mysql/docs",
  source: docs.toFumadocsSource(),
});
