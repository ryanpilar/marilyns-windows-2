const CLOUDINARY_VERSION_SEGMENT = /\/v\d+\//;

export const buildResponsiveCloudinaryImageUrl = (url, width) => {
  if (!url || !width || !url.includes("res.cloudinary.com")) {
    return url;
  }

  const versionSegment = url.match(CLOUDINARY_VERSION_SEGMENT);
  if (!versionSegment || versionSegment.index === undefined) {
    return url;
  }

  const safeWidth = Math.max(160, Math.round(width));
  const versionIndex = versionSegment.index;
  const transform = `c_limit,w_${safeWidth},f_auto,q_auto`;

  return `${url.slice(0, versionIndex)}/${transform}${url.slice(
    versionIndex
  )}`;
};

export const buildResponsiveCloudinarySrcSet = (url, widths) =>
  widths
    .map(
      (width) =>
        `${buildResponsiveCloudinaryImageUrl(url, width)} ${width}w`
    )
    .join(", ");
