import { docs } from "@/.source";
import { loader } from "fumadocs-core/source";

// See https://fumadocs.vercel.app/docs/headless/source-api for more info
export const typescriptSource = loader({
  // it assigns a URL to your pages
  baseUrl: "/typescript/docs",
  source: docs.toFumadocsSource(),
});
