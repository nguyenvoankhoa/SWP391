import React, { useState } from "react";
import "./UserHistory.css";
import { useLoaderData } from "react-router";
import Title from "../../components/Title";
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
//edit table user history
const UserHistory = (props) => {
  const [value, setValue] = React.useState(2);
  const data = useLoaderData();
  console.log(data);
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
    { id: "total", label: "Tổng cộng", minWidth: 170 },
  ];

  return (
    <>
      <Title
        title="LỊCH SỬ"
        color="#397F77"
        fontSize="35px"
        fontWeight="1000"
        padding="3% 0 0  0"
      />
      {data.length === 0 && <p className="text-center">Chưa có thông tin</p>}
      {data.length > 0 && (
        <div className="table-responsive table-wrapper-scroll-y">
          <table
            className="table table-bordered table-striped text-center"
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
                <th scope="col">Đánh giá</th>
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
                  <td>
                    {service.rateValue === 0 ? (
                      <>
                        <Rating name="size-small" defaultValue={0}
                          value={service.rateValue}
                          onChange={(event) =>
                            setStar(Number(event.target.value))
                          }
                          onClick={() => handleRateEmployee(service.id)}
                          size="small" />
                        {/* <button onClick={() => handleRateEmployee(service.id)}>
                          Gửi
                        </button> */}
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
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
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
