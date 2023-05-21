import React from "react";
import Title from "./Title";
import Seperator from "../UI/Seperator";
import ServiceCard from "./ServiceCard";
const Services = () => {
  return (
    <>
      <div className="service-container">
        <div className="container">
          <Title
            color="#084C61"
            title="CLEANSHINE"
            fontSize="50px"
            fontWeight="700"
          />
          <Title
            color="#DD6E42"
            title="NHỮNG DỊCH VỤ CỦA CHÚNG TÔI"
            fontSize="40px"
            fontWeight="700"
          />
          <ServiceCard />
          <Seperator />
        </div>
      </div>
    </>
  );
};

export default Services;
