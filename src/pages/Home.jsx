import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import BannerTwo from "../components/BannerTwo";
import About from "../components/About";
import HomeServices from "../components/HomeServices";
import News from "../components/News";

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <News/>
      <BannerTwo />
      <About />
      <HomeServices/>
    </>
  );
};

export default Home;
