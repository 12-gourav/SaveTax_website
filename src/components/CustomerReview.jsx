import React from "react";
import { reviews } from "../constants/reviews";
import img from "../assets/icons/quote.svg";

const CustomerReview = () => {
  return (
    <section className="review">
      <p className="thousand">THOUSANDS TRUST FAIRSTONE</p>
      <h1>
        Don't take our word for it,
        <br /> see what our clients say
      </h1>
      <p className="text">
        We're honored by the feedback, and it fuels our commitment to delivering
        exceptional financial services. Read the reviews to hear firsthand how
        Fairstone is making a positive impact on people's lives. Your trust is
        our greatest achievement.
      </p>

      <div className="review_content">
        <ReviewContent />
        <ReviewContent />
      </div>
      <div className="rates">
          <i className="bx bxs-star"></i>
        <b>SaveTax</b>
        <div className="ib-box">
          {[1, 2, 3, 4, 5]?.map((d) => (
            <div className="ib">
              <i className="bx bxs-star"></i>
            </div>
          ))}
        </div>
      </div>
      <p className="lt">4.6 Rating based on 8000+ Reviews</p>
    </section>
  );
};

export default CustomerReview;

const ReviewContent = () => {
  const Rate = (rate) => {
    const arr = [];
    for (let i = 0; i < rate; i++) {
      arr.push(<i className="bx bxs-star"></i>);
    }
    return arr;
  };

  return reviews?.map((d) => (
    <div className="review_card">
      <img className="img" src={img} />
      <p>{d.feedback}</p>
      <div className="rate">{Rate(d.rate).map((f) => f)}</div>
      <div className="form_group">
        <img src={d.img} />
        <div className="form_label">
          <h5>{d.name}</h5>
          <p>{d.designation}</p>
        </div>
      </div>
    </div>
  ));
};
