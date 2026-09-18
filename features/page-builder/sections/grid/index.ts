import { gridImageCardsBadgesCta } from "./variants/image-cards-badges-cta";
import { gridImageCardsSlider } from "./variants/image-cards-slider";
import { gridImageCardsSliderLightbox } from "./variants/image-cards-slider-lightbox";
import { gridIconCardsBullets } from "./variants/icon-cards-bullets";
import { gridLinkCardsCompact } from "./variants/link-cards-compact";
import { gridLinkCardsSlider } from "./variants/link-cards-slider";
import { gridBento } from "./variants/bento";
import { gridPriceTiles } from "./variants/price-tiles";

export const gridDefs = [
  gridImageCardsBadgesCta,
  gridImageCardsSlider,
  gridImageCardsSliderLightbox,
  gridIconCardsBullets,
  gridLinkCardsCompact,
  gridLinkCardsSlider,
  gridBento,
  gridPriceTiles,
] as const;
