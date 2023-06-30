import { Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const EditEmployeeForm = (props) => {
  const nav = useNavigate();
  const [workType, setWorkType] = useState(props.employee.workType || "");
  const [name, setName] = useState(props.employee.employeeInfo?.name || "");
  const [phone, setPhone] = useState(props.employee.employeeInfo?.phone || "");
  const [password, setPassword] = useState("");
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleWorkTypeChange = (e) => {
    setWorkType(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };
  useEffect(() => {
    setWorkType(props.employee.workType || "");
    setName(props.employee.employeeInfo?.name || "");
    setPhone(props.employee.employeeInfo?.phone || "");
  }, [props.employee]);
  const saveEmployeeHandler = async () => {
    const employeeInfo = {
      name: name,
      phone: phone,
      password: password,
      workType: workType,
    };
    let id = props.employee.employeeInfo.id;
    const token = sessionStorage.getItem("jwtToken");
    const apiUrl = process.env.REACT_APP_API_URL;
    const res = await fetch(apiUrl + "admin/employees/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(employeeInfo),
    });

    if (!res.ok) {
      throw new Error("Error fetching data");
    }
    nav("/admin/edit-employee");
  };
  return (
    <div
      className="modal fade"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex={-1}
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog find-employ">
        <div className="modal-content find-employ-item">
          <div className="modal-header">
            <Typography
              variant="h4"
              className="modal-title fs-5"
              id="staticBackdropLabel"
              sx={{fontFamily:"Montserrat", fontWeight: "bold", letterSpacing: "0.05rem"}}
            >
              Thay đổi thông tin nhân viên
            </Typography>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="fullName" style={{ fontWeight: "bold", marginBottom: "2%", fontFamily: "Montserrat", letterSpacing: "0.05rem" }}>
                      Họ tên
                    </label>
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
                    <label htmlFor="eMail" style={{ fontWeight: "bold", marginBottom: "2%", fontFamily: "Montserrat", letterSpacing: "0.05rem" }}>
                      Email
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      value={props.employee.employeeInfo?.email || ""}
                      disabled
                    />
                  </div>
                </div>
                {/* <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="password" style={{ fontWeight: "bold" }}>
                      Password (Bo trong de giu nguyen)
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      value={password}
                      onChange={handlePasswordChange}
                    />
                  </div>
                </div> */}
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="form-group" style={{marginTop: "10%"}}>
                    <label htmlFor="phone" style={{ fontWeight: "bold", marginBottom: "2%", fontFamily: "Montserrat", letterSpacing: "0.05rem"}}>
                      Số điện thoại
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="phone"
                      value={phone}
                      onChange={handlePhoneChange}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="row">
                    <div className="form-group col-md-12" style={{marginTop: "9%"}}>
                      <label htmlFor="workType" style={{ fontWeight: "bold", marginBottom: "2%", fontFamily: "Montserrat", letterSpacing: "0.05rem" }}>
                        Công việc
                      </label>
                      <select
                        className="form-control"
                        id="workType"
                        value={workType}
                        onChange={handleWorkTypeChange}
                      >
                        <option value="Vệ sinh nệm, sofa, thảm">
                          Vệ sinh nệm, sofa, thảm
                        </option>
                        <option value="Vệ sinh máy lạnh">
                          Vệ sinh máy lạnh
                        </option>
                        <option value="Giúp việc theo giờ">
                          Giúp việc theo giờ
                        </option>
                        <option value="Tổng vệ sinh">Tổng vệ sinh</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Huỷ
            </button>
            <button
              type="button"
              className="btn btn-primary"
              data-bs-dismiss="modal"
              onClick={saveEmployeeHandler}
            >
              Xác nhận
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditEmployeeForm;
