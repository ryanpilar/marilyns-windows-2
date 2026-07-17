import { Children, useCallback, useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";

import "./EmblaCarousel.css";

const joinClasses = (...classes) => classes.filter(Boolean).join(" ");

const EmblaCarousel = ({
  ariaLabel,
  autoplay,
  children,
  className,
  navigationClassName,
  options,
  showNavigation = false,
  slideClassName,
}) => {
  const slides = Children.toArray(children);
  const [autoplayPlugin] = useState(() =>
    autoplay && slides.length > 1
      ? Autoplay({
          delay: 5000,
          playOnInit: true,
          stopOnFocusIn: false,
          stopOnInteraction: false,
          stopOnMouseEnter: false,
          ...autoplay,
        })
      : null
  );
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: "start",
      skipSnaps: false,
      ...options,
      loop: Boolean(options?.loop && slides.length > 1),
    },
    autoplayPlugin ? [autoplayPlugin] : []
  );
  const [canScrollPrevious, setCanScrollPrevious] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const updateNavigation = useCallback(() => {
    if (!emblaApi) {
      return;
    }

    setCanScrollPrevious(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) {
      return undefined;
    }

    updateNavigation();
    emblaApi.on("select", updateNavigation).on("reInit", updateNavigation);

    return () => {
      emblaApi
        .off("select", updateNavigation)
        .off("reInit", updateNavigation);
    };
  }, [emblaApi, updateNavigation]);

  const resetAutoplay = useCallback(() => {
    if (autoplayPlugin) {
      autoplayPlugin.reset();
    }
  }, [autoplayPlugin]);

  const scrollPrevious = useCallback(() => {
    if (!emblaApi) {
      return;
    }

    emblaApi.scrollPrev();
    resetAutoplay();
  }, [emblaApi, resetAutoplay]);

  const scrollNext = useCallback(() => {
    if (!emblaApi) {
      return;
    }

    emblaApi.scrollNext();
    resetAutoplay();
  }, [emblaApi, resetAutoplay]);

  if (!slides.length) {
    return null;
  }

  return (
    <div
      className={joinClasses("embla-section-carousel", className)}
      role="region"
      aria-label={ariaLabel}
      aria-roledescription="carousel"
    >
      <div className="embla-section-carousel__viewport" ref={emblaRef}>
        <div className="embla-section-carousel__container" aria-live="off">
          {slides.map((slide, index) => (
            <div
              className={joinClasses(
                "embla-section-carousel__slide",
                slideClassName
              )}
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${slides.length}`}
              key={slide.key || index}
            >
              {slide}
            </div>
          ))}
        </div>
      </div>

      {showNavigation && slides.length > 1 && (
        <div
          className={joinClasses(
            "embla-section-carousel__navigation",
            navigationClassName
          )}
        >
          <button
            className="embla-section-carousel__button embla-section-carousel__button--previous"
            type="button"
            aria-label="Previous slide"
            disabled={!canScrollPrevious}
            onClick={scrollPrevious}
          >
            <i className="fa fa-angle-left" aria-hidden="true" />
          </button>
          <button
            className="embla-section-carousel__button embla-section-carousel__button--next"
            type="button"
            aria-label="Next slide"
            disabled={!canScrollNext}
            onClick={scrollNext}
          >
            <i className="fa fa-angle-right" aria-hidden="true" />
          </button>
        </div>
      )}
    </div>
  );
};

export default EmblaCarousel;
