import { docs } from "@/.source";
import { loader } from "fumadocs-core/source";

// See https://fumadocs.vercel.app/docs/headless/source-api for more info
export const javascriptSource = loader({
  // it assigns a URL to your pages
  baseUrl: "/javascript/docs",
  source: docs.toFumadocsSource(),
});
