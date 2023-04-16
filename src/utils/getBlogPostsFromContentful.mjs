/**
    We're creating a new Contentful client using the contentful package. 

    We're then calling the getEntries() method to fetch all entries of type blogPosts from 
    Contentful. We're then mapping over the returned entries and extracting the necessary 
    data, 
    
 */

import { createClient } from "contentful";
// const contentful = require('contentful');

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
