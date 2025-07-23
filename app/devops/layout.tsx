import { DevOpsDocsHeader } from "@/components/Header";
import { source } from "@/lib/source";
import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { DocsBody } from "fumadocs-ui/page";
import { RootProvider } from "fumadocs-ui/provider";

export default function DevOpsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <RootProvider>
      <DocsLayout tree={source.pageTree} nav={{ title: "DevOps" }}>
        <DocsBody>
          <DevOpsDocsHeader />
          {children}
        </DocsBody>
      </DocsLayout>
    </RootProvider>
  );
}
