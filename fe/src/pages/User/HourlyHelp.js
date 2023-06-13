import React, { useState } from "react";
import "./HourlyHelp.css";
import { Link, useLoaderData } from "react-router-dom";
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
};

const HourlyHelp = () => {
  const dispatch = useDispatch();
  const [selectedDate, setSelectedDate] = useState();
  const [selectedTime, setSelectedTime] = useState();
  const [selectedServiceId, setSelectedServiceId] = useState(null);
  const [selectedFreq, setSelectedFreq] = useState("");
  const data = useLoaderData();
  const HOURLY_HELP = data
    .filter((item) => item.name === "Giúp việc theo giờ")
    .map((item) => ({
      id: item.serviceId,
      type: item.detail + "/" + item.type + "(" + item.unit + ")",
      price: item.price,
    }));
  const selectedService = HOURLY_HELP.find(
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

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="bg user-navbar" />
      <div className="container">
        <Title
          title="DỊCH VỤ DỌN DẸP"
          color="white"
          fontSize="35px"
          fontWeight="1000"
          padding="1% 0 1% 0"
        />
        <div className="hh-content row gx-5">
          <div className="hh-services col-md-7 flex-column">
            <h5 className="text-center">Tùy chọn dịch vụ của bạn</h5>
            <div className="col-md-12 row services mt-3">
              <div className="col-md-6 pickers">
                <Autocomplete
                  value={selectedService}
                  onChange={(event, service) =>
                    setSelectedServiceId(service?.id || null)
                  }
                  disablePortal
                  id="combo-box-demo"
                  options={HOURLY_HELP}
                  getOptionLabel={(option) => option.type}
                  renderInput={(params) => (
                    <TextField {...params} label="Chọn loại dịch vụ" />
                  )}
                />
              </div>
              <div className="col-md-6 pickers">
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
              <div className="col-md-6 pickers">
                <p>Chọn ngày</p>
                <DatePicker
                  value={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                  disablePast={true}
                  format="DD/MM/YYYY"
                />
              </div>
              <div className="col-md-6 pickers">
                <p>Chọn giờ</p>
                <TimePicker
                  disablePast
                  value={selectedTime}
                  onChange={(time) => setSelectedTime(time)}
                  ampm={false}
                  format="hh:mm"
                />
              </div>
            </div>
            <Divider sx={{ borderBottomWidth: 1, backgroundColor: "black" }} />
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

export default HourlyHelp;

export async function loader() {
  const res = await fetch("https://swp391-production.up.railway.app/services");
  if (!res.ok) {
    throw new Error("error");
  } else {
    const data = await res.json();
    return data;
  }
}
