import { benefits } from "../constants/home";

const BannerTwo = () => {
  return (
    <section className="banner2">
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
        {benefits?.map((d, i) => (
          <div className="card">
            <h4>{d.title}</h4>
            <p>{d.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BannerTwo;
