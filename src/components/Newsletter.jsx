import { useState } from "react";
import img from "../assets/img/optimize/news.jpg";
import { motion } from "framer-motion";
import { LoadingOutlined } from "@ant-design/icons";
import toast from "react-hot-toast";
import { CreateNewsletter } from "../api/api";
const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    try {
      if (email === "") return toast.error("Email is required");
      setLoading(true);
      const result = await CreateNewsletter(email);
      if (result?.data?.data) {
        toast.success(
          "Thank you for subscribing! You’ll start receiving our latest updates soon."
        );
        setEmail("");
      }
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="newsletter">
      <motion.div
        initial={{ x: -100, scale: 0 }}
        whileInView={{ x: 0, scale: 1 }}
        viewport={{ once: false, amount: 0 }}
        transition={{ type: "tween", duration: 0.8 }}
        className="container"
      >
        <img src={img} alt="Save Tax India" />
        <div className="content">
          <h2>Stay Ahead with Tax Insights</h2>
          <p>
            Get the latest tax-saving tips, compliance updates, and financial
            advice delivered straight to your inbox.
          </p>
          <div className="form_group">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter Your Email Address"
            />
            <button disabled={loading} onClick={handleSubmit}>
              {loading ? <LoadingOutlined /> : "Subscribe"}
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Newsletter;
