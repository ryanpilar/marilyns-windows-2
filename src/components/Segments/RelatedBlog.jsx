import { useEffect, useState } from "react";
import createContentfulClient from "../../utils/createContentfulClient";
import BlogCard2 from "./BlogCard2";

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
    navElement: 'button type="button"',
    navText: [
      '<span class="sr-only">Previous slide</span><i class="fa fa-angle-left" aria-hidden="true"></i>',
      '<span class="sr-only">Next slide</span><i class="fa fa-angle-right" aria-hidden="true"></i>',
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
        console.log(
          "this error arose from the RelatedBlog client.getEntries() call to contentful"
        );
      }
    };
    getAllEntries();
  }, []);

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
