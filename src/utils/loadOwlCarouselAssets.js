const OWL_SCRIPTS = [
  "/assets/js/owl.carousel.min.js",
  "/assets/js/jquery.owl-filter.js",
];

let owlAssetsPromise;

const waitForJquery = () =>
  new Promise((resolve, reject) => {
    if (window.jQuery) {
      resolve();
      return;
    }

    let attempts = 0;
    const maxAttempts = 50;
    const interval = setInterval(() => {
      if (window.jQuery) {
        clearInterval(interval);
        resolve();
        return;
      }

      attempts += 1;
      if (attempts >= maxAttempts) {
        clearInterval(interval);
        reject(new Error("jQuery not available for Owl Carousel."));
      }
    }, 100);
  });

const loadScript = (src) =>
  new Promise((resolve, reject) => {
    if (
      document.querySelector(`script[data-owl-asset="${src}"]`) ||
      document.querySelector(`script[src="${src}"]`)
    ) {
      resolve();
      return;
    }

    const script = document.createElement("script");
    script.src = src;
    script.async = false;
    script.defer = false;
    script.setAttribute("data-owl-asset", src);
    script.addEventListener("load", () => resolve());
    script.addEventListener("error", (event) => reject(event));
    document.body.appendChild(script);
  });

const loadOwlCarouselAssets = () => {
  if (
    window.jQuery &&
    window.jQuery.fn &&
    typeof window.jQuery.fn.owlCarousel === "function"
  ) {
    return Promise.resolve();
  }

  if (!owlAssetsPromise) {
    owlAssetsPromise = waitForJquery().then(() =>
      OWL_SCRIPTS.reduce(
        (promise, src) => promise.then(() => loadScript(src)),
        Promise.resolve()
      )
    );
  }

  return owlAssetsPromise;
};

export default loadOwlCarouselAssets;
