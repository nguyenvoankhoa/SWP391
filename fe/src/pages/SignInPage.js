import "./SignInPage.css";
import SignInForm from "../components/SignInForm";
import Overlays from "../layouts/Overlays";
const SignInPage = () => {
  return (
    <div className="container-fluid signin-bg">
      <div className="row justify-content-center align-items-center">
        <div className="col-md-6 ">
          <div className="px-lg-5">
            <SignInForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
