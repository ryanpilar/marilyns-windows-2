import React from "react";
import { Link } from "react-router-dom";


const BlogCard2 = ({ item, index }) => {
  // const item = passItem

  const [blackOpacity, setBlackOpacity] = React.useState({
    isHover: false,
  });

  const handleHover = () => {
    setBlackOpacity({ isHover: !blackOpacity.isHover });
  };

  return (
    <div>
      <div className="item" key={index}>
        <div className="blog-post blog-grid date-style-1 add-box-shadow m-r15">
          <div className="wt-post-media wt-img-effect zoom-slow bg-black ">
            <div
              className={blackOpacity.isHover ? "" : "wt-img-black-bg"}
              onMouseEnter={handleHover}
              onMouseLeave={handleHover}
            >
              <div className={blackOpacity.isHover ? "" : "img-opacity"}>
                <Link to={`/blog/post/${item.fields.slug}`}>
                  <img src={item.fields.blogImages[0].secure_url} />
                </Link>
              </div>
            </div>
          </div>
          <div className="wt-post-info p-a20 bg-gray text-black">
            <div className="wt-post-title ">
              <h2 className="post-title">
                <Link
                  to={`/blog/post/${item.fields.slug}`}
                  className="text-black letter-spacing-1 font-weight-600 "
                >
                <span className=' font-16 no-line-height'>{item.fields.title}</span>
                
                </Link>
              </h2>
            </div>
            <div className="wt-post-meta ">
              <ul>
                <li className="post-date">
                  <strong> {item.fields.dateCreated}</strong>{" "}
                </li>
                <li className="post-author">
                  {/* <NavLink to={""}> */}
                  By <span>{item.fields.blogAuthor}</span>
                  {/* </NavLink>{" "} */}
                </li>
              </ul>
            </div>
            <div className="wt-post-text">
              <p>{item.fields.blogSummary}</p>
            </div>
            <Link
              to={`/blog/post/${item.fields.slug}`}
              className="site-button black radius-no text-uppercase"
            >
              <span className="font-12 letter-spacing-5"> Read More </span>{" "}
            </Link>
            {/* <NavLink
              to={"/project-detail"}
              className="site-button black radius-no text-uppercase"
            >
              <span className="font-12 letter-spacing-5"> Read More </span>
            </NavLink> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard2;
