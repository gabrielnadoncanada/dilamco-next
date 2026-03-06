import { PageRenderer } from "@/page-builder/ui/PageRenderer";
import { blocks } from "@/app/kitchen-sink/page.data";
import { blockRegistry } from "@/page-builder/model/block-registry";

export default function KitchenSinkPage() {
  console.log(blocks);
  return (
    <PageRenderer
      blocks={blocks}
      blockRegistry={blockRegistry}
    />
  )
}
