import React from "react";
import "./SignInPage.css";
import SignComponent from "../components/SignComponent";

const inputField = [
  "Email",
  "Mật khẩu",
]

const SignInPage = () => {
  return (
    <div className="container-fluid signin-bg">
      <h1 className="text-center login-title">Đăng nhập ngay để trải nghiệm</h1>
      <div className="row login-area">
        <div className="col-md-5 logo-area">
        </div>
        <div className="col-md-5">
          <SignComponent
            title="ĐĂNG NHẬP"
            inputField={inputField}
          />
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
