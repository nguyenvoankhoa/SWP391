import React, { Component } from "react";
import ContactInfoComponent from "./ContactInfoComponent";
import HeaderComponent from "./HeaderComponent";
import { Link } from "react-router-dom";
export default class Header extends Component {
  state = {
    serviceList: [
      { content: "DỊCH VỤ 1" },
      { content: "DỊCH VỤ 2" },
      { content: "DỊCH VỤ 3" },
      { content: "DỊCH VỤ 4" },
      { content: "DỊCH VỤ 5" },
    ],
  };

  render() {
    return (
      <div className="header">
        <ContactInfoComponent />
        <div className="header-tags">
          <div className="">
            <img className="logo" src="assets/img/LOGO.png" alt="img" />
          </div>
          <Link className="header-text">
            <HeaderComponent
              content="DỊCH VỤ"
              serviceList={this.state.serviceList}
            />
          </Link>
          <Link className="header-text" to="introduction">
            <HeaderComponent content="GIỚI THIỆU" />
          </Link>
          <Link className="header-text" to="contact">
            <HeaderComponent content="LIÊN HỆ" />
          </Link>
          <Link className="header-text" to="news">
            <HeaderComponent content="TIN TỨC" />
          </Link>
          <Link className="header-text" to="policies">
            <HeaderComponent content="CHÍNH SÁCH BẢO HÀNH" />
          </Link>
          <Link className="">
            <img className="button" src="assets/img/user.png" alt="img" />
          </Link>
          <Link className="">
            <img className="button" src="assets/img/cart.png" alt="img" />
          </Link>
        </div>
      </div>
    );
  }
}
