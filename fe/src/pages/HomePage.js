import React from "react";
import Carousel from "../components/Carousel";
import Seperator from "../UI/Seperator";
import Services from "../components/Services";
import Feedback from "../components/Feedback";
import WhyUs from "../components/WhyUs";

const HomePage = () => {
  return (
    <>
      <Carousel />
      <Seperator />
      <Services />
      <Feedback />
      <WhyUs />
    </>
  );
};

export default HomePage;
