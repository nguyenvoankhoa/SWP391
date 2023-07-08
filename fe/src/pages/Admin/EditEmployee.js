import React, { useEffect, useState } from "react";
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
  const [departs, setDeparts] = useState([]);
  useEffect(() => {
    const departmentLoader = async () => {
      const apiUrl = process.env.REACT_APP_API_URL;
      const res = await fetch(apiUrl + "departments");
      const data = await res.json();
      return data;
    };
    const loadDepartments = async () => {
      const result = await departmentLoader();
      const DEPARTMENT = result.map((e) => ({
        departmentId: e.departmentId, // Use departmentId instead of value
        label: e.departmentName,
      }));
      setDeparts(DEPARTMENT);
    };

    loadDepartments();
  }, []);

  const data = useLoaderData();
  const [employee, setEmployee] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  console.log('employee data: ', filteredData)
  const param = useParams();
  const [workType, setWorkType] = useState("");
  console.log(param);
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
    { id: "building", label: "Số toà", minWidth: 170 },
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
      />

      <div className="row justify-content-center">
        <div className="col-10 ">
          <div className="d-flex flex-row-reverse">
            <img
              src="/assets/images/add-person.svg"
              alt=""
              style={{ width: "4%" }}
              data-bs-toggle="modal"
              data-bs-target="#AddModal"
            />
            <AddEmployeeForm workType={workType} />
          </div>
          <Paper
            className="container"
            sx={{
              marginTop: 1,
              width: "100%",
              overflow: "hidden",
            }}
          >
            <Table>
              <TableHead>
                <TableRow>
                  {column.map((column) => (
                    <TableCell key={column.id} align="left">
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
                    <TableCell align="left">{employee.id}</TableCell>
                    <TableCell align="left">
                      {employee.employeeInfo.name}
                    </TableCell>
                    <TableCell align="left">
                      {employee.employeeInfo.email}
                    </TableCell>
                    <TableCell align="left">
                      {employee.employeeInfo.phone}
                    </TableCell>
                    <TableCell align="left">{employee.workType}</TableCell>
                    <TableCell align="left">
                      {departs.find((dept) => dept.departmentId === employee.buildingId)?.label}
                    </TableCell>
                    <TableCell align="left">
                      <div className="col-md-12 offset-md-3">
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
                    <TableCell align="left" style={{ padding: 0 }}>
                      <div className="col-md-12 offset-md-3">
                        <img
                          src="/assets/images/trash.svg"
                          alt="Trash"
                          style={{
                            width: "25%",
                            justifyContent: "space-around",
                          }}
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
                              Bạn có chắc chắn muốn xóa? Không thể hoàn tác sau
                              khi thực hiện thao tác này.
                            </div>
                            <div className="modal-footer">
                              <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                              >
                                Hủy
                              </button>
                              <button type="button" className="btn btn-primary">
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
