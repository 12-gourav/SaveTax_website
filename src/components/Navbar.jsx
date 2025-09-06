import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <header>
        <div className="left">
          <h2>
            Save<span>Tax</span>
          </h2>
        </div>
        <div className="right">
          <Link to={"/"}>Home</Link>
          <Link to={"/"}>About Us</Link>
          <Link to={"/"}>Services</Link>
          <Link to={"/"}>Tax Calculator</Link>
          <Link to={"/"}>Contact Us</Link>
        </div>
      </header>
    </>
  );
};

export default Navbar;
