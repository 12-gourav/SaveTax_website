import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import BannerTwo from "../components/BannerTwo";
import About from "../components/About";
import HomeServices from "../components/HomeServices";
import Faq from "../components/Faq";
import Footrer from "../components/Footrer";
import Newsletter from "../components/Newsletter";
import Ticket from "../constants/Ticket";
import ConsultModal from "../components/ConsultModal";

const Home = () => {
  const [modalOpen, setModalOpen] = useState(false);

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
      <Navbar setModalOpen={setModalOpen} />
      <Banner />
      <Ticket />
      <HomeServices />
      <BannerTwo />
      <About />

      <Newsletter />
      <Faq />
      <Footrer />

      {modalOpen && <ConsultModal open={modalOpen} setOpen={setModalOpen} />}
    </>
  );
};

export default Home;
