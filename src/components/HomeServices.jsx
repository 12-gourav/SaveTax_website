import { useState } from "react";
import { serviceData, serviceCategory } from "../constants/services";

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
              ?.map((d) => (
                <div className="cards" key={d.id}>
                  <div className="ct">{d.title[0]}</div>
                  <h2>{d.title}</h2>
                  <p>{d.long_description?.slice(0,140)+" ..."}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeServices;
