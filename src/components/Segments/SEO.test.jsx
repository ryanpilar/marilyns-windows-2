import { cleanup, render, waitFor } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import SEO from "./SEO";

function renderSEO(props) {
  return render(
    <HelmetProvider>
      <SEO {...props} />
    </HelmetProvider>
  );
}

function getStructuredData() {
  const script = document.head.querySelector('script[type="application/ld+json"]');
  return script ? JSON.parse(script.textContent) : null;
}

afterEach(() => {
  cleanup();
  document.head
    .querySelectorAll("[data-rh]")
    .forEach((element) => element.remove());
});

test("renders canonical business and breadcrumb data", async () => {
  renderSEO({
    title: "Services",
    description: "Custom window treatment services.",
    location: "/services/",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Services", path: "/services" },
    ],
  });

  await waitFor(() => {
    expect(document.head.querySelector('link[rel="canonical"]')).toHaveAttribute(
      "href",
      "https://www.marilynswindows.com/services"
    );
  });

  const structuredData = getStructuredData();
  const business = structuredData["@graph"].find(
    (item) => item["@type"] === "LocalBusiness"
  );
  const breadcrumbs = structuredData["@graph"].find(
    (item) => item["@type"] === "BreadcrumbList"
  );

  expect(business).toMatchObject({
    name: "Marilyn's Windows & Interiors",
    telephone: "+1-905-878-0626",
    email: "marilyn@marilynswindows.com",
    address: {
      streetAddress: "468 Valleyview Cr.",
      addressLocality: "Milton",
      addressRegion: "ON",
      postalCode: "L9T 3L2",
      addressCountry: "CA",
    },
  });
  expect(business.description).toContain("residential clients");
  expect(business.description).toContain("interior designers");
  expect(business.sameAs).toEqual([
    "https://www.facebook.com/marilynswindows/",
    "https://www.instagram.com/marilynwindowsandinteriors/",
  ]);
  expect(business.openingHoursSpecification).toBeUndefined();
  expect(breadcrumbs.itemListElement).toHaveLength(2);
  expect(breadcrumbs.itemListElement[1]).toMatchObject({
    position: 2,
    name: "Services",
    item: "https://www.marilynswindows.com/services",
  });
});

test("renders a blog post with the business as its organizational author", async () => {
  renderSEO({
    title: "Blog Post | Drapery Guide",
    description: "A practical guide to custom drapery.",
    location: "/blog/post/drapery-guide",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Blog", path: "/blog" },
      { name: "Drapery Guide", path: "/blog/post/drapery-guide" },
    ],
    article: {
      headline: "Drapery Guide",
      description: "A practical guide to custom drapery.",
      image: "https://images.example.com/drapery.webp",
      datePublished: "2026-01-15",
      dateModified: "2026-02-01T12:00:00Z",
    },
  });

  await waitFor(() => {
    expect(document.head.querySelector('meta[property="og:type"]')).toHaveAttribute(
      "content",
      "article"
    );
  });

  const article = getStructuredData()["@graph"].find(
    (item) => item["@type"] === "BlogPosting"
  );

  expect(article).toMatchObject({
    headline: "Drapery Guide",
    image: ["https://images.example.com/drapery.webp"],
    datePublished: "2026-01-15",
    dateModified: "2026-02-01T12:00:00Z",
    author: {
      "@type": "Organization",
      name: "Marilyn's Windows & Interiors",
      url: "https://www.marilynswindows.com/",
    },
  });
  expect(article.author["@type"]).not.toBe("Person");
});
