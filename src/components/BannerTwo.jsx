import { benefits } from "../constants/home";
import { motion } from "framer-motion";

const BannerTwo = () => {
  return (
    <section className="banner2" id="benifits">
      <div className="left">
        <div className="btn_text">Why Extent Your tax?</div>
        <h1>The Benifits of SaveTax</h1>
        <p>
          Save Tax is designed to make your tax journey easier, faster, and
          smarter. From maximizing your savings to ensuring complete compliance,
          our services are built to give you peace of mind and financial
          confidence.
        </p>
      </div>
      <div className="right">
        {benefits?.map((d, i) =>
          i % 2 === 0 ? (
            <motion.div
              initial={{ x: -150, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ type: "spring", stiffness: 80, damping: 20 }}
              className="card"
            >
              <h4>{d.title}</h4>
              <p>{d.description}</p>
            </motion.div>
          ) : (
            <motion.div
              initial={{ x: 150, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ type: "spring", stiffness: 80, damping: 20 }}
              className="card"
            >
              <h4>{d.title}</h4>
              <p>{d.description}</p>
            </motion.div>
          )
        )}
      </div>
    </section>
  );
};

export default BannerTwo;
