import type { Block, FrameOptions, Registry } from "../model/block-types";
import { BlockRenderer } from "./BlockRenderer";

export function PageRenderer(props: {
  blocks: Block[];
  blockRegistry: Registry;
  isPreview?: boolean;
  defaultFrame?: FrameOptions;
}) {
  const { blocks, blockRegistry, isPreview, defaultFrame } = props;

  return (
    <>
      {blocks.map((b, index) => (
        <BlockRenderer
          key={b.id + "_" + index}
          blockRegistry={blockRegistry}
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
