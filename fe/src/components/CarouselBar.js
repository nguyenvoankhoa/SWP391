import React from "react";
import "./Carousel.css"

const CarouselBar = () => {
  return (
    <div className="container">
      <h1 className="text-center c-title">SỨ MỆNH CỦA CHÚNG TÔI</h1>
      <div id="carouselBar" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">

          <button
            type="button"
            data-bs-target="#carouselBar"
            data-bs-slide-to="0"
            class="active"
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

        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="assets/images/slide1.jpg" class="d-block w-100" alt="Services" />
          </div>
          <div class="carousel-item">
            <img src="assets/images/slide2.jpg" class="d-block w-100" alt="Services" />
          </div>
          <div class="carousel-item">
            <img src="assets/images/slide3.jpg" class="d-block w-100" alt="Services" />
          </div>
        </div>

        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselBar"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>

        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselBar"
          data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default CarouselBar;