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
              ?.map((d, i) => (
                <div
                  className="cards"
                  key={d.id}
                  style={{ background: d.color }}
                >
                  <div className="ct">
                    <img src={d.img} />
                  </div>
                  <h2 style={{ color: d.textColor }}>{d.title}</h2>
                  <p>{d.long_description?.slice(0, 140) + " ..."}</p>
                </div>
              ))}
          </div>
        </div>
        <div className="mobile_tab">
          <h4>Compliance Services</h4>
          <div className="mobile_tab_wrap">
            {serviceData
              ?.filter((f) => f.category === "Compliance")
              ?.map((d, i) => (
                <div
                  className="cards"
                  key={d.id}
                  style={{ background: d.color }}
                >
                  <div className="ct">
                    <img src={d.img} />
                  </div>
                  <h2 style={{ color: d.textColor }}>{d.title}</h2>
                  <p>{d.long_description?.slice(0, 140) + " ..."}</p>
                </div>
              ))}
          </div>
        </div>
        <div className="mobile_tab">
          <h4>Other Services</h4>
          <div className="mobile_tab_wrap">
            {serviceData
              ?.filter((f) => f.category === "Other Services")
              ?.map((d, i) => (
                <div
                  className="cards"
                  key={d.id}
                  style={{ background: d.color }}
                >
                  <div className="ct">
                    <img src={d.img} />
                  </div>
                  <h2 style={{ color: d.textColor }}>{d.title}</h2>
                  <p>{d.long_description?.slice(0, 140) + " ..."}</p>
                </div>
              ))}
          </div>
        </div>
        <div className="mobile_tab">
          <h4>Registrations Services</h4>
          <div className="mobile_tab_wrap">
            {serviceData
              ?.filter((f) => f.category === "Registrations")
              ?.map((d, i) => (
                <div
                  className="cards"
                  key={d.id}
                  style={{ background: d.color }}
                >
                  <div className="ct">
                    <img src={d.img} />
                  </div>
                  <h2 style={{ color: d.textColor }}>{d.title}</h2>
                  <p>{d.long_description?.slice(0, 140) + " ..."}</p>
                </div>
              ))}
          </div>
        </div>
        <div className="mobile_tab">
          <h4>Support Services</h4>
          <div className="mobile_tab_wrap">
            {serviceData
              ?.filter((f) => f.category === "Support")
              ?.map((d, i) => (
                <div
                  className="cards"
                  key={d.id}
                  style={{ background: d.color }}
                >
                  <div className="ct">
                    <img src={d.img} />
                  </div>
                  <h2 style={{ color: d.textColor }}>{d.title}</h2>
                  <p>{d.long_description?.slice(0, 140) + " ..."}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeServices;
