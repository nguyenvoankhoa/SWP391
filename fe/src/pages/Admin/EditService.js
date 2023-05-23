import React from "react";

const EditService = () => {
  return (
    <>
      <div className="container-fluid fabric-container">
        <nav className="navbar navbar-expand-lg fabric-nav">
          <h1 className="fabric-title">DỊCH VỤ</h1>
        </nav>
      </div>
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
    </>
  );
};

export default EditService;
