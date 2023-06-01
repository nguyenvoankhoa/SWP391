import React from "react";
import Card from "../../UI/Card";
import "./EditCus.css";
import Title from "../../components/Title";
import { useLoaderData } from "react-router-dom";
const EditCustomer = () => {
  const data = useLoaderData();
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
                  <td>{customer.name}</td>
                  <td>{customer.email}</td>
                  <td>{customer.departmemtNumber}</td>
                  <td>{customer.roomNumber}</td>
                  <td>{customer.phone}</td>
                  <td className="d-flex justify-content-around">
                    <div className="item-icon">
                      <img
                        src="/assets/images/iconTrash.svg"
                        alt="img"
                        style={{
                          width: "22px",
                        }}
                      />
                    </div>
                    <div>
                      <img
                        src="/assets/images/edit.png"
                        alt="img"
                        style={{
                          width: "20px",
                        }}
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </div>
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
