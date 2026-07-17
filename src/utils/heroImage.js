const CLOUDINARY_VERSION_SEGMENT = /\/v\d+\//;
const HERO_IMAGE_WIDTHS = [640, 960, 1280, 1600, 1920, 2560];

export const buildHeroImageUrl = (url, width) => {
  if (!url || !width || !url.includes("res.cloudinary.com")) {
    return url;
  }

  const versionSegment = url.match(CLOUDINARY_VERSION_SEGMENT);
  if (!versionSegment || versionSegment.index === undefined) {
    return url;
  }

  const safeWidth = Math.max(320, Math.round(width));
  const versionIndex = versionSegment.index;
  const resizeTransform = `c_limit,w_${safeWidth},f_auto,q_auto`;

  return `${url.slice(0, versionIndex)}/${resizeTransform}${url.slice(
    versionIndex
  )}`;
};

export const buildHeroSrcSet = (url) =>
  HERO_IMAGE_WIDTHS.map(
    (width) => `${buildHeroImageUrl(url, width)} ${width}w`
  ).join(", ");
