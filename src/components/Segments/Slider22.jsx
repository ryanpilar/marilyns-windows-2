import { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";
import heroSlideData from "../../generated/heroSlides.json";
import SliderSingle from "./SliderSingle";

const AUTOPLAY_DELAY = 8000;
const slides = heroSlideData.slides;

const Slider22 = () => {
  const heroRef = useRef(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [loadedSlides, setLoadedSlides] = useState({});
  const [loadSecondarySlides, setLoadSecondarySlides] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [autoplayPlugin] = useState(() =>
    Autoplay({
      delay: AUTOPLAY_DELAY,
      playOnInit: false,
      stopOnInteraction: false,
      stopOnMouseEnter: false,
    })
  );
  const [fadePlugin] = useState(() => Fade());
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: slides.length > 1,
      duration: 38,
      skipSnaps: false,
    },
    [fadePlugin, autoplayPlugin]
  );

  const selectSlide = useCallback(() => {
    if (emblaApi) {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    }
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) {
      return undefined;
    }

    selectSlide();
    emblaApi.on("select", selectSlide).on("reInit", selectSlide);

    return () => {
      emblaApi.off("select", selectSlide).off("reInit", selectSlide);
    };
  }, [emblaApi, selectSlide]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = () =>
      setPrefersReducedMotion(mediaQuery.matches);

    updateMotionPreference();

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", updateMotionPreference);
      return () =>
        mediaQuery.removeEventListener("change", updateMotionPreference);
    }

    mediaQuery.addListener(updateMotionPreference);
    return () => mediaQuery.removeListener(updateMotionPreference);
  }, []);

  useEffect(() => {
    const firstSlide = slides[0];
    if (!firstSlide || !loadedSlides[firstSlide.id]) {
      return undefined;
    }

    const revealSecondarySlides = () => setLoadSecondarySlides(true);

    if (window.requestIdleCallback) {
      const idleCallback = window.requestIdleCallback(revealSecondarySlides, {
        timeout: 1200,
      });
      return () => window.cancelIdleCallback(idleCallback);
    }

    const timeout = window.setTimeout(revealSecondarySlides, 250);
    return () => window.clearTimeout(timeout);
  }, [loadedSlides]);

  useEffect(() => {
    if (!emblaApi) {
      return;
    }

    const autoplay = emblaApi.plugins().autoplay;
    const allSlidesReady = slides.every((slide) => loadedSlides[slide.id]);

    if (prefersReducedMotion || !allSlidesReady || slides.length < 2) {
      autoplay.stop();
      return;
    }

    autoplay.play();
  }, [emblaApi, loadedSlides, prefersReducedMotion]);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) {
      return undefined;
    }

    if (prefersReducedMotion) {
      hero.style.setProperty("--hero-parallax-y", "0px");
      return undefined;
    }

    let animationFrame = 0;

    const updateParallax = () => {
      animationFrame = 0;
      const bounds = hero.getBoundingClientRect();

      if (bounds.bottom <= 0 || bounds.top >= window.innerHeight) {
        return;
      }

      const distance = Math.min(Math.max(-bounds.top, 0), bounds.height);
      const maximumOffset = window.innerWidth < 779 ? 28 : 48;
      const offset = (distance / bounds.height) * maximumOffset;
      hero.style.setProperty("--hero-parallax-y", `${offset.toFixed(2)}px`);
    };

    const requestParallaxUpdate = () => {
      if (!animationFrame) {
        animationFrame = window.requestAnimationFrame(updateParallax);
      }
    };

    updateParallax();
    window.addEventListener("scroll", requestParallaxUpdate, { passive: true });
    window.addEventListener("resize", requestParallaxUpdate);

    return () => {
      window.removeEventListener("scroll", requestParallaxUpdate);
      window.removeEventListener("resize", requestParallaxUpdate);
      if (animationFrame) {
        window.cancelAnimationFrame(animationFrame);
      }
    };
  }, [prefersReducedMotion]);

  const markSlideLoaded = useCallback((slideId) => {
    setLoadedSlides((currentSlides) =>
      currentSlides[slideId]
        ? currentSlides
        : { ...currentSlides, [slideId]: true }
    );
  }, []);

  const resetAutoplay = useCallback(() => {
    if (emblaApi && !prefersReducedMotion) {
      emblaApi.plugins().autoplay.reset();
    }
  }, [emblaApi, prefersReducedMotion]);

  const scrollPrevious = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollPrev();
      resetAutoplay();
    }
  }, [emblaApi, resetAutoplay]);

  const scrollNext = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollNext();
      resetAutoplay();
    }
  }, [emblaApi, resetAutoplay]);

  const scrollTo = useCallback(
    (index) => {
      if (emblaApi) {
        emblaApi.scrollTo(index);
        resetAutoplay();
      }
    },
    [emblaApi, resetAutoplay]
  );

  const handleKeyDown = (event) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      scrollPrevious();
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      scrollNext();
    }
  };

  if (!slides.length) {
    return null;
  }

  return (
    <section
      ref={heroRef}
      id="welcome_wrapper"
      className="hero-slider hero-carousel"
      aria-label="Featured interior design projects"
      aria-roledescription="carousel"
      onKeyDown={handleKeyDown}
    >
      <div className="hero-carousel__viewport" ref={emblaRef}>
        <div className="hero-carousel__container" aria-live="off">
          {slides.map((slide, index) => (
            <div
              className="hero-carousel__slide"
              key={slide.id}
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${slides.length}`}
              aria-hidden={selectedIndex !== index}
            >
              <div className="hero-carousel__media">
                <SliderSingle
                  slide={slide}
                  isPriority={index === 0}
                  shouldLoad={index === 0 || loadSecondarySlides}
                  onLoadComplete={() => markSlideLoaded(slide.id)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="hero-carousel__frame" aria-hidden="true" />

      {slides.length > 1 && (
        <>
          <button
            className="hero-carousel__arrow hero-carousel__arrow--previous"
            type="button"
            aria-label="Show previous slide"
            onClick={scrollPrevious}
          >
            <span aria-hidden="true" />
          </button>
          <button
            className="hero-carousel__arrow hero-carousel__arrow--next"
            type="button"
            aria-label="Show next slide"
            onClick={scrollNext}
          >
            <span aria-hidden="true" />
          </button>
          <div className="hero-carousel__dots" aria-label="Choose a slide">
            {slides.map((slide, index) => (
              <button
                className={`hero-carousel__dot${
                  selectedIndex === index ? " is-selected" : ""
                }`}
                key={slide.id}
                type="button"
                aria-label={`Show slide ${index + 1}`}
                aria-current={selectedIndex === index ? "true" : undefined}
                onClick={() => scrollTo(index)}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
};

export default Slider22;
