import { Children, useEffect, useRef, useState } from "react";
import OwlCarousel from "react-owl-carousel";
import loadOwlCarouselAssets from "../../utils/loadOwlCarouselAssets";

const LazyOwlCarousel = ({ children, className, ...props }) => {
  const [ready, setReady] = useState(false);
  const carouselWrapperRef = useRef(null);

  useEffect(() => {
    let isMounted = true;

    loadOwlCarouselAssets()
      .then(() => {
        if (isMounted) {
          setReady(true);
        }
      })
      .catch(() => {
        if (isMounted) {
          setReady(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    if (!ready || !carouselWrapperRef.current) {
      return undefined;
    }

    const applyCloneAccessibility = () => {
      const wrapper = carouselWrapperRef.current;
      if (!wrapper) {
        return;
      }

      const owlItems = wrapper.querySelectorAll(".owl-item");

      owlItems.forEach((item) => {
        const isClone = item.classList.contains("cloned");

        item.setAttribute("aria-hidden", isClone ? "true" : "false");

        const focusableElements = item.querySelectorAll(
          "a, button, input, select, textarea, [tabindex]"
        );

        focusableElements.forEach((element) => {
          if (isClone) {
            if (!element.hasAttribute("data-owl-orig-tabindex")) {
              const originalTabIndex = element.getAttribute("tabindex");
              element.setAttribute(
                "data-owl-orig-tabindex",
                originalTabIndex === null ? "__none__" : originalTabIndex
              );
            }

            element.setAttribute("tabindex", "-1");
          } else if (element.hasAttribute("data-owl-orig-tabindex")) {
            const originalTabIndex = element.getAttribute("data-owl-orig-tabindex");
            if (originalTabIndex === "__none__") {
              element.removeAttribute("tabindex");
            } else {
              element.setAttribute("tabindex", originalTabIndex);
            }
            element.removeAttribute("data-owl-orig-tabindex");
          }
        });

        if (!isClone) {
          return;
        }

        const cloneHeadings = item.querySelectorAll("h1, h2, h3, h4, h5, h6");

        cloneHeadings.forEach((heading) => {
          const replacement = document.createElement("div");
          replacement.className = heading.className;
          replacement.innerHTML = heading.innerHTML;
          replacement.setAttribute("data-owl-clone-heading", "true");
          replacement.setAttribute("aria-hidden", "true");
          heading.replaceWith(replacement);
        });
      });
    };

    const scheduleApply = () => {
      window.requestAnimationFrame(applyCloneAccessibility);
    };

    scheduleApply();

    const mutationObserver = new MutationObserver(scheduleApply);
    mutationObserver.observe(carouselWrapperRef.current, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => {
      mutationObserver.disconnect();
    };
  }, [ready, children]);

  if (!ready) {
    const fallbackChild = Children.toArray(children)[0];
    return (
      <div className={className} data-owl-fallback="true">
        {fallbackChild}
      </div>
    );
  }

  return (
    <div ref={carouselWrapperRef}>
      <OwlCarousel className={className} {...props}>
        {children}
      </OwlCarousel>
    </div>
  );
};

export default LazyOwlCarousel;
