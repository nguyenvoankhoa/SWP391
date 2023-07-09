import React from "react";
import Title from "../../components/Title";
import UserServiceCard from "../../components/User/UserServiceCard";
const HomeService = () => {
  return (
    <div
      className="container"
      style={{
        height: "70vh !important",
      }}
    >
      <Title
        title="DỊCH VỤ VỆ SINH"
        color="#397f77"
        fontSize="34px"
        fontWeight="2000"
        padding="0"
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
    </div>
  );
};

export default HomeService;
