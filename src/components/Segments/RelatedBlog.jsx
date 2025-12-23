import { useEffect, useState } from "react";
import createContentfulClient from "../../utils/createContentfulClient";
import BlogCard2 from "./BlogCard2";
import { logError } from "../../utils/logger";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const RelatedBlog = ({ slug }) => {

  const [blogPost, setBlogPost] = useState(null);
  var bgimg = require("./../../images/background/ptn-1.png");
  
  const options = {
    loop: true,
    margin: 30,
    nav: true,
    dots: false,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      480: {
        items: 1,
      },
      767: {
        items: 2,
      },
      1100: {
        items: 3,
      },
    },
  };


  const removeDouble = (entries, theSlug) => {
    const filtered = entries.filter((post) => post.fields.slug !== theSlug);
    return filtered;
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

            setBlogPost(filteredEntries);

          });
      } catch (error) {
        logError(
          "this error arose from the RelatedBlog client.getEntries() call to contentful"
        );
      }
    };
    getAllEntries();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
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
                <OwlCarousel
                  className="owl-carousel blog-related-slider  owl-btn-top-right p-lr10"
                  {...options}
                >
                  {blogPost.map((item, index) => (
                    <BlogCard2 item={item} key={index} />
                  ))}
                </OwlCarousel>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default RelatedBlog;
