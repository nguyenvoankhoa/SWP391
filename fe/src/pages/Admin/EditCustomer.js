import React, { useState } from "react";
import Card from "../../UI/Card";
import "./EditCus.css";
import Title from "../../components/Title";
import { useLoaderData } from "react-router-dom";
import EditCustomerForm from "../../components/Admin/EditCustomerForm";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
const EditCustomer = (props) => {
  const data = useLoaderData();
  const [customer, setCustomer] = useState([]);
  const editCustomerHandler = (customer) => {
    setCustomer(customer);
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
    { id: "block", label: "Tòa", minWidth: 170 },
    { id: "room", label: "Mã căn", minWidth: 170 },
    { id: "phone", label: "Số điện thoại", minWidth: 170 },
  ];

  return (
    <>
      <Title
        title="KHÁCH HÀNG"
        color="#397F77"
        fontSize="35px"
        fontWeight="700"
        padding="2% 0 1% 0"
      />
      <Paper
        className="container"
        sx={{
          marginTop: 5,
          width: "90%",
          overflow: "hidden",
          justifyContent: "center",
          display: "flex-end",
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
            {data.map((customer) => (
              <TableRow key={customer.id} hover role="checkbox" tabIndex={-1}>
                <TableCell align="left">
                  {customer.id}
                </TableCell>
                <TableCell align="left">
                  {customer.customerInfo.name}
                </TableCell>
                <TableCell align="left">
                  {customer.customerInfo.email}
                </TableCell>
                <TableCell align="left">
                  {customer.departmentNumber}
                </TableCell>
                <TableCell align="left">{customer.roomNumber}</TableCell>
                <TableCell align="left">
                  {customer.customerInfo.phone}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[10, 15]}
          component="div"
          count={data.length}
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
      <EditCustomerForm customer={customer} />
    </>
  );
};

export default EditCustomer;
export async function customerLoader() {
  const token = sessionStorage.getItem("jwtToken");
  const apiUrl = process.env.REACT_APP_API_URL;
  const res = await fetch(apiUrl + "admin/customers", {
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
