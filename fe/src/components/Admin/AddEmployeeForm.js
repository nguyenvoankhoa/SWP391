import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddEmployeeForm = (props) => {
  const nav = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
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
  const handleAddEmployee = async () => {
    let employee = {
      name: name,
      email: email,
      password: password,
      phone: phone,
      workType: props.workType,
    };
    const token = sessionStorage.getItem("jwtToken");
    const res = await fetch(
      "https://swp391-production.up.railway.app/admin/create-employee",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(employee),
      }
    );
    if (!res.ok) {
      throw new Error("error");
    }
    setName("");
    setPhone("");
    setEmail("");
    setPassword("");
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
