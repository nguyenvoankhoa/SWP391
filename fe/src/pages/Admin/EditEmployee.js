import React, { useEffect, useState } from "react";
import Card from "../../UI/Card";
import "./EditCus.css";
import Title from "../../components/Title";
import { useLoaderData, useParams } from "react-router-dom";
import EditEmployeeForm from "../../components/Admin/EditEmployeeForm";
import AddEmployeeForm from "../../components/Admin/AddEmployeeForm";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
const EditEmployee = () => {
  const data = useLoaderData();
  const [employee, setEmployee] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const param = useParams();
  const [workType, setWorkType] = useState("");

  useEffect(() => {
    let array = data.filter(
      (employee) => employee.workType === param.serviceId
    );
    setFilteredData(array);
    setWorkType(param.serviceId);
  }, [param]);

  if (filteredData.length === 0 && data.length !== 0) {
    setFilteredData(data);
  }

  const editEmployeeHandler = (employee) => {
    setEmployee(employee);
  };
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const column = [
    { id: "no", label: "STT", minWidth: 170 },
    { id: "name", label: "Họ tên", minWidth: 170 },
    { id: "email", label: "Email", minWidth: 170 },
    { id: "phone", label: "Số điện thoại", minWidth: 170 },
    { id: "job", label: "Công việc", minWidth: 170 },
    { id: "edit", label: "Chỉnh sửa", minWidth: 170 },
    { id: "delete", label: "Xóa", minWidth: 170 },
  ];
  return (
    <>
      <Title
        title="NHÂN VIÊN"
        color="#397F77"
        fontSize="35px"
        fontWeight="700"
        padding="2% 0 0 0"
      />

      <div className="row justify-content-center">
        <div className="col-10 ">
          <div className="d-flex flex-row-reverse">
            {/* <button
              type="button"
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#AddModal"
            >
              Thêm Nhân Viên
            </button> */}
             <img src="/assets/images/add-person.svg" alt=""
             style={{width: "4%"}}
             data-bs-toggle="modal"
             data-bs-target="#AddModal"
             />
            <AddEmployeeForm workType={workType} />
          </div>

          {/* <Card>
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
                              src="/assets/images/trash.svg"
                              alt="#"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal"
                            />
                          </div>
                          <div
                            className="modal fade"
                            id="exampleModal"
                            tabIndex="-1"
                            aria-labelledby="exampleModalLabel"
                            aria-hidden="true"
                          >
                            <div className="modal-dialog">
                              <div className="modal-content">
                                <div className="modal-header">
                                  <h1
                                    className="modal-title fs-5"
                                    id="exampleModalLabel"
                                  >
                                    Xoá nhân viên
                                  </h1>
                                  <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                  ></button>
                                </div>
                                <div className="modal-body">
                                  Bạn có chắc đây là điều đúng đắn
                                </div>
                                <div className="modal-footer">
                                  <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-bs-dismiss="modal"
                                  >
                                    không
                                  </button>
                                  <button
                                    type="button"
                                    className="btn btn-primary"
                                  >
                                    Có
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="item-icon">
                            <img
                              src="/assets/images/pencil.svg"
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
          </Card> */}
          <Paper
            className="container"
            sx={{
              marginTop: 1,
              width: "100%",
              overflow: "hidden",
              justifyContent: "center",
              display: "flex-end",
            }}
          >
            <Table>
              <TableHead>
                <TableRow>
                  {column.map((column) => (
                    <TableCell key={column.id} align="center">
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredData.map((employee) => (
                  <TableRow
                    key={employee.id}
                    hover
                    role="checkbox"
                    tabIndex={-1}
                  >
                    <TableCell align="left" style={{ paddingLeft: "3%" }}>
                      {employee.id}
                    </TableCell>
                    <TableCell align="left" style={{ paddingLeft: "3%" }}>
                      {employee.employeeInfo.name}
                    </TableCell>
                    <TableCell align="left" style={{ paddingLeft: "5%" }}>
                      {employee.employeeInfo.email}
                    </TableCell>
                    <TableCell align="left" style={{ paddingLeft: "4%" }}>
                      {employee.employeeInfo.phone}
                    </TableCell>
                    <TableCell align="left" style={{ paddingLeft: "5%" }}>
                      {employee.workType}
                    </TableCell>
                    <TableCell align="left">
                      <div className="col-md-12 offset-md-5" style={{ display: "flex" }}>
                        <img
                          src="/assets/images/pencil.svg"
                          alt="Pencil"
                          style={{ width: "20%" }}
                          data-bs-toggle="modal"
                          data-bs-target="#staticBackdrop"
                          onClick={() => editEmployeeHandler(employee)}
                        />
                      </div>
                    </TableCell>
                    <TableCell align="left" style={{padding:0}}>
                      <div className="col-md-12 offset-md-4" style={{ display: "flex" }}>
                      <img
                          src="/assets/images/trash.svg"
                          alt="Trash"
                          style={{ width: "25%", justifyContent: "space-around"}}
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                        />
                      </div>
                      <div
                            className="modal fade"
                            id="exampleModal"
                            tabIndex="-1"
                            aria-labelledby="exampleModalLabel"
                            aria-hidden="true"
                          >
                            <div className="modal-dialog">
                              <div className="modal-content">
                                <div className="modal-header">
                                  <h1
                                    className="modal-title fs-5"
                                    id="exampleModalLabel"
                                  >
                                    Xoá nhân viên
                                  </h1>
                                  <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                  ></button>
                                </div>
                                <div className="modal-body">
                                 Bạn có chắc chắn muốn xóa? Không thể hoàn tác sau khi thực hiện thao tác này.
                                </div>
                                <div className="modal-footer">
                                  <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-bs-dismiss="modal"
                                  >
                                    Hủy 
                                  </button>
                                  <button
                                    type="button"
                                    className="btn btn-primary"
                                  >
                                    Đồng ý 
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <TablePagination
              rowsPerPageOptions={[10, 15]}
              component="div"
              count={filteredData.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              classes={{
                selectLabel: "custom-select-label",
                displayedRows: "custom-displayed-rows",
              }}
            />
          </Paper>
        </div>
      </div>

      <EditEmployeeForm employee={employee} />
    </>
  );
};

export default EditEmployee;

export async function employeeLoader() {
  const token = sessionStorage.getItem("jwtToken");
  const apiUrl = process.env.REACT_APP_API_URL;
  const res = await fetch(apiUrl + "admin/employees", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  if (!res.ok) {
    throw new Error("error");
  } else {
    const data = await res.json();
    return data;
  }
}
