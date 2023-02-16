import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { createClient } from "contentful";
import BlogCard2 from "./BlogCard2";
import { useEffect } from "react";

const RelatedBlog = ({ slug }) => {
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
      1000: {
        items: 2,
      },
    },
  };

  const [blogPost, setBlogPost] = React.useState(null);

  const removeDouble = (entries, theSlug) => {
    const filtered = entries.filter((post) => post.fields.slug !== theSlug);
    return filtered;
  };

  React.useEffect(() => {
    const client = createClient({
      // contentful connect
      space: process.env.REACT_APP_CONTENTFUL_SPACE,
      accessToken: process.env.REACT_APP_CONTENTFUL_TOKEN,
    });
    const getAllEntries = async () => {
      // contentful get data
      try {
        await client
          .getEntries({ content_type: "blogPosts" })
          .then((blogEntries) => {

            const filteredEntries = slug
              ? removeDouble(blogEntries.items, slug)
              : blogEntries.items;
            // console.log("filtered", filteredEntries);

            setBlogPost(filteredEntries);
            // console.log("filtered22", filteredEntries);

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
          {/* CAROUSEL */}
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
