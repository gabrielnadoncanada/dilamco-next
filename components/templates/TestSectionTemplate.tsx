import type { Block } from "@/page-builder/model/block-types";
import { PageRenderer } from "@/page-builder/ui/PageRenderer";

export function TestSectionTemplate(props: { blocks: Block[] }) {
  return (
    <main>
      <PageRenderer
        blocks={props.blocks}
      />
    </main>
  );
}