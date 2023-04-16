/**
    We're creating a new Contentful client using the contentful package. 

    We're then calling the getEntries() method to fetch all entries of type blogPosts from 
    Contentful. We're then mapping over the returned entries and extracting the necessary 
    data, 
    
 */
import contenfulPkg from "contentful";
const { createClient } = contenfulPkg;
// import { createClient } from "contentful";
// const contentful = require('contentful');

const client = createClient({
  space: process.env.REACT_APP_CONTENTFUL_SPACE,
  accessToken: process.env.REACT_APP_CONTENTFUL_TOKEN,
});

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
