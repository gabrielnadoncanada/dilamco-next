import type { Block, FrameOptions, Registry, Surface } from "../model/block-types";
import { BlockRenderer } from "./BlockRenderer";

/**
 * Rend la liste de blocs d'une page en alternant les fonds de section :
 * fond de page → gris-vert léger (`muted`) → fond de page… Un bloc peut
 * imposer sa surface via `frame.surface` ; le hero garde le fond de page et
 * l'alternance repart après lui. Sans cette alternance, toute la page est de
 * la même couleur et rien ne sépare les sections.
 */
export function PageRenderer(props: {
  blocks: Block[];
  blockRegistry: Registry;
  isPreview?: boolean;
  defaultFrame?: FrameOptions;
}) {
  const { blocks, blockRegistry, isPreview, defaultFrame } = props;
  let previous: Surface = "default";

  return (
    <>
      {blocks.map((b, index) => {
        const explicit = b.frame?.surface;
        const isHero = b.content.type === "hero";
        let surface: Surface;
        if (explicit) surface = explicit;
        else if (isHero) surface = "default";
        else surface = previous === "default" ? "muted" : "default";
        previous = surface;

        return (
          <BlockRenderer
            key={b.id + "_" + index}
            blockRegistry={blockRegistry}
            block={{
              ...b,
              frame: { ...defaultFrame, ...(b.frame ?? {}), surface },
            }}
            isPreview={isPreview}
          />
        );
      })}
    </>
  );
}
