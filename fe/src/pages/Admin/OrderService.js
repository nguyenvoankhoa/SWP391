import Card from "../../UI/Card";
import "./EditCus.css";
import Title from "../../components/Title";
import { useLoaderData, useParams } from "react-router-dom";
import EditOrderForm from "../../components/Admin/EditOrderForm";
import React, { useState, useEffect } from "react";
import ConfirmPayment from "../../components/Admin/ConfirmPayment";
import ConfirmComplete from "../../components/Admin/ConfirmComplete";
import CancelOrder from "../../components/Admin/CancelOrder";
import {
  Button,
  Paper,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";
const OrderService = () => {
  const data = useLoaderData();
  const [workType, setWorkType] = useState("");
  const [billId, setBillId] = useState("");
  const assignEmployee = (type, id) => {
    setWorkType(type);
    setBillId(id);
  };
  const [filteredData, setFilteredData] = useState([]);
  const param = useParams();

  useEffect(() => {
    let array = data.filter((bill) => bill.business.name === param.serviceId);
    setFilteredData(array);
    setWorkType(param.serviceId);
  }, [param]);

  if (filteredData.length === 0 && data.length !== 0) {
    setFilteredData(data);
  }
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
    { id: "name", label: "Công việc", minWidth: 170 },
    { id: "type", label: "Loại", minWidth: 170 },
    { id: "date", label: "Ngày", minWidth: 170 },
    { id: "time", label: "Giờ ", minWidth: 170 },
    { id: "customer", label: "Khách hàng", minWidth: 170 },
    { id: "staff", label: "Nhân viên", minWidth: 170 },
    { id: "phone", label: "Số điện thoại", minWidth: 170 },
    { id: "transaction", label: "Giao dịch", minWidth: 170 },
    { id: "total", label: "Tổng cộng", minWidth: 170 },
    { id: "payment", label: "Thanh toán", minWidth: 170 },
    { id: "status", label: "Trạng thái", minWidth: 170 },
  ];
  return (
    <>
      <Title
        title="ĐƠN HÀNG"
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
                <TableCell key={column.id} align="center">
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData.map((bill) => (
              <TableRow key={bill.id} hover role="checkbox" tabIndex={-1}>
                <TableCell align="left" style={{ paddingLeft: "2%" }}>
                  {bill.id}
                </TableCell>
                <TableCell align="left">{bill.business.name}</TableCell>
                <TableCell align="left">{bill.business.type}</TableCell>
                <TableCell align="left">
                  {bill.day}, {bill.date}/{bill.month}
                </TableCell>
                <TableCell align="left">{bill.hour}</TableCell>
                <TableCell align="left">{bill.customer.name}</TableCell>
                <TableCell align="left">
                  {bill.employee ? (
                    bill.employee.name
                  ) : (
                    <Button
                      data-bs-toggle="modal"
                      data-bs-target="#staticBackdrop"
                      onClick={() =>
                        assignEmployee(bill.business.name, bill.id)
                      }
                    >
                      {" "}
                      Tìm
                    </Button>
                  )}
                </TableCell>
                <TableCell align="left" style={{ padding: 0 }}>
                  {bill.customer.phone}
                </TableCell>
                <TableCell align="left" style={{ paddingLeft: 10 }}>
                  {bill.payment}
                </TableCell>
                <TableCell align="left" style={{ paddingLeft: "2%" }}>
                  {bill.total.toLocaleString()} VNĐ
                </TableCell>
                <TableCell align="center" style={{ padding: 0 }}>
                  {bill.payStatus ? (
                            <img
                            src="/assets/images/complete.svg"
                            alt=""
                            style={{ width: "30%"}}
                          />
                  ) : (
                    <ConfirmPayment id={bill.id} />
                  )}
                </TableCell>
                <TableCell align="left" style={{paddingLeft: "3%"}}>
                  {bill.completeStatus ? (
                    <td>
                      <Button
                        variant="outlined"                
                        sx={{
                          padding: "5px",
                          height: "35px",
                          textAlign: "justify",
                          fontSize: "12px",
                          width: "100%",
                          borderColor: "#397F77",
                          color: "#397F77",
                          "&:hover": {
                            borderColor: "#397F77",
                            color: "#397F77",
                          },
                        }}
                      >
                        Đã hoàn thành
                      </Button>
                    </td>
                  ) : (
                    <td>
                      <div className="d-flex h-100">
                        <ConfirmComplete id={bill.id} />
                        <CancelOrder id={bill.id} />
                      </div>
                    </td>
                  )}
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
      <EditOrderForm workType={workType} billId={billId} />
    </>
  );
};

export default OrderService;

export async function orderLoader() {
  const token = sessionStorage.getItem("jwtToken");
  const apiUrl = process.env.REACT_APP_API_URL;
  const res = await fetch(apiUrl + "admin/orders", {
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
