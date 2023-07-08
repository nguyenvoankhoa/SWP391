import React, { useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import {
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";

const AddEmployeeForm = (props) => {
  useEffect(() => {
    const departmentLoader = async () => {
      const apiUrl = process.env.REACT_APP_API_URL;
      const res = await fetch(apiUrl + "departments");
      const data = await res.json();
      return data;
    };
    const loadDepartments = async () => {
      const result = await departmentLoader();
      const DEPARTMENT = result.map((e) => ({
        value: e.departmentId,
        label: e.departmentName,

      }));
      setDeparts(DEPARTMENT);
    };

    loadDepartments();
  }, []);
  const [departs, setDeparts] = useState([]);
  const [rooms, setRooms] = useState([]);
  const nav = useNavigate();
  const data = useLoaderData();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedToa, setSelectedToa] = useState("");
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const departmentHandler = (event) => {
    const selectedDepartment = event.target.value;
    setSelectedToa(selectedDepartment);

  };

  const handleAddEmployee = async () => {
    let employee = {
      name: name,
      email: email,
      password: password,
      phone: phone,
      workType: props.workType,
      buildingId: selectedToa,
    };
    const token = sessionStorage.getItem("jwtToken");
    const apiUrl = process.env.REACT_APP_API_URL;
    const res = await fetch(apiUrl + "admin/create-employee", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(employee),
    });
    if (!res.ok) {
      throw new Error("error");
    }
    setName("");
    setPhone("");
    setEmail("");
    setPassword("");
    setDeparts("");
    nav("/admin/edit-employee");
  };

  return (
    <div
      className="modal fade"
      id="AddModal"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              Thêm nhân viên
            </h1>

            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body row container d-flex justify-content-center">
            <h5>{props.workType}</h5>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="fullName">Tên</label>
                <input
                  type="text"
                  className="form-control"
                  value={name}
                  onChange={handleNameChange}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="eMail">Email</label>
                <input
                  type="text"
                  className="form-control"
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="form-group">
                <label htmlFor="phone">Số điện thoại</label>
                <input
                  type="text"
                  className="form-control"
                  value={phone}
                  onChange={handlePhoneChange}
                />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="form-group">
                <label htmlFor="phone">Số  toà</label>
                <select class="form-select"
                  displayEmpty
                  required
                  onChange={departmentHandler}

                  aria-label="Default select example">

                  {departs.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}


                </select>
              </div>
              {/* <FormControl
                variant="standard"
                sx={{ width: "120px" }}
              >
                <InputLabel
                  id="demo-simple-select-standard-label"
                  sx={{ justifyContent: "left" }}
                >
                  Tòa
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  onChange={departmentHandler}
                  displayEmpty
                  required
                  defaultValue={data.buildingNumber}
                >

                  {departs.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}

                </Select>
              </FormControl> */}
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Hủy
            </button>
            <button
              type="button"
              className="btn btn-primary"
              data-bs-dismiss="modal"
              onClick={handleAddEmployee}
            >
              Xác nhận
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEmployeeForm;
