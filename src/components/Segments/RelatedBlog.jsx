import { useEffect, useState } from "react";
import createContentfulClient from "../../utils/createContentfulClient";
import BlogCard2 from "./BlogCard2";

import EmblaCarousel from "../Common/EmblaCarousel";

const RelatedBlog = ({ slug }) => {

  const [blogPost, setBlogPost] = useState(null);


  const removeDouble = (entries, theSlug) => {
    return entries.filter((post) => post.fields.slug !== theSlug);
  };

  const shuffleEntries = (entries) => {
    const result = [...entries];
    for (let i = result.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
  };

  // Connect to Contentful & Fetch Data
  useEffect(() => {

    const client = createContentfulClient()

    const getAllEntries = async () => {
      try {
        await client
          .getEntries({ content_type: "blogPosts" })
          .then((blogEntries) => {

            const filteredEntries = slug
              ? removeDouble(blogEntries.items, slug)
              : blogEntries.items;

            setBlogPost(shuffleEntries(filteredEntries));

          });
      } catch (error) {
        console.log(
          "this error arose from the RelatedBlog client.getEntries() call to contentful"
        );
      }
    };
    getAllEntries();
  }, [slug]);

  useEffect(() => {
    window.addEventListener("load", () => {
      window.scrollTo(0, 0);
    });

    return () => {
      window.removeEventListener("load", () => {
        window.scrollTo(0, 0);
      });
    };
  }, []);

  return (
    <>
      <div>
        <div className="section-content">
          {/* TITLE START */}
          <div className="text-left">
            <h2 className="text-uppercase font-34 font-weight-400">
              More From Marilyn
            </h2>
            <div className="wt-separator-outer">
              <div className="wt-separator bg-black" />
            </div>
          </div>
          {/* TITLE END */}

          <div className="section-content ">
            {blogPost && (
              <div className="">
                <EmblaCarousel
                  ariaLabel="More blog posts"
                  className="embla-related-blog p-lr10"
                  options={{ duration: 25, loop: true }}
                  navigationClassName="embla-related-blog__navigation"
                  showNavigation
                >
                  {blogPost.map((item, index) => (
                    <BlogCard2 item={item} key={index} />
                  ))}
                </EmblaCarousel>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default RelatedBlog;
