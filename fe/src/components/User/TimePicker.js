import React, { useState } from "react";
import DatePicker from "react-datepicker";
const TimePicker = (props) => {
  const [selectedDate, setselectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState("Sáng");

  const dateChangeHandler = (date) => {
    const timestamp = Date.parse(date);
    const dateObject = new Date(timestamp);
    setselectedDate(Date.parse(dateObject));
    props.onAddDate(dateObject);
  };
  const timeChangeHandler = (time) => {
    setSelectedTime(time);
    props.onAddTime(time);
  };
  return (
    <>
      <div className="col-md-4 date-btn hh-options">
        <label>Chọn ngày</label>
        <div className="selectTime">
          <DatePicker
            className="date-picker"
            selected={selectedDate}
            minDate={new Date()}
            onChange={dateChangeHandler}
            dateFormat="dd/MM/yyyy"
          />
        </div>
      </div>
      <div className="col-md-4 hh-options">
        <label>Chọn giờ</label>
        <div className="col-md-4 manual-service dropdown">
          <button className="selectTime">
            <span>{selectedTime}</span>
            <div className="hh-arrow"></div>
            <div className="manual-dropdown">
              {React.state.timePicker.map((time) => (
                <div
                  key={Math.random()}
                  type="button"
                  className="manual-item"
                  onClick={() => timeChangeHandler(time)}
                >
                  {time}
                </div>
              ))}
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default TimePicker;
