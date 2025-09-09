import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import BannerTwo from "../components/BannerTwo";
import About from "../components/About";
import HomeServices from "../components/HomeServices";
import News from "../components/News";
import Faq from "../components/Faq";
import Footrer from "../components/Footrer";
import Newsletter from "../components/Newsletter";

const Home = () => {
  return (
    <>
      <Navbar />
      <News />
      <Banner />
      <BannerTwo />
      <About />
      <HomeServices />
      <Newsletter/>
      <Faq />
      <Footrer/>
    </>
  );
};

export default Home;
