import React from "react";
import SignUpForm from "../components/SignUpForm";
import Overlays from "../layouts/Overlays";
const SignUpPage = () => {
  return (
    <div className="container-fluid signin-bg">
      <Overlays>
        <div className="row">
          <div className="col-md-5 d-flex justify-content-center  align-items-center">
            <div>
              <div className="container d-flex justify-content-center">
              </div>
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
