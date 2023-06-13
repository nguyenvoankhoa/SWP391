import React, { useState } from "react";
import "./HourlyHelp.css";
import { Link, json, useLoaderData } from "react-router-dom";
import Title from "../../components/Title";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch } from "react-redux";
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

const TotalSanitation = () => {
  const dispatch = useDispatch();
  const [selectedDate, setSelectedDate] = useState();
  const [selectedTime, setSelectedTime] = useState();
  const [selectedServiceId, setSelectedServiceId] = useState("");
  const [selectedFreq, setSelectedFreq] = useState("");
  const [selectedPayment, setSelectedPayment] = useState("Tiền mặt");
  const data = useLoaderData();
  const TOTAL_SANITATION = data
    .filter((item) => item.name === "Tổng vệ sinh")
    .map((item) => ({
      id: item.serviceId,
      type: item.detail + "/" + item.type + "(" + item.unit + ")",
      price: item.price,
    }));
  const selectedService = TOTAL_SANITATION.find(
    (service) => service.id === selectedServiceId
  );

  const addServiceHandler = () => {
    const date = selectedDate.$D;
    const dayParse = new Date(selectedDate.$d);
    const day = dayParse.toLocaleDateString("en-US", { weekday: "long" });
    const month = selectedDate.$M;
    const timeParse = new Date(selectedTime.$d);
    const hour = timeParse.getHours() + ":" + timeParse.getMinutes();
    let frequency;
    if (selectedFreq === "Hàng tuần") {
      frequency = "Weekly";
    } else if (selectedFreq === "Hàng tháng") {
      frequency = "Monthly";
    } else {
      frequency = "Once";
    }
    let service = {
      businessId: selectedService.id,
      date: date,
      month: month + 1,
      day: day,
      hour: hour,
      frequency: frequency,
      quantity: 1,
      price: selectedService.price,
      type: selectedService.type,
    };
    dispatch(orderItemAction.addItem(service));
  };
  const onAddPayment = (props) => {
    console.log(props);
    setSelectedPayment(props);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="bg user-navbar" />
      <div className="container mt-4">
        <Title
          title="TỔNG VỆ SINH"
          color="white"
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
                  onChange={(event, service) =>
                    setSelectedServiceId(service?.id || null)
                  }
                  disablePortal
                  id="combo-box-demo"
                  options={TOTAL_SANITATION}
                  getOptionLabel={(option) => option.type}
                  renderInput={(params) => (
                    <TextField {...params} label="Chọn loại dịch vụ" />
                  )}
                />
              </div>
              <div className="col-md-6">
                <Autocomplete
                  value={selectedFreq === "" ? null : selectedFreq}
                  onChange={(event, freq) => setSelectedFreq(freq)}
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
                <p className="mb-3">Chọn ngày</p>
                <DatePicker
                  value={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                  disablePast={true}
                  format="DD/MM/YYYY"
                />
              </div>
              <div className="col-md-6">
                <p className="mb-3">Chọn giờ</p>
                <TimePicker
                  value={selectedTime}
                  onChange={(time) => setSelectedTime(time)}
                  ampm={false}
                  format="HH:mm"
                />
              </div>
            </div>
            <Divider sx={{ borderBottomWidth: 1, backgroundColor: "black" }} />
            {/* <Confirm onAddPayment={onAddPayment} /> */}
            <button>
              <Link to="..">Quay lai</Link>
            </button>
            <button onClick={addServiceHandler}>Thêm vào đơn hàng</button>
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
