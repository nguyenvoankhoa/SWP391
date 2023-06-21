import React from "react";
import { Link } from "react-router-dom";
const UserPeriodic = (props) => {
  const data = props.list;
  return (
    <>
      {data.length === 0 && (
        <div className="text-center">
          <p>
            Hãy đảm bảo ngôi nha của bạn luôn được chăm sóc. Công việc sẽ được
            tự động đăng lên hàng tuần
          </p>
          <button className="btn btn-success">
            <Link to=".." className="link">
              Đặt lịch ngay
            </Link>
          </button>
        </div>
      )}
      {data.length > 0 && (

        <div className="row table-responsive table-wrapper-scroll-y w-100  my-custom-scrollbar">
          {" "}
          <table
            className="table table-bordered table-striped text-center"
            style={{ fontSize: "18px", fontWeight: "400" }}
          >
            <thead>
              <tr>
                <th scope="col">Dịch vụ</th>
                <th scope="col">Loại</th>
                <th scope="col">Định kỳ</th>
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
                  <td>{service.frequency}</td>
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

export default UserPeriodic;
