import React from "react";
import { useEffect, useState, useLayoutEffect } from "react";

import { createClient } from "contentful";

import Header3 from "../Common/Header3";
import Banner from "../Segments/Banner";
// import BlogCard from "../Segments/BlogCard";
import Footer from "../Common/Footer";
import SEO from "../Segments/SEO";
import { NavLink, Link } from "react-router-dom";
import RelatedBlog from "../Segments/RelatedBlog";

const Blog = () => {
  const [blogPost, setBlogPost] = useState(null);
  const [blogBanner, setBlogBanner] = useState(null);

  const [blackOpacity, setBlackOpacity] = React.useState({
    isHover: false,
  });

  const handleHover = () => {
    setBlackOpacity({ isHover: !blackOpacity.isHover });
  };

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

      <Header3 />

      <div className="page-content">
        {blogBanner && (
          <Banner
            title="Marilyn's Blog"
            pagename="Blog Post"
            bgimage={blogBanner}
            // posLeft={true}
            posRight={true}
          />
        )}

        <div className="container">
          <div className="">
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
              {/* <h2 className="text-uppercase font-50 font-weight-500">
                Marilyn's Blog
              </h2> */}
              <div className="wt-separator-outer">
                <div className="wt-separator bg-black" />
              </div>
            </div>
            {/* TITLE END */}
          </div>

          <div className="">
            <div className="">
              <div className="row m-t30">
                <div className="col-lg-7 col-md-9 col-sm-12 m-b0">
                  <p className="p-r30 text-left">
                    Welcome to our blog page! Join us as we share our design
                    inspiration, tips and tricks, and behind-the-scenes stories
                    from our projects.
                  </p>
                  <p className="p-r30 text-left">
                    Whether you're a homeowner, designer, or just looking for
                    inspiration, we invite you to explore the world of window
                    coverings with us.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="m-t30 m-b60">
            <div className="news-listing ">
              {/* TITLE START */}
              <div className="text-left">
                <h2 className="text-uppercase font-34 font-weight-400">Most Recent Post</h2>
                <div className="wt-separator-outer">
                  <div className="wt-separator bg-black" />
                </div>
              </div>
              {/* TITLE END */}

              {/* MOST RECENT POST START */}
              {blogPost && (
                <div className=" m-t30">
                  <div className="">
                    <div className="blog-post blog-md date-style-1 clearfix bdr-2 bdr-gray-light m-b60 bg-gray add-box-shadow">
                      <div className="wt-post-media wt-img-effect zoom-slow">
                        <div
                          className={
                            blackOpacity.isHover ? "" : "wt-img-black-bg"
                          }
                          onMouseEnter={handleHover}
                          onMouseLeave={handleHover}
                        >
                          <div
                            className={
                              blackOpacity.isHover ? "" : "img-opacity"
                            }
                          >
                            <Link to={`/blog/post/${blogPost.items[0].sys.id}`}>
                              <img
                                src={
                                  blogPost.items[0].fields.blogImages[0]
                                    .secure_url
                                }
                                alt={
                                  blogPost.items[0].fields.blogImages[0].context
                                    .alt
                                }
                              />
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="wt-post-info p-tb30 text-black">
                        <div className="wt-post-title ">
                          <h2 className="post-title">
                            <Link
                              to={`/blog/post/${blogPost.items[0].sys.id}`}
                              className="text-black font-18 letter-spacing-1 font-weight-600"
                            >
                              {blogPost.items[0].fields.descriptiveTitle}
                            </Link>
                          </h2>
                        </div>
                        <div className="wt-post-meta ">
                          <ul>
                            <li className="post-date">
                              <strong>
                                {blogPost.items[0].fields.dateCreated}
                              </strong>{" "}
                            </li>
                            <li className="post-author">
                              <Link
                                to={`/blog/post/${blogPost.items[0].sys.id}`}
                              >
                                By{" "}
                                <span>
                                  {blogPost.items[0].fields.blogAuthor}
                                </span>
                              </Link>{" "}
                            </li>
                          </ul>
                        </div>
                        <div className="wt-post-text">
                          <p>{blogPost.items[0].fields.blogSummary}</p>
                        </div>
                        <Link
                          to={`/blog/post/${blogPost.items[0].sys.id}`}
                          // className="v-button letter-spacing-4 font-12 text-uppercase"
                          className="link-style font-14 letter-spacing-4 text-uppercase"
                        >
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {/* MOST RECENT POST END */}
            </div>
          </div>

          {blogPost && (
            <>
              <RelatedBlog id={blogPost.items[0].sys.id} />
              <div className="section-full p-tb20 tm-work-wrap">
                <div className="container-fluid">
                  <div className="">
                    <div className="">
                      {/* TITLE START */}
                      <div className="text-left m-b30">
                        <h2 className="text-uppercase font-34">
                          All Posts From Marilyn
                        </h2>
                        <div className="wt-separator-outer">
                          <div className="wt-separator bg-black" />
                        </div>
                      </div>
                      {/* TITLE END */}

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
                          ))}
                        </ul>
                      </div>
                      {/* MAKE A LIST OF BLOG LINKs END */}
                    </div>
                  </div>

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
            </>
          )}
        </div>
        <div className="container ">
          <div className="row flex-center ">
            <div className="col-lg-7 col-md-9 m-b60">
              <div className="m-l20 m-r40 m-t30 ">
                <div className="bdr-dot-2 bdr-gray-light p-t20 p-b20 p-l20 p-r12 ">
                  <h3 className="font-16 font-weight-500 text-uppercase ">
                    Don't Miss Out!
                  </h3>
                  <p>
                    Be sure to visit{" "}
                    <Link
                      to={"/gallery"}
                      className="text-uppercase link-style font-14"
                    >
                      <span className="">The Gallery</span>
                    </Link>{" "}
                    to see some of Marilyn's beautiful work. Or read{" "}
                    <Link
                      to={"/aboutme"}
                      className="text-uppercase link-style font-14"
                    >
                      <span className="">Marilyn's Story</span>
                    </Link>{" "}
                    to gain a better appreciation of where she came from, and
                    how Marilyn's Windows came to be.
                  </p>
                  <div className="m-t40  p-r10">
                    <NavLink
                      to={"/gallery"}
                      className="btn-half pad text-white site-button button-md m-b15 "
                    >
                      <span className="p-lr5">Gallery</span>
                      <em />
                    </NavLink>
                    <NavLink
                      to={"/blog"}
                      className="btn-half pad text-white site-button button-md m-b15 "
                    >
                      <span className="p-lr5"> Blog</span>
                      <em />
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Blog;
