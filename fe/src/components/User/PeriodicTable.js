import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const PeriodicTable = (props) => {
  const nav = useNavigate();
  const token = sessionStorage.getItem("jwtToken");
  const cancelFrequencyHandler = async (id) => {
    let cancelRequest = {
      id: id,
    };
    const res = await fetch(
      "https://swp391-production.up.railway.app/customer/cancel-bill",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(cancelRequest),
      }
    );
    console.log(res);

    if (!res.ok) {
      throw new Error("Error fetching data");
    }
    alert("Hủy định kỳ thành công");
    nav("");
  };
  return (
    <div className="col-md-12 ar-list p-0 table-responsive table-wrapper-scroll-y w-100  my-custom-scrollbar">
      <Table>
        <TableHead>
          <TableRow>
            {props.column.map((column) => (
              <TableCell key={column.id} align="left">
                {column.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {props.table.map((row) => (
            <TableRow key={row.id} hover role="checkbox" tabIndex={-1}>
              <TableCell align="left">{row.business.type}</TableCell>
              <TableCell align="left">
                {row.date}/{row.month}/2023
              </TableCell>
              <TableCell align="left">
                {row.employee ? row.employee.name : "Đang chờ xử lý"}
              </TableCell>
              <TableCell align="left">{row.payment}</TableCell>
              <TableCell align="left">{row.total}</TableCell>
              <TableCell align="left">
                <button onClick={() => cancelFrequencyHandler(row.id)}>
                  Hủy
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default PeriodicTable;
