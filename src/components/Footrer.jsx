import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Footrer = () => {
  const { isActive } = useSelector((state) => state.users);

  const date = new Date();
  return (
    <footer>
      <div className="container">
        <div className="left">
          <h5>
            <span>Save Tax Consultancy Services</span>
          </h5>
          <p>
            SaveTax helps individuals and businesses simplify tax filing,
            maximize deductions, and stay compliant with the latest tax
            regulations.
          </p>
          <div className="form_wrap">
            <div className="form_group">
              <label>Phone Number</label>
              <a href="tel:+919136339255">+91 9136339255</a>
            </div>
            <div className="form_group">
              <label>Email</label>
              <a href="mailto:  artikanojia@savetaxindia.com">
                {" "}
                artikanojia@savetaxindia.com
              </a>
            </div>
          </div>
          <div className="form_wrap">
            <div className="form_group">
              <label>Address</label>
              <p>
                Sailesh Nagar, Malad West, Mumbai, Maharashtra - 400064, India
              </p>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="r1">
            <h4>Important Links</h4>
            <Link to="/#about"> About Us</Link>
            <Link to="/contact-us">Contact Us</Link>
            <Link to="/#services">Services</Link>
            <Link to="/#benifits">Benifits</Link>
            {isActive ? (
              <Link to={"/dashboard"}>Dashboard</Link>
            ) : (
              <Link to="/auth/login">Administration</Link>
            )}
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
