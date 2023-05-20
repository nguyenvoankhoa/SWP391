import React from "react";

const TopHeader = () => {
  return (
    <div className="container-fluid">
      <nav className="row">
        <div className="col-md-4 service">
          <img
            src="assets/images/247.svg"
            alt=""
          />
          <span>Dịch vụ 24/7</span>
        </div>
        <div className="col-md-5 mail">
          <img
            src="assets/images/mail.svg"
            alt=""
          />
          <span>cleanshine@gmail.com</span>
        </div>
        <div className="col-md-3 phone">
          <img
            src="assets/images/phone.svg"
            alt=""
          />
          <span>0977.54.54.50</span>
        </div>
      </nav>
    </div>
  );
};

export default TopHeader;
