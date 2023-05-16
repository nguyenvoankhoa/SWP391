import React from "react";

const TopHeader = () => {
  return (
    <nav className="row">
      <div className="col-6">
        <a class="navbar-brand" href="#">
          <img
            src="/docs/4.1/assets/brand/bootstrap-solid.svg"
            width="30"
            height="30"
            alt=""
          />
        </a>
        <span>Dịch vụ 24/7</span>
      </div>

      <div className="col-3">
        <img />
        <span>mail text</span>
      </div>
      <div className="col-3">
        <img />
        <span>phone text</span>
      </div>
    </nav>
  );
};

export default TopHeader;
