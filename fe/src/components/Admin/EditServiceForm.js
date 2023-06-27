import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const EditServiceForm = (props) => {
  const [priceChange, setPrice] = useState("");
  const [detail, setDetail] = useState("");
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const nav = useNavigate();
  useEffect(() => {
    setPrice(props.service.price || "");
    setDetail(props.service.detail || "");
    setName(props.service.name || "");
    setType(props.service.type || "");
  }, [props.service]);
  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };
  const priceHandler = async () => {
    let price = {
      businessId: props.service.serviceId,
      price: priceChange,
    };
    const token = sessionStorage.getItem("jwtToken");
    const apiUrl = process.env.REACT_APP_API_URL;
    const res = await fetch(apiUrl + "admin/update-service", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(price),
    });

    if (!res.ok) {
      throw new Error("Error fetching data");
    }
    nav("/admin/edit-service");
  };
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
                      value={name}
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
                      value={type}
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
                      value={detail}
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
                        value={priceChange}
                        onChange={handlePriceChange}
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
              onClick={priceHandler}
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
