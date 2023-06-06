import React from "react";

const EmployeeAssign = (props) => {
  console.log(props.business);
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
          <div className="modal-header text-center">
            <h1 className="modal-title fs-5" id="staticBackdropLabel">
              Danh sách nhân viên
            </h1>

            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
            <table className="table table-striped table-bordered">
              <thead>
                <tr>
                  <th scope="col">STT</th>
                  <th scope="col">Tên nhân viên</th>
                  <th scope="col">Công việc</th>
                  <th scope="col">Trạng thái</th>
                  <th scope="col">Chọn</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>An Khoa</td>
                  <td>{props.business.name}</td>
                  <td>Đang làm</td>
                  <td />
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Thanh Phiền</td>
                  <td>{props.business.name}</td>
                  <td>Rảnh</td>
                  <td>
                    <div>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue
                        id="flexCheckDefault"
                      />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
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

export default EmployeeAssign;
