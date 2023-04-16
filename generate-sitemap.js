/**
    We're creating a new sitemap stream and adding all of the website's pages to the sitemap.

    We're also fetching all of the gallery and blog posts from Contentful and adding each one to the sitemap. 
    
    Finally, we're ending the sitemap stream and returning the sitemap as a string.
 */



import { Readable } from "stream";

import getBlogPostsFromContentful from "./src/utils/getBlogPostsFromContentful.js";
import getGalleryPostsFromContentful from "./src/utils/getGalleryPostsFromContentful.js";
import streamToBuffer from "./src/utils/streamToBuffer.js";

// const { createGzip } = require('zlib');
// const fs = require('fs');


import { pipeline } from 'stream';
import { promisify } from 'util';

import zlibPkg from 'zlib'

import fsPkg from 'fs'
import sitemapPkg from "sitemap"
import contenfulPkg from "contentful";

const { createGzip } = zlibPkg
const { createClient } = contenfulPkg
const { createWriteStream } = fsPkg;
const { SitemapStream, streamToPromise } = sitemapPkg

const pipelineAsync = promisify(pipeline);
const gzipAsync = promisify(zlibPkg.gzip);


// function streamToBuffer(stream) {
//   return new Promise((resolve, reject) => {
//     const chunks = [];
//     stream.on('error', reject);
//     stream.on('data', (chunk) => {
//       if (typeof chunk === 'string') {
//         chunks.push(Buffer.from(chunk));
//       } else {
//         chunks.push(chunk);
//       }
//     });
//     stream.on('end', () => resolve(Buffer.concat(chunks)));
//   });
// }


async function generateSitemap () {

  // Create a new sitemap stream
  const siteUrl = "https://marilynswindows.com";
  const smStream = await new SitemapStream({ hostname: siteUrl });

  // Fetch all of your blog & gallery posts from Contentful
  const blogPosts = await getBlogPostsFromContentful();
  const galleryPosts = await getGalleryPostsFromContentful();



  // Add all of your website's pages to the sitemap
  smStream.write({ url: "/", changefreq: "monthly", priority: 1 });
  smStream.write({ url: "/aboutme", changefreq: "monthly", priority: 0.8 });
  smStream.write({ url: "/services", changefreq: "monthly", priority: 0.9 });
  smStream.write({ url: "/gallery", changefreq: "monthly", priority: 0.8 });
  smStream.write({ url: "/blog", changefreq: "monthly", priority: 0.7 });
  // ...



  // Add each blog post to the sitemap
  blogPosts.forEach((blogPost) => {
    smStream.write({
      url: `/blog/post/${blogPost.blogPostFields.slug}`,
      changefreq: "monthly",
      priority: 0.6,
    });
  });


  // Add each gallery post to the sitemap
  galleryPosts.forEach((galleryPost) => {
    console.log('galleryPost', galleryPost);
    smStream.write({
      url: `/gallery/room/${galleryPost.galleryPostFields.slug}`,
      changefreq: "monthly",
      priority: 0.6,
    });
  });


  // End the sitemap stream
  smStream.end();




  // Save sitemap to file
  const filePath = "./public/sitemap.xml.gz"; // .xml.gz is a combination of the standard filename for sitemap files and an indication that the file has been compressed.


  const sitemapBuffer = await streamToBuffer(smStream);

  const compressedBuffer = await gzipAsync(sitemapBuffer);

  const writeStream = createWriteStream(filePath);

  await pipelineAsync(
    Readable.from(compressedBuffer),
    writeStream
  );

  console.log(`Sitemap generated at ${filePath}`);
// };


}

generateSitemap()

