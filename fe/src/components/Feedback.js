import React from "react";
import Title from "./Title";
import Seperator from "../UI/Seperator";
import "./Feedback.css";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 3
  }
}

const Feedback = () => {
  return (
    <>
      <Title
        color="#DD6E42"
        title="PHẢN HỒI CỦA KHÁCH HÀNG"
        fontFamily="SourceSerifPro"
        fontSize="40px"
        fontWeight="700"
        className="feedback-title"
      />
      <div className="container container-feedback">
        <Carousel
          swipeable={false}
          draggable={false}
          showDots={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={false}
          autoPlaySpeed={2000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
          deviceType
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          <div
            className="fb-container"
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "right",
              alignItems: "right",
              padding: "14%",
              position: "relative"
            }}
          >
            <div className="fb-content">
              <img src="assets/images/person1.svg" alt=""></img>
              <h3 className="text-center">Chị Nguyễn Thị A</h3>
              <p>"Mình không phải khách hàng thường xuyên của JupViec,
                chỉ thi thoảng bận bịu quá không dọn được nhà thì mới
                nhấc điện thoại lên đặt buổi lẻ. Tóm lại là dùng được, có thể
                recommend cho những người khác. Thanks!"</p>
            </div>
          </div>

          <div
            className="fb-container"
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "right",
              alignItems: "right",
              padding: "14%",
              position: "relative"
            }}
          >
            <div className="fb-content">
              <img src="assets/images/person2.svg" alt=""></img>
              <h3 className="text-center">Anh Nguyễn Văn B</h3>
              <p>"I’ve been reading plenty of these short stories
                in the past couple of weeks and found the lessons
                behind them truly wonderful. So I’ve decided to write
                out this article highlighting the 10 most inspirational
                short stories I’ve heard."</p>
            </div>
          </div>

          <div
            className="fb-container"
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "right",
              alignItems: "right",
              padding: "14%",
              position: "relative"
            }}
          >
            <div className="fb-content">
              <img src="assets/images/person3.svg" alt=""></img>
              <h3 className="text-center">Chị Nguyễn Thị A</h3>
              <p>“when they are very young and much smaller we
                use the same size rope to tie them and, at that age,
                it’s enough to hold them. As they grow up, they are
                conditioned to believe they cannot break away. They
                believe the rope can still hold them, so they never
                try to break free.”</p>
            </div>
          </div>

          <div
            className="fb-container"
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "right",
              alignItems: "right",
              padding: "14%",
              position: "relative"
            }}
          >
            <div className="fb-content">
              <img src="assets/images/person4.svg" alt=""></img>
              <h3 className="text-center">Chị Nguyễn Thị A</h3>
              <p>Mình không phải khách hàng thường xuyên của JupViec,
                chỉ thi thoảng bận bịu quá không dọn được nhà thì mới
                nhấc điện thoại lên đặt buổi lẻ. Tóm lại là dùng được, có thể
                recommend cho những người khác. Thanks!</p>
            </div>
          </div>

          <div
            className="fb-container"
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "right",
              alignItems: "right",
              padding: "14%",
              position: "relative"
            }}
          >
            <div className="fb-content">
              <img src="assets/images/person5.svg" alt=""></img>
              <h3 className="text-center">Chị Nguyễn Thị A</h3>
              <p>"People’s words can have a big effect on other’s
                lives. Think about what you say before it comes
                out of your mouth. It might just be the difference
                between life and death."</p>
            </div>
          </div>

          <div
            className="fb-container"
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "right",
              alignItems: "right",
              padding: "14%",
              position: "relative"
            }}
          >
            <div className="fb-content">
              <img src="assets/images/person6.svg" alt=""></img>
              <h3 className="text-center">Chị Nguyễn Thị A</h3>
              <p>“Your Honor, long before the baker started buying
                butter from me, I have been buying a pound loaf of
                bread from him. Every day when the baker brings the
                bread, I put it on the scale and give him the same
                weight in butter. If anyone is to be blamed, it is
                the baker.”</p>
            </div>
          </div>

        </Carousel>
      </div>

      <Seperator />
    </>
  );
};

export default Feedback;
