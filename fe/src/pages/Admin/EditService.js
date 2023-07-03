import React, { useState, useEffect } from "react";
import "./EditCus.css";
import Title from "../../components/Title";
import { useLoaderData, useParams } from "react-router-dom";
import EditServiceForm from "../../components/Admin/EditServiceForm";
import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
const EditService = () => {
  const data = useLoaderData();
  const [service, setService] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const param = useParams();

  useEffect(() => {
    setFilteredData(data.filter((service) => service.name === param.serviceId));
  }, [param]);

  {
    if (filteredData.length == 0) {
      setFilteredData(data);
    }
  }

  const handleServiceChange = (service) => {
    setService(service);
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
    { id: "name", label: "Công việc", minWidth: 170 },
    { id: "type", label: "Loại", minWidth: 170 },
    { id: "detail", label: "Chi tiết", minWidth: 170 },
    { id: "price", label: "Giá", minWidth: 170 },
    { id: "edit", label: "Chỉnh sửa", minWidth: 170 },
  ];
  return (
    <>
      <Title
        title="DỊCH VỤ"
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
            {filteredData.map((service) => (
              <TableRow
                key={service.serviceId}
                hover
                role="checkbox"
                tabIndex={-1}
              >
                <TableCell align="left" >
                  {service.serviceId}
                </TableCell>
                <TableCell align="left" >
                  {service.name}
                </TableCell>
                <TableCell align="left" >
                  {service.type}
                </TableCell>
                <TableCell align="left" >
                  {service.detail}
                </TableCell>
                <TableCell align="left" >
                  {service.price.toLocaleString()} VNĐ
                </TableCell>
                <TableCell align="center" sx={{padding: 0}}>
                  <div
                    className="col-md-12 offset-md-5"
                    style={{ display: "flex" }}
                  >
                    <img
                      src="/assets/images/pencil.svg"
                      alt="Pencil"
                      style={{ width: "15%" }}
                      data-bs-toggle="modal"
                      data-bs-target="#staticBackdrop"
                      onClick={() => handleServiceChange(service)}
                    />
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
      <EditServiceForm service={service} />
    </>
  );
};

export default EditService;
export async function serviceLoader() {
  const apiUrl = process.env.REACT_APP_API_URL;
  const res = await fetch(apiUrl + "services");
  if (!res.ok) {
    throw new Error("error");
  } else {
    const data = await res.json();
    return data;
  }
}
