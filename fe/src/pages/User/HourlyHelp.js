import React, { useState } from "react";
import "./HourlyHelp.css";
import { json, useLoaderData, Link, useNavigate } from "react-router-dom";
import Title from "../../components/Title";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from "react-redux";
import TimePicker from "../../components/User/TimePicker";
import PaymentPicker from "../../components/User/PaymentPicker";
import ServiceNavigation from "../../components/User/ServiceNavigation";
import { orderItemAction } from "../../redux/order";
React.state = {
  cleanFreq: ["Hàng ngày", "Hàng tuần", "Hàng tháng"],
  payMethod: ["PayPal", "Tiền mặt"],
  timePicker: ["Sáng", "Chiều", "Tối"],
};

const HourlyHelp = () => {
  const totalAmount = useSelector((state) => state.order.totalAmount);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [selectedDate, setselectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState("Sáng");
  const [selectedPayment, setSelectedPayment] = useState("Tiền mặt");
  const [display, setDisplay] = useState(false);
  const [chosenService, setChosenService] = useState(null);
  const [detail, setDetail] = useState(null);
  const data = useLoaderData();
  const HOURLY_HELP = data.filter((item) => {
    return item.name === "Giúp việc theo giờ";
  });
  const addServiceHandler = () => {
    if (detail === null) {
      alert("Chọn dịch vụ !");
      return;
    }
    const bill = {
      id: detail.id,
      name: detail.name,
      type: detail.type,
      price: detail.price,
      detail: detail.detail,
      unit: detail.unit,
      date: selectedDate.getDate(),
      time: selectedTime,
      payment: selectedPayment,
      frequence: display,
      timeRepeat: chosenService,
    };
    dispatch(orderItemAction.addItem(bill));
    navigate("/user/order-sumation");
  };
  const addDetailHandler = (detail) => {
    setDetail(detail);
  };

  const addTimeHandler = (time) => {
    setSelectedTime(time);
  };
  const addDateHandler = (date) => {
    setselectedDate(date);
  };
  const paymentHandler = (payment) => {
    setSelectedPayment(payment);
  };
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
          title="DỊCH VỤ DỌN DẸP"
          color="white"
          fontSize="35px"
          fontWeight="1000"
          padding="5% 0 0  0"
        />
        <div className="hh-content">
          <div className="row gy-4 pt-5 d-flex">
            {HOURLY_HELP.map((item) => (
              <div
                className="col-md-4 hh-options"
                key={Math.random()}
                onClick={() =>
                  addDetailHandler({
                    id: item.serviceId,
                    name: item.name,
                    detail: item.detail,
                    unit: item.unit,
                    price: item.price,
                    type: item.type,
                  })
                }
              >
                <button>
                  {item.detail}/{item.unit}({item.type})
                </button>
              </div>
            ))}

            <TimePicker onAddTime={addTimeHandler} onAddDate={addDateHandler} />

            <div className="row gy-5 mt-4 d-flex hh-function">
              <div className="col-md-12 d-flex f-content">
                <label className="switch">
                  <h5>Vệ sinh định kỳ</h5>
                  <input
                    type="checkbox"
                    onClick={() => {
                      setDisplay((display) => !display);
                    }}
                  />
                  <span className="slider round"></span>
                </label>
                {display && (
                  <div className="col-md-4 manual-service dropdown">
                    <button>
                      {chosenService === null ? (
                        <span>Chọn thời gian</span>
                      ) : (
                        <span>{chosenService}</span>
                      )}

                      <div className="hh-arrow"></div>
                      <div className="manual-dropdown">
                        {React.state.cleanFreq.map((service) => (
                          <div
                            type="button"
                            className="manual-item"
                            onClick={() => setChosenService(service)}
                          >
                            {service}
                          </div>
                        ))}
                      </div>
                    </button>
                  </div>
                )}
                <div className="f-price">
                  <p>Giá:</p>
                  <p>{totalAmount} VND</p>
                </div>
              </div>
            </div>
            <PaymentPicker onAddPayment={paymentHandler} />
          </div>

          <ServiceNavigation payHandler={addServiceHandler} />
        </div>
      </div>
    </>
  );
};

export default HourlyHelp;

export async function loader() {
  const res = await fetch(
    "https://swp-production.up.railway.app/electronic-cleaning"
  );
  if (!res.ok) {
    throw json({ message: "can not load item" }, { status: 500 });
  } else {
    const data = await res.json();
    return data;
  }
}
