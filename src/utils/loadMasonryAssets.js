import loadScriptOnce from "./loadScriptOnce";

const MASONRY_SCRIPTS = [
  "/assets/js/imagesloaded.pkgd.min.js",
  "/assets/js/isotope.pkgd.min.js",
];

const loadMasonryAssets = () =>
  MASONRY_SCRIPTS.reduce(
    (promise, src) => promise.then(() => loadScriptOnce(src)),
    Promise.resolve()
  ).then(() => {
    if (typeof window.masonryBox === "function") {
      window.masonryBox();
    }
  });

export default loadMasonryAssets;
