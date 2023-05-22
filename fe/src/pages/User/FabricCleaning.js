import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './FabricCleaning.css';
import './DatePicker.css'

const FabricCleaning = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div className="container-fluid fabric-container">
      <nav className="navbar navbar-expand-lg fabric-nav">
        <h1 className="text-center fabric-title">Vệ sinh sofa, nệm, rèm thảm</h1>
      </nav>
      <div className="row gy-5 input">
        <div className="col-md-12">
          <label className="schedule-input">Lịch làm việc</label>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            dateFormat="dd/MM/yyyy"
            className="fabric-schedule mt-3"
            placeholderText="Select a date"
          />
        </div>
      </div>
    </div>
  );
};

export default FabricCleaning;

