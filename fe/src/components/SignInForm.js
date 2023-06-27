import React, { useState } from "react";
import Card from "../UI/Card";
import Title from "./Title";
import Button from "../UI/Button";
import "./SignComponent.css";
import { TextField } from "@mui/material";

import { Link, useNavigate } from "react-router-dom";

const SignInForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };
  const loginHandler = async (e) => {
    e.preventDefault();
    if (email.length > 0 && password.length > 0) {
      const loginData = {
        email: email,
        password: password,
      };
      const apiUrl = process.env.REACT_APP_API_URL;
      const response = await fetch(apiUrl + "authenticate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });
      if (response.status === 403) {
        setError("Sai tài khoản hoặc mật khẩu");
        return;
      }
      if (!response.ok) {
        setError("Server đang có lỗi");
        return;
      }
      const data = await response.json();
      console.log(data);
      const user = data.user;
      const jwtToken = data.jwtToken;
      const refreshToken = data.refreshToken;
      sessionStorage.setItem("jwtToken", jwtToken);
      sessionStorage.setItem("refreshToken", refreshToken);
      sessionStorage.setItem("user", JSON.stringify(user));
      if (user.role === "ADMIN") {
        navigate("/admin");
      } else if (user.role === "CUSTOMER") {
        navigate("/user");
      } else if (user.role === "EMPLOYEE") {
        navigate("/employee");
      }
    } else {
      setError("Sai email và mật khẩu rồi");
      setEmail("");
      setPassword("");
    }
  };
  return (
    <div className="container mb-5">
      <Card>
        <form className="px-lg-5 px-sm-0" onSubmit={loginHandler}>
          <Title
            color="#015450"
            title="ĐĂNG NHẬP"
            fontSize="30px"
            fontWeight="600"
          />
          <div className="mt-3">
            <TextField
              className="mb-3 w-100"
              label="Email"
              variant="outlined"
              value={email}
              onChange={emailHandler}
            />
          </div>
          <div className="mt-3">
            <TextField
              type="password"
              className="mb-3 w-100"
              label="Password"
              variant="outlined"
              value={password}
              onChange={passwordHandler}
            />
          </div>
          <p style={{ color: "red" }}>{error}</p>

          <div className="d-flex justify-content-center">
            <Title
              color="#000000"
              title="Chưa có tài khoản ? "
              fontSize="15px"
              fontWeight="400"
            />
            <Link to="/sign-up">
              <Title
                color="#000000"
                title=" Đăng ký ngay"
                fontSize="15px"
                fontWeight="400"
              />
            </Link>
          </div>

          <div className="d-flex justify-content-center my-5">
            <Button
              backgroundColor=" #397F77 "
              borderRadius="15px"
              padding="5px 30px"
            >
              <Title
                color="#ffffff"
                title="Đăng nhập"
                fontSize="17px"
                fontWeight="400"
              />
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default SignInForm;
