import React, { useEffect, useState } from "react";

const EditCustomerForm = (props) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [departmentNum, setDepartmentNum] = useState("");
  const [roomNum, setRoomNum] = useState("");
  useEffect(() => {
    setRoomNum(props.customer.roomNumber || "");
    setName(props.customer.customerInfo?.name || "");
    setPhone(props.customer.customerInfo?.phone || "");
    setDepartmentNum(props.customer.departmentNumber || "");
  }, [props.customer]);
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleRoomNumChange = (e) => {
    setRoomNum(e.target.value);
  };
  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };
  const handleDepartmentNumChange = (e) => {
    setDepartmentNum(e.target.value);
  };
  return (
    <>
      <div
        className="modal fade "
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
              <h1 className="modal-title fs-5 " id="staticBackdropLabel">
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
                  <div className>
                    <h6 className="mb-2 text-primary">Thông tin khách hàng</h6>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="fullName"> Tên</label>
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
                        value={props.customer.customerInfo?.email || ""}
                        disabled
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
                    <div className="row d-flex">
                      <div className="form-group col-md-6">
                        <label htmlFor="website">Số Toà</label>
                        <input
                          type="text"
                          className="form-control"
                          id="website"
                          value={departmentNum}
                          onChange={handleDepartmentNumChange}
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <label htmlFor="website">Số Phòng</label>
                        <input
                          type="text"
                          className="form-control"
                          id="website"
                          value={roomNum}
                          onChange={handleRoomNumChange}
                        />
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
            <div className="modal-body">Xác nhận xóa khách hàng</div>
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

export default EditCustomerForm;
