import img from "../assets/img/b1.jpg";
import img2 from "../assets/img/b2.jpg";
import img3 from "../assets/img/b3.jpg";

import { Carousel } from "antd";

const Banner = () => {
  return (
    <section className="banner">
      <Carousel style={{ width: "100%" }} autoplay>
        <div className="img_box">
          <img src={img} />
          <div className="img_content">
            <h1>Save Tax</h1>
            <h2>Consultancy Services</h2>
            <p>
              Filing taxes doesn’t have to be confusing, time-consuming, or
              stressful. At Save Tax, we believe that every individual and
              business deserves a simple, transparent, and hassle-free way to
              stay compliant while maximizing their tax savings.
            </p>
            <button>Our Services</button>
          </div>
        </div>
        <div className="img_box">
          <img src={img2} />
          <div className="img_content">
            <h1>Save Tax</h1>
            <h2>Consultancy Services</h2>
            <p>
              Filing taxes doesn’t have to be confusing, time-consuming, or
              stressful. At Save Tax, we believe that every individual and
              business deserves a simple, transparent, and hassle-free way to
              stay compliant while maximizing their tax savings.
            </p>
            <button>Our Services</button>
          </div>
        </div>
        <div className="img_box">
          <img src={img3} />
          <div className="img_content">
            <h1>Save Tax</h1>
            <h2>Consultancy Services</h2>
            <p>
              Filing taxes doesn’t have to be confusing, time-consuming, or
              stressful. At Save Tax, we believe that every individual and
              business deserves a simple, transparent, and hassle-free way to
              stay compliant while maximizing their tax savings.
            </p>
            <button>Our Services</button>
          </div>
        </div>
      </Carousel>
    </section>
  );
};

export default Banner;

// <div className="left">
//       <div className="tag-btn">Easily Extend Your Tax Deadline</div>

//       <h1>
//         <span>Save Tax </span>is your trusted partner for smarter tax
//         solutions
//       </h1>

//       <h4>

//       </h4>
//       <p>
//         Filing taxes doesn’t have to be confusing, time-consuming, or
//         stressful. At Save Tax, we believe that every individual and business
//         deserves a simple, transparent, and hassle-free way to stay compliant
//         while maximizing their tax savings. Whether you are a salaried
//         professional, a freelancer, a business owner, or an NRI, our expert
//         tax filing solutions are designed to meet your unique financial needs.
//       </p>
//       <button>Get Started</button>
//     </div>
