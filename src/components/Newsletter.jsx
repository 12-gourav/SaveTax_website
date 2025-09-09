import img from "../assets/img/news.jpg";
import { motion } from "framer-motion";

const Newsletter = () => {
  return (
    <section className="newsletter">
      <motion.div
        initial={{ x: -100, scale: 0 }}
        whileInView={{ x: 0, scale: 1 }}
        viewport={{ once: false, amount: 0 }}
        transition={{ type: "tween", duration: 0.8 }}
        className="container"
      >
        <img src={img} alt="img" />
        <div className="content">
          <h2>Stay Ahead with Tax Insights</h2>
          <p>
            Get the latest tax-saving tips, compliance updates, and financial
            advice delivered straight to your inbox.
          </p>
          <div className="form_group">
            <input type="text" placeholder="Enter Your Email Address" />
            <button>Subscribe</button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Newsletter;
