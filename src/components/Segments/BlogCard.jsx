import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ passItem, passIndex }) => {
  // const item = passItem

  const [blackOpacity, setBlackOpacity] = React.useState({
    isHover: false,
  });

  const post = passItem;

  const handleHover = () => {
    setBlackOpacity({ isHover: !blackOpacity.isHover });
  };

  return (
    <div>
      <div
        key={post.sys.id}
        className={`masonry-item col-xl-3 col-lg-4 col-md-6 col-sm-6 m-b30`}
      >
        <div className="blog-post blog-masonry date-style-1">
          <div className="wt-post-media wt-img-effect zoom-slow wt-img-black-bg">
            <div
              className={blackOpacity.isHover ? "" : "wt-img-black-bg"}
              onMouseEnter={handleHover}
              onMouseLeave={handleHover}
            >
              <div className={blackOpacity.isHover ? "" : "img-opacity"}>
                {/* post could have multiple images, so by default pick the first */}
                <Link to={`/blog/post/${post.fields.slug}`}>
                  <img
                    src={post.fields.blogImages[0].secure_url}
                    alt={post.fields.blogImages[0].context.custom.alt}
                    data-pin-description={
                      post.fields.blogImages[0].context.custom.dataPin
                    }
                    caption={post.fields.blogImages[0].context.custom.caption}
                    width={800}
                    height={500}
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="wt-post-info p-a20 bg-gray text-black box-size">
            <div className="wt-post-title ">
              <h2 className="post-title">
                <Link
                  to={`/blog/post/${post.fields.slug}`}
                  className="text-black font-16 letter-spacing-2 font-weight-600"
                >
                  {post.fields.descriptiveTitle}
                </Link>
              </h2>
            </div>
            <div className="wt-post-meta ">
              <ul>
                <li className="post-date">
                  <strong> {post.fields.dateCreated}</strong>{" "}
                </li>
                <li className="post-author">
                  By <span>{post.fields.blogAuthor}</span>{" "}
                </li>
              </ul>
            </div>
            <div className="wt-post-text">
              <p>{post.fields.blogSummary}</p>
            </div>
            <Link
              to={`/blog/post/${post.fields.slug}`}
              className="site-button black radius-no text-uppercase "
            >
              <span className="font-12 letter-spacing-5"> Read Blog </span>
            </Link>
          </div>
        </div>
      </div>
    </div>

    // </div>
  );
};

export default BlogCard;
