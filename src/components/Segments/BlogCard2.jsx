import React from "react";
import { NavLink } from "react-router-dom";

const BlogCard2 = ({ item, index }) => {
  // const item = passItem

  const blogRoute = `https://marilyns-windows.netlify.app/post/`;


  const [blackOpacity, setBlackOpacity] = React.useState({
    isHover: false,
  });

  const handleHover = () => {
    setBlackOpacity({ isHover: !blackOpacity.isHover });
  };

  return (
    <div>
      <div className="item" key={index}>
        <div className="blog-post blog-grid date-style-1">
          <div className="wt-post-media wt-img-effect zoom-slow">
            <div
              className={blackOpacity.isHover ? "" : "wt-img-black-bg"}
              onMouseEnter={handleHover}
              onMouseLeave={handleHover}
            >
              <div className={blackOpacity.isHover ? "" : "img-opacity"}>
                <a href={blogRoute + `${item.sys.id}`}>
                  <img src={item.fields.blogImages[0].secure_url} />
                </a>
              </div>
            </div>
          </div>
          <div className="wt-post-info p-a20 bg-gray text-black">
            <div className="wt-post-title ">
              <h2 className="post-title">
                <a
                  href={blogRoute + `${item.sys.id}`}
                  className="text-black font-16 letter-spacing-2 font-weight-600"
                >
                  {item.fields.title}
                </a>
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
            <a href={`/post/` + `${item.sys.id}`} className="site-button black radius-no text-uppercase">
            <span className="font-12 letter-spacing-5"> Read More </span>                </a>
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
