import React from "react";
import "./Carousel.css";

const CarouselBar = () => {
  return (
    <div className="container">
      <h1 className="text-center c-title">SỨ MỆNH CỦA CHÚNG TÔI</h1>
      <div id="carouselBar" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselBar"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#carouselBar"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#carouselBar"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          />
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="assets/images/slide1.jpg"
              className="d-block w-100"
              alt="Services"
            />
          </div>
          <div className="carousel-item">
            <img
              src="assets/images/slide2.jpg"
              className="d-block w-100"
              alt="Services"
            />
          </div>
          <div className="carousel-item">
            <img
              src="assets/images/slide3.jpg"
              className="d-block w-100"
              alt="Services"
            />
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselBar"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselBar"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default CarouselBar;
