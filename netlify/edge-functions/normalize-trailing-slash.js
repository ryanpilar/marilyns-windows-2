const CANONICAL_ORIGIN = "https://www.marilynswindows.com";

export default (request) => {
  const requestedUrl = new URL(request.url);

  if (requestedUrl.pathname === "/" || !requestedUrl.pathname.endsWith("/")) {
    return;
  }

  const canonicalUrl = new URL(CANONICAL_ORIGIN);
  canonicalUrl.pathname = requestedUrl.pathname.replace(/\/+$/, "");
  canonicalUrl.search = requestedUrl.search;

  return new Response(null, {
    status: 301,
    headers: {
      Location: canonicalUrl.href,
    },
  });
};

export const config = {
  path: [
    "/aboutme/",
    "/services/",
    "/gallery/",
    "/gallery/room/*/",
    "/blog/",
    "/blog/post/*/",
    "/terms/",
    "/privacy/",
  ],
  method: ["GET", "HEAD"],
};
