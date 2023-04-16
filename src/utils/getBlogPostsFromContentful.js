/**
    getBlogPostsFromContentful() method fetches all entries of type blogPosts from 
    Contentful.  It then extracts the necessary data from each entry and returns 
    an array of blog post objects.
 */

import contenfulPkg from "contentful";

const { createClient } = contenfulPkg;

const client = createClient({
  space: process.env.REACT_APP_CONTENTFUL_SPACE,
  accessToken: process.env.REACT_APP_CONTENTFUL_TOKEN,
});

const getBlogPostsFromContentful = async () => {
  const entries = await client.getEntries({
    content_type: "blogPosts",
  });

  const blogPosts = entries.items.map((entry) => ({
    blogPostFields: entry.fields,
    // ...
  }));

  return blogPosts;
};

export default getBlogPostsFromContentful;
