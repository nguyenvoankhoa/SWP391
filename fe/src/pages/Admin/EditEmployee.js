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
                  <td>{employee.name}</td>
                  <td>{employee.email}</td>
                  <td>{employee.phone}</td>
                  <td>{employee.workType}</td>
                  <td className="d-flex justify-content-around">
                    <div className="item-icon">
                      <img
                        src="/assets/images/iconTrash.svg"
                        alt="img"
                        style={{
                          width: "22px",
                        }}
                      />
                    </div>
                    <div>
                      <img
                        src="/assets/images/edit.png"
                        alt="img"
                        style={{
                          width: "20px",
                        }}
                      />
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
