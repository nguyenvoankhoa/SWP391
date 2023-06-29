import React from "react";
import SignUpForm from "../components/SignUpForm";
import Overlays from "../layouts/Overlays";
const SignUpPage = () => {
  return (
    <div className="container-fluid signin-bg">
      <div className="row justify-content-left align-items-left">
            <SignUpForm />
      </div>
    </div>
  );
};

export default SignUpPage;
