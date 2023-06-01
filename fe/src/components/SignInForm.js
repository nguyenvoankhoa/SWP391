import React, { useState } from "react";
import Card from "../UI/Card";
import Title from "./Title";
import Button from "../UI/Button";
import "./SignComponent.css";

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
      const response = await fetch(
        "https://swp391-production.up.railway.app/authenticate",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(loginData),
        }
      );
      if (response.status === 403) {
        setError("Sai tài khoản hoặc mật khẩu");
        return;
      }
      if (!response.ok) {
        setError("Server đang có lỗi");
        return;
      }
      const data = await response.json();
      const user = data.userDTO;
      const jwtToken = data.token;
      sessionStorage.setItem("jwtToken", jwtToken);
      sessionStorage.setItem("user", JSON.stringify(user));
      sessionStorage.setItem("id", JSON.stringify(user.id));
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
            fontSize="50px"
            fontWeight="600"
          />
          <div className="mt-3">
            <Title
              color="#000000"
              title="Email"
              fontSize="20px"
              fontWeight="400"
            />
            <input
              type="text"
              className="mb-3 w-100"
              value={email}
              onChange={emailHandler}
            />
          </div>
          <div className="mt-3">
            <Title
              color="#000000"
              title="Mật khẩu"
              fontSize="20px"
              fontWeight="400"
            />
            <input
              type="password"
              className="mb-3 w-100"
              value={password}
              onChange={passwordHandler}
            />
          </div>
          <p style={{ color: "red" }}>{error}</p>

          <div className="d-flex justify-content-center">
            <Title
              color="#000000"
              title="Chưa có tài khoản ? "
              fontSize="20px"
              fontWeight="400"
            />
            <Link to="/sign-up">
              <Title
                color="#000000"
                title=" Đăng ký ngay"
                fontSize="20px"
                fontWeight="400"
              />
            </Link>
          </div>

          <div className="d-flex justify-content-center my-5">
            <Button
              backgroundColor=" #397F77 "
              borderRadius="15px"
              padding="16px 41px"
            >
              <Title
                color="#ffffff"
                title="Đăng nhập"
                fontSize="20px"
                fontWeight="600"
              />
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default SignInForm;
