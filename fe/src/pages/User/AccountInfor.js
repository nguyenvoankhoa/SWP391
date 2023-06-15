import React, { useState } from "react";
import Title from "../../components/Title";
import "./AccountInfor.css";
import { useLoaderData, useNavigate } from "react-router-dom";

const AccountInfor = () => {
  const data = useLoaderData();
  const nav = useNavigate();
  const user = JSON.parse(sessionStorage.getItem("user"));
  const [name, setName] = useState(data.name);
  const [phone, setPhone] = useState(data.phone);
  const [departmentNum, setDepartmentNum] = useState(data.departmentNumber);
  const [roomNum, setRoomNum] = useState(data.roomNumber);
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleRoomNumChange = (e) => {
    setRoomNum(e.target.value);
  };
  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };
  const handleDepartmentNumChange = (e) => {
    setDepartmentNum(e.target.value);
  };
  const customerHandler = async () => {
    let newCustomer = {
      id: user.id,
      name: name,
      phone: phone,
      departmentNumber: departmentNum,
      roomNumber: roomNum,
    };
    const token = sessionStorage.getItem("jwtToken");
    const res = await fetch(
      "https://swp391-production.up.railway.app/customer/edit",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(newCustomer),
      }
    );

    if (!res.ok) {
      throw new Error("Error fetching data");
    }
    alert("Edit success");
    nav("/user/account-infor");
  };
  return (
    <>
      <div
        className="container"
        style={{
          height: "auto",
        }}
      >
        <Title
          title="THÔNG TIN TÀI KHOẢN"
          color="white"
          fontSize="35px"
          fontWeight="1000"
          padding="3% 0 0  0"
        />
        <div className="row justify-content-center">
          <div className="row col-lg-10 col-sm-8 ai-content">
            <div className="row col-lg-7 col-md-12 u-infor">
              <div className="col-md-12">
                <p>HỌ VÀ TÊN</p>
                <input className="" value={name} onChange={handleNameChange} />
              </div>
              <div className="col-md-12">
                <p>EMAIL</p>
                <input className="" value={data.email} disabled />
              </div>
              <div className="col-md-6">
                <p>SỐ TÒA</p>
                <input
                  className=""
                  value={departmentNum}
                  onChange={handleDepartmentNumChange}
                />
              </div>
              <div className="col-md-6">
                <p>SỐ PHÒNG</p>
                <input
                  className=""
                  value={roomNum}
                  onChange={handleRoomNumChange}
                />
              </div>
              <div className="col-md-12">
                <p>SỐ ĐIỆN THOẠI</p>
                <input
                  className=""
                  value={phone}
                  onChange={handlePhoneChange}
                />
              </div>
              <div
                className="col-md-12 d-flex justify-content-center"
                id="finish"
              >
                <button onClick={customerHandler}>Cập nhật</button>
              </div>
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
