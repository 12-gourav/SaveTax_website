import { Route, Routes } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import img from "./assets/img/logo_blue.svg";
const Home = lazy(() => import("./pages/Home"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const ServiceDetail = lazy(() => import("./pages/ServiceDetail"));

const App = () => {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector("header");
      if (header) {
        header.classList.toggle("sticky", window.scrollY > 10);
      }
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Suspense fallback={<div className="split">
        <img src={img} alt="Save India Tax"/>
        <h2>Save Tax India</h2>
      </div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/services/:name" element={<ServiceDetail />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
