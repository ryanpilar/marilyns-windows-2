import React from "react";
import { useEffect, useState } from "react";

import { useParams } from "react-router-dom"; // useParams allows the '/post/:id' to work
import { NavLink } from "react-router-dom";


import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import Header2 from "../Common/Header2";
import Footer from "../Common/Footer";
import Banner from "./../Segments/Banner";
import SEO from "../Segments/SEO";

import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share";

import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { MARKS } from "@contentful/rich-text-types";

import toast, { Toaster } from "react-hot-toast";

var bnrimg = require("./../../images/banner/2.jpg");

const BlogPost = () => {
  const client = createClient({
    space: process.env.REACT_APP_CONTENTFUL_SPACE,
    accessToken: process.env.REACT_APP_CONTENTFUL_TOKEN,
  });

  const { id } = useParams(); // grabs the contentful :id form the address bar

  const [singleBlogPost, setSingleBlogPost] = useState([]);

  const blogRoute = `https://marilyns-windows.netlify.app/post/${id}`;

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
    const getEntryById = async () => {
      try {
        await client.getEntry(id).then((blogEntry) => {
          console.log("BLOG ENTRY", blogEntry);
          setSingleBlogPost(blogEntry);
        });
      } catch (error) {
        console.log("error");
      }
    };

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
        },
        renderNode: {
          "embedded-asset-block": (node) => (
            <img className="m-t20 m-b30" width={`100%`} src={node.data.target.fields.file.url} aria-hidden={true}/>
          ),
          // [BLOCKS.QUOTE]: (node, children) => (
          //   <div className="p-4">
          //     <blockquote className="blockquote">
          //       <span className="p pt-2">
          //         <i className="fa fa-quote-right text-primary "></i>
          //         {children}
          //       </span>
          //     </blockquote>
          //   </div>
          // ),
          // [BLOCKS.TABLE]: (node, children) => (
          //   <table className="table table-bordered ">
          //     <tbody className=" ">{children}</tbody>
          //   </table>
          // ),
          // [BLOCKS.TABLE_ROW]: (node, children) => (
          //   <tr className="thead-dark">{children}</tr>
          // ),
          // [BLOCKS.TABLE_CELL]: (node, children) => (
          //   <td className="">{children}</td>
          // ),
          // [BLOCKS.TABLE_HEADER_CELL]: (node, children) => (
          //   <th className="">
          //     <h3 className="display-2 text-primary h3">{children}</h3>
          //   </th>
          // ),
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
    thumbnail: false,
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
      <SEO
        title={`Marilyn's Windows | Blog | ${singleBlogPost?.fields?.title}`}
        description={singleBlogPost?.fields?.metaDescription}
      />

      <Header2 />
      <div className="page-content ">
        <Banner
          title="high quality, effective, and inspiring built space."
          pagename="Blog Post"
          bgimage={bnrimg.default}
        />

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
                    <NavLink to={"/"}>Home</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/blog"}>Blog</NavLink>
                  </li>
                  <li>Post</li>
                </ul>
              </div>
            </div>
          </div>
          {/* BREADCRUMB ROW END */}

          {/* TITLE START */}
          {/* <div className="text-left">
            <h2 className="text-uppercase font-36">Blog Post</h2>
            <div className="wt-separator-outer">
              <div className="wt-separator bg-black" />
            </div>
          </div> */}
          {/* TITLE END */}
        </div>

              <div className="blog-post blog-lg date-style-1 text-black">
                <div className="wt-post-media">
                  {/*Fade slider*/}

                  {/* <OwlCarousel className="owl-carousel owl-fade-slider-one owl-btn-vertical-center owl-dots-bottom-right" {...options}>
                                    
                                    {singleBlogPost?.fields?.blogImages?.map((item, index) => (
                                        <div className="item" key={item.sys.id}>
                                            <div className="aon-thum-bx">
                                                <img src={`https:${item?.fields?.file.url}`} alt={item?.fields?.description} />
                                                <img src={item?.fields?.file.url} alt={item?.fields?.description} />
                                            </div>
                                        </div>

                                    ))}

                                </OwlCarousel> */}

                  {singleBlogPost?.fields?.blogImages && (
                    <OwlCarousel
                      className="owl-carousel owl-fade-slider-one owl-btn-vertical-center owl-dots-bottom-right"
                      {...options}
                    >
                      {singleBlogPost?.fields?.blogImages?.map(
                        (item, index) => (
                          <div className="item" key={index}>
                            <div className="aon-thum-bx">
                              {console.log("BLOG POST", item)}

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
                              {/* <img src={item?.fields?.file.url} alt={item?.fields?.description} /> */}
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
                    <div className="wt-post-title ">
                      <h2 className="post-title">
                        <span className="text-black font-45 letter-spacing-1 font-weight-600">
                          {singleBlogPost?.fields?.descriptiveTitle}
                        </span>
                      </h2>
                    </div>
                    <div className="wt-post-meta">
                      <ul>
                        <li className="post-date">
                          <strong>{singleBlogPost?.fields?.dateCreated}</strong>
                        </li>
                        <li className="post-comment">{singleBlogPost?.fields?.blogAuthor}</li>
                      </ul>
                    </div>

                    <div className="wt-divider divider-2px"></div>

                    {/* <div className="wt-separator "></div> */}

                    <div className="wt-post-text">
                      {richTextConversion()}
                      {/* {console.log(singleBlogPost?.fields?.postContent)} */}
                      {/* {documentToReactComponents(singleBlogPost?.fields?.postContent)} */}
                    </div>
                    <div className="row">
                      <div className="col-md-4 col-sm-6">
                        <div className="wt-box">
                          <div className="row  p-lr15">
                            <h4 className="tagcloud text-uppercase">
                              Share this Post:
                            </h4>

                            <div className="widget_social_inks">
                              <ul className="social-icons social-md social-square social-dark m-b0">
                                <li>
                                  <FacebookShareButton
                                    hashtag={"#marilynswindowsandinteriors"}
                                    quote={`Read Marilyn's article: '${singleBlogPost?.fields?.descriptiveTitle}'`}
                                    url={blogRoute}
                                    aria-label="Share to Facebook"
                                  >
                                    <a className="fa fa-facebook" />
                                  </FacebookShareButton>
                                </li>
                                <li>
                                  <TwitterShareButton
                                    title={`Checkout this fantastic article by Marilyn: \n'${singleBlogPost?.fields?.descriptiveTitle}':`}
                                    hashtags={["marilynswindowsandinteriors"]}
                                    url={blogRoute}
                                    aria-label="Share to Twitter"
                                  >
                                    <a className="fa fa-twitter" />
                                  </TwitterShareButton>
                                </li>
                                <li>
                                  <LinkedinShareButton
                                    title={
                                      singleBlogPost?.fields?.descriptiveTitle
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
                                      className="fa fa-linkedin"
                                      aria-label="Share to Linkedin"
                                    />
                                  </LinkedinShareButton>
                                </li>

                                <li>
                                  <EmailShareButton
                                    subject={`Read Marilyn's article: ${singleBlogPost?.fields?.descriptiveTitle}`}
                                    body="Link to article: "
                                    url={blogRoute}
                                  >
                                    <a
                                      className="fa fa-envelope"
                                      aria-label="Share to Email"
                                    />
                                  </EmailShareButton>
                                </li>

                                <li>
                                  <a
                                    className="fa fa-link"
                                    style={{ cursor: "pointer" }}
                                    onClick={() => {
                                      navigator.clipboard.writeText(blogRoute);
                                      clipboardToast();
                                    }}
                                    aria-label="Copy Link Address"
                                  />
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

              {/* <div className="wt-divider divider-3px bg-gray-dark"><i className="icon-dot c-square" /></div> */}
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <Toaster position="bottom-center" reverseOrder={false} />
    </>
  );
};

export default BlogPost;
