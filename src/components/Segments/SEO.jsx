import { Helmet } from 'react-helmet-async';

const CANONICAL_ORIGIN = "https://www.marilynswindows.com";

function normalizeCanonicalPath(inputPath) {
  if (!inputPath) {
    return "/";
  }

  let candidatePath = String(inputPath).trim();
  if (!candidatePath) {
    return "/";
  }

  try {
    candidatePath = new URL(candidatePath, CANONICAL_ORIGIN).pathname || "/";
  } catch (error) {
    // Keep the raw path when parsing fails; we'll normalize it below.
  }

  const withLeadingSlash = candidatePath.startsWith("/")
    ? candidatePath
    : `/${candidatePath}`;
  const withoutDuplicateSlashes = withLeadingSlash.replace(/\/{2,}/g, "/");

  if (withoutDuplicateSlashes === "/") {
    return "/";
  }

  return withoutDuplicateSlashes.replace(/\/+$/, "");
}

export default function SEO({
  title = "Marilyn's Windows",
  description = "",
  location,
  robots = "index, follow",
}) {
  const siteName = "Marilyn's Windows";
  const fallbackPath =
    typeof window !== "undefined" && window.location
      ? window.location.pathname
      : "";
  const rawPath =
    typeof location === "string"
      ? location
      : location && typeof location.pathname === "string"
        ? location.pathname
        : fallbackPath;
  const normalizedPath = normalizeCanonicalPath(rawPath);
  const canonicalUrl = `${CANONICAL_ORIGIN}${normalizedPath}`;
  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteName,
    url: CANONICAL_ORIGIN,
  };

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      <meta name="robots" content={robots} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <script type="application/ld+json">
        {JSON.stringify(websiteJsonLd)}
      </script>

    </Helmet>
  );
}
