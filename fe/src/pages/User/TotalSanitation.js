import React, { useState } from "react";
import { json, useLoaderData, useNavigate } from "react-router-dom";
import Title from "../../components/Title";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from "react-redux";
import PaymentPicker from "../../components/User/PaymentPicker";
import ServiceNavigation from "../../components/User/ServiceNavigation";
import { orderItemAction } from "../../redux/order";
React.state = {
  cleanFreq: ["Hàng ngày", "Hàng tuần", "Hàng tháng"],
  payMethod: ["PayPal", "Tiền mặt"],
  timePicker: ["Sáng", "Chiều", "Tối"],
};

const TotalSanitation = () => {
  const totalAmount = useSelector((state) => state.order.totalAmount);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [selectedDate, setselectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState("Sáng");
  const [selectedPayment, setSelectedPayment] = useState("Tiền mặt");
  const [detail, setDetail] = useState(null);
  const data = useLoaderData();
  const TOTAL_SANITATION = data.filter((item) => {
    return item.name === "Tổng vệ sinh";
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
          height: "auto",
        }}
      >
        <Title
          title="TỔNG VỆ SINH"
          color="white"
          fontSize="35px"
          fontWeight="1000"
          padding="5% 0 0  0"
        />
        <div className="hh-content">
          <div className="row gy-4 pt-5 d-flex">
            {TOTAL_SANITATION.map((item) => (
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
                  {item.type}
                  <br />({item.detail}/{item.unit})
                </button>
              </div>
            ))}

            <div className="row gy-5 mt-2 d-flex hh-function">
              <div className="col-md-12 d-flex f-content">
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

export default TotalSanitation;

export async function loader() {
  const res = await fetch("https://swp391-production.up.railway.app/services");
  if (!res.ok) {
    throw json({ message: "can not load item" }, { status: 500 });
  } else {
    const data = await res.json();
    return data;
  }
}
