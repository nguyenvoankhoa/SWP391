import React, { useEffect, useState } from "react";
import Card from "../../UI/Card";
import "./EditCus.css";
import Title from "../../components/Title";
import { useLoaderData, useParams } from "react-router-dom";
import EditEmployeeForm from "../../components/Admin/EditEmployeeForm";
import AddEmployeeForm from "../../components/Admin/AddEmployeeForm";
const EditEmployee = () => {
  const data = useLoaderData();
  const [employee, setEmployee] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const param = useParams();

  useEffect(() => {
    setFilteredData(
      data.filter((employee) => employee.workType === param.serviceId)
    );
  }, [param]);

  {
    if (filteredData.length == 0) {
      setFilteredData(data);
    }
  }

  const editEmployeeHandler = (employee) => {
    setEmployee(employee);
  };

  console.log(data);
  console.log(filteredData);
  console.log(param);

  return (
    <>
      <Title
        title="NHÂN VIÊN"
        color="black"
        fontSize="35px"
        fontWeight="700"
        padding="2% 0 0 0"
      />

      <div className="row justify-content-center">
        <div className="col-10 ">
          <div className="d-flex flex-row-reverse">
            <button
              type="button"
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#AddModal"
            >
              Thêm Nhân Viên
            </button>
            <AddEmployeeForm />
          </div>

          <Card>
            <div className="table-responsive table-wrapper-scroll-y my-custom-scrollbar">
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
                  {filteredData.map((employee) => (
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
                              src="/assets/images/iconTrash.svg"
                              alt="#"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal"
                            />
                          </div>
                          <div
                            class="modal fade"
                            id="exampleModal"
                            tabindex="-1"
                            aria-labelledby="exampleModalLabel"
                            aria-hidden="true"
                          >
                            <div class="modal-dialog">
                              <div class="modal-content">
                                <div class="modal-header">
                                  <h1
                                    class="modal-title fs-5"
                                    id="exampleModalLabel"
                                  >
                                    Xoá nhân viên
                                  </h1>
                                  <button
                                    type="button"
                                    class="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                  ></button>
                                </div>
                                <div class="modal-body">
                                  Bạn có chắc đây là điều đúng đắn
                                </div>
                                <div class="modal-footer">
                                  <button
                                    type="button"
                                    class="btn btn-secondary"
                                    data-bs-dismiss="modal"
                                  >
                                    không
                                  </button>
                                  <button type="button" class="btn btn-primary">
                                    Có
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="item-icon">
                            <img
                              src="/assets/images/edit.png"
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
