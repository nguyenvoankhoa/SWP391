import React from "react";
import Card from "../../UI/Card";
const EditCustomer = () => {
  return (
    <>
      <div className="bg user-navbar" />

      <div className="container-fluid fabric-container">
        <nav className="navbar navbar-expand-lg fabric-nav">
          <h1 className="fabric-title">RECENT TRANSACTION</h1>
        </nav>
      </div>
      <Card>
        <table class="table table-striped">
          <thead>
            <tr>
              <th>Công việc</th>
              <th>Thời gian</th>
              <th>Số toà</th>
              <th>Số phòng</th>
              <th>Số điện thoại</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Tổng vệ sinh</th>
              <td>13h30 Ngày 20 tháng 5</td>
              <td>S606</td>
              <td>201</td>
              <td>0793552201</td>
            </tr>
            <tr>
              <th scope="row">Tổng vệ sinh</th>
              <td>13h30 Ngày 20 tháng 5</td>
              <td>S606</td>
              <td>201</td>
              <td>0793552201</td>
            </tr>
            <tr>
              <th scope="row">Tổng vệ sinh</th>
              <td>13h30 Ngày 20 tháng 5</td>
              <td>S606</td>
              <td>201</td>
              <td>0793552201</td>
            </tr>
          </tbody>
        </table>
      </Card>
    </>
  );
};

export default EditCustomer;
