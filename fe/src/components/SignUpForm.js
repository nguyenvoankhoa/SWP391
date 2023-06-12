import React from "react";
import Card from "../UI/Card";
import Title from "./Title";
import "./SignComponent.css";
import Button from "../UI/Button";
import { Link } from "react-router-dom";
const SignUpForm = () => {
  return (
    <div className="container mb-5">
      <Card>
        <form className="px-lg-5 px-sm-0">
          <Title
            color="#015450"
            title="ĐĂNG KÝ"
            fontSize="50px"
            fontWeight="600"
          />
          <div className="mt-3">
            <Title
              color="#000000"
              title="Tên"
              fontSize="20px"
              fontWeight="400"
            />
            <input type="text" className="mb-3 w-100" />
          </div>
          <div className="mt-3">
            <Title
              color="#000000"
              title="Email"
              fontSize="20px"
              fontWeight="400"
            />
            <input type="text" className="mb-3 w-100" />
          </div>
          <div className="mt-3">
            <Title
              color="#000000"
              title="Mật khẩu"
              fontSize="20px"
              fontWeight="400"
            />
            <input type="password" className="mb-3 w-100" />
          </div>
          <div className="row">
            <div className="mt-3 col-4">
              <Title
                color="#000000"
                title="Số tòa"
                fontSize="20px"
                fontWeight="400"
              />
              <input type="text" className="mb-3 w-100" />
            </div>
            <div className="mt-3 col-4">
              <Title
                color="#000000"
                title="Số phòng"
                fontSize="20px"
                fontWeight="400"
              />
              <input type="text" className="mb-3 w-100" />
            </div>
            <div className="mt-3 col-4">
              <Title
                color="#000000"
                title="Điện thoại"
                fontSize="20px"
                fontWeight="400"
              />
              <input type="text" className="mb-3 w-100" />
            </div>
          </div>

          <div className="d-flex justify-content-center">
            <Title
              color="#000000"
              title="Đã có tài khoản ? "
              fontSize="20px"
              fontWeight="400"
            />
            <Link to="/sign-in">
              <Title
                color="#000000"
                title=" Đăng nhập ngay"
                fontSize="20px"
                fontWeight="400"
              />
            </Link>
          </div>

          <div className="d-flex justify-content-center my-5">
            <Button
              backgroundColor="#397F77"
              borderRadius="15px"
              padding="16px 41px"
            >
              <Title
                color="#ffffff"
                title="Đăng ký"
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

export default SignUpForm;
