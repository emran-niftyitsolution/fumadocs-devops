import { pythonSource } from "@/lib/python-source";
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

  // For Python docs, we need to look for content in the python subdirectory
  let page;
  if (!params.slug || params.slug.length === 0) {
    // If no slug, show the Python index page
    page = pythonSource.getPage(["day-0"]);
  } else {
    // If there's a slug, look for it in the python directory
    page = pythonSource.getPage(params.slug);
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
            a: createRelativeLink(pythonSource, page),
          })}
        />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return pythonSource.generateParams();
}

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  let page;
  if (!params.slug || params.slug.length === 0) {
    page = pythonSource.getPage(["day-0"]);
  } else {
    page = pythonSource.getPage(params.slug);
  }
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  };
}
