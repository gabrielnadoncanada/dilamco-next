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
      {blocks.map((b) => (
        <BlockRenderer
          key={b.id}
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