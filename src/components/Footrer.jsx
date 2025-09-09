import React from "react";
import { Link } from "react-router-dom";

const Footrer = () => {
    const date = new Date()
  return (
    <footer>
      <div className="container">
        <div className="left">
          <h5>SaveTax</h5>
          <p>
            SaveTax helps individuals and businesses simplify tax filing,
            maximize deductions, and stay compliant with the latest tax
            regulations.
          </p>
          <div className="form_wrap">
            <div className="form_group">
              <label>Phone Number</label>
              <p>+91 1234567890</p>
            </div>
            <div className="form_group">
              <label>Email</label>
              <p>savetax.info@gmail.com</p>
            </div>
          </div>
          <div className="form_wrap">
            <div className="form_group">
              <label>Address</label>
              <p>terst address, lucknow , 229206</p>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="r1">
            <h4>Important Links</h4>
            <Link> About Us</Link>
            <Link>Contact Us</Link>
            <Link>Services</Link>
            <Link>Benifits</Link>
          </div>
          <div className="r1">
            <h4>Social Links</h4>
            <Link>Facebook</Link>
            <Link>Instagram</Link>
            <Link>Youtube</Link>
            <Link>Twitter</Link>
          </div>
          <div className="r1">
            <h4>Legal</h4>
            <Link>Terms & Conditions</Link>
            <Link>Privacy Policy</Link>
          </div>
        </div>
      </div>

      <p>© {date.getFullYear()} SaveTax. All Rights Reserved.</p>
    </footer>
  );
};

export default Footrer;
