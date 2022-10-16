import React from 'react';
import { NavLink } from 'react-router-dom';

class BlogComments extends React.Component {

  render() {

    return (
      <>
        <div className="clear" id="comment-list">
          <div className="comments-area" id="comments">
            <h2 className="comments-title">4 Comments</h2>
            <div className="p-t30">
              {/* COMMENT LIST START */}
              <ol className="comment-list">
                <li className="comment">
                  {/* COMMENT BLOCK */}
                  <div className="comment-body">
                    <div className="comment-author vcard">
                      <img className="avatar photo" src={require("./../../images/testimonials/pic3.jpg").default} alt="" />
                      <cite className="fn">Diego</cite>
                      <span className="says">says:</span>
                    </div>
                    <div className="comment-meta">
                      January 4, 2022 at 7:15 am
                    </div>
                    <p>Sit amet nibh vulputate cursus a sit amet mauris lorem ipsum dolor sit amet of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat </p>
                    <div className="reply">
                      <NavLink to={""} className="comment-reply-link letter-spacing-2 text-uppercase">Read More</NavLink>
                    </div>
                  </div>
                  {/* SUB COMMENT BLOCK */}
                  <ol className="children">
                    <li className="comment odd parent">
                      <div className="comment-body">
                        <div className="comment-author vcard">
                          <img className="avatar photo" src={require("./../../images/testimonials/pic2.jpg").default} alt="" />
                          <cite className="fn">Brayden</cite>
                          <span className="says">says:</span>
                        </div>
                        <div className="comment-meta">
                          January 5, 2022 at 9:15 am
                        </div>
                        <p>Asperiores, tenetur, blanditiis, quaerat odit ex exercitationem pariatur quibusdam veritatis quisquam laboriosam esse beatae hic perferendis velit deserunt soluta iste repellendus officia in neque veniam debitis</p>
                        <div className="reply">
                          <NavLink to={""} className="comment-reply-link letter-spacing-2 text-uppercase">Read More</NavLink>
                        </div>
                      </div>
                      <ol className="children">
                        <li className="comment odd parent">
                          <div className="comment-body">
                            <div className="comment-author vcard">
                              <img className="avatar photo" src={require("./../../images/testimonials/pic3.jpg").default} alt="" />
                              <cite className="fn">Diego</cite>
                              <span className="says">says:</span>
                            </div>
                            <div className="comment-meta">
                              January 3, 2022 at 11:15 am
                            </div>
                            <p>Vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor Lorem ipsum dolor sit amet of Lorem Ipsum. Proin gravida nibh..</p>
                            <div className="reply">
                              <NavLink to={""} className="comment-reply-link letter-spacing-2 text-uppercase">Read More</NavLink>
                            </div>
                          </div>
                        </li>
                      </ol>
                    </li>
                  </ol>
                </li>
                <li className="comment">
                  {/* COMMENT BLOCK */}
                  <div className="comment-body">
                    <div className="comment-author vcard">
                      <img className="avatar photo" src={require("./../../images/testimonials/pic1.jpg").default} alt="" />
                      <cite className="fn">Stacy poe</cite>
                      <span className="says">says:</span>
                    </div>
                    <div className="comment-meta">
                      <NavLink to={"#"}>January 04, 2022 at 7:15 am</NavLink>
                    </div>
                    <p>Asperiores, tenetur, blanditiis, quaerat odit ex exercitationem pariatur quibusdam veritatis quisquam laboriosam esse beatae hic perferendis velit deserunt soluta iste repellendus officia in neque veniam debitis</p>
                    <div className="reply">
                      <NavLink to={""} className="comment-reply-link letter-spacing-2 text-uppercase">Read More</NavLink>
                    </div>
                  </div>
                </li>
              </ol>
              {/* COMMENT LIST END */}
              {/* LEAVE A REPLY START */}
              <div className="comment-respond bg-gray p-a30" id="respond">
                <h2 className="comment-reply-title" id="reply-title">Leave a Comments
                  <small>
                    <NavLink to={""} style={{ display: 'none' }} href="#" id="cancel-comment-reply-link" rel="nofollow">Cancel reply</NavLink>
                  </small>
                </h2>
                <form className="comment-form" action="" id="commentform" method="post">
                  <p className="comment-form-author">
                    <label htmlFor="author">Name <span className="required">*</span></label>
                    <input className="form-control" type="text" defaultValue={""} name="user-comment" placeholder="Author" id="author" />
                  </p>
                  <p className="comment-form-email">
                    <label htmlFor="email">Email <span className="required">*</span></label>
                    <input className="form-control" type="text" defaultValue={""} name="email" placeholder="Email" id="email" />
                  </p>
                  <p className="comment-form-url">
                    <label htmlFor="url">Website</label>
                    <input className="form-control" type="text" defaultValue={""} name="url" placeholder="Website" id="url" />
                  </p>
                  <p className="comment-form-comment">
                    <label htmlFor="comment">Comment</label>
                    <textarea className="form-control" rows={8} name="comment" placeholder="Comment" id="comment" defaultValue={""} />
                  </p>
                  <p className="form-submit">
                    <button className="site-button black radius-no text-uppercase" type="button"><span className="font-12 letter-spacing-5">Submit Comment</span></button>
                  </p>
                </form>
              </div>
              {/* LEAVE A REPLY END */}
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default BlogComments;