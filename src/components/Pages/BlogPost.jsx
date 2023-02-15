import React from "react";
import { useEffect, useState } from "react";

import { useParams } from "react-router-dom"; // useParams allows the '/blog/post/:id' to work
import { Link } from "react-router-dom";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import Header3 from "../Common/Header3";
import Footer from "../Common/Footer";
import Banner3 from "../Segments/Banner3";
import SEO from "../Segments/SEO";
import RelatedBlog from "../Segments/RelatedBlog";

import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share";

import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { MARKS, BLOCKS } from "@contentful/rich-text-types";

import toast, { Toaster } from "react-hot-toast";
import webSitePaths from "../../assets/js/webSitePaths";

const BlogPost = () => {
  const [blogPostBanner, setBlogPostBanner] = useState(null);

  var bgimg = require("./../../images/background/ptn-1.png");

  const { id } = useParams(); // grabs the contentful :id form the address bar

  const [singleBlogPost, setSingleBlogPost] = useState([]);
  const blogRoute = webSitePaths.blogRoute + id;

  const clipboardToast = () =>
    toast.success("Copied! Check your clipboard for link.", {
      duration: 6000,
      // icon: '👏',
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });

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

  useEffect(() => {
    const client = createClient({
      space: process.env.REACT_APP_CONTENTFUL_SPACE,
      accessToken: process.env.REACT_APP_CONTENTFUL_TOKEN,
    });
    const getBanner = async () => {
      try {
        await client
          .getEntries({ content_type: "blogPostBanner" })
          .then((blogBanner) => {
            console.log("info", blogBanner.items[0].fields.image[0].secure_url);
            setBlogPostBanner(blogBanner.items[0].fields.image[0].secure_url);
          });
      } catch (error) {
        console.log("error");
      }
    };

    const getEntryById = async () => {
      try {
        await client.getEntry(id).then((blogEntry) => {
          // console.log("BLOG ENTRY", blogEntry);
          setSingleBlogPost(blogEntry);
        });
      } catch (error) {
        console.log("error");
      }
    };

    getBanner();
    getEntryById();
  }, []);

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

          // [BLOCKS.UL_LIST]: (node, children) => (<ul className='list-num-count m-l40'>{children}</ul>),
          // [BLOCKS.OL_LIST]: (node, children) => (<ol className='list-num-count m-l40'>{children}</ol>),
          // [BLOCKS.LIST_ITEM]: (node, children) => (<li className='list-num-count m-l40'>{children}</li>),
        },
        renderNode: {
          "embedded-asset-block": (node) => (
            <img
              className="m-t20 m-b30"
              width={`100%`}
              src={node.data.target.fields.file.url}
              aria-hidden={true}
            />
          ),
          [BLOCKS.QUOTE]: (node, children) => (
            <div className="p-4 m-lr30">
              <blockquote className="blockquote">
                <span className="p pt-2">
                  {/* <i className="fa fa-quote-right text-primary "></i> */}
                  {children}
                </span>
              </blockquote>
            </div>
          ),
          [BLOCKS.UL_LIST]: (node, children) => (
            <ul className="list-simple m-tb40 m-lr20">{children}</ul>
          ),
          [BLOCKS.OL_LIST]: (node, children) => (
            <ol className="list-num-count m-tb40 m-lr20">{children}</ol>
          ),
          [BLOCKS.LIST_ITEM]: (node, children) => (
            <li className="p-tb10">{children}</li>
          ),
          // [BLOCKS.TABLE]: (node, children) => (
          //   <table className="table table-bordered ">
          //     <tbody className="">{children}</tbody>
          //   </table>
          // ),
          // [BLOCKS.TABLE_ROW]: (node, children) => (
          //   <tr className="thead-dark ">{children}</tr>
          // ),
          // [BLOCKS.TABLE_CELL]: (node, children) => (
          //   <td className="p-tb30">{children}</td>
          // ),
          // [BLOCKS.TABLE_HEADER_CELL]: (node, children) => (
          //   <th className="">
          //     <h3 className="display-2 text-primary h3">{children}</h3>
          //   </th>
          // ),
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
  const options = {
    loop: true,
    margin: 30,
    nav: true,
    dots: false,
    // thumbnail: false,
    autoplay: true,
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
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  };

  return (
    <>
      {singleBlogPost && blogPostBanner && (
        <>
          <SEO
            title={`Marilyn's Windows | Blog | ${singleBlogPost?.fields?.title}`}
            description={singleBlogPost?.fields?.metaDescription}
          />

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

            <div className="section-full p-tb90 square_shape1 square_shape3 tm-blog-single-wrap">
              <div className="container">
                <div className="max-mid-container">
                  <div className="container p-b30">
                    {/* BREADCRUMB ROW */}
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
                  </div>
                  {/* <div className="container"> */}
                    <div className="blog-post blog-lg date-style-1 text-black">
                      <div className="wt-post-media">
                        {/*Fade slider*/}

                        {singleBlogPost?.fields?.blogImages && (
                          <OwlCarousel
                            className="owl-carousel owl-fade-slider-one owl-btn-vertical-center owl-dots-bottom-right"
                            {...options}
                          >
                            {singleBlogPost?.fields?.blogImages?.map(
                              (item, index) => (
                                <div className="item" key={index}>
                                  <div className="aon-thum-bx">
                                    {/* {console.log("BLOG POST", item)} */}

                                    <img
                                      src={item.secure_url}
                                      alt={item.context.custom.alt}
                                      data-pin-description={
                                        item.context.custom.dataPin
                                      }
                                      caption={item.context.custom.caption}
                                      width="800"
                                      height="500"
                                    />
                                  </div>
                                </div>
                              )
                            )}
                          </OwlCarousel>
                        )}

                        {/*fade slider END*/}
                      </div>
                      <div className="">
                        <div className="wt-post-info p-t30">
                          <div className="">
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

                          {/* <div className="wt-divider divider-2px"></div> */}
                          <div className="row">
                            <div className="wt-post-text col-lg-12 col-md-12 col-sm-12">
                              {richTextConversion()}
                            </div>
                          </div>

                          <div className="row">
                            <div className="col-md-4 col-sm-6">
                              <div className="wt-box">
                                <div className="row  p-lr15">
                                  <h4 className="tagcloud text-uppercase font-weight-500">
                                    Share this Post:
                                  </h4>

                                  <div className="widget_social_inks">
                                    <ul className="social-icons social-md social-square social-dark m-b0">
                                      <li>
                                        <FacebookShareButton
                                          hashtag={
                                            "#marilynswindowsandinteriors"
                                          }
                                          quote={`Read Marilyn's article: '${singleBlogPost?.fields?.descriptiveTitle}'`}
                                          url={blogRoute}
                                          aria-label="Share to Facebook"
                                        >
                                          <a className="">
                                            <i className="fa fa-facebook" />
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
                                        >
                                          <a className="">
                                            <i className="fa fa-twitter" />
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
                                        >
                                          <a
                                            target="_blank"
                                            rel="noreferrer"
                                            href="https://in.linkedin.com"
                                            aria-label="Share to Linkedin"
                                          >
                                            <i className="fa fa-linkedin" />
                                          </a>
                                        </LinkedinShareButton>
                                      </li>

                                      <li>
                                        <EmailShareButton
                                          subject={`Read Marilyn's article: ${singleBlogPost?.fields?.descriptiveTitle}`}
                                          body="Link to article: "
                                          url={blogRoute}
                                        >
                                          <a aria-label="Share to Email">
                                            <i className="fa fa-envelope" />
                                          </a>
                                        </EmailShareButton>
                                      </li>

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
                                        >
                                          <i className="fa fa-link" />
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
                  {/* </div> */}

                  {/* <div className="wt-divider divider-3px bg-gray-dark"><i className="icon-dot c-square" /></div> */}
                </div>
              </div>
            </div>
            {/* <div style={{borderTop: '1px solid lightgrey'}}> */}

            {/* </div> */}
          </div>
          <div className="page-content ">
            <div
              className="section-full p-tb90 tm-blog-single-wrap"
              style={{ backgroundImage: "url(" + bgimg.default + ")" }}
            >
              <div className="container">
                <div className="max-mid-container">
                  <RelatedBlog id={id} />
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      <Footer />
      <Toaster position="bottom-center" reverseOrder={false} />
    </>
  );
};

export default BlogPost;
