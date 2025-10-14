import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { serviceData } from "../constants/services";
import img from "../assets/img/cute.png";
import logoDark from "../assets/img/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { fetchServicesAPI } from "../api/api";
import { Skeleton } from "antd";

const Navbar = ({ setModalOpen }) => {
  const [open, setOpen] = useState(null);
  const categoryRef = useRef(null);
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const Navigate = useNavigate();

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
          <img
            src={logoDark}
            alt="save tax india"
            onClick={() => Navigate("/")}
          />
          <div className="logo_text" onClick={() => Navigate("/")}>
            <h2>Save Tax</h2>
            <p> Consultancy Service</p>
          </div>
        </div>
        <div className="right">
          <Link
            to={"/"}
            className={
              location.pathname === "/" && location.hash === "" ? "active" : ""
            }
          >
            Home
          </Link>
          <a onClick={() => setOpen(true)}>Services</a>
          <Link
            to={"/#about"}
            className={location.hash === "#about" ? "active" : ""}
          >
            About Us
          </Link>
          <Link
            to={"/contact-us"}
            className={location.pathname === "/contact-us" ? "active" : ""}
          >
            Contact Us
          </Link>
          <button onClick={() => setModalOpen(true)}>Consult Now</button>
        </div>
        <div className="right2">
          <i className="bx bx-menu" onClick={() => setMenuOpen(true)}></i>
        </div>

        {open && <Services />}
      </header>
      {menuOpen && (
        <div className="mobile_nav">
          <i className="bx bx-x" onClick={() => setMenuOpen(false)}></i>
          <div className="menu">
            <Link
              to={"/"}
              className={
                location.pathname === "/" && location.hash === ""
                  ? "active"
                  : ""
              }
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            <a
              onClick={() => {
                setOpen(true);
                setMenuOpen(false);
              }}
            >
              Services
            </a>
            <Link
              to={"/#about"}
              className={location.hash === "#about" ? "active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              to={"/contact-us"}
              className={location.pathname === "/contact-us" ? "active" : ""}
            >
              Contact Us
            </Link>
            <button
              onClick={() => {
                setMenuOpen(false);
                setModalOpen(true);
              }}
            >
              Consult Now
            </button>
          </div>
          <div className="form_group">
            <label>
              <i className="bx bxs-envelope"></i>Email Address
            </label>
            <a href="mailto: artikanojia07@gmail.com">
              {" "}
              artikanojia07@gmail.com
            </a>
          </div>
          <div className="form_group">
            <label>
              <i className="bx bxs-phone"></i>Contact No
            </label>
            <a href="tel:+918048775862">+91 8048775862</a>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;

export const Services = () => {
  const { services } = useSelector((state) => state.services);
  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const fetchRecords = async () => {
    try {
      setLoading(true);
      const result = await fetchServicesAPI();
      if (result?.data?.data) {
        setState(result?.data?.data);
        dispatch({ type: "addServices", payload: result?.data?.data });
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (services?.length === 0) {
      fetchRecords();
    } else {
      setState(services);
    }
  }, [services]);

  return (
    <div className="service_pop_content">
      <div className="sc1">
        <h5>Compilance Services</h5>
        <ul>
          {loading
            ? [1, 2]?.map((d) => <Skeleton paragraph={2} active />)
            : state
                ?.filter((f) => f?.category === "Compliance")
                ?.map((d) => (
                  <li key={d._id}>
                    <Link to={`/services/${encodeURI(d._id)}`}>{d?.title}</Link>
                  </li>
                ))}
        </ul>
      </div>
      <div className="sc1">
        <h5>Registrations Services</h5>
        <ul>
          {loading
            ? [1, 2]?.map((d) => <Skeleton paragraph={2} active />)
            : state
                ?.filter((f) => f?.category === "Registrations")
                ?.map((d) => (
                  <li key={d?._id}>
                    <Link to={`/services/${encodeURI(d._id)}`}>{d?.title}</Link>
                  </li>
                ))}
        </ul>
      </div>
      <div className="sc1">
        <h5>Other Services Services</h5>
        <ul>
          {loading
            ? [1, 2]?.map((d) => <Skeleton paragraph={2} active />)
            : state
                ?.filter((f) => f?.category === "Other Services")
                ?.map((d) => (
                  <li key={d?._id}>
                    <Link to={`/services/${encodeURI(d._id)}`}>{d?.title}</Link>
                  </li>
                ))}
        </ul>
      </div>
      <div className="sc1">
        <h4>
          From Confusion to Clarity – <span>Save Tax with Ease</span>
        </h4>
        <img src={img} alt="Save Tax India" />
      </div>
    </div>
  );
};
