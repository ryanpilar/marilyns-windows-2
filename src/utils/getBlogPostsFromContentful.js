/**
    getBlogPostsFromContentful() method fetches all entries of type blogPosts from 
    Contentful.  It then extracts the necessary data from each entry and returns 
    an array of blog post objects.
 */

// import contenfulPkg from "contentful";
import createContentfulClient from "./createContentfulClient";

// throw new TypeError('process.env.REACT_APP_CONTENTFUL_TOKEN', cREACT_APP_CONTENTFUL_TOKEN)
// console.log('process.env.REACT_APP_CONTENTFUL_TOKEN', process.env.REACT_APP_CONTENTFUL_TOKEN)
// console.log('process.env.REACT_APP_CONTENTFUL_SPACE', process.env.REACT_APP_CONTENTFUL_SPACE)


const client = createContentfulClient()

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
