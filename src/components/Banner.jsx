import b1_200 from "../assets/img/optimize/b1/b1_u4cjxv_c_scale,w_200.jpg";
import b1_593 from "../assets/img/optimize/b1/b1_u4cjxv_c_scale,w_593.jpg";
import b1_878 from "../assets/img/optimize/b1/b1_u4cjxv_c_scale,w_878.jpg";
import b1_1084 from "../assets/img/optimize/b1/b1_u4cjxv_c_scale,w_1084.jpg";
import b1_1316 from "../assets/img/optimize/b1/b1_u4cjxv_c_scale,w_1316.jpg";
import b1_1400 from "../assets/img/optimize/b1/b1_u4cjxv_c_scale,w_1400.jpg";

import b2_200 from "../assets/img/optimize/b2/b2_rv3m8m_c_scale,w_200.jpg";
import b2_519 from "../assets/img/optimize/b2/b2_rv3m8m_c_scale,w_519.jpg";
import b2_749 from "../assets/img/optimize/b2/b2_rv3m8m_c_scale,w_749.jpg";
import b2_946 from "../assets/img/optimize/b2/b2_rv3m8m_c_scale,w_946.jpg";
import b2_1123 from "../assets/img/optimize/b2/b2_rv3m8m_c_scale,w_1123.jpg";
import b2_1263 from "../assets/img/optimize/b2/b2_rv3m8m_c_scale,w_1263.jpg";
import b2_1357 from "../assets/img/optimize/b2/b2_rv3m8m_c_scale,w_1357.jpg";
import b2_1400 from "../assets/img/optimize/b2/b2_rv3m8m_c_scale,w_1400.jpg";

import b3_200 from "../assets/img/optimize/b3/b3_xqurav_c_scale,w_200.jpg";
import b3_464 from "../assets/img/optimize/b3/b3_xqurav_c_scale,w_464.jpg";
import b3_652 from "../assets/img/optimize/b3/b3_xqurav_c_scale,w_652.jpg";
import b3_809 from "../assets/img/optimize/b3/b3_xqurav_c_scale,w_809.jpg";
import b3_947 from "../assets/img/optimize/b3/b3_xqurav_c_scale,w_947.jpg";
import b3_1075 from "../assets/img/optimize/b3/b3_xqurav_c_scale,w_1075.jpg";
import b3_1183 from "../assets/img/optimize/b3/b3_xqurav_c_scale,w_1183.jpg";
import b3_1293 from "../assets/img/optimize/b3/b3_xqurav_c_scale,w_1293.jpg";
import b3_1365 from "../assets/img/optimize/b3/b3_xqurav_c_scale,w_1365.jpg";
import b3_1400 from "../assets/img/optimize/b3/b3_xqurav_c_scale,w_1400.jpg";

import { Carousel } from "antd";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const Navigate = useNavigate();

  return (
    <section className="banner" id="banner">
      <Carousel style={{ width: "100%" }} autoplay>
        <div className="img_box">
          <picture>
            <img
              sizes="(max-width: 1400px) 100vw, 1400px"
              srcSet={`
          ${b1_200} 200w,
          ${b1_593} 593w,
          ${b1_878} 878w,
          ${b1_1084} 1084w,
          ${b1_1316} 1316w,
          ${b1_1400} 1400w
        `}
              src={b1_1400}
              alt="Save Tax India"
              loading="lazy"
            />
          </picture>
          <div className="img_content">
            <h1>Save Tax</h1>
            <h2>Consultancy Services</h2>

            <p>
              At Save Tax India Consultancy Services, we believe in helping you
              save more and grow more by simplifying the world of taxation,
              compliance, and business setup
            </p>
            <button
              style={{ cursor: "pointer" }}
              onClick={() => Navigate("/#services")}
            >
              Our Services
            </button>
          </div>
        </div>
        <div className="img_box">
          <picture>
            <img
              className="banner-img"
              sizes="(max-width: 1400px) 100vw, 1400px"
              srcSet={`
      ${b2_200} 200w,
      ${b2_519} 519w,
      ${b2_749} 749w,
      ${b2_946} 946w,
      ${b2_1123} 1123w,
      ${b2_1263} 1263w,
      ${b2_1357} 1357w,
      ${b2_1400} 1400w
    `}
              src={b2_1400}
              alt="Save Tax India"
              loading="lazy"
            />
          </picture>
          <div className="img_content">
            <h1>Save Tax </h1>
            <h2>Consultancy Services</h2>
            <p>
              Filing taxes doesn’t have to be confusing, time-consuming, or
              stressful. At Save Tax, we believe that every individual and
              business deserves a simple, transparent, and hassle-free way to
              stay compliant while maximizing their tax savings.
            </p>
            <button
              style={{ cursor: "pointer" }}
              onClick={() => Navigate("/#services")}
            >
              Our Services
            </button>
          </div>
        </div>
        <div className="img_box">
          <picture>
            <img
              className="banner-img"
              sizes="(max-width: 1400px) 100vw, 1400px"
              srcSet={`
      ${b3_200} 200w,
      ${b3_464} 464w,
      ${b3_652} 652w,
      ${b3_809} 809w,
      ${b3_947} 947w,
      ${b3_1075} 1075w,
      ${b3_1183} 1183w,
      ${b3_1293} 1293w,
      ${b3_1365} 1365w,
      ${b3_1400} 1400w
    `}
              src={b3_1400}
              alt="Save Tax India"
              loading="lazy"
            />
          </picture>
          <div className="img_content">
            <h1>Save Tax</h1>
            <h2>Consultancy Services</h2>
            <p>
              At Save Tax India Consultancy Services, we believe in helping you
              save more and grow more by simplifying the world of taxation,
              compliance, and business setup
            </p>
            <button
              style={{ cursor: "pointer" }}
              onClick={() => Navigate("/#services")}
            >
              Our Services
            </button>
          </div>
        </div>
      </Carousel>

      <a
        className="whatsup-btn"
        href="https://wa.me/+919136339255"
        target="_blank"
      >
        <i className="bx bxl-whatsapp"></i>
      </a>
    </section>
  );
};

export default Banner;
