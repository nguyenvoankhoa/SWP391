import React, { useState } from "react";
import "./HourlyHelp.css";
import { json, useLoaderData, useNavigate } from "react-router-dom";
import Title from "../../components/Title";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from "react-redux";
import PaymentPicker from "../../components/User/PaymentPicker";
import { Autocomplete, Divider, TextField } from "@mui/material";
import { orderItemAction } from "../../redux/order";
import {
  DatePicker,
  TimePicker,
  LocalizationProvider,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import OrderSumation from "./OrderSumation";

React.state = {
  cleanFreq: ["Hàng tuần", "Hàng tháng", "Một lần"],
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
  const [selectedService, setSelectedService] = useState("");
  const [selectedFreq, setSelectedFreq] = useState("");
  const [detail, setDetail] = useState(null);
  const data = useLoaderData();
  const HOURLY_HELP = data.filter((item) => {
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
  const listOFService = [];
  {
    HOURLY_HELP.map((item) =>
      listOFService.push(`${item.type}(${item.detail}/${item.unit})`)
    );
  }
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
  const serviceHandler = (event, service) => {
    setSelectedService(service);
  }
  const freqHandler = (event, frequence) => {
    setSelectedFreq(frequence);
  }
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="bg user-navbar" />
      <div
        className="container"
        style={{
          height: "auto",
          marginLeft: "3vw",
        }}
      >
        <Title
          title="TỔNG VỆ SINH"
          color="black"
          fontSize="35px"
          fontWeight="1000"
          padding="1% 0 1% 0"
        />
        <div className="hh-content row">
          <div className="hh-services col-md-7 flex-column">
            <h5 className="text-center">Tùy chọn dịch vụ của bạn</h5>
            <div className="col-md-12 row services mt-3">
              <div className="col-md-6">
                <Autocomplete
                  value={selectedService}
                  onChange={serviceHandler}
                  disablePortal
                  id="combo-box-demo"
                  options={listOFService}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Chọn loại dịch vụ"
                      onChange={() => addDetailHandler({})}
                    />
                  )}
                />
              </div>
              <div className="col-md-6">
                <Autocomplete
                  value={selectedFreq}
                  onChange={freqHandler}
                  disablePortal
                  id="combo-box-demo"
                  options={React.state.cleanFreq}
                  sx={{ width: 400 }}
                  renderInput={(params) => (
                    <TextField {...params} label="Chọn loại vệ sinh" />
                  )}
                />
              </div>
            </div>
            <div className="date-time col-md-12 row mt-3">
              <div className="col-md-6">
                <p>Chọn ngày</p>
                <DatePicker
                  onChange={(date) => addDateHandler(date)}
                  disablePast="true"
                  format="DD/MM/YYYY"
                />
              </div>
              <div className="col-md-6">
                <p>Chọn giờ</p>
                <TimePicker
                  onChange={(date) => addTimeHandler(date)}
                  ampm={false}
                  format="hh:mm"
                />
              </div>
            </div>
            <Divider sx={{ borderBottomWidth: 1, backgroundColor: "black" }} />
            <div className="row d-flex mt-3">
              <div className="col-md-6 d-flex row location">
                <p className="text-center">Thông tin liên lạc</p>
                <TextField
                  className="col-md-11"
                  variant="outlined"
                  label="Số tòa"
                  defaultValue="S1.06"
                  margin="normal"
                  aria-readonly
                // onChange
                />
                <TextField
                  className="col-md-11"
                  variant="outlined"
                  label="Số phòng"
                  defaultValue="1412"
                  margin="normal"
                  aria-readonly
                // onChange
                />
                <TextField
                  className="col-md-11"
                  variant="outlined"
                  label="Số điện thoại"
                  defaultValue="0977545450"
                  margin="normal"
                  aria-readonly
                // onChange
                />
              </div>
              <div className="col-md-6 row payment">
                <p className="text-center">Phương thức thanh toán</p>
                <PaymentPicker onAddPayment={paymentHandler} />
              </div>
            </div>
            <div className="col-md-12 mt-4" id="finish">
              <button className="finish-btn">HOÀN THÀNH ĐƠN HÀNG</button>
            </div>
          </div>
          <OrderSumation />
        </div>
      </div>
    </LocalizationProvider>
  );
};

// var buttonContainer = document.getElementsByClassName("hh-submit");
// var activeButton = buttonContainer.getElementsByClassName("hh-payment");
// for (var i = 0; i < activeButton.length; i++) {
//   activeButton[i].getElementsById("payment").addEventListener("click", function () {
//     var current = document.getElementsByClassName("active");
//     current[0].className = current[0].className.replace(" active", "");
//     this.className += " active";
//   })
// };

export default HourlyHelp;

export async function loader() {
  const res = await fetch("https://swp391-production.up.railway.app/services");
  if (!res.ok) {
    throw json({ message: "can not load item" }, { status: 500 });
  } else {
    const data = await res.json();
    return data;
  }
}
