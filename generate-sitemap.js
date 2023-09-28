/**
    generateSitemap creates a sitemap for a website that includes all pages as well as blog and 
    gallery posts fetched from Contentful. The SitemapStream class is used to create the sitemap 
    and add each page and post to it. 
    
    The pipeline function is used to compress the sitemap data using gzip compression and write 
    it to a file. 
    
    The code also includes promisified versions of the pipeline and gzip functions to make working 
    with them easier. 
    
    Finally, the code generates the sitemap and writes it to a file, with the resulting file being 
    named "sitemap.xml.gz".
 */

import { pipeline } from "stream";
import { promisify } from "util";
import { Readable } from "stream";

import fsPkg from "fs";
import zlibPkg from "zlib";
import sitemapPkg from "sitemap";

const { createGzip } = zlibPkg;
const { createWriteStream } = fsPkg;
const { SitemapStream, streamToPromise } = sitemapPkg;

import getBlogPostsFromContentful from "./src/utils/getBlogPostsFromContentful.js";
import getGalleryPostsFromContentful from "./src/utils/getGalleryPostsFromContentful.js";
import streamToBuffer from "./src/utils/streamToBuffer.js";

/**
  Pipeline provides a way to work with streaming data in a more efficient and memory-friendly way. 
  The pipeline function takes a sequence of stream instances and connects them together, so that data 
  can flow from the source stream through a series of transformation streams and finally to the 
  destination stream.

  The pipeline function takes care of error handling and backpressure management. In the example code, the 
  pipeline function is used to compress the sitemap data using gzip compression and write it to a 
  file using a WriteStream.
 */

/**
  Promisify is a way to convert callback-based APIs to promise-based APIs, which can be 
  easier to work with and better suited for certain programming patterns. By wrapping the gzip 
  function in a promisified version, it becomes possible to use the gzip function with the await 
  keyword to wait for it to finish executing and retrieve its result, instead of passing in a callback 
  function.

  This promisified function can be used later in the code to compress a buffer object using gzip 
  compression and return a promise that resolves to the compressed data.
*/

const pipelineAsync = promisify(pipeline);
const gzipAsync = promisify(zlibPkg.gzip);

async function generateSitemap() {
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
    console.log("galleryPost", galleryPost);
    smStream.write({
      url: `/gallery/room/${galleryPost.galleryPostFields.slug}`,
      changefreq: "monthly",
      priority: 0.6,
    });
  });

  // End the sitemap stream
  smStream.end();

  // .xml.gz is a standard sitemap filename and an indication that the file has been compressed.
  const filePath = "./public/sitemap.xml.gz";

  // Returns a promise, that resolves to a Buffer, containing all the data from the stream.
  const sitemapBuffer = await streamToBuffer(smStream);
  const compressedBuffer = await gzipAsync(sitemapBuffer);

  // Returns a new WriteStream object that writes data to the file specified by filePath
  const writeStream = createWriteStream(filePath);

  // Write the compressed sitemap data to a file.
  await pipelineAsync(Readable.from(compressedBuffer), writeStream);

  console.log(`Sitemap generated at ${filePath}`);
}

generateSitemap();
