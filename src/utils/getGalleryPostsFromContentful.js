/**
    getGalleryPostsFromContentful() method fetches all entries of type gallery from 
    Contentful.  It then extracts the necessary data from each entry and returns 
    an array of gallery post objects.
 */
import createContentfulClient from "./createContentfulClient";

const client = createContentfulClient()

const getGalleryPostsFromContentful = async () => {
  const entries = await client.getEntries({
    content_type: "gallery",
  });

  const galleryPosts = entries.items.map((entry) => ({
    galleryPostFields: entry.fields,
    // ...
  }));

  return galleryPosts;
};

export default getGalleryPostsFromContentful;
