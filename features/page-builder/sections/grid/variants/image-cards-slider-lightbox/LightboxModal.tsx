"use client";

import Image from "next/image";
import Lightbox, {
  isImageFitCover,
  isImageSlide,
  useLightboxProps,
  useLightboxState,
  type SlideImage,
} from "yet-another-react-lightbox";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";

type GridImageCardsSliderLightboxModalProps = {
  open: boolean;
  index: number;
  slides: SlideImage[];
  onClose: () => void;
};

type LightboxSlideProps = {
  slide: SlideImage;
  offset: number;
  rect: {
    width: number;
    height: number;
  };
};

function GridSliderLightboxImage({ slide, offset, rect }: LightboxSlideProps) {
  const {
    on: { click },
    carousel: { imageFit },
  } = useLightboxProps();
  const { currentIndex } = useLightboxState();

  if (!isImageSlide(slide)) {
    return undefined;
  }

  const cover = isImageFitCover(slide, imageFit);

  return (
    <div
      style={{
        position: "relative",
        width: rect.width,
        height: rect.height,
      }}
    >
      <Image
        fill
        alt={slide.alt ?? ""}
        src={slide.src}
        draggable={false}
        sizes="100vw"
        style={{
          objectFit: cover ? "cover" : "contain",
          cursor: click ? "pointer" : undefined,
        }}
        onClick={offset === 0 ? () => click?.({ index: currentIndex }) : undefined}
      />
    </div>
  );
}

export function GridImageCardsSliderLightboxModal(
  props: GridImageCardsSliderLightboxModalProps,
) {
  return (
    <Lightbox
      open={props.open}
      close={props.onClose}
      index={props.index}
      slides={props.slides}
      plugins={[Thumbnails, Slideshow]}
      thumbnails={{
        position: "bottom",
        showToggle: false,
      }}
      slideshow={{
        autoplay: false,
        delay: 3000,
      }}
      render={{ slide: GridSliderLightboxImage }}
    />
  );
}
