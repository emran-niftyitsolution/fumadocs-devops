import { JavaScriptDocsHeader } from "@/components/JavaScriptDocsHeader";
import { javascriptSource } from "@/lib/javascript-source";
import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { DocsBody } from "fumadocs-ui/page";
import { RootProvider } from "fumadocs-ui/provider";

export default function JavaScriptLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Filter the page tree to only show JavaScript content
  const javascriptTree = {
    ...javascriptSource.pageTree,
    children:
      javascriptSource.pageTree.children?.filter(
        (child) =>
          child.name &&
          (child.name === "javascript" || String(child.name).startsWith("day-"))
      ) || [],
  };

  return (
    <RootProvider>
      <DocsLayout tree={javascriptTree} nav={{ title: "JavaScript" }}>
        <DocsBody>
          <JavaScriptDocsHeader />
          {children}
        </DocsBody>
      </DocsLayout>
    </RootProvider>
  );
}
