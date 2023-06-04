import React from "react";
import Card from "../../UI/Card";
import "./EditCus.css";
import Title from "../../components/Title";
import { useLoaderData } from "react-router-dom";
const EditService = () => {
  const data = useLoaderData();
  console.log(data.data);
  return (
    <>
      <div className="bg user-navbar" />
      <Title
        title="DỊCH VỤ"
        color="white"
        fontSize="35px"
        fontWeight="700"
        padding="2% 0 0 13vw"
      />
      <div className="table-ser table-responsive ">
        <Card>
          <table
            className="table table-bordered table-striped text-center"
            style={{ fontSize: "18px", fontWeight: "400" }}
          >
            <thead>
              <tr>
                <th scope="col">STT</th>
                <th scope="col">Công việc</th>
                <th scope="col">Loại</th>
                <th scope="col">Chi tiết</th>
                <th scope="col">Giá</th>
                <th scope="col">Chỉnh sửa</th>
              </tr>
            </thead>
            <tbody>
              {data.map((service) => (
                <tr key={service.serviceId}>
                  <th scope="row">{service.serviceId}</th>
                  <td>{service.name}</td>
                  <td>{service.type}</td>
                  <td>{service.detail}</td>
                  <td>{service.price}</td>
                  <td >

                    <div className="item-icon">
                      <img src="../assets/images/edit.png" className="" data-bs-toggle="modal" data-bs-target="#staticBackdrop" />
                    </div>


                    <div class="modal fade " id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                      <div class="modal-dialog find-employ">
                        <div class="modal-content find-employ-item">
                          <div class="modal-header">
                            <h1 class="modal-title fs-5 " id="staticBackdropLabel">Chỉnh sửa dịch vụ</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <div class="modal-body">
                            <div className="">
                              <div className="">
                                <Card>
                                  <div class="container">


                                    <div class="row">
                                      <div class="col-md-6">
                                        <div class="form-group">
                                          <label for="fullName"> Công việc</label>
                                          <input type="text" class="form-control" value="Vệ sinh nệm, sofa, thảm" />
                                        </div>
                                      </div>
                                      <div class="col-md-6">
                                        <div class="form-group">
                                          <label for="eMail">Loại</label>
                                          <input type="text" class="form-control" value="Sofa	" />
                                        </div>
                                      </div>
                                      <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div class="form-group">
                                          <label for="phone">Chi tiết</label>
                                          <input type="text" class="form-control" id="phone" value="23456789JQK" />
                                        </div>
                                      </div>
                                      <div class="col-md-6">
                                        <div className="row ">
                                          <div class="form-group col-md-12">
                                            <label for="website">Giá</label>
                                            <input type="text" class="form-control" id="website" value="360000" />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </Card >
                              </div>
                            </div>
                          </div>
                          <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Huỷ</button>
                            <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Xác nhận</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </div>
    </>
  );
};

export default EditService;
export async function serviceLoader() {
  const res = await fetch("https://swp391-production.up.railway.app/services");
  if (!res.ok) {
    throw new Error("error");
  } else {
    const data = await res.json();
    return data;
  }
}
