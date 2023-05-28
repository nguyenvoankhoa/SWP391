import React, { useState } from "react";
import "./HourlyHelp.css";
import { Link } from "react-router-dom";
import Title from "../../components/Title";
import UserHeadingBar from "../../components/User/UserHeadingBar";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const HourlyHelp = () => {

  const [startDate, setStartDate] = useState(new Date());

  const [display, setDisplay] = useState(false);

  const cleanFreq = ["Hàng ngày", "Hàng tuần", "Hàng tháng", "Hàng năm"];

  const [chosenService, setChosenService] = useState("Hàng tuần");

  return (
    <>
      <UserHeadingBar />
      <div
        className="bg"
        style={{
          width: "100vw",
          height: "53vh",
          position: "absolute",
          top: "0",
          left: "0",
          backgroundColor: "#397F77",
          zIndex: "-1"
        }}
      />
      <div
        className="container"
        style={{
          paddingLeft: "20vw",
          paddingRight: "0",
          margin: "0",
          height: "100vh",
          marginLeft: "4vw"
        }}
      >
        <Title
          title="DỊCH VỤ DỌN DẸP"
          color="white"
          fontSize="35px"
          fontWeight="1000"
          padding="5% 0 0  0"
        />
        <div className="hh-content">
          <div className="row gy-4 pt-5 d-flex">
            <div className="col-md-4 hh-options">
              <button>
                <Link>2h(50m2/2 phòng)</Link>
              </button>
            </div>
            <div className="col-md-4 hh-options">
              <button>
                <Link>3h(85m2/3 phòng)</Link>
              </button>
            </div>
            <div className="col-md-4 hh-options">
              <button>
                <Link>4h(105m2/4 phòng)</Link>
              </button>
            </div>
            <div className="col-md-4 date-btn hh-options">
              <label>Chọn ngày</label>
              <button
                style={{
                  backgroundColor: "white",
                  boxShadow: "0 3px 3px #4e6e6a57",
                }}
              >
                <DatePicker
                  className="date-picker"
                  selected={startDate}
                  minDate={new Date()}
                  onChange={(date) => setStartDate(date)}
                  dateFormat="dd/MM/yyyy"
                />
              </button>
            </div>
            <div className="col-md-4 hh-options">
              <label>Chọn giờ</label>
              <button>
                <span style={{ opacity: "0" }}>#################</span>
                <div className="hh-arrow"></div>
              </button>
            </div>
            <div className="col-md-4 hh-options" style={{ opacity: "0" }}>
              <span>
                <Link>################</Link>
              </span>
            </div>
            <div className="row gy-5 mt-4 d-flex hh-function">
              <div className="col-md-12 d-flex f-content">
                <label class="switch">
                  <h5>Vệ sinh định kỳ</h5>
                  <input
                    type="checkbox"
                    onClick={() => { setDisplay(display => !display) }}
                  />
                  <span class="slider round"></span>
                </label>
                {
                  display &&
                  <div className="col-md-4 manual-service dropdown">
                    <button>
                      <span>{chosenService}</span>
                      <div className="hh-arrow"></div>
                      <div className="manual-dropdown">
                        {
                          cleanFreq.map((service) =>
                            <div
                              type="button"
                              className="manual-item"
                              onClick={() => setChosenService(service)}
                            >
                              {service}
                            </div>
                          )
                        }
                      </div>
                    </button>
                  </div>
                }
                <div className="f-price">
                  <p>Giá:</p>
                  <p>100.000 VNĐ</p>
                </div>
              </div>
            </div>
            <div className="row mt-5 pt-2 hh-submit">
              <div className="col-md-5 d-flex justify-content-center hh-payment">
                <button>
                  <Link>Thanh toán bằng tiền mặt</Link>
                </button>
              </div>
              <div className="col-md-5 d-flex justify-content-center hh-payment">
                <button>
                  <Link>Thanh toán bằng PayPal</Link>
                </button>
              </div>
            </div>
          </div>
          <div className="row mt-5 pt-4 d-flex justify-content-center navigate-btn">
            <div className="col-md-4 pt-2 pb-2 d-flex justify-content-center cont-btn">
              <button>
                <Link to="">Tiếp tục</Link>
              </button>
            </div><div className="col-md-4 pt-2 pb-2 d-flex justify-content-center back-btn">
              <button>
                <Link>Quay lại</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>

  );
};

export default HourlyHelp;
