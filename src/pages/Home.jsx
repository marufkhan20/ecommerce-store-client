import React from "react";
import Banner from "../components/Home/Banner";
import OfferSection from "../components/Home/OfferSection";
import TopCollection from "../components/Home/TopCollection";

const Home = () => {
  return (
    <main>
      <Banner />
      <TopCollection />
      <OfferSection />
    </main>
  );
};

export default Home;
