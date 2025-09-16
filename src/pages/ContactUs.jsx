import React from "react";
import Navbar from "../components/Navbar";
import Footrer from "../components/Footrer";

const ContactUs = () => {
  return (
    <>
      <section className="contact_us">
        <Navbar />
        <div className="contact_content">
          <div className="left">
            <h1>Contact Us</h1>
            <p>
              Email, call, or complete the form to learn how Snappy can solve
              your messaging problem.
            </p>
            <a href="mailto:savetax.info@gmail.com">savetax.info@gmail.com</a>
            <a href="tel:+911234567890">911234567890</a>

            <div className="col_wrapper">
              <div className="col1">
                <h4>Customer Support</h4>
                <p>
                  Our support team is available around the clock to address any
                  concerns or queries you may have.
                </p>
              </div>
              <div className="col1">
                <h4>Feedback and Suggestions</h4>
                <p>
                  We value your feedback and are continuously working to improve
                  Snappy. Your input is crucial in shaping the future of Snappy.
                </p>
              </div>
              <div className="col1">
                <h4>Media Inquiries</h4>
                <p>
                  For media-related questions or press inquiries, please contact
                  us at media@snappyapp.com.
                </p>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="contact_form">
              <h4>Get In Touch</h4>
              <p>You can reach us anytime</p>
              <div className="form_group">
                <label>Name</label>
                <input type="text" placeholder="Enter your full name" />
              </div>
              <div className="form_group">
                <label>Email</label>
                <input type="email" placeholder="Enter your email address" />
              </div>
              <div className="form_group">
                <label>Phone</label>
                <input type="text" placeholder="Enter your phone number" />
              </div>
              <div className="form_group">
                <label>Message</label>
                <textarea placeholder="Enter your query" />
              </div>
              <button>Submit</button>
              <p className="last-p">
                By contacting us, you agree to our <b>Terms of service</b> and{" "}
                <b>Privacy Policy</b>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="contact_map">
        <div className="left">
          <iframe
            width="100%"
            height="100%"
            style={{ border: 0, borderRadius: "10px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed/v1/place?q=hdfc%20bank%20lalganj%20229206&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          ></iframe>
        </div>
        <div className="right">
          <h5>Our Location</h5>
          <h2>Connecting Near and Far</h2>
          <h4>Headquarters</h4>
          <p>Near HDFC Bank,<br/>Gomti Nagar Lucknow 22904<br/>Uttarpradesh</p>
        </div>
      </section>
      <Footrer/>
    </>
  );
};

export default ContactUs;
