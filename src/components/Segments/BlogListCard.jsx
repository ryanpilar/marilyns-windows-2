import React from 'react';
import { NavLink } from 'react-router-dom';

const BlogListCard = ({post}) => {

    return (
        <>


            <div className={`masonry-item col-xl-3 col-lg-4 col-md-6 col-sm-6 m-b30`}>

                <div className="blog-post blog-grid date-style-1">

                    <div className="wt-post-media wt-img-effect zoom-slow">
                        {/* post could have multiple images, so by default pick the first */}
                        <NavLink to={`/post/${post.sys.id}`}><img src={post.fields.blogImages[0].fields.file.url} alt={post.fields.blogImages[0].fields.description} /></NavLink>
                    </div>

                    <div className="wt-post-info p-a20 bg-gray text-black">

                        <div className="wt-post-title ">
                            <h2 className="post-title">
                                <NavLink to={`/post/${post.sys.id}`} className="text-black font-16 letter-spacing-2 font-weight-600">
                                    {post.fields.descriptiveTitle}
                                </NavLink>
                            </h2>
                        </div>

                        <div className="wt-post-meta ">
                            <ul>
                                <li className="post-date"><strong> {post.fields.dateCreated}</strong> </li>
                                <li className="post-author">By <span>{post.fields.blogAuthor}</span> </li>
                            </ul>
                        </div>

                        <div className="wt-post-text">
                            <p>{post.fields.blogSummary}</p>
                        </div>

                        <NavLink 
                        to={`/post/${post.sys.id}`} 
                        className="site-button black radius-no text-uppercase"
                        >
                            <span className="font-12 letter-spacing-5"> Read More </span>
                        </NavLink>

                    </div>
                </div>
            </div>
                





        </>
    )
}

export default BlogListCard


