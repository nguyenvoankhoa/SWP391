import React, { useState } from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
} from "@mui/material";

const UserOddShift = (props) => {
  const data = props.list;
  const [value, setValue] = useState(0);
  const [option, setOption] = useState("Ca lẻ");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const column = [
    { id: "service", label: "Dịch vụ", minWidth: 170 },
    { id: "type", label: "Loại", minWidth: 170 },
    { id: "date", label: "Ngày", minWidth: 170 },
    { id: "staff", label: "Nhân viên", minWidth: 170 },
    { id: "transaction", label: "Giao dịch", minWidth: 170 },
    { id: "total", label: "Tổng cộng", minWidth: 170 },
  ];

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  function createData(service, type, date, staff, transaction, total) {
    return { service, type, date, staff, transaction, total };
  }

  const rows = [
    createData(
      "Vệ sinh theo giờ",
      "2 phòng",
      "Saturday, 24 June",
      "Đang chờ xử lý",
      "Tiền mặt",
      "150.000 VNĐ"
    ),
    createData(
      "Tổng vệ sinh",
      "2 phòng",
      "Saturday, 24 June",
      "Đang chờ xử lý",
      "Tiền mặt",
      "150.000 VNĐ"
    ),
    createData(
      "Vệ sinh máy lạnh",
      "2 HP",
      "Saturday, 24 June",
      "Đang chờ xử lý",
      "Tiền mặt",
      "200.000 VNĐ"
    ),
    createData(
      "Vệ sinh sofa, nệm",
      "Nệm",
      "Saturday, 24 June",
      "Đang chờ xử lý",
      "Tiền mặt",
      "150.000 VNĐ"
    ),
    createData(
      "Vệ sinh theo giờ",
      "3 phòng",
      "Saturday, 24 June",
      "Đang chờ xử lý",
      "Tiền mặt",
      "250.000 VNĐ"
    ),
    createData(
      "Tổng vệ sinh",
      "2 phòng",
      "Saturday, 24 June",
      "Đang chờ xử lý",
      "Tiền mặt",
      "150.000 VNĐ"
    ),
    createData(
      "Tổng vệ sinh",
      "2 phòng",
      "Saturday, 24 June",
      "Đang chờ xử lý",
      "Tiền mặt",
      "150.000 VNĐ"
    ),
    createData(
      "Tổng vệ sinh",
      "2 phòng",
      "Saturday, 24 June",
      "Đang chờ xử lý",
      "Tiền mặt",
      "150.000 VNĐ"
    ),
    createData(
      "Tổng vệ sinh",
      "2 phòng",
      "Saturday, 24 June",
      "Đang chờ xử lý",
      "Tiền mặt",
      "150.000 VNĐ"
    ),
    createData(
      "Tổng vệ sinh",
      "2 phòng",
      "Saturday, 24 June",
      "Đang chờ xử lý",
      "Tiền mặt",
      "150.000 VNĐ"
    ),
    createData(
      "Row 11",
      "2 phòng",
      "Saturday, 24 June",
      "Đang chờ xử lý",
      "Tiền mặt",
      "150.000 VNĐ"
    ),
    createData(
      "Tổng vệ sinh",
      "2 phòng",
      "Saturday, 24 June",
      "Đang chờ xử lý",
      "Tiền mặt",
      "150.000 VNĐ"
    ),
    createData(
      "Tổng vệ sinh",
      "2 phòng",
      "Saturday, 24 June",
      "Đang chờ xử lý",
      "Tiền mặt",
      "150.000 VNĐ"
    ),
    createData(
      "Tổng vệ sinh",
      "2 phòng",
      "Saturday, 24 June",
      "Đang chờ xử lý",
      "Tiền mặt",
      "150.000 VNĐ"
    ),
    createData(
      "Tổng vệ sinh",
      "2 phòng",
      "Saturday, 24 June",
      "Đang chờ xử lý",
      "Tiền mặt",
      "150.000 VNĐ"
    ),
    createData(
      "Tổng vệ sinh",
      "2 phòng",
      "Saturday, 24 June",
      "Đang chờ xử lý",
      "Tiền mặt",
      "150.000 VNĐ"
    ),
    createData(
      "Tổng vệ sinh",
      "2 phòng",
      "Saturday, 24 June",
      "Đang chờ xử lý",
      "Tiền mặt",
      "150.000 VNĐ"
    ),
    createData(
      "Tổng vệ sinh",
      "2 phòng",
      "Saturday, 24 June",
      "Đang chờ xử lý",
      "Tiền mặt",
      "150.000 VNĐ"
    ),
    createData(
      "Tổng vệ sinh",
      "2 phòng",
      "Saturday, 24 June",
      "Đang chờ xử lý",
      "Tiền mặt",
      "150.000 VNĐ"
    ),
    createData(
      "Tổng vệ sinh",
      "2 phòng",
      "Saturday, 24 June",
      "Đang chờ xử lý",
      "Tiền mặt",
      "150.000 VNĐ"
    ),
  ];
  return (
    <>
      {/* {data.length === 0 && (
        <div className="text-center">
          <p>Ngôi nhà tươm tất sẽ khiến bạn thoải mái hơn</p>
          <button className="btn btn-success">
            <Link to=".." className="link">
              Đặt lịch ngay
            </Link>
          </button>
        </div>
      )}
      {data.length > 0 && (
        <div className="table-responsive table-wrapper-scroll-y">
          <table
            className="table table-bordered  table-striped text-center"
            style={{ fontSize: "18px", fontWeight: "400" }}
          >
            <thead>
              <tr>
                <th scope="col">Dịch vụ</th>
                <th scope="col">Loại</th>
                <th scope="col">Ngày</th>
                <th scope="col">Nhân viên</th>
                <th scope="col">Giao dịch</th>
                <th scope="col">Tổng cộng</th>
              </tr>
            </thead>
            <tbody>
              {data.map((service) => (
                <tr key={service.id}>
                  <td>{service.business.name}</td>
                  <td>{service.business.type}</td>
                  <td>
                    {service.day}/{service.month}
                  </td>
                  {service.employee ? (
                    <td>{service.employee.name}</td>
                  ) : (
                    <td>Đang chờ xử lý</td>
                  )}
                  <td>{service.payment}</td>

                  <td>{service.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div> */}
        <Paper className="container-fluid"

      >
        <TableContainer sx={{ maxHeight: 440 }}>

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
                {(rowsPerPage > 0
                  ? rows.slice(
                      page * rowsPerPage,
                      page * rowsPerPage + rowsPerPage
                    )
                  : rows
                ).map((row) => (
                  <TableRow key={row.id} hover role="checkbox" tabIndex={-1}>
                    <TableCell align="left" style={{ paddingLeft: "5%" }}>
                      {row.service}
                    </TableCell>
                    <TableCell align="left" style={{ paddingLeft: "3%" }}>
                      {row.type}
                    </TableCell>
                    <TableCell align="center">{row.date}</TableCell>
                    <TableCell align="center">{row.staff}</TableCell>
                    <TableCell align="center">{row.transaction}</TableCell>
                    <TableCell align="center">{row.total}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
        </TableContainer>
        <TablePagination 
          rowsPerPageOptions={[10, 15]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          classes={{
            selectLabel: 'custom-select-label',
            displayedRows: 'custom-displayed-rows'
          }}
        />
      </Paper>
    </>
  );
};

export default UserOddShift;
