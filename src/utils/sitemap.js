/**
    We're creating a new sitemap stream and adding all of the website's pages to the sitemap.

    We're also fetching all of the gallery and blog posts from Contentful and adding each one to the sitemap. 
    
    Finally, we're ending the sitemap stream and returning the sitemap as a string.
 */

import { SitemapStream, streamToPromise } from 'sitemap';
import { Readable } from 'stream';

import { getBlogPostsFromContentful } from './getBlogPostsFromContentful';
import { getGalleryPostsFromContentful } from './getGalleryPostsFromContentful';

module.exports = {

    generateSitemap: async (siteUrl) => {
        // Create a new sitemap stream
        const smStream = new SitemapStream({ hostname: siteUrl });
      
        // Add all of your website's pages to the sitemap
        smStream.write({ url: '/' });
        smStream.write({ url: '/aboutme' });
        smStream.write({ url: '/services' });
        smStream.write({ url: '/gallery' });
        smStream.write({ url: '/blog' });
        // ...
      
        // Fetch all of your blog & gallery posts from Contentful
        const blogPosts = await getBlogPostsFromContentful();
        const galleryPosts = await getGalleryPostsFromContentful();
    
        console.log('BLOGPOSTS', blogPosts)
        console.log('GALLERY', galleryPosts);
      
        // Add each blog post to the sitemap
        blogPosts.forEach((blogPost) => {
          smStream.write({ url: `/blog/post/${blogPost.slug}` });
        });
    
        // Add each gallery post to the sitemap
        blogPosts.forEach((galleryPost) => {
            smStream.write({ url: `/gallery/room/${galleryPost.slug}` });
          });
      
        // End the sitemap stream
        smStream.end();
      
        // Return the sitemap as a string
        const sitemap = await streamToPromise(Readable.from(smStream.toString()));
        return sitemap
      }
    

}

  
