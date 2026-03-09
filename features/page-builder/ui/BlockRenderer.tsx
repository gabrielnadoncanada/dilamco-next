import type { Block, Registry } from "../model/block-types";
import { BlockFrame } from "./BlockFrame";
import { UnknownBlock } from "./fallbacks/UnknownBlock";
import { InvalidBlock } from "./fallbacks/InvalidBlock";

export function BlockRenderer(props: {
  block: Block;
  blockRegistry: Registry;
  isPreview?: boolean;
}) {
  const { block, blockRegistry, isPreview } = props;

  const key = `${block.content.type}.${block.content.variant}`;
  const def = blockRegistry[key];

  if (!def) {
    return (
      <BlockFrame
        id={block.id}
        title={block.title}
        intro={block.intro}
        frame={block.frame}
      >
        <UnknownBlock blockKey={key} isPreview={isPreview} />
      </BlockFrame>
    );
  }

  const mergedFrame = {
    ...(def.defaultFrame ?? {}),
    ...(block.frame ?? {}),
  };

  const parsed = def.schema.safeParse(block.content.props);

  if (!parsed.success) {
    const issues = parsed.error.issues.map((i) => ({
      path: i.path.join(".") || "(root)",
      message: i.message,
    }));

    return (
      <BlockFrame
        id={block.id}
        title={block.title}
        intro={block.intro}
        frame={mergedFrame}
      >
        <InvalidBlock blockKey={key} issues={issues} isPreview={isPreview} />
      </BlockFrame>
    );
  }

  const Component = def.Component as React.ComponentType<typeof parsed.data>;

  if (typeof parsed.data !== "object" || parsed.data === null || Array.isArray(parsed.data)) {
    return (
      <BlockFrame
        id={block.id}
        title={block.title}
        intro={block.intro}
        frame={mergedFrame}
      >
        <InvalidBlock
          blockKey={key}
          issues={[{ path: "(root)", message: "Parsed props must be an object." }]}
          isPreview={isPreview}
        />
      </BlockFrame>
    );
  }

  return (
    <BlockFrame
      id={block.id}
      title={block.title}
      intro={block.intro}
      frame={mergedFrame}
    >
      <Component {...(parsed.data as Record<string, unknown>)} />
    </BlockFrame>
  );
}
