import type { Block, FrameOptions } from "../model/block-types";
import { BlockRenderer } from "./BlockRenderer";

export function PageRenderer(props: {
  blocks: Block[];
  isPreview?: boolean;
  defaultFrame?: FrameOptions;
}) {
  const { blocks, isPreview, defaultFrame } = props;

  return (
    <>
      {blocks.map((b, index) => (
        <BlockRenderer
          key={b.id + "_" + index}
          block={{
            ...b,
            frame: { ...defaultFrame, ...(b.frame ?? {}) },
          }}
          isPreview={isPreview}
        />
      ))}
    </>
  );
}