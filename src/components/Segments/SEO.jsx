import { Helmet } from "react-helmet-async";
import { BUSINESS_IMAGES } from "../../content/seoImages";

export const CANONICAL_ORIGIN = "https://www.marilynswindows.com";
export const SITE_NAME = "Marilyn's Windows & Interiors";

const BUSINESS_ID = `${CANONICAL_ORIGIN}/#business`;
const WEBSITE_ID = `${CANONICAL_ORIGIN}/#website`;
const BUSINESS_DESCRIPTION =
  "A Milton-based custom drapery and window treatment workroom serving residential clients and partnering with interior designers across Halton and surrounding areas.";

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
    // Keep the raw path when parsing fails; it is normalized below.
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

function toAbsoluteUrl(value) {
  if (!value) {
    return undefined;
  }

  try {
    return new URL(value, `${CANONICAL_ORIGIN}/`).href;
  } catch (error) {
    return undefined;
  }
}

function createBreadcrumbJsonLd(breadcrumbs, canonicalUrl) {
  const validBreadcrumbs = Array.isArray(breadcrumbs)
    ? breadcrumbs.filter((breadcrumb) => breadcrumb?.name && breadcrumb?.path)
    : [];

  if (validBreadcrumbs.length < 2) {
    return null;
  }

  return {
    "@type": "BreadcrumbList",
    "@id": `${canonicalUrl}#breadcrumb`,
    itemListElement: validBreadcrumbs.map((breadcrumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: breadcrumb.name,
      item: `${CANONICAL_ORIGIN}${normalizeCanonicalPath(breadcrumb.path)}`,
    })),
  };
}

function createArticleJsonLd(article, canonicalUrl, fallbackDescription) {
  if (!article?.headline) {
    return null;
  }

  const rawImages = Array.isArray(article.image)
    ? article.image
    : [article.image];
  const images = rawImages.map(toAbsoluteUrl).filter(Boolean);

  return {
    "@type": "BlogPosting",
    "@id": `${canonicalUrl}#article`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonicalUrl,
    },
    headline: article.headline,
    description: article.description || fallbackDescription || undefined,
    image: images.length ? images : undefined,
    datePublished: article.datePublished || undefined,
    dateModified: article.dateModified || article.datePublished || undefined,
    author: {
      "@type": "Organization",
      "@id": BUSINESS_ID,
      name: SITE_NAME,
      url: `${CANONICAL_ORIGIN}/`,
    },
    publisher: {
      "@id": BUSINESS_ID,
    },
    inLanguage: "en-CA",
  };
}

export default function SEO({
  title = SITE_NAME,
  description = "",
  location,
  robots = "index, follow",
  breadcrumbs = [],
  article = null,
  image,
  imageAlt,
}) {
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
  const safeTitle =
    typeof title === "string" && title.trim() ? title.trim() : SITE_NAME;
  const safeDescription =
    typeof description === "string" && description.trim()
      ? description.trim()
      : "";
  const articleImage = Array.isArray(article?.image)
    ? article.image[0]
    : article?.image;
  const socialImage = toAbsoluteUrl(image || articleImage);

  const localBusinessJsonLd = {
    "@type": "LocalBusiness",
    "@id": BUSINESS_ID,
    name: SITE_NAME,
    alternateName: "Marilyn's Windows",
    description: BUSINESS_DESCRIPTION,
    url: `${CANONICAL_ORIGIN}/`,
    logo: `${CANONICAL_ORIGIN}/logo512.png`,
    image: BUSINESS_IMAGES,
    telephone: "+1-905-878-0626",
    email: "marilyn@marilynswindows.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "468 Valleyview Cr.",
      addressLocality: "Milton",
      addressRegion: "ON",
      postalCode: "L9T 3L2",
      addressCountry: "CA",
    },
    areaServed: [
      { "@type": "City", name: "Milton" },
      { "@type": "City", name: "Burlington" },
      { "@type": "City", name: "Oakville" },
      { "@type": "City", name: "Mississauga" },
      { "@type": "City", name: "Georgetown" },
      { "@type": "AdministrativeArea", name: "Halton Region" },
      { "@type": "AdministrativeArea", name: "Greater Toronto Area" },
    ],
    sameAs: [
      "https://www.facebook.com/marilynswindows/",
      "https://www.instagram.com/marilynwindowsandinteriors/",
    ],
  };
  const websiteJsonLd = {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: SITE_NAME,
    url: `${CANONICAL_ORIGIN}/`,
    publisher: {
      "@id": BUSINESS_ID,
    },
    inLanguage: "en-CA",
  };
  const breadcrumbJsonLd = createBreadcrumbJsonLd(
    breadcrumbs,
    canonicalUrl
  );
  const articleJsonLd = createArticleJsonLd(
    article,
    canonicalUrl,
    safeDescription
  );
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      localBusinessJsonLd,
      websiteJsonLd,
      breadcrumbJsonLd,
      articleJsonLd,
    ].filter(Boolean),
  };

  return (
    <Helmet>
      <title>{safeTitle}</title>
      {safeDescription && (
        <meta name="description" content={safeDescription} />
      )}
      <link rel="canonical" href={canonicalUrl} />

      <meta name="robots" content={robots} />
      <meta property="og:type" content={articleJsonLd ? "article" : "website"} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={safeTitle} />
      {safeDescription && (
        <meta property="og:description" content={safeDescription} />
      )}
      {socialImage && <meta property="og:image" content={socialImage} />}
      {socialImage && imageAlt && (
        <meta property="og:image:alt" content={imageAlt} />
      )}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={safeTitle} />
      {safeDescription && (
        <meta name="twitter:description" content={safeDescription} />
      )}
      {socialImage && <meta name="twitter:image" content={socialImage} />}
      {socialImage && imageAlt && (
        <meta name="twitter:image:alt" content={imageAlt} />
      )}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
}
