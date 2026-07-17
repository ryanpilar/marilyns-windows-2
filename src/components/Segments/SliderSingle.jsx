import { buildHeroImageUrl, buildHeroSrcSet } from "../../utils/heroImage";

const SliderSingle = ({
  slide,
  isPriority,
  shouldLoad,
  onLoadComplete,
}) => {
  if (!shouldLoad) {
    return <div className="hero-carousel__image-placeholder" aria-hidden="true" />;
  }

  return (
    <img
      className="hero-carousel__image"
      src={buildHeroImageUrl(slide.src, 1920)}
      srcSet={buildHeroSrcSet(slide.src)}
      sizes="100vw"
      alt={slide.alt || ""}
      data-caption={slide.caption || undefined}
      data-pin-description={slide.dataPin || undefined}
      loading="eager"
      fetchpriority={isPriority ? "high" : "low"}
      decoding="async"
      width={slide.width || 2000}
      height={slide.height || 1200}
      draggable="false"
      onLoad={onLoadComplete}
      onError={onLoadComplete}
    />
  );
};

export default SliderSingle;
