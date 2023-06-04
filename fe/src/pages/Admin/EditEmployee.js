import React from "react";
import Card from "../../UI/Card";
import "./EditCus.css";
import Title from "../../components/Title";
import { useLoaderData } from "react-router-dom";
const EditEmployee = () => {
  const data = useLoaderData();

  return (
    <>
      <div className="bg user-navbar" />
      <Title
        title="NHÂN VIÊN"
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
                <th scope="col">Số điện thoại</th>
                <th scope="col">Công việc</th>
                <th scope="col" style={{ opacity: 0 }}>
                  Chỉnh sửa
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((employee) => (
                <tr key={employee.id}>
                  <th scope="row">{employee.id}</th>
                  <td>{employee.employeeInfo.name}</td>
                  <td>{employee.employeeInfo.email}</td>
                  <td>{employee.employeeInfo.phone}</td>
                  <td>{employee.workType}</td>
                  <td className="d-flex justify-content-around">

                    <div className="item-icon">
                      <img src="../assets/images/iconTrash.svg" />
                    </div>
                    <div className="item-icon">
                      <img src="../assets/images/edit.png" className="" data-bs-toggle="modal" data-bs-target="#staticBackdrop" />
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
                                        <h6 class="mb-2 text-primary">Thông tin nhân viên</h6>
                                      </div>
                                      <div class="col-md-6">
                                        <div class="form-group">
                                          <label for="fullName"> Tên</label>
                                          <input type="text" class="form-control" value="Giao Lang" />
                                        </div>
                                      </div>
                                      <div class="col-md-6">
                                        <div class="form-group">
                                          <label for="eMail">Email</label>
                                          <input type="text" class="form-control" value="employee@gmail.com" />
                                        </div>
                                      </div>
                                      <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div class="form-group">
                                          <label for="phone">Số điện thoại</label>
                                          <input type="text" class="form-control" id="phone" value="23456789JQK" />
                                        </div>
                                      </div>
                                      <div class="col-md-6">
                                        <div className="row ">
                                          <div class="form-group col-md-12">
                                            <label for="website">Công việc</label>
                                            <input type="text" class="form-control" id="website" value="Vệ sinh nệm, sofa, thảm" />
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

export default EditEmployee;

export async function employeeLoader() {
  const token = sessionStorage.getItem("jwtToken");
  const res = await fetch(
    "https://swp391-production.up.railway.app/admin/employees",
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
