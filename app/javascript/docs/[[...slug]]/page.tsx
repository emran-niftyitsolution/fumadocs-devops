import { javascriptSource } from "@/lib/javascript-source";
import { getMDXComponents } from "@/mdx-components";
import { createRelativeLink } from "fumadocs-ui/mdx";
import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
} from "fumadocs-ui/page";
import { notFound } from "next/navigation";

export default async function Page(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;

  // For JavaScript docs, we need to look for content in the javascript subdirectory
  let page;
  if (!params.slug || params.slug.length === 0) {
    // If no slug, show the JavaScript index page
    page = javascriptSource.getPage(["day-0"]);
  } else {
    // If there's a slug, look for it in the javascript directory
    page = javascriptSource.getPage(params.slug);
  }

  if (!page) notFound();

  const MDXContent = page.data.body;

  return (
    <DocsPage toc={page.data.toc} full={page.data.full}>
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <DocsBody>
        <MDXContent
          components={getMDXComponents({
            a: createRelativeLink(javascriptSource, page),
          })}
        />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return javascriptSource.generateParams();
}

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  let page;
  if (!params.slug || params.slug.length === 0) {
    page = javascriptSource.getPage(["day-0"]);
  } else {
    page = javascriptSource.getPage(params.slug);
  }
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  };
}
