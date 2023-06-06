import React from "react";

const EditCustomerForm = (props) => {
  return (
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
                      value={
                        props.customer.length === 0
                          ? ""
                          : props.customer.customerInfo.name
                      }
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
                        props.customer.length === 0
                          ? ""
                          : props.customer.customerInfo.email
                      }
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
                      value={
                        props.customer.length === 0
                          ? ""
                          : props.customer.customerInfo.phone
                      }
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
                        value={
                          props.customer.length === 0
                            ? ""
                            : props.customer.departmentNumber
                        }
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="website">Số Phòng</label>
                      <input
                        type="text"
                        className="form-control"
                        id="website"
                        value={
                          props.customer.length === 0
                            ? ""
                            : props.customer.roomNumber
                        }
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
  );
};

export default EditCustomerForm;
