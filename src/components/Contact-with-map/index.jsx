import React from "react";
import { Formik, Form, Field } from "formik";
import Split from "../Split";
import { sendContactForm } from "../../../lib/api";
import { instagramHandle } from "../../constants";

const ContactWithMap = ({ theme = "dark" }) => {
  const messageRef = React.useRef(null);
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  function validateEmail(value) {
    let error;
    if (!value) {
      error = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "Invalid email address";
    }
    return error;
  }

  return (
    <>
      <section className="contact section-padding contact-us-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              {isLoading ? (
                <div className="loading">
                  <img src="/img/loading.gif" alt="loading" />
                </div>
              ) : !isSubmitted ? (
                <div className="form md-mb50">
                  <h4 className="extra-title mb-50">Get In Touch.</h4>

                  <Formik
                    initialValues={{
                      name: "",
                      email: "",
                      message: "",
                    }}
                    onSubmit={async (values, onSubmitProps) => {
                      setIsLoading(true);

                      try {
                        const response = await sendContactForm(values);

                        if (!response) {
                          setIsLoading(false);
                          return;
                        }
                        setIsLoading(false);
                        setIsSubmitted(true);
                        onSubmitProps.resetForm();
                      } catch (error) {
                      console.error(error);
                      setIsLoading(false);
                      }
                    }}
                  >
                    {({ errors, touched }) => (
                      <Form id="contact-form">
                        <div className="messages" ref={messageRef}></div>

                        <div className="controls">
                          <div className="form-group">
                            <Field
                              id="form_name"
                              type="text"
                              name="name"
                              placeholder="Name"
                              required="required"
                            />
                          </div>

                          <div className="form-group">
                            <Field
                              validate={validateEmail}
                              id="form_email"
                              type="email"
                              name="email"
                              placeholder="Email"
                              required="required"
                            />
                            {errors.email && touched.email && (
                              <div className="error">{errors.email}</div>
                            )}
                          </div>

                          <div className="form-group">
                            <Field
                              as="textarea"
                              id="form_message"
                              name="message"
                              placeholder="Message"
                              rows="4"
                              required="required"
                            />
                          </div>

                          <button
                            type="submit"
                            className={`btn-curve ${
                              theme === "dark" ? "btn-lit" : "btn-color"
                            } disabled`}
                          >
                            <span>Send Message</span>
                          </button>
                        </div>
                      </Form>
                    )}
                  </Formik>
                </div>
              ) : (
                <div className="checkmark">
                  <img src="/img/checkmark.png" alt="checkmark" />
                  <p> Message Sent Successfully</p>
                </div>
              )}
            </div>
            <div className="col-lg-5 offset-lg-1">
              <div className="cont-info">
                <h4 className="extra-title mb-50">Contact Info.</h4>
                <Split>
                  <h3 className="custom-font wow" data-splitting>
                    Let&apos;s Talk.
                  </h3>
                </Split>
                <div className="item mb-40">
                  <h5>
                    <a href="#0">info@torontofloors.com</a>
                  </h5>
                  <h5>+1 (226) 499-5290</h5>
                </div>
                <Split>
                  <h3 className="custom-font wow" data-splitting>
                    Visit Us.
                  </h3>
                </Split>
                <div className="item">
                  <h6>
                    London
                    <br />
                    Ontario, Canada
                  </h6>
                </div>
                <div className="social mt-50">
                  <a href="#0" className="icon">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href={instagramHandle} className="icon">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#0" className="icon">
                    <i className="fab fa-pinterest"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="map" id="ieatmaps">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2895.5037616409027!2d-80.44832562436265!3d43.47095627111134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b8ca29ee1bbd7%3A0x9b3de167cc7c5bba!2sSource%20Flooring%20Distributors!5e0!3m2!1sen!2sca!4v1688442150351!5m2!1sen!2sca"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      <footer className="footer-half sub-bg">
        <div className="container">
          <div className="copyrights text-center mt-0">
            <p>© 2012, Toronto Mobile Flooring Inc..</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default ContactWithMap;
