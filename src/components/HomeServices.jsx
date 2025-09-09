import { useState } from "react";
import { serviceData, serviceCategory } from "../constants/services";
import { motion } from "framer-motion";

const HomeServices = () => {
  const [active, setActiveTab] = useState("Compliance");

  return (
    <section className="service">
      <h3>Explore Our Professional Services</h3>
      <p>Your Trusted Partner for Tax and Compliance Solutions</p>
      <div className="container">
        <div className="tabs">
          <div className="tab_head">
            {serviceCategory?.map((d) => (
              <div
                className={d.title === active ? "tab_item active" : "tab_item"}
                key={d.id}
                onClick={() => setActiveTab(d.title)}
              >
                {d.icon}
                <p>{d.title}</p>
              </div>
            ))}
          </div>
          <div className="tab_body">
            {serviceData
              ?.filter((f) => f.category === active)
              ?.map((d, i) =>
                i % 2 === 0 ? (
                  <motion.div
                    initial={{ x: -150, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ type: "spring", stiffness: 80, damping: 20 }}
                    className="cards"
                    key={d.id}
                  >
                    <div className="ct">
                      <i className="bx bxs-leaf"></i>
                    </div>
                    <h2>{d.title}</h2>
                    <p>{d.long_description?.slice(0, 140) + " ..."}</p>
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ x: 150, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ type: "spring", stiffness: 80, damping: 20 }}
                    className="cards"
                    key={d.id}
                  >
                    <div className="ct">
                      <i className="bx bxs-leaf"></i>
                    </div>
                    <h2>{d.title}</h2>
                    <p>{d.long_description?.slice(0, 140) + " ..."}</p>
                  </motion.div>
                )
              )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeServices;
