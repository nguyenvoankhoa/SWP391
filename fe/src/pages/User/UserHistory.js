import React from "react";
import "./UserHistory.css";
const UserHistory = (props) => {
  const data = props.list;
  console.log(data);
  return (
    <>
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
        </div>
      )}
    </>
  );
};

export default UserHistory;
