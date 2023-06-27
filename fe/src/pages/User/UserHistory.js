import React, { useState } from "react";
import "./UserHistory.css";
import { useLoaderData } from "react-router";
import Title from "../../components/Title";
const UserHistory = (props) => {
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
                        <input
                          type="number"
                          onChange={(event) =>
                            setStar(Number(event.target.value))
                          }
                        />
                        <button onClick={() => handleRateEmployee(service.id)}>
                          Gửi
                        </button>
                      </>
                    ) : (
                      service.rateValue
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
