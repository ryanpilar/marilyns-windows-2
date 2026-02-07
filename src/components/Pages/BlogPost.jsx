import { useEffect, useState } from "react";
import { Link, useParams, useLocation } from "react-router-dom";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import Header3 from "../Common/Header3";
import Footer from "../Common/Footer";
import Banner3 from "../Segments/Banner3";
import SEO from "../Segments/SEO";
import RelatedBlog from "../Segments/RelatedBlog";

// Social Media Share Buttons:
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share";

import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { MARKS, BLOCKS } from "@contentful/rich-text-types";

import toast, { Toaster } from "react-hot-toast";
import webSitePaths from "../../assets/js/webSitePaths";

import createContentfulClient from "../../utils/createContentfulClient";

const BlogPost = () => {

  const cononicalLocation = useLocation();

  const bgimg = require("./../../images/background/ptn-1.png");

  const [blogPostBanner, setBlogPostBanner] = useState(null);
  const [singleBlogPost, setSingleBlogPost] = useState([]);

  const { slug } = useParams();
  const blogRoute = webSitePaths.blogRoute + slug;

  // Interactive Toast for copying the blogpost link
  const clipboardToast = () =>
    toast.success("Copied! Check your clipboard for link.", {
      duration: 6000,
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });

  // Get Blog Post data from Contentful
  useEffect(() => {
    const client = createContentfulClient()
    const getBanner = async () => {
      try {
        await client
          .getEntries({ content_type: "blogPostBanner" })
          .then((blogBanner) => {
            setBlogPostBanner(blogBanner.items[0].fields.image[0].secure_url);
          });
      } catch (error) {
        console.log("error");
      }
    };

    const getEntry = async () => {
      try {
        await client
          .getEntries({ content_type: "blogPosts", "fields.slug": slug })
          .then((blogEntry) => {
            setSingleBlogPost(blogEntry.items[0]);
          });
      } catch (error) {
        console.log("error");
      }
    };

    getBanner();
    getEntry();
  }, []);

  // Scroll to top upon page load
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

  // Rich text config for data coming from Contenful
  const richTextConversion = () => {
    if (singleBlogPost?.fields?.postContent) {
      const contentfulOptions = {
        renderMark: {
          [MARKS.CODE]: (embedded) => (
            <span className="youtube-wrapper">
              <span className="realtive-parent ">
                {/* contentful, you-tube iframe is passed here: */}
                <span dangerouslySetInnerHTML={{ __html: embedded }} />
              </span>
            </span>
          ),
        },
        renderNode: {
          "embedded-asset-block": (node) => (
            <img
              className="m-t20 m-b30"
              width={`100%`}
              src={node.data.target.fields.file.url}
              aria-hidden="true"
            />
          ),
          [BLOCKS.QUOTE]: (node, children) => (
            <div className="p-4 m-lr30">
              <blockquote className="blockquote">
                <span className="p pt-2">{children}</span>
              </blockquote>
            </div>
          ),
          [BLOCKS.UL_LIST]: (node, children) => (
            <ul className="list-angle-right m-tb60 m-lr20">{children}</ul>
          ),
          [BLOCKS.OL_LIST]: (node, children) => (
            <ol className="list-num-count m-tb40 m-lr20">{children}</ol>
          ),
          [BLOCKS.LIST_ITEM]: (node, children) => (
            <li className="p-tb10">{children}</li>
          ),
        },
        renderText: (text) => {
          return text.split("\n").reduce((children, textSegment, index) => {
            return [...children, index > 0 && <br key={index} />, textSegment];
          }, []);
        },
      };
      return documentToReactComponents(
        singleBlogPost?.fields?.postContent,
        contentfulOptions
      );
    } else {
      console.log("NO CONTENT PRESENT");
    }
  };
  // Owl Carousel Config Options
  const options = {
    loop: true,
    margin: 30,
    nav: true,
    dots: false,
    autoplay: true,
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
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  };

  return (
    <>
      <>
        {singleBlogPost && (
          <SEO
            title={`Blog Post | ${singleBlogPost?.fields?.title}`}
            description={singleBlogPost?.fields?.metaDescription}
            location={ cononicalLocation.pathname }
            robots={'index, follow'}
          />
        )}

        <Header3 />

        <div className="page-content">
          {blogPostBanner && (
            <Banner3
              title="Blog Posting"
              pagename="Blog Post"
              bgimage={blogPostBanner}
              // posLeft={true}
              posRight={true}
            />
          )}

          <div className="section-full p-b40 square_shape1 square_shape3 tm-blog-single-wrap">
            <div className="container">
              <div className="max-mid-container">
                <div className=" p-b30">
                  {/* BREADCRUMB START */}
                  <div className="">
                    <div className="p-t20 m-r20">
                      <div>
                        <ul className="wt-breadcrumb breadcrumb-style-2">
                          <li>
                            <Link to={"/"}>Home</Link>
                          </li>
                          <li>
                            <Link to={"/blog"}>Blog</Link>
                          </li>
                          <li>Post</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* BREADCRUMB END */}
                </div>

                {singleBlogPost?.fields?.blogImages && blogRoute && (
                  <div className="blog-post blog-lg date-style-1 text-black">
                    <div className="wt-post-media">

                      {/* IMAGE CAROUSEL START*/}
                      <OwlCarousel
                        className="owl-carousel owl-fade-slider-one owl-btn-vertical-center owl-dots-bottom-right"
                        {...options}
                      >
                        {singleBlogPost?.fields?.blogImages?.map(
                          (item, index) => (
                            <div className="item" key={index}>
                              <div className="aon-thum-bx">

                                <img
                                  src={item.secure_url}
                                  alt={item.context.custom.alt}
                                  data-pin-description={
                                    item.context.custom.dataPin
                                  }
                                  data-caption={item.context.custom.caption}
                                  width="800"
                                  height="500"
                                />

                              </div>
                            </div>
                          )
                        )}
                      </OwlCarousel>
                      {/* IMAGE CAROUSEL END*/}

                    </div>
                    <div className="">
                      <div className="wt-post-info p-t30">
                        <div className="">
                          {/* BLOG DETAILS */}
                          <div className="wt-post-title ">
                            <h2 className="post-title">
                              <span className="text-black font-45 letter-spacing-1">
                                {singleBlogPost?.fields?.descriptiveTitle}
                              </span>
                            </h2>
                          </div>
                          <div className="wt-post-meta">
                            <ul>
                              <li className="post-date">
                                <strong>
                                  {singleBlogPost?.fields?.dateCreated}
                                </strong>
                              </li>
                              <li className="post-comment">
                                {singleBlogPost?.fields?.blogAuthor}
                              </li>
                            </ul>
                          </div>
                        </div>
                        {/* BLOG CONTENT */}
                        <div className="row">
                          <div className="wt-post-text col-lg-12 col-md-12 col-sm-12">
                            {richTextConversion()}
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-md-4 col-sm-6">
                            <div className="wt-box">
                              <div className="row  p-lr15">
                                <h3 className="tagcloud text-uppercase font-weight-500">
                                  Share this Post:
                                </h3>
                                <div className="widget_social_inks">
                                  <ul className="social-icons social-md social-square social-dark m-b0">
                                    <li>
                                      <FacebookShareButton
                                        hashtag={"#marilynswindowsandinteriors"}
                                        quote={`Read Marilyn's article: '${singleBlogPost?.fields?.descriptiveTitle}'`}
                                        url={blogRoute}
                                        aria-label="Share to Facebook"
                                        role="button"
                                      >
                                        <a>
                                          <i
                                            className="fa fa-facebook"
                                            aria-hidden="true"
                                          />
                                        </a>
                                      </FacebookShareButton>
                                    </li>
                                    <li>
                                      <TwitterShareButton
                                        title={`Checkout this fantastic article by Marilyn: \n'${singleBlogPost?.fields?.descriptiveTitle}':`}
                                        hashtags={[
                                          "marilynswindowsandinteriors",
                                        ]}
                                        url={blogRoute}
                                        aria-label="Share to Twitter"
                                        role="button"
                                      >
                                        <a>
                                          <i
                                            className="fa fa-twitter"
                                            aria-hidden="true"
                                          />
                                        </a>
                                      </TwitterShareButton>
                                    </li>
                                    <li>
                                      <LinkedinShareButton
                                        title={
                                          singleBlogPost?.fields
                                            ?.descriptiveTitle
                                        }
                                        summary={
                                          singleBlogPost?.fields?.blogSummary
                                        }
                                        source={blogRoute}
                                        url={blogRoute}
                                        aria-label="Share to Linkedin"
                                        role="button"
                                      >
                                        <a>
                                          <i
                                            className="fa fa-linkedin"
                                            aria-hidden="true"
                                          />
                                        </a>
                                      </LinkedinShareButton>
                                    </li>

                                    <li>
                                      <EmailShareButton
                                        subject={`Read Marilyn's article: ${singleBlogPost?.fields?.descriptiveTitle}`}
                                        body="Link to article: "
                                        url={blogRoute}
                                        aria-label="Share to Email"
                                        role="button"
                                      >
                                        <a>
                                          <i
                                            className="fa fa-envelope"
                                            aria-hidden="true"
                                          />
                                        </a>
                                      </EmailShareButton>
                                    </li>
                                    {/* Copy link to clipboard */}
                                    <li>
                                      <a
                                        style={{ cursor: "pointer" }}
                                        onClick={() => {
                                          navigator.clipboard.writeText(
                                            blogRoute
                                          );
                                          clipboardToast();
                                        }}
                                        aria-label="Copy Link Address"
                                        role="button"
                                      >
                                        <i
                                          className="fa fa-link"
                                          aria-hidden="true"
                                        />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

        </div>
        <div className="page-content ">
          <div
            className="section-full p-tb90 tm-blog-single-wrap"
            style={{ backgroundImage: "url(" + bgimg.default + ")" }}
          >
            <div className="container">
              <div className="max-mid-container">
                <RelatedBlog slug={slug} />
              </div>
            </div>
          </div>
        </div>
      </>

      <Footer />
      <Toaster position="bottom-center" reverseOrder={false} />
    </>
  );
};

export default BlogPost;
