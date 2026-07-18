import {
  HERO_PRELOAD_HREF,
  HERO_PRELOAD_SRCSET,
} from "./generated-hero-preload.js";

const CANONICAL_ORIGIN = "https://www.marilynswindows.com";

const escapeAttribute = (value) =>
  value.replace(/&/g, "&amp;").replace(/"/g, "&quot;");

const addHomeHeroPreload = async (context) => {
  const response = await context.next();
  const contentType = response.headers.get("content-type") || "";

  if (!contentType.includes("text/html")) {
    return response;
  }

  const html = await response.text();
  if (html.includes('data-home-hero-preload="true"')) {
    return new Response(html, {
      status: response.status,
      statusText: response.statusText,
      headers: response.headers,
    });
  }

  const preload = `<link data-home-hero-preload="true" rel="preload" as="image" href="${escapeAttribute(
    HERO_PRELOAD_HREF
  )}" imagesrcset="${escapeAttribute(
    HERO_PRELOAD_SRCSET
  )}" imagesizes="100vw" fetchpriority="high">`;
  const headers = new Headers(response.headers);
  headers.delete("content-length");

  return new Response(html.replace("</head>", `${preload}</head>`), {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
};

export default async (request, context) => {
  const requestedUrl = new URL(request.url);

  if (requestedUrl.pathname === "/") {
    return addHomeHeroPreload(context);
  }

  if (!requestedUrl.pathname.endsWith("/")) {
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
    "/",
    "/aboutme/",
    "/services/",
    "/gallery/",
    "/gallery/room/*/",
    "/blog/",
    "/blog/post/*/",
    "/terms/",
    "/privacy/",
  ],
  method: ["GET"],
};
