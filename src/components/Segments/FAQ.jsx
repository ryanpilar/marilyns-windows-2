import React from "react";
import emailjs from "@emailjs/browser";

const FAQ = () => {
  const faqList = [
    {
      question: "Are your drapes made in Canada",
      answer: () => {
        return (
          <>
            <ul className="list-simple list-angle-right m-t15 m-l15">
              <li className="m-l10">
                <div className="m-l10">
                  Yes. Also, I prioritize doing business with Canadian companies
                  whenever we can.
                </div>
              </li>
            </ul>
          </>
        );
      },
    },
    {
      question: "custom DRAPES - How long do they take to make and install",
      answer: () => {
        return (
          <>
            <ul className="list-simple list-angle-right m-t15 m-l15">
              <li className="m-l10">
                <div className="m-l10">
                  If the fabric is in stock, it can take around{" "}
                  <strong>TWO</strong> weeks from the first visit to the day of
                  installation.
                </div>
              </li>
            </ul>
          </>
        );
      },
    },
    {
      question: "custom BLINDS - How long do they take to make and install",
      answer: () => {
        return (
          <>
            <ul className="list-simple list-angle-right m-t15 m-l15">
              <li className="m-l10">
                <div className="m-l10">
                  It usually takes around <strong>THREE</strong> to{" "}
                  <strong>FOUR</strong> weeks from the first visit to the day of
                  installation.
                </div>
              </li>
              <li className="m-l10">
                <div className="m-l10">
                  However, the processing and waiting times vary among blind
                  manufacturers, and some are more prone to variable processing
                  times than others. So there are some parts of the process that
                  I don’t have any control over.
                </div>
              </li>
            </ul>
          </>
        );
      },
    },
    {
      question: "Do some blind manufacturers have longer wait times than others",
      answer: () => {
        return (
          <>
            <ul className="list-simple list-angle-right m-t15 m-l15">
              <li className="m-l10">
                <div className="m-l10">Absolutely YES!</div>
              </li>
              <li className="m-l10">
                <div className="m-l10">
                  As a general guideline, blind companies that have relocated
                  their production outside of Canada tend to encounter more
                  unpredictability in wait times, and their ability to ensure
                  product quality control is often lessened. To help mitigate
                  this issue, I prioritize doing business with{" "}
                  <strong>CANADIAN </strong>
                  companies whenever possible.
                </div>
              </li>
              <li className="m-l10">
                <div className="m-l10">
                  Have a look yourself, most large blind companies that
                  advertise widely are not Canadian-made! By choosing to work
                  with local businesses that produce, repair, and service their
                  products on site, I am able to enjoy a range of added
                  benefits.
                </div>
              </li>

              <li className="m-l10">
                <div className="m-l10">
                  If I have an urgent need, I can literally go and visit the
                  facility that manufactures the product myself. When you
                  offshore your product, you lose the luxury of providing this
                  high-level quality control. This is a significant added value
                  to me, and it is passed down to my clients.
                </div>
              </li>
              <li className="m-l10">
                <div className="m-l10">
                  <strong>SHADEX</strong> and <strong>MAXXMAR</strong> are
                  excellent examples of these Canadian business that I am
                  speaking about.
                </div>
              </li>
            </ul>
          </>
        );
      },
    },

    {
      question: "Do you sew the drapery",
      answer: () => {
        return (
          <>
            <ul className="list-simple list-angle-right m-t15 m-l15">
              <li className="m-l10">
                <div className="m-l10">
                  Yes, everything is made in-house with an experienced team of
                  people based in Milton, Ontario, Canada.
                </div>
              </li>
            </ul>
          </>
        );
      },
    },

    {
      question: "Do you install the window treatments yourself",
      answer: () => {
        return (
          <>
            <ul className="list-simple list-angle-right m-t15 m-l15">
              <li className="m-l10">
                <div className="m-l10">
                  Yes. It is me and my expert team that will be installing your
                  custom window treatments.
                </div>
              </li>
            </ul>
          </>
        );
      },
    },

    {
      question: "What kind of warranty do you offer",
      answer: () => {
        return (
          <>
            <ul className="list-simple list-angle-right m-t15 m-l15">
              <li className="m-l10">
                <div className="m-l10">
                  I want to emphasize that I am always available for my clients,
                  and I will ensure that any issues are promptly addressed.
                  Although sometimes the problem may not originate from my end,
                  I am committed to finding solutions to help my clients. A
                  simple phone call to me is all it takes, and I will handle any
                  present or upcoming issues.
                </div>
              </li>
              <li className="m-l10">
                <div className="m-l10">
                  Our blinds come with a limited lifetime warranty that covers
                  material quality and workmanship defects.
                </div>
              </li>
            </ul>
          </>
        );
      },
    },
  ];

  return (
    <>
      <div id="faq" className="page-content">
        <div className="section-full p-tb80 tm-shortcode-wrap">
          <div className="container">
            <div className="section-head text-left text-black">
              <h2 className="text-uppercase font-34">FAQ Section</h2>

              <div className="wt-separator-outer">
                <div className="wt-separator bg-black" />
              </div>
            </div>

            <div className="section-content">
              <div className="wt-box">
                {/* ACCORDIAN  BG GRAY */}
                <div className="section-content p-b0">
                  <div className="wt-accordion acc-bg-gray" id="accordion9">
                    {faqList.map((faq, index) => {
                      {
                        if (index === 0) {
                          return (
                            <div className="panel wt-panel" key={index}>
                              <div className="acod-head acc-actives">
                                <h3 className="acod-title text-uppercase">
                                  <a
                                    data-toggle="collapse"
                                    href={`#collapse${index}9`}
                                    className="collapsed"
                                    data-parent="#accordion9"
                                  >
                                    {faq.question}
                                    <i className="fa fa-question text-orange p-l5" />
                                    <span className="indicator">
                                      <i className="fa fa-plus " />
                                    </span>
                                  </a>
                                </h3>
                              </div>

                              <div
                                id={`collapse${index}9`}
                                className="acod-body collapse"
                              >
                                <div className="acod-content p-tb15">
                                  {faq.answer()}
                                </div>
                              </div>
                            </div>
                          );
                        } else {
                          return (
                            <div className="panel wt-panel" key={index}>
                              <div className="acod-head">
                                <h3 className="acod-title text-uppercase">
                                  <a
                                    data-toggle="collapse"
                                    href={`#collapse${index}9`}
                                    className="collapsed"
                                    data-parent="#accordion9"
                                  >
                                    {faq.question}
                                    <i className="fa fa-question text-orange p-l5" />
                                    <span className="indicator">
                                      <i className="fa fa-plus " />
                                    </span>
                                  </a>
                                </h3>
                              </div>

                              <div
                                id={`collapse${index}9`}
                                className="acod-body collapse"
                              >
                                <div className="acod-content p-tb15">
                                  {faq.answer()}
                                </div>
                              </div>
                            </div>
                          );
                        }
                      }
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* SECTION CONTENT END */}
      </div>
    </>
  );
};

export default FAQ;
