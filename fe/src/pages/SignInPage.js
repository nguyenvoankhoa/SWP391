import "./SignInPage.css";
import SignInForm from "../components/SignInForm";
import Overlays from "../layouts/Overlays";
const SignInPage = () => {
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
              <SignInForm />
            </div>
          </div>
        </div>
      </Overlays>
    </div>
  );
};

export default SignInPage;
