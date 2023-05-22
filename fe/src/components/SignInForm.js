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
  const loginHandler = (e) => {
    e.preventDefault();
    if (email.length > 0 && password.length > 0) {
      if (email === "user" && password === "1") {
        navigate("/user");
      } else if (email === "employee" && password === "1") {
        navigate("/employee");
      } else if (email === "admin" && password === "1") {
        navigate("/admin");
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
            color="#2B8EB4"
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
              backgroundColor="#BFE3F2"
              borderRadius="15px"
              padding="16px 41px"
            >
              <Title
                color="#000000"
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
