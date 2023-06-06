import React from "react";
import Card from "../../UI/Card";
import "./EditCus.css";
import Title from "../../components/Title";
import { useLoaderData } from "react-router-dom";
const EditCustomer = () => {
  const data = useLoaderData();

  return (
    <>
      <div className="bg user-navbar d-flex" />
      <Title
        title="KHÁCH HÀNG"
        color="white"
        fontSize="35px"
        fontWeight="700"
        padding="2% 0 0 13vw"

      />
      <div className="table-cus table-responsive ">
        <Card>
          <table
            className="table table-bordered table-striped text-center"
            style={{ fontSize: "18px", fontWeight: "400" }}
          >
            <thead>
              <tr>
                <th scope="col">STT</th>
                <th scope="col">Tên</th>
                <th scope="col">Email</th>
                <th scope="col">Số toà</th>
                <th scope="col">Số phòng</th>
                <th scope="col">Số điện thoại</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {data.map((customer) => (
                <tr key={customer.id}>
                  <th scope="row">{customer.id}</th>
                  <td>{customer.customerInfo.name}</td>
                  <td>{customer.customerInfo.email}</td>
                  <td>{customer.departmentNumber}</td>
                  <td>{customer.roomNumber}</td>
                  <td>{customer.customerInfo.phone}</td>
                  <td className="d-flex justify-content-around">
                    <div className="item-icon">
                      <img src="../assets/images/iconTrash.svg" alt="#" data-bs-toggle="modal" data-bs-target="#exampleModal" />
                    </div>
                    <div className="item-icon">
                      <img src="../assets/images/edit.png" alt="#" data-bs-toggle="modal" data-bs-target="#staticBackdrop" />
                    </div>


                    <div class="modal fade " id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                      <div class="modal-dialog find-employ">
                        <div class="modal-content find-employ-item">
                          <div class="modal-header">
                            <h1 class="modal-title fs-5 " id="staticBackdropLabel">Thay đổi thông tin</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <div class="modal-body">
                            <div className="">
                              <div className="">
                                <Card>
                                  <div class="container">


                                    <div class="row">
                                      <div class="">
                                        <h6 class="mb-2 text-primary">Thông tin khách hàng</h6>
                                      </div>
                                      <div class="col-md-6">
                                        <div class="form-group">
                                          <label for="fullName"> Tên</label>
                                          <input type="text" class="form-control" value="An" />
                                        </div>
                                      </div>
                                      <div class="col-md-6">
                                        <div class="form-group">
                                          <label for="eMail">Email</label>
                                          <input type="text" class="form-control" value="andy@gmail.com" />
                                        </div>
                                      </div>
                                      <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div class="form-group">
                                          <label for="phone">Số điện thoại</label>
                                          <input type="text" class="form-control" id="phone" value="23456789JQK" />
                                        </div>
                                      </div>
                                      <div class="col-md-6">
                                        <div className="row d-flex">
                                          <div class="form-group col-md-6">
                                            <label for="website">Số Toà</label>
                                            <input type="text" class="form-control" id="website" value="S202" />
                                          </div>
                                          <div class="form-group col-md-6">
                                            <label for="website">Số Phòng</label>
                                            <input type="text" class="form-control" id="website" value="202" />
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

                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Thông báo</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <div class="modal-body">
                            Mày có chắc là cho nó cút không
                          </div>
                          <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Không</button>
                            <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Có</button>
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
      </div >
    </>
  );
};

export default EditCustomer;
export async function customerLoader() {
  const token = sessionStorage.getItem("jwtToken");
  const res = await fetch(
    "https://swp391-production.up.railway.app/admin/customers",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  if (!res.ok) {
    throw new Error("error");
  } else {
    const data = await res.json();
    return data;
  }
}
