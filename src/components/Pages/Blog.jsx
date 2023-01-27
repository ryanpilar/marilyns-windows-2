import React from "react";
import { useEffect, useState, useLayoutEffect } from "react";

import { createClient } from "contentful";

import Header2 from "../Common/Header2";
import Banner from "../Segments/Banner";
import BlogCard from "../Segments/BlogCard";
import Footer from "../Common/Footer";
import SEO from "../Segments/SEO";
import { Link } from "react-router-dom";
import RelatedBlog from "../Segments/RelatedBlog";


const Blog = () => {
  const [blogPost, setBlogPost] = useState(null);
  const [blogBanner, setBlogBanner] = useState(null);

  useEffect(() => {
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
            setBlogPost(blogEntries);
          });

        await client.getEntries({ content_type: "blog" }).then((blogBanner) => {
          setBlogBanner(
            blogBanner.items[0].fields.backgroundImage[0].secure_url
          );
        });
      } catch (error) {
        console.log(
          "this error arose from the client.getEntries() call to contentful"
        );
      }
    };

    getAllEntries();
  }, []);

  useLayoutEffect(() => {
    function loadScript(src) {
      return new Promise(function (resolve, reject) {
        var script = document.createElement("script");
        script.src = src;
        script.addEventListener("load", function () {
          resolve();
        });
        script.addEventListener("error", function (e) {
          reject(e);
        });
        document.body.appendChild(script);
        document.body.removeChild(script);
      });
    }

    loadScript("./assets/js/custom.js");
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
      <SEO
        title={`Marilyn's Windows | Blog |  I Write Interesting Things About Drapes`}
        description={`Interesting articles about interior design and the wonderful world of drapery. Learn about industry trends or read frequently asked questions.`}
      />

      <Header2 />

      <div className="page-content">
        {blogBanner && (
          <Banner
            title="Sustainability, Innovation, and Craftmanship"
            pagename="Blog Post"
            bgimage={blogBanner}
          />
        )}

        <div className="container">
          <div className="container">
            {/* BREADCRUMB ROW */}
            <div className="">
              <div className="p-t20 m-r20">
                <div>
                  <ul className="wt-breadcrumb breadcrumb-style-2">
                    <li>
                      <Link to={"/"}>Home</Link>
                    </li>
                    <li>Blog</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* BREADCRUMB ROW END */}

            {/* TITLE START */}
            <div className="text-left">
              <h2 className="text-uppercase font-45 font-weight-500">Learn With Marilyn</h2>
              <div className="wt-separator-outer">
                <div className="wt-separator bg-black" />
              </div>
            </div>
            {/* TITLE END */}
          </div>

          {blogPost && (
            <div className="section-full p-tb20 tm-work-wrap">
              <div className="container-fluid">
                <div className="container">
                  <div className="">
                    {/* MAKE A LIST OF BLOG LINKs START */}
                    <div className="link-container m-b50">
                      <ul className="list-arrow ">
                        {blogPost?.items?.map((post, index) => (
                            <li key={index} className="p-a5 m-a5">
                              <Link
                                to={`/blog/post/${post.sys.id}`}
                                className="text-uppercase link-style font-14"
                              >
                                {post.fields.descriptiveTitle}
                              </Link>
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                    {/* MAKE A LIST OF BLOG LINKs END */}
                  </div>
                </div>

                <RelatedBlog />

                <div className="portfolio-wrap mfp-gallery work-grid clearfix ">
                  <div className="row">
                    <>
                      {/* {blogPost?.items?.map((postData, index) => (
                        <BlogCard
                          key={postData.sys.id}
                          passItem={postData}
                          passIndex={index}
                        />
                      ))} */}
                    </>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Blog;
