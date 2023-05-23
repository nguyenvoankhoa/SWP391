import React from "react";
import Title from "../../components/Title";
import UserServiceCard from "../../components/User/UserServiceCard";
const HomeService = () => {
  return (
    <>
      <Title
        title="DỊCH VỤ VỆ SINH"
        color="#000000"
        fontSize="35px"
        fontWeitgh="600"
      />
      <div className="container">
        <div className="row">
          <UserServiceCard
            img="assets/images/hourly-help.svg"
            title="Giúp việc theo giờ"
            link="hourly-help"
          />
          <UserServiceCard
            img="assets/images/deep-cleaning.svg"
            title="Tổng vệ sinh"
            link="total-senitation"
          />
          <UserServiceCard
            img="assets/images/sofa.svg"
            title="Vệ sinh sofa, nệm, rèm, thảm"
            link="fabric-cleaning"
          />
          <UserServiceCard
            img="assets/images/air-condition.svg"
            title="Vệ sinh điều hoà, điện máy"
            link="electronic-cleaning"
          />
        </div>
      </div>
    </>
  );
};

export default HomeService;
