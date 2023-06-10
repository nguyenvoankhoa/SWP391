import React from "react";
import Title from "../../components/Title";
import UserServiceCard from "../../components/User/UserServiceCard";
const HomeService = () => {
  return (
    <div
      className="container"
      style={{
        // marginLeft: "5%",
        paddingLeft: "20vw",
        paddingRight: "0",
        margin: "0",
        height: "100vh",
        marginLeft: "4.5vw"
      }}
    >
      <Title
        title="DỊCH VỤ VỆ SINH"
        color="black"
        fontSize="35px"
        fontWeight="2000"
        padding="3% 0 0  0"
      />
      <div
        className="bg"
        style={{
          width: "100vw",
          height: "100vh",
          position: "absolute",
          top: "0",
          left: "0",
          zIndex: "-1",
          backgroundImage: "linear-gradient(180deg,#F8F5F5, #fff)"
        }}
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
