import React from "react";

const EditEmployee = () => {
  return (
    <>
      <div className="container-fluid fabric-container">
        <nav className="navbar navbar-expand-lg fabric-nav">
          <h1 className="fabric-title">NHÂN VIÊN</h1>
        </nav>
      </div>

      <table class="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Tên</th>
            <th>Số điện thoại</th>
            <th>Loại công việc</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>An</td>
            <td>87654321</td>
            <td>Vệ sinh máy lạnh</td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>An</td>
            <td>87654321</td>
            <td>Vệ sinh máy lạnh</td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>An</td>
            <td>87654321</td>
            <td>Vệ sinh máy lạnh</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default EditEmployee;
