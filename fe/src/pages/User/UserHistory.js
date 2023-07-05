import React, { useState } from "react";
import "./UserHistory.css";
import { useLoaderData, useNavigate } from "react-router";
import Title from "../../components/Title";
import Rating from "@mui/material/Rating";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
//edit table user history
const UserHistory = (props) => {
  const data = useLoaderData();
  const nav = useNavigate();
  const [star, setStar] = useState();
  const handleRateEmployee = async (id) => {
    const rateRequest = {
      billId: id,
      rateValue: star,
    };
    const token = sessionStorage.getItem("jwtToken");
    const apiUrl = process.env.REACT_APP_API_URL;
    const res = await fetch(apiUrl + "customer/rate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(rateRequest),
    });
    if (!res.ok) {
      throw new Error("error");
    }
    nav("/user/history");
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
    { id: "service", label: "Dịch vụ", minWidth: 170 },
    { id: "type", label: "Loại", minWidth: 170 },
    { id: "date", label: "Ngày", minWidth: 170 },
    { id: "staff", label: "Nhân viên", minWidth: 170 },
    { id: "transaction", label: "Giao dịch", minWidth: 170 },
    { id: "total", label: "Tổng cộng", minWidth: 170 },
    { id: "rate", label: "Đánh giá", minWidth: 170 },
  ];

  return (
    <>
      <Title
        title="LỊCH SỬ"
        color="#397F77"
        fontSize="35px"
        fontWeight="1000"
        padding="1% 0 0  0"
      />
      {data.length === 0 && <p className="text-center">Chưa có thông tin</p>}
      {data.length > 0 && (
        <Paper
          className="container"
          sx={{
            marginTop: 3,
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
              {data.map((service) => (
                <TableRow key={service.id} hover role="checkbox" tabIndex={-1}>
                  <TableCell align="left">{service.business.name}</TableCell>
                  <TableCell align="left">{service.business.type}</TableCell>
                  <TableCell align="left">
                    {service.day}, {service.date}/{service.month}
                  </TableCell>
                  <TableCell align="left">
                    {service.employee ? (
                      <td>{service.employee.name}</td>
                    ) : (
                      <td>Đang chờ xử lý</td>
                    )}
                  </TableCell>
                  <TableCell align="left">{service.payment}</TableCell>
                  <TableCell align="left">
                    {service.total.toLocaleString()} VNĐ
                  </TableCell>
                  <TableCell align="left">
                    {service.rateValue === 0 ? (
                      <>
                        <Rating
                          name="size-small"
                          defaultValue={0}
                          value={service.rateValue}
                          onChange={(event) =>
                            setStar(Number(event.target.value))
                          }
                          onClick={() => handleRateEmployee(service.id)}
                          size="small"
                        />
                      </>
                    ) : (
                      <Rating
                        disabled
                        name="rate-employee"
                        value={service.rateValue}
                        size="small"
                        max={5}
                      />
                    )}
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
      )}
    </>
  );
};

export default UserHistory;
export async function historyLoader() {
  const user = JSON.parse(sessionStorage.getItem("user"));
  const id = {
    id: user.id,
  };
  const token = sessionStorage.getItem("jwtToken");
  const apiUrl = process.env.REACT_APP_API_URL;
  const res = await fetch(apiUrl + "customer/history", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(id),
  });
  if (!res.ok) {
    throw new Error("error");
  } else {
    const data = await res.json();
    return data;
  }
}
