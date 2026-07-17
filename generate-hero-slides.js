const { promises: fs } = require("fs");
const path = require("path");
const { createClient } = require("contentful");

require("dotenv").config();

const outputPath = path.join(
  __dirname,
  "src",
  "generated",
  "heroSlides.json"
);

const cleanText = (value) =>
  typeof value === "string" ? value.trim() : "";

const usableImageDescription = (value) => {
  const text = cleanText(value);
  return text.length >= 8 ? text : "";
};

const createContentfulClient = () => {
  const { REACT_APP_CONTENTFUL_SPACE, REACT_APP_CONTENTFUL_TOKEN } =
    process.env;

  if (!REACT_APP_CONTENTFUL_SPACE || !REACT_APP_CONTENTFUL_TOKEN) {
    throw new Error(
      "Missing Contentful env vars: REACT_APP_CONTENTFUL_SPACE and/or REACT_APP_CONTENTFUL_TOKEN"
    );
  }

  return createClient({
    space: REACT_APP_CONTENTFUL_SPACE,
    accessToken: REACT_APP_CONTENTFUL_TOKEN,
  });
};

const serializeSlide = (entry) => {
  const image = entry.fields.cloudinaryImage?.[0];

  if (!image?.secure_url) {
    return null;
  }

  const context = image.context?.custom || {};
  const alt =
    usableImageDescription(context.alt) ||
    "Marilyn's Windows custom window treatments";

  return {
    id: entry.sys.id,
    updatedAt: entry.sys.updatedAt,
    src: image.secure_url,
    width: image.width || 2000,
    height: image.height || 1200,
    alt,
    caption: usableImageDescription(context.caption),
    dataPin: usableImageDescription(context.dataPin),
  };
};

async function generateHeroSlides() {
  const client = createContentfulClient();
  const entries = await client.getEntries({ content_type: "slider" });
  const slides = entries.items.map(serializeSlide).filter(Boolean);

  if (!slides.length) {
    throw new Error("Contentful returned no usable slider images.");
  }

  await fs.mkdir(path.dirname(outputPath), { recursive: true });
  await fs.writeFile(
    outputPath,
    `${JSON.stringify({ slides }, null, 2)}\n`,
    "utf8"
  );

  console.log(`Generated ${slides.length} hero slides at ${outputPath}`);
}

generateHeroSlides().catch(async (error) => {
  try {
    await fs.access(outputPath);
    console.warn(
      `Hero slide refresh failed; using the existing generated data. ${error.message}`
    );
  } catch (accessError) {
    console.error("Hero slide generation failed.", error);
    process.exitCode = 1;
  }
});
