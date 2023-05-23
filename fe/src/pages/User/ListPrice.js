import React from "react";

const ListPrice = () => {
  return (
    <>
      <div class="container" style={{ height: "80vh" }}>
        <div class="row justify-content-center align-items-center">
          <div class="card info" style={{ borderRadius: ".5rem" }}>
            <div class="row g-0">
              <div
                class="col-md-4 gradient-custom text-center text-white"
                style={{
                  borderTopLeftRadius: ".5rem",
                  borderBottomLeftRadius: ".5rem",
                }}
              >
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                  alt="Avatar"
                  class="img-fluid my-5"
                  style={{ width: "80px" }}
                />
                <h5>Hoàng Anh</h5>
                <i class="far fa-edit mb-5"></i>
              </div>
              <div class="col-md-8">
                <div class="card-body p-4">
                  <h6>Thông tin</h6>
                  <hr class="mt-0 mb-4" />
                  <div class="row pt-1">
                    <div class="col-lg-6 col-sm-12 mb-lg-3">
                      <h6>Email</h6>
                      <p class="text-muted text-center">
                        nguyenvoankhoa@example.com
                      </p>
                    </div>
                    <div class="col-lg-6 col-sm-12 mb-lg-3">
                      <h6>Điện thoại</h6>
                      <p class="text-muted text-center">123 456 789</p>
                    </div>
                  </div>
                  <h6>Địa chỉ</h6>
                  <hr class="mt-0 mb-4" />
                  <div class="row pt-1">
                    <div class="col-lg-6 col-sm-12 mb-lg-3">
                      <h6>Số tòa</h6>
                      <p class="text-muted text-center">S102</p>
                    </div>
                    <div class="col-lg-6 col-sm-12 mb-lg-3">
                      <h6>Số phòng</h6>
                      <p class="text-muted text-center">11</p>
                    </div>
                  </div>
                  <div class="d-flex justify-content-center">
                    <button>Chỉnh sửa thông tin</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListPrice;
