import React from "react";
import Title from "../../components/Title";
import "./AccountInfor.css";
import { useLoaderData } from "react-router-dom";

const AccountInfor = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <>
      <div className="bg user-navbar" />
      <div
        className="container"
        style={{
          paddingLeft: "21.5vw",
          paddingRight: "0",
          margin: "0",
          height: "100vh",
          marginLeft: "4vw",
        }}
      >
        <Title
          title="THÔNG TIN TÀI KHOẢN"
          color="white"
          fontSize="35px"
          fontWeight="1000"
          padding="3% 0 0  0"
        />
        <div className="ai-content d-flex justify-content-center">
          <div className="col-md-6 ai-username">
            <img src="/assets/images/person1.svg" alt="Avatar"></img>
            <h3></h3>
            <div className="col-md-12 d-flex justify-content-center">
              <button className="col-md-5">Chỉnh sửa</button>
            </div>
          </div>

          <div className="row col-md-6 d-flex u-infor">
            <div className="col-md-12">
              <h4>Tên</h4>
              <p className="text-center">{data.name}</p>
            </div>
            <div className="col-md-12">
              <h4>Email</h4>
              <p className="text-center">{data.email}</p>
            </div>
            <div className="col-md-12">
              <h4>Số tòa</h4>
              <p className="text-center">{data.departmentNumber}</p>
            </div>
            <div className="col-md-12">
              <h4>Số phòng</h4>
              <p className="text-center">{data.roomNumber}</p>
            </div>
            <div className="col-md-12">
              <h4>Số điện thoại</h4>
              <p className="text-center">{data.phone}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountInfor;

export async function customerInfoLoader() {
  const token = sessionStorage.getItem("jwtToken");
  const user = JSON.parse(sessionStorage.getItem("user"));
  const request = {
    id: user.id,
  };
  const res = await fetch(
    "https://swp391-production.up.railway.app/customer/info",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(request),
    }
  );
  if (!res.ok) {
    throw new Error("error");
  } else {
    const data = await res.json();
    return data;
  }
}
