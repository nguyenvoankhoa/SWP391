import React from "react";
import SignUpForm from "../components/SignUpForm";
import Overlays from "../layouts/Overlays";
import Title from "../components/Title";
const SignUpPage = () => {
  return (
    <div className="container-fluid signin-bg">
      <Overlays>
        <h1 className="login-title">Tham gia cùng chúng tôi </h1>
        <div className="row">
          <div className="col-md-5 d-flex justify-content-center  align-items-center">
            <div>
              <div className="container d-flex justify-content-center">
                <img
                  src="assets/images/LOGO.svg"
                  alt="img"
                  style={{ width: "330px" }}
                />
              </div>
              <Title
                color="#000000"
                title="Giải pháp tối ưu cho ngôi nhà của bạn"
                fontSize="30px"
                fontWeight="700"
              />
            </div>
          </div>
          <div className="col-md-1 d-flex justify-content-center align-items-center">
            <div className="rotate-90"></div>
          </div>
          <div className="col-md-6">
            <div className="px-lg-5">
              <SignUpForm />
            </div>
          </div>
        </div>
      </Overlays>
    </div>
  );
};

export default SignUpPage;
