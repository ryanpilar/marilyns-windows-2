import { Children, useEffect, useState } from "react";
import OwlCarousel from "react-owl-carousel";
import loadOwlCarouselAssets from "../../utils/loadOwlCarouselAssets";

const LazyOwlCarousel = ({ children, className, ...props }) => {
  const [ready, setReady] = useState(false);

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

  if (!ready) {
    const fallbackChild = Children.toArray(children)[0];
    return (
      <div className={className} data-owl-fallback="true">
        {fallbackChild}
      </div>
    );
  }

  return (
    <OwlCarousel className={className} {...props}>
      {children}
    </OwlCarousel>
  );
};

export default LazyOwlCarousel;
