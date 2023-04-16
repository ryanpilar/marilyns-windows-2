/**
    We're creating a new sitemap stream and adding all of the website's pages to the sitemap.

    We're also fetching all of the gallery and blog posts from Contentful and adding each one to the sitemap. 
    
    Finally, we're ending the sitemap stream and returning the sitemap as a string.
 */



// import { Readable } from "stream";

// import getBlogPostsFromContentful from "./src/utils/getBlogPostsFromContentful.js";
// import getGalleryPostsFromContentful from "./src/utils/getGalleryPostsFromContentful.js";

// const { createGzip } = require('zlib');
// const fs = require('fs');


import { pipeline } from 'stream';
import { promisify } from 'util';

import zlibPkg from 'zlib'
const { createGzip } = zlibPkg
// import { createGzip } from "zlib";

import fsPkg from 'fs'
const { createWriteStream } = fsPkg;

import contenfulPkg from "contentful";
const { createClient } = contenfulPkg

import sitemapPkg from "sitemap"
const { SitemapStream, streamToPromise } = sitemapPkg

const pipelineAsync = promisify(pipeline);
const gzipAsync = promisify(zlibPkg.gzip);

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

const getGalleryPostsFromContentful = async () => {
  const entries = await client.getEntries({
    content_type: "gallery",
  });

  const galleryPosts = entries.items.map((entry) => ({
    blogPostFields: entry.fields,
    // ...
  }));

  return galleryPosts;
};

const streamToBuffer = async (stream) => {
  const chunks = [];
  for await (const chunk of stream) {
    chunks.push(chunk);
  }
  return Buffer.concat(chunks);
};

async function generateSitemap () {

  // Create a new sitemap stream

  const siteUrl = "https://marilynswindows.com";
  const smStream = await new SitemapStream({ hostname: siteUrl });

  // Fetch all of your blog & gallery posts from Contentful
  const blogPosts = await getBlogPostsFromContentful();
  const galleryPosts = await getGalleryPostsFromContentful();


  // const pipeline = await smStream.pipe(createGzip());
  // const pipeline = await new Promise((resolve, reject) => {
  //   smStream.pipe(createGzip()).on('error', reject).pipe(resolve);
  // });

  // console.log('pipeline', pipeline);

  // Add all of your website's pages to the sitemap
  smStream.write({ url: "/", changefreq: "monthly", priority: 1 });
  smStream.write({ url: "/aboutme", changefreq: "monthly", priority: 0.8 });
  smStream.write({ url: "/services", changefreq: "monthly", priority: 0.9 });
  smStream.write({ url: "/gallery", changefreq: "monthly", priority: 0.8 });
  smStream.write({ url: "/blog", changefreq: "monthly", priority: 0.7 });
  // ...

  // console.log("BLOGPOSTS", blogPosts);
  // console.log("GALLERY", galleryPosts);

  // Add each blog post to the sitemap
  blogPosts.forEach((blogPost) => {
    smStream.write({
      url: `/blog/post/${blogPost.slug}`,
      changefreq: "monthly",
      priority: 0.6,
    });
  });

  console.log('TEST 1');

  // Add each gallery post to the sitemap
  galleryPosts.forEach((galleryPost) => {
    smStream.write({
      url: `/gallery/room/${galleryPost.slug}`,
      changefreq: "monthly",
      priority: 0.6,
    });
  });

  console.log('TEST 2');

  // End the sitemap stream
  smStream.end();



  console.log('TEST 3');

  // Save sitemap to file
  const filePath = "./public/sitemap.xml.gz"; // .xml.gz is a combination of the standard filename for sitemap files and an indication that the file has been compressed.

  console.log('TEST 4');

  const sitemapBuffer = await streamToBuffer(smStream);
  console.log('TEST 5');

  const compressedBuffer = await gzipAsync(sitemapBuffer);
  console.log('TEST 56');

  // const filePath = './public/sitemap.xml.gz';
  const writeStream = fs.createWriteStream(filePath);
  console.log('TEST 567');

  await pipelineAsync(
    Readable.from(compressedBuffer),
    writeStream
  );

  console.log(`Sitemap generated at ${filePath}`);
// };

  // Convert the sitemap stream to a buffer
  // const sitemapBuffer = await new Promise((resolve, reject) => {

  //   const buffers = [];
  //   smStream.on('data', (chunk) => {
  //     buffers.push(chunk);
  //   });
  //   smStream.on('error', (err) => {
  //     reject(err);
  //   });
  //   smStream.on('end', () => {
  //     resolve(Buffer.concat(buffers));
  //   });
  // });



  // Compress the sitemap buffer
// const gzip = await zlibPkg./promises.gzip(sitemapBuffer);
console.log('TEST 6');

// Write the compressed sitemap to a file
// const writeStream = await createWriteStream(filePath);
// await writeStream.write(gzip);
// await writeStream.end();

// console.log(`Sitemap generated at ${filePath}`);

  // const writeStream = await createWriteStream(filePath);


  // await streamToPromise(pipeline.pipe(writeStream));



  // Return the sitemap as a string
  // await streamToPromise(Readable.from(smStream.toString()));
  // return sitemap;
}

generateSitemap()

// export default generateSitemap