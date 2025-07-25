import { typescriptSource } from "@/lib/typescript-source";
import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { DocsBody } from "fumadocs-ui/page";
import { RootProvider } from "fumadocs-ui/provider";

export default function TypeScriptLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Filter the page tree to only show TypeScript content
  const typescriptTree = {
    ...typescriptSource.pageTree,
    children:
      typescriptSource.pageTree.children?.filter(
        (child) =>
          child.name &&
          (child.name === "typescript" || String(child.name).startsWith("day-"))
      ) || [],
  };

  return (
    <RootProvider>
      <DocsLayout tree={typescriptTree} nav={{ title: "TypeScript" }}>
        <DocsBody>{children}</DocsBody>
      </DocsLayout>
    </RootProvider>
  );
}
