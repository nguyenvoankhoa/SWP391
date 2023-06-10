import React, { useState } from "react";
import Card from "../../UI/Card";
import "./EditCus.css";
import Title from "../../components/Title";
import { useLoaderData } from "react-router-dom";
import EditEmployeeForm from "../../components/Admin/EditEmpoyeeForm";
const EditEmployee = () => {
  const data = useLoaderData();
  const [employee, setEmployee] = useState([]);
  const editEmployeeHandler = (employee) => {
    setEmployee(employee);
  };
  console.log(data);
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
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </div>
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
