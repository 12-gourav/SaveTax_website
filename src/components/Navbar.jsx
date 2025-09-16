import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { serviceData } from "../constants/services";
import img from "../assets/img/cute.png";
const Navbar = ({ setModalOpen }) => {
  const [open, setOpen] = useState(null);
  const categoryRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (categoryRef.current && !categoryRef.current.contains(event.target)) {
        setOpen(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <header ref={categoryRef}>
        <div className="left">
          <h2>
            Save<span>Tax</span>
          </h2>
        </div>
        <div className="right">
          <Link to={"/"} className={location.pathname === "/" ? "active" : ""}>
            Home
          </Link>
          <a onClick={() => setOpen(true)}>Services</a>
          <Link to={"/"}>Blogs</Link>
          <Link to={"/"}>About Us</Link>
          <Link
            to={"/contact-us"}
            className={location.pathname === "/contact-us" ? "active" : ""}
          >
            Contact Us
          </Link>
          <button onClick={() => setModalOpen(true)}>Consult Now</button>
        </div>
        {open && <Services />}
      </header>
    </>
  );
};

export default Navbar;

export const Services = () => {
  return (
    <div className="service_pop_content">
      <div className="sc1">
        <h5>Compilance Services</h5>
        <ul>
          {serviceData
            ?.filter((f) => f.category === "Compliance")
            ?.map((d) => (
              <li key={d.id}>
                <Link to={`/services/${d.title}`}>{d.title}</Link>
              </li>
            ))}
        </ul>
      </div>
      <div className="sc1">
        <h5>Registrations Services</h5>
        <ul>
          {serviceData
            ?.filter((f) => f.category === "Registrations")
            ?.map((d) => (
              <li key={d.id}>
                <Link to={`/services/${d.title}`}>{d.title}</Link>
              </li>
            ))}
        </ul>
      </div>
      <div className="sc1">
        <h5>Other Services Services</h5>
        <ul>
          {serviceData
            ?.filter((f) => f.category === "Other Services")
            ?.map((d) => (
              <li key={d.id}>
             <Link to={`/services/${d.title}`}>{d.title}</Link>
              </li>
            ))}
        </ul>
      </div>
      <div className="sc1">
        <h4>
          From Confusion to Clarity – <span>Save Tax with Ease</span>
        </h4>
        <img src={img} />
      </div>
    </div>
  );
};
