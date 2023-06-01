import React from "react";
import Title from "../../components/Title";
import "./ActionRecord.css";

const ActionRecord = () => {
  return (
    <>
      <div className="bg user-navbar" />
      <div
        className="container"
        style={{
          paddingLeft: "21.5vw",
          paddingRight: "0",
          margin: "0",
          height: "100vh",
          marginLeft: "4vw",
        }}
      >
        <Title
          title="HOẠT ĐỘNG"
          color="white"
          fontSize="35px"
          fontWeight="1000"
          padding="3% 0 0  0"
        />
        <div className="row d-flex justify-content-center ar-content">
          <div className="row col-md-12 ar-nav">
            <button className="col-md-5">Dịch vụ chờ làm</button>
            <button className="col-md-5">Dịch vụ đã hoàn thành</button>
          </div>
          <div className="col-md-12 ar-list"></div>
        </div>
      </div>
    </>
  );
};

export default ActionRecord;
