import React from "react";
const Price = (props) => {
  return (
    <div className="row d-flex justify-content-center">
      <div className="col-lg-3"></div>
      <div className="col-lg-6 table-responsive ">
        <table
          className="table table-bordered table-striped text-center"
          style={{ fontSize: "18px", fontWeight: "400" }}
        >
          <thead>
            <tr style={{ backgroundColor: "#397F77", color: "white" }}>
              <th>Dịch vụ</th>
              <th>Loại</th>
              <th>Giá</th>
            </tr>
          </thead>
          <tbody>
            {props.product1.map((product) => (
              <tr key={product.serviceId}>
                <td>{product.name}</td>
                <td>{product.type}</td>
                <td>{product.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="col-lg-3"></div>
    </div>
  );
};

export default Price;
