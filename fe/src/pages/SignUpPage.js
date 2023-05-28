import React from "react";
import SignUpForm from "../components/SignUpForm";
import Overlays from "../layouts/Overlays";
const SignUpPage = () => {
  return (
    <div className="container-fluid signin-bg">
      <Overlays>
        <div className="row justify-content-center align-items-center">
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
