import React, { useState } from "react";
import Card from "../../UI/Card";
import "./EditCus.css";
import Title from "../../components/Title";
import { useLoaderData } from "react-router-dom";
import EditEmployeeForm from "../../components/Admin/EditEmployeeForm";
import AddEmployeeForm from "../../components/Admin/AddEmployeeForm";
const EditEmployee = () => {
  const data = useLoaderData();
  const [employee, setEmployee] = useState([]);
  const editEmployeeHandler = (employee) => {
    setEmployee(employee);
  };
  return (
    <>
      <div className="mb-5" />
      <Title title="NHÂN VIÊN" color="white" fontSize="35px" fontWeight="700" />

      <div className="row justify-content-center">
        <div className="col-10 ">
          <div className="d-flex flex-row-reverse">

            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
              Thêm Nhân Viên
            </button>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Thêm Nhân Viên</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body row container d-flex jutify-content-center ">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="fullName">Tên</label>
                        <input
                          type="text"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="eMail">Email</label>
                        <input
                          type="text"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="password">
                          Password
                        </label>
                        <input
                          type="password"
                          className="form-control"
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
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="row">
                        <div className="form-group col-md-12">
                          <label htmlFor="workType">Công việc</label>
                          <select
                            className="form-control"
                            id="workType"
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
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Card>
            <div class="table-responsive table-wrapper-scroll-y my-custom-scrollbar">
              <table className="table table-bordered table-striped">
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
                      <td>
                        <div className="d-flex justify-content-around">
                          <div className="item-icon">
                            <img
                              src="../assets/images/iconTrash.svg"
                              alt="#"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal"
                            />
                          </div>
                          <div className="item-icon">
                            <img
                              src="../assets/images/edit.png"
                              alt="#"
                              data-bs-toggle="modal"
                              data-bs-target="#staticBackdrop"
                              onClick={() => editEmployeeHandler(employee)}
                            />
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </div>
      <AddEmployeeForm />
      <EditEmployeeForm employee={employee} />
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
