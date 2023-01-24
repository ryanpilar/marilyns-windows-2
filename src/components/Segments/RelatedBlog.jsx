import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { createClient } from "contentful";
import BlogCard2 from "./BlogCard2";

const RelatedBlog = ({id}) => {
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
        items: 2,
      },
      767: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  };

  const [blogPost, setBlogPost] = React.useState(null);

  const removeDouble = (entries, blogId) => {
    const filtered = entries.filter((post) => post.sys.id !== blogId);
    console.log("filtered", filtered);
    return filtered;
  };

  React.useEffect(() => {
    const getAllEntries = async () => {
      // contentful get data
      try {
        const client = createClient({
          // contentful connect
          space: process.env.REACT_APP_CONTENTFUL_SPACE,
          accessToken: process.env.REACT_APP_CONTENTFUL_TOKEN,
        });

        await client
          .getEntries({ content_type: "blogPosts" })
          .then((blogEntries) => {
            console.log("blog entries", blogEntries.items);

            const filteredEntries = removeDouble(blogEntries.items, id);
            console.log("filtered", filteredEntries);

            setBlogPost(filteredEntries);
          });
      } catch (error) {
        console.log(
          "this error arose from the client.getEntries() call to contentful"
        );
      }
    };

    getAllEntries();
  }, []);

  return (
    <>
      <div>
        <div className="section-content">
          {/* TITLE START */}
          <div className="text-left">
            <h2 className="text-uppercase font-45">More From Marilyn</h2>
            <div className="wt-separator-outer">
              <div className="wt-separator bg-black" />
            </div>
          </div>
          {/* TITLE END */}
          {/* CAROUSEL */}
          <div className="section-content">
            {blogPost && (
              <OwlCarousel
                className="owl-carousel blog-related-slider  owl-btn-top-right"
                {...options}
              >
                {blogPost.map((item, index) => (
                  <div>
                    <BlogCard2 item={item} key={index} />
                  </div>
                ))}
              </OwlCarousel>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default RelatedBlog;
