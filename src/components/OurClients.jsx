import img1 from "../assets/img/dishtv.png";
import img2 from "../assets/img/hcl.png";
import img3 from "../assets/img/tata.png";
import img4 from "../assets/img/tcs.png";
import img5 from "../assets/img/xero.png";

const OurClients = () => {
  return (
    <section className="clients">
          <p className="thousand">THOUSANDS TRUST FAIRSTONE</p>
      <h2>Our Clients</h2>
      <p className="text">
        Our clients include individuals, startups, and businesses who trust us
        for accurate, reliable, and hassle-free tax solutions. From salaried
        professionals to entrepreneurs, we proudly serve diverse needs with the
        same commitment to precision and care.
      </p>
      <div className="client_review">
        {[img4, img1, img2, img3]?.map((d) => (
          <div className="img_card">
            <img src={d} />
          </div>
        ))}
        {[img4, img1, img2, img3]?.map((d) => (
          <div className="img_card">
            <img src={d} />
          </div>
        ))}
        {[img4, img1, img2, img3]?.map((d) => (
          <div className="img_card">
            <img src={d} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurClients;
