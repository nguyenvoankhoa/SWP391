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
  const AddEmployeeHandler = (employee) => {
    setEmployee(employee);
  };
  return (
    <>
      <div className="mb-5" />
      <Title title="NHÂN VIÊN" color="white" fontSize="35px" fontWeight="700" />

      <div className="row justify-content-center">
        <div className="col-10 ">
          <div className="d-flex flex-row-reverse">
            <button
              className="d-flex justify-content-end"
              type="button"
              class="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Thêm Nhân Viên
            </button>
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
