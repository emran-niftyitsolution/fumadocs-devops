import { source } from "@/lib/source";
import { getMDXComponents } from "@/mdx-components";
import { createRelativeLink } from "fumadocs-ui/mdx";
import { DocsBody, DocsPage } from "fumadocs-ui/page";
import { notFound } from "next/navigation";

export default async function Page(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;

  // For JavaScript docs, we need to look for content in the javascript subdirectory
  let page;
  if (!params.slug || params.slug.length === 0) {
    // If no slug, show the JavaScript index page
    page = source.getPage(["javascript", "day-0"]);
  } else {
    // If there's a slug, look for it in the javascript directory
    page = source.getPage(["javascript", ...params.slug]);
  }

  if (!page) notFound();

  const MDXContent = page.data.body;

  return (
    <DocsPage toc={page.data.toc} full={page.data.full}>
      <DocsBody>
        <MDXContent
          components={getMDXComponents({
            a: createRelativeLink(source, page),
          })}
        />
      </DocsBody>
    </DocsPage>
  );
}
