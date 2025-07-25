import { source } from "@/lib/source";
import { getMDXComponents } from "@/mdx-components";
import { createRelativeLink } from "fumadocs-ui/mdx";
import { DocsBody, DocsPage } from "fumadocs-ui/page";
import { notFound } from "next/navigation";

export default async function Page(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;

  // For Python docs, we need to look for content in the python subdirectory
  let page;
  if (!params.slug || params.slug.length === 0) {
    // If no slug, show the Python index page
    page = source.getPage(["python", "day-0"]);
  } else {
    // If there's a slug, look for it in the python directory
    page = source.getPage(["python", ...params.slug]);
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
