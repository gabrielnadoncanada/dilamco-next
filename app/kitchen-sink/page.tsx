import { PageRenderer } from "@/page-builder/ui/PageRenderer";
import { blocks } from "@/app/kitchen-sink/page.data";

export default function KitchenSinkPage() {
  console.log(blocks);
  return (
    <PageRenderer
      blocks={blocks}
    />
  )
}