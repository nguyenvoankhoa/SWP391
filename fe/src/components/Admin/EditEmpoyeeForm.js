import { useState, useEffect } from "react";

const EditEmployeeForm = (props) => {
  const [workType, setWorkType] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  useEffect(() => {
    setWorkType(props.employee.workType || "");
    setName(props.employee.employeeInfo?.name || "");
    setPhone(props.employee.employeeInfo?.phone || "");
  }, [props.employee]);

  const handleWorkTypeChange = (e) => {
    setWorkType(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  return (
    <>
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
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                Thay đổi thông tin
              </h1>
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
                  <div>
                    <h6 className="mb-2 text-primary">Thông tin nhân viên</h6>
                  </div>
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
                        value={
                          props.employee.length === 0
                            ? ""
                            : props.employee.employeeInfo.email
                        }
                        disabled
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="password">
                        Mật khẩu (Bỏ trống để giữ nguyên)
                      </label>
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
                        id="phone"
                        value={phone}
                        onChange={handlePhoneChange}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="row">
                      <div className="form-group col-md-12">
                        <label htmlFor="workType">Công việc</label>
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
              >
                Xác nhận
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Thông báo
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">Xác nhận xóa nhân viên</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Không
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
              >
                Có
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditEmployeeForm;
