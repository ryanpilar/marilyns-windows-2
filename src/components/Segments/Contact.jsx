import React from "react";
import emailjs from "@emailjs/browser";
import Loader from "./Loader";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: {
        name: "",
        // subject: "",
        phone: "",
        email: "",
      },
      message: "",
      spinner: false,
    };
  }

  toggleSpinner = () => {
    this.setState({ spinner: !this.state.spinner });
  };

  handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    let errors = this.state.errors;

    switch (name) {
      case "name":
        console.log();
        errors.name =
          value.length === 0 ? "don't forget to include your full name" : "";
        break;
      // case "subject":
      // errors.subject = value.length < 5 ? "Subject must be 5 characters" : "";
      // break;
      case "phone":
        errors.phone =
          value.length < 5 ? "phone number doesn't seem to be valid" : "";
        break;
      case "email":
        errors.email =
          value.length < 5 ? "don't forget to include your message" : "";
        let appos = value.indexOf("@");
        let dots = value.lastIndexOf(".");

        if (appos < 1 || dots - appos < 2) {
          errors.email = "please enter valid email";
        }

        break;

      default:
        break;
    }
    this.setState({ errors, [name]: value });
  };

  emailSuccessfull = () => {
    this.setState({
      name: "Your Name",
      email: "Email",
      message:
        "- AUTO MESSAGE - Thanks for reaching out! This is to let you know that your message has been delivered and that we will get back to you shortly.",
    });
  };

  emailUnsuccessfull = () => {
    this.setState({
      name: "Your Name",
      email: "Email",
      message:
        "- AUTO MESSAGE - Something has gone wrong with your form submission. If this message persists, try emailing me directly at marilyn@marilynswindows.com",
    });
  };

  resetEmailForm = () => {
    this.setState({
      name: "",
      email: "",
      phone: "",
      message: "",
      errors: {
        name: "",
        // subject: "",
        // phone: "",
        email: "",
      },
    });
  };

  submitHandler = (e) => {
    e.preventDefault();
    // if (
    //   this.state.errors.name.length === 0 &&
    //   this.state.errors.subject.length === 0 &&
    //   this.state.errors.phone.length === 0 &&
    //   this.state.errors.email.length === 0
    // ) {
    //   alert("form is valid");
    // } else {
    //   alert("form is invalid");
    // }

    this.toggleSpinner();

    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const userId = process.env.REACT_APP_EMAILJS_USER_ID;

    // console.log(serviceId, templateId, userId)

    emailjs
      .sendForm(
        serviceId, // emailJS service ID
        templateId, // emailJS template ID
        e.target,
        userId // emailJS user ID, not sure if this is necessary yet.
      )
      .then(
        (result) => {
          //   console.log(result.text);
          this.toggleSpinner();
          this.emailSuccessfull();

          //   alert("Thanks for reaching out! This pop-up is to let you know thahandleChanget your message was been delivered and that I will get back to you shortly.");
        },
        (error) => {
          this.toggleSpinner();
          this.emailUnsuccessfull();
          console.log(error.text);
          //   console.log('e.target', e.target)

          //   alert("Something has gone wrong with your form submission. If this message persists, try emailing me directly at ryan_pilar@outlook.com.");
        }
      );
  };

  render() {
    const { errors } = this.state;
    return (
      <>
        {this.state.spinner && <Loader />}
        {/* <Header2 /> */}
        <div id="contact" className="page-content">
          {/* SECTION CONTENTG START */}
          <div className="section-full p-tb80 tm-shortcode-wrap">
            {/* LOCATION BLOCK*/}
            <div className="container">
              {/* TITLE START */}
              <div className="section-head text-left text-black">
                <h2 className="text-uppercase font-36">Contact us </h2>

                <div className="p-t10">
                  <ul className="list-inline contact-socials">
                    <li>
                      <a
                        className="p-r15"
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.facebook.com/MarilynsWindows/"
                        aria-label="My Facebook"
                      >
                        <i className="fa fa-facebook" />
                      </a>
                    </li>
                    <li>
                      <a
                        className="p-r15"
                        target="_blank"
                        rel="noreferrer"
                        href="https://twitter.com/marilynswindows"
                        aria-label="My Twitter"
                      >
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a
                        className="p-r15"
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.linkedin.com/in/marilynswindows/"
                        aria-label="My Linkedin"
                      >
                        <i className="fa fa-linkedin" />
                      </a>
                    </li>
                    <li>
                      <a
                        className="p-r15"
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.instagram.com/marilynwindowsandinteriors/"
                        aria-label="My Instagram"
                      >
                        <i className="fa fa-instagram" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="wt-separator-outer">
                  <div className="wt-separator bg-black" />
                </div>
              </div>
              {/* TITLE END */}
              <div className="section-content">
                {/* CONTACT FORM*/}
                <div className="wt-box">
                  {/* <form className="contact-form cons-contact-form" method="post" action="form-handler.php"> */}
                  <form
                    onSubmit={this.submitHandler.bind(this)}
                    className="contact-form cons-contact-form"
                  >
                    <div className="contact-one p-a40 p-r150">
                      <div className="form-group">
                        {/* <input name="username" type="text" required className="form-control" placeholder="Name" /> */}
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="form-control"
                          aria-label="Your Name"
                          // aria-describedby="Your Name"
                          placeholder="Your Name"
                          onChange={this.handleChange}
                          value={this.state.name}
                          required
                        />
                        <p>{errors.name}</p>
                      </div>

                      <div className="form-group">
                        {/* <input name="email" type="text" className="form-control" required placeholder="Email" /> */}
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          name="email"
                          // aria-describedby="Email"
                          aria-label="Email"
                          placeholder="Email"
                          onChange={this.handleChange}
                          value={this.state.email}
                          required
                        />
                        <p>{errors.email}</p>
                      </div>
                      <div className="form-group">
                        <input
                          type="phone"
                          className="form-control"
                          id="phone"
                          name="phone"
                          aria-label="Phone Number"
                          // aria-describedby="Phone Number"
                          placeholder="Phone"
                          onChange={this.handleChange}
                          value={this.state.phone}
                          required
                        />
                        <p>{errors.phone}</p>
                      </div>

                      <div className="form-group">
                        <textarea
                          name="message"
                          id="message"
                          className="form-control"
                          rows="3"
                          aria-label="Message Content"
                          // aria-describedby="Message Content"
                          placeholder="Your Message"
                          onChange={this.handleChange}
                          value={this.state.message}
                          required
                        ></textarea>
                        {/* <textarea name="message" rows={3} className="form-control " required placeholder="Message" defaultValue={""} /> */}
                      </div>

                      <button
                        type="submit"
                        name="submit"
                        className="site-button black radius-no text-uppercase m-r10"
                      >
                        <span
                          className="font-12 letter-spacing-5"
                          aria-label="send email"
                        >
                          Submit
                        </span>
                      </button>

                      <button
                        onClick={this.resetEmailForm.bind(this)}
                        className="site-button black radius-no text-uppercase"
                        aria-label="clear form"
                      >
                        <span className="font-12 letter-spacing-5">
                          Clear Form
                        </span>
                      </button>

                      <div className="contact-info bg-black text-white p-tb40 p-l15 p-r10">
                        <div className="wt-icon-box-wraper left p-b30">
                          <div className="icon-xs">
                            <i className="fa fa-phone" />
                          </div>
                          <div className="icon-content text-white ">
                            <h3 className="m-a0 p-b5 text-uppercase text-brownish font-16 p-a0">
                              Phone number
                            </h3>
                            <a href="tel:905-878-0939">
                              <p>(905) 878 0626</p>
                            </a>
                          </div>
                        </div>
                        <div className="wt-icon-box-wraper left p-b30">
                          <div className="icon-xs">
                            <i className="fa fa-envelope" />
                          </div>
                          <div className="icon-content text-white">
                            <h3 className="m-a0 p-b5  text-uppercase text-brownish font-16 ">
                              Email address
                            </h3>
                            <a href="mailto:marilyn@marilynswindows.com">
                              <p>marilyn@marilynswindows.com</p>
                            </a>
                          </div>
                        </div>
                        <div className="wt-icon-box-wraper left">
                          <div className="icon-xs">
                            <i className="fa fa-map-marker" />
                          </div>
                          <div className="icon-content text-white">
                            <h3 className="m-a0 p-b5  text-uppercase text-brownish font-16 p-a0">
                              Address info
                            </h3>
                            <p>468 Valleyview Cr, Milton, ON L9T3L2, Canada</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* SECTION CONTENT END */}
        </div>
      </>
    );
  }
}

export default Contact;
