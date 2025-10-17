import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footrer from "../components/Footrer";
import HomePageHelmet from "../components/HomePageHelmet";
import { useLocation } from "react-router-dom";
import ConsultModal from "../components/ConsultModal";
import toast from "react-hot-toast";
import { createContact } from "../api/api";
import { LoadingOutlined } from "@ant-design/icons";

const ContactUs = () => {
  const { pathname } = useLocation();
  const [modalOpen, setModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    try {
      if (!name.trim()) return toast.error("Name is required");
      if (!/^[a-zA-Z\s]+$/.test(name))
        return toast.error("Name must contain only letters and spaces");

      // Email validation
      if (!email.trim()) return toast.error("Email is required");
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email))
        return toast.error("Please enter a valid email");

      // Phone validation (10-digit number)
      if (!phone.trim()) return toast.error("Phone is required");
      const phoneRegex = /^\d{10}$/;
      if (!phoneRegex.test(phone))
        return toast.error("Please enter a valid 10-digit phone number");

      // Query validation
      if (!query.trim()) return toast.error("Query is required");

      setLoading(true);

      const result = await createContact(name, email, phone, query, "Contact");
      if (result?.data?.data) {
        toast.success(
          "Thank you for contacting us. We’ve received your query and will get back to you shortly."
        );
        setName("");
        setEmail("");
        setPhone("");
        setQuery("");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return (
    <>
      <HomePageHelmet />
      <section className="contact_us" id="contact-us">
        <Navbar setModalOpen={setModalOpen} />
        <div className="contact_content">
          <div className="left">
            <h1>Contact Us</h1>
            <p>
              Email, call, or complete the form to learn how Snappy can solve
              your messaging problem.
            </p>
            <a href="mailto: artikanojia07@gmail.com">
              {" "}
              artikanojia07@gmail.com
            </a>
            <a href="tel:+917715843292">+91 7715843292</a>

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
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  placeholder="Enter your full name"
                />
              </div>
              <div className="form_group">
                <label>Email</label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="Enter your email address"
                />
              </div>
              <div className="form_group">
                <label>Phone</label>
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  type="text"
                  placeholder="Enter your phone number"
                />
              </div>
              <div className="form_group">
                <label>Message</label>
                <textarea
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Enter your query"
                />
              </div>
              <button disabled={loading} onClick={handleSubmit}>
                {loading ? <LoadingOutlined /> : "Submit"}
              </button>
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
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d30146.565506187508!2d72.81219337097613!3d19.18119068434618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sRoom%20no%2022%2C%20Baban%20Patel%20Lane%2C%20Sailesh%20Nagar%2C%20Malad%20West%2C%20Mumbai%2C%20Maharashtra%20-%20400064%2C%20India!5e0!3m2!1sen!2sus!4v1758380594968!5m2!1sen!2sus"
          ></iframe>
        </div>
        <div className="right">
          <h5>Our Location</h5>
          <h2>Connecting Near and Far</h2>
          <h4>Headquarters</h4>
          <p>Sailesh Nagar, Malad West, Mumbai, Maharashtra - 400064, India</p>
        </div>
      </section>
      <Footrer />
      {modalOpen && <ConsultModal open={modalOpen} setOpen={setModalOpen} />}
    </>
  );
};

export default ContactUs;
