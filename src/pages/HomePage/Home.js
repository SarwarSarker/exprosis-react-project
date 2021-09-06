import React from "react";
import Footer from "../../components/Footer/Footer";
import InfoSection from "../../components/InfoSection/InfoSection";
import Pricing from "../../components/Pricing/Pricing";
import Subscribe from "../../components/Subscribe/Subscribe";
import { homeObjOne, homeObjThree, homeObjTwo } from "./Data";

const Home = () => {
  return (
    <>
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
      <Pricing />
      <Subscribe />
      <Footer />
    </>
  );
};

export default Home;
