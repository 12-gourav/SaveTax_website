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
import CustomerReview from "../components/CustomerReview";
import CircularBenifits from "../components/CircularBenifits";
import OurClients from "../components/OurClients";

const Home = () => {
  const [modalOpen, setModalOpen] = useState(false);


  return (
    <>
      <Navbar setModalOpen={setModalOpen} />
      <Banner />
      <Ticket />
      <HomeServices />
      <OurClients/>
      <BannerTwo />
      <CircularBenifits/>
      <CustomerReview/>
      <About />

      <Newsletter />
      <Faq />
      <Footrer />

      {modalOpen && <ConsultModal open={modalOpen} setOpen={setModalOpen} />}
    </>
  );
};

export default Home;
