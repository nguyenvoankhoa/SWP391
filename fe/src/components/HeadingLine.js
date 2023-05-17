import React from "react";

const TopHeader = () => {
  return (
    <nav className="head-line">
      <div className="service">
        <img
          src="assets/images/247.png"
          alt=""
        />
        <span>Dịch vụ 24/7</span>
      </div>

      <div className="mail">
        <img
          src="assets/images/mail.png"
          alt=""
        />
        <span>cleanshine@gmail.com</span>
      </div>
      <div className="phone">
        <img
          src="assets/images/phone.png"
          alt=""
        />
        <span>0977.54.54.50</span>
      </div>
    </nav>
  );
};

export default TopHeader;
