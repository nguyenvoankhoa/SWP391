import React, { useState } from "react";
import Title from "../../components/Title";
import './ElectronicOrder.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link, NavLink } from "react-router-dom";
import './HourlyHelp.css'

React.state = {
  payMethod: ["PayPal", "Tiền mặt"]
}

const ElectronicOrder = () => {
    const [selectedDate, setselectedDate] = useState(new Date());
    const [selectedPayment, setSelectedPayment] = useState("");
  return (
    <>
      <div
        className="bg"
        style={{
          width: "100vw",
          height: "53vh",
          position: "absolute",
          top: "0",
          left: "0",
          backgroundColor: "#397F77",
          zIndex: "-1",
        }}
      />
      <div
          className="container"
          style={{
          paddingLeft: "20vw",
          paddingRight: "0",
          margin: "0",
          height: "100vh",
          marginLeft: "4vw",
        }}       
      >
        <Title
          title="VỆ SINH MÁY LẠNH"
          color="white"
          fontSize="35px"
          fontWeight="700"
          padding="5% 0 0 0"
        />
        <div className="od-content">
            <div className="row gy-4 pt-5 d-flex">
            <div className="col-md-4 date-btn od-option">
                    <label>Chọn ngày</label>
                    <button
                  style={{
                  backgroundColor: "white",
                  boxShadow: "0 3px 3px #4e6e6a57",
                  borderRadius: "5px",
                  width: "250px",
                  border: "solid 1.5px #c4efea6a"
                    }}
                    >
                  <DatePicker
                  className="date-picker"
                  selected={selectedDate}
                  minDate={new Date()}
                  onChange={(date) => setselectedDate(date)}
                  dateFormat="dd/MM/yyyy"
                />
              </button>
            </div>
            <div className="col-md-4 date-btn od-option">
              <label>Chọn giờ</label>
              <button
                style={{
                  backgroundColor: "white",
                  boxShadow: "0 3px 3px #4e6e6a57",
                  borderRadius: "5px",
                  border: "solid 1.5px #c4efea6a",
                  width: "250px",
                }}
              >
                <DatePicker
                  className="date-picker"
                  selected={selectedDate}
                  showTimeSelect
                  minDate={new Date()}
                  onChange={(date) => setselectedDate(date)}
                  dateFormat="HH:mm "
                />
              </button>
            </div>
            <div className="row od-submit">
              {
                React.state.payMethod.map((method) =>
                  <div className="col-md-5 d-flex justify-content-center od-payment">
                    <button onClick={() => setSelectedPayment(method)}>
                      <NavLink>Thanh toán bằng {method}</NavLink>
                    </button>
                  </div>
                )
              }
            </div>
            <div className="col-md-4 pt-2 pb-2 d-flex justify-content-center cont-btn-od">
              <button>
                <Link
                  to="/user/electronic-cleaning"
                  state={{
                    startDate: new Date(),
                    date: selectedDate,
                    payment: selectedPayment,
                  }}
                >Quay lại</Link>
              </button>
            </div>
            <div className="col-md-4 pt-2 pb-2 d-flex justify-content-center back-btn-od">
              <button>
                <Link to="/user/order-sumation">Tiếp tục</Link>
              </button>
              </div>
            
            </div>
        </div>
      </div>
    </>
  )
}

export default ElectronicOrder;