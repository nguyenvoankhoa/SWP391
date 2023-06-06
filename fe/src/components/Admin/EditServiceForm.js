import React from "react";
const EditServiceForm = (props) => {
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
            <h1 className="modal-title fs-5 " id="staticBackdropLabel">
              Chỉnh sửa dịch vụ
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
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="fullName">Công việc</label>
                    <input
                      type="text"
                      className="form-control"
                      value={props.service.name}
                      disabled
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="eMail">Loại</label>
                    <input
                      type="text"
                      className="form-control"
                      value={props.service.type}
                      disabled
                    />
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="form-group">
                    <label htmlFor="phone">Chi tiết</label>
                    <input
                      type="text"
                      className="form-control"
                      id="phone"
                      value={props.service.detail}
                      disabled
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="row ">
                    <div className="form-group col-md-12">
                      <label htmlFor="website">Giá</label>
                      <input
                        type="text"
                        className="form-control"
                        id="website"
                        value={props.service.price}
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

export default EditServiceForm;
