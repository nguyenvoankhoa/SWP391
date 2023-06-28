import React, { useState } from "react";
import Card from "../UI/Card";
import Title from "./Title";
import "./SignComponent.css";
import Button from "../UI/Button";
import { Link, useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";
const SignUpForm = () => {
  const nav = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [departmentNumber, setDepartmentNumber] = useState("");
  const [roomNumber, setRoomNumber] = useState("");
  const [phone, setPhone] = useState("");
  const registerHandler = async () => {
    let newUser = {
      name: name,
      email: email,
      password: password,
      phone: phone,
      departmentNumber: departmentNumber,
      roomNumber: roomNumber,
    };
    const apiUrl = process.env.REACT_APP_API_URL;
    const res = await fetch(apiUrl + "register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    });
    if (!res.ok) {
      throw new Error("error");
    } else {
      const data = await res.json();
      nav("/sign-in");
      return data;
    }
  };
  const nameHandler = (e) => {
    setName(e.target.value);
  };
  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };
  const departmentHandler = (e) => {
    setDepartmentNumber(e.target.value);
  };
  const roomHandler = (e) => {
    setRoomNumber(e.target.value);
  };
  const phoneHandler = (e) => {
    setPhone(e.target.value);
  };
  return (
    <div className="container  mb-4">
      <Card>
        <div className="px-lg-3 px-sm-0">
          <Title
            color="#015450"
            title="ĐĂNG KÝ"
            fontSize="25px"
            fontWeight="600"
          />
          <div className="mt-1">
            <TextField
              className="mb-3 w-100"
              label="Tên"
              variant="outlined"
              onChange={nameHandler}
            />
          </div>
          <div className="mt-1">
            <TextField
              className="mb-3 w-100"
              label="Email"
              variant="outlined"
              onChange={emailHandler}
            />
          </div>
          <div className="mt-1">
            <TextField
              type="password"
              className="mb-3 w-100"
              label="Password"
              variant="outlined"
              onChange={passwordHandler}
            />
          </div>
          <div className="row">
            <div className="mt-1 col-4">
              <TextField
                className="mb-3 w-100"
                label="Số Phòng"
                variant="outlined"
                onChange={roomHandler}
              />
            </div>
            <div className="mt-1 col-4">
              <TextField
                className="mb-3 w-100"
                label="Số Toà"
                variant="outlined"
                onChange={departmentHandler}
              />
            </div>
            <div className="mt-1 col-4">
              <TextField
                className="mb-3 w-100"
                label="Số điện thoại"
                variant="outlined"
                onChange={phoneHandler}
              />
            </div>
          </div>

          <div className="d-flex justify-content-center">
            <Title
              color="#000000"
              title="Đã có tài khoản?"
              fontSize="15px"
              fontWeight="400"
              padding="0 5px 0 0"
            />
            <Link to="/sign-in">
              <Title
                color="#000000"
                title="Đăng nhập ngay"
                fontSize="15px"
                fontWeight="400"
              />
            </Link>
          </div>

          <div className="d-flex justify-content-center my-3">
            <button type="submit" onClick={registerHandler}>
              Đăng ký
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default SignUpForm;
