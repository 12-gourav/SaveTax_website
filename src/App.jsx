import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import { useEffect } from "react";
import ServiceDetail from "./pages/ServiceDetail";

const App = () => {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector("header");
      if (header) {
        header.classList.toggle("sticky", window.scrollY > 10);
      }
    };

    // Attach scroll listener
    window.addEventListener("scroll", handleScroll);

    // Run once on mount in case already scrolled
    handleScroll();

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/services/:name" element={<ServiceDetail />} />
      </Routes>
    </>
  );
};

export default App;
