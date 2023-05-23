import React from "react";

const EditCustomer = () => {
  return (
    <>
      <div className="container-fluid fabric-container">
        <nav className="navbar navbar-expand-lg fabric-nav">
          <h1 className="fabric-title">KHÁCH HÀNG</h1>
        </nav>
      </div>

      <table class="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Tên</th>
            <th>Email</th>
            <th>Số điện thoại</th>
            <th>Số tòa</th>
            <th>Số phòng</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Khoa</td>
            <td>a@gmail.com</td>
            <td>12345678</td>
            <td>S101</td>
            <td>35</td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>Khoa</td>
            <td>a@gmail.com</td>
            <td>12345678</td>
            <td>S101</td>
            <td>35</td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>Khoa</td>
            <td>a@gmail.com</td>
            <td>12345678</td>
            <td>S101</td>
            <td>35</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default EditCustomer;
