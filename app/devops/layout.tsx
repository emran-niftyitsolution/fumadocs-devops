import { source } from "@/lib/source";
import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { RootProvider } from "fumadocs-ui/provider";

export default function DevOpsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <RootProvider>
      <DocsLayout tree={source.pageTree}>{children}</DocsLayout>
    </RootProvider>
  );
}
