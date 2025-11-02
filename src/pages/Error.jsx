import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import img from "../assets/icons/404.svg"

const Error = () => {
  const Navigate = useNavigate();

  useEffect(() => {
    Navigate("/");
  }, []);

  return <div className="error_page">
    <img src={img}/>
  </div>;
};

export default Error;
