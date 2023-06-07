import React, { useState } from "react";
import Card from "../../UI/Card";
import "./EditCus.css";
import Title from "../../components/Title";
import { useLoaderData } from "react-router-dom";
import EditCustomerForm from "../../components/Admin/EditCustomerForm";
const EditCustomer = () => {
  const data = useLoaderData();
  const [customer, setCustomer] = useState([]);
  const editCustomerHandler = (customer) => {
    setCustomer(customer);
  };
  return (
    <>
      <div className="bg user-navbar d-flex" />
      <Title
        title="KHÁCH HÀNG"
        color="white"
        fontSize="35px"
        fontWeight="700"
        padding="2% 0 0 13vw"

      />
      <div className="table-cus table-responsive ">
        <Card>
          <table
            className="table table-bordered table-striped text-center"
            style={{ fontSize: "18px", fontWeight: "400" }}
          >
            <thead>
              <tr>
                <th scope="col">STT</th>
                <th scope="col">Tên</th>
                <th scope="col">Email</th>
                <th scope="col">Số toà</th>
                <th scope="col">Số phòng</th>
                <th scope="col">Số điện thoại</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {data.map((customer) => (
                <tr key={customer.id}>
                  <th scope="row">{customer.id}</th>
                  <td>{customer.customerInfo.name}</td>
                  <td>{customer.customerInfo.email}</td>
                  <td>{customer.departmentNumber}</td>
                  <td>{customer.roomNumber}</td>
                  <td>{customer.customerInfo.phone}</td>
                  <td className="d-flex justify-content-around">
                    <div className="item-icon">
                      <img src="../assets/images/iconTrash.svg" alt="#" data-bs-toggle="modal" data-bs-target="#exampleModal" />
                    </div>
                    <div className="item-icon">
                      <img
                        src="../assets/images/edit.png"
                        className=""
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop"
                        onClick={() => editCustomerHandler(customer)}
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </div>
      <EditCustomerForm customer={customer} />
    </>
  );
};

export default EditCustomer;
export async function customerLoader() {
  const token = sessionStorage.getItem("jwtToken");
  const res = await fetch(
    "https://swp391-production.up.railway.app/admin/customers",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  if (!res.ok) {
    throw new Error("error");
  } else {
    const data = await res.json();
    return data;
  }
}
