import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import Title from "../../components/Title";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Button
} from "@mui/material";
const EmployeePage = () => {
  const data = useLoaderData();
  console.log(data);
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
    { id: "job", label: "Công việc", minWidth: 170 },
    { id: "type", label: "Loại", minWidth: 170 },
    { id: "time", label: "Thời gian", minWidth: 170 },
    { id: "phone", label: "Số điện thoại", minWidth: 170 },
    { id: "block", label: "Tòa", minWidth: 170 },
    { id: "room", label: "Mã căn", minWidth: 170 },
    { id: "transaction", label: "Thanh toán", minWidth: 170 },
    { id: "status", label: "Trạng thái", minWidth: 170 },
    { id: "note", label: "Ghi chú", minWidth: 170 },
    { id: "total", label: "Tổng cộng", minWidth: 170 },
  ];
  const [fullNotes, setFullNotes] = useState({});
  const [showMore, setShowMore] = useState({});

  const toggleShowMore = (id) => {
    setShowMore((prevShowMore) => ({
      ...prevShowMore,
      [id]: !prevShowMore[id],
    }));
  };
  const trimText = (text, maxLength) => {
    if (text.length > maxLength) {
      return `${text.substring(0, maxLength)}`;
    }
    return text;
  };
  useEffect(() => {
    const notesObj = {};
    const showMoreObj = {};
    data.forEach((bill) => {
      notesObj[bill.id] = trimText(bill.note, 60);
      showMoreObj[bill.id] = false;
    });
    setFullNotes(notesObj);
    setShowMore(showMoreObj);
  }, [data]);
  return (
    <>
      <Title
        title="HÔM NAY"
        color="#397F77"
        fontSize="35px"
        fontWeight="700"
        padding="2% 0 0 0"
      />
      <div className="row mt-3">
        <div className="col-md-10 offset-md-1">
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
                    <TableCell key={column.id} align="left">
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((bill) => (
                  <TableRow
                    key={Math.random()}
                    hover
                    role="checkbox"
                    tabIndex={-1}
                  >
                    <TableCell align="left">{bill.workType}</TableCell>
                    <TableCell align="left">{bill.type}</TableCell>
                    <TableCell align="left">{bill.hour}</TableCell>
                    <TableCell align="left">{bill.customerPhone}</TableCell>
                    <TableCell align="left">{bill.buildingNumber}</TableCell>
                    <TableCell align="left">{bill.roomNumber}</TableCell>
                    <TableCell align="left">
                      {bill.payStatus ? (
                        <th>Đã thanh toán</th>
                      ) : (
                        <th>Chưa thanh toán</th>
                      )}
                    </TableCell>
                    <TableCell align="left">
                      {bill.completedStatus ? (
                        <th>Đã xong</th>
                      ) : (
                        <th>Chưa xong</th>
                      )}
                    </TableCell>
                    <TableCell align="left">
                      {showMore[bill.id]
                        ? bill.note
                        : `${fullNotes[bill.id]} ${
                            bill.note.length > 60 ? "..." : ""
                          }`}
                      {bill.note.length > 60 && (
                        <Button onClick={() => toggleShowMore(bill.id)} sx={{fontSize: "12px", paddingLeft: 1}}>
                          {showMore[bill.id] ? " Show Less" : "Show More"}
                        </Button>
                      )}
                    </TableCell>
                    <TableCell align="left">
                      {bill.total.toLocaleString()} VNĐ
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
        </div>
      </div>
    </>
  );
};

export default EmployeePage;
export async function employeePageLoader() {
  const token = sessionStorage.getItem("jwtToken");
  const user = JSON.parse(sessionStorage.getItem("user"));
  const request = {
    id: user.id,
  };
  const apiUrl = process.env.REACT_APP_API_URL;
  const res = await fetch(apiUrl + "employee/info", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(request),
  });
  if (!res.ok) {
    throw new Error("error");
  } else {
    const data = await res.json();
    return data;
  }
}
