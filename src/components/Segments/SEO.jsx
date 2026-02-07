import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, location, robots }) {

  const siteName = "Marilyn's Windows";
  const baseUrl =
    typeof window !== "undefined" && window.location
      ? window.location.origin
      : "https://www.marilynswindows.com";
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
  const normalizedPath = rawPath
    ? rawPath.startsWith("/")
      ? rawPath
      : `/${rawPath}`
    : "";
  const canonicalUrl = `${baseUrl}${normalizedPath}`;
  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteName,
    url: baseUrl,
  };

return (
    <Helmet>
        { /* Standard metadata tags */ }
        <title>{title}</title>
        <meta name='description' content={description} />
        <link rel="canonical" href={canonicalUrl} />

        <meta name="robots" content={robots} />
        <meta property="og:site_name" content={siteName} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <script type="application/ld+json">
          {JSON.stringify(websiteJsonLd)}
        </script>

    </Helmet>
)
}
