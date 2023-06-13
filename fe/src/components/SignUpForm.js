import React from "react";
import Card from "../UI/Card";
import Title from "./Title";
import "./SignComponent.css";
import Button from "../UI/Button";
import { Link } from "react-router-dom";
import { TextField } from '@mui/material';
const SignUpForm = () => {
  return (
    <div className="container  mb-4">
      <Card>
        <form className="px-lg-3 px-sm-0">
          <Title
            color="#015450"
            title="ĐĂNG KÝ"
            fontSize="25px"
            fontWeight="600"
          />
          <div className="mt-1">

            <TextField
              className="mb-3 w-100" id="outlined-basic" label="Tên"
              variant="outlined" />
          </div>
          <div className="mt-1">
            <TextField
              className="mb-3 w-100" id="outlined-basic" label="Email"
              variant="outlined" />
          </div>
          <div className="mt-1">
            <TextField
              className="mb-3 w-100" id="outlined-basic" label="Password"
              variant="outlined" />
          </div>
          <div className="row">
            <div className="mt-1 col-4">
              <TextField
                className="mb-3 w-100" id="outlined-basic" label="Số Phòng"
                variant="outlined" />
            </div>
            <div className="mt-1 col-4">
              <TextField
                className="mb-3 w-100" id="outlined-basic" label="Số Toà"
                variant="outlined" />
            </div>
            <div className="mt-1 col-4">
              <TextField
                className="mb-3 w-100" id="outlined-basic" label="Số điện thoại"
                variant="outlined" />
            </div>
          </div>

          <div className="d-flex justify-content-center">
            <Title
              color="#000000"
              title="Đã có tài khoản ? "
              fontSize="15px"
              fontWeight="400"
            />
            <Link to="/sign-in" style={{ textDecoration: 'none' }}>
              <Title
                color="#000000"
                title=" Đăng nhập ngay"
                fontSize="15px"
                fontWeight="400"
              />
            </Link>
          </div>

          <div className="d-flex justify-content-center my-3">
            <Button
              backgroundColor=" #397F77 "
              borderRadius="15px"
              padding="5px 30px"
            >
              <Title
                color="#ffffff"
                title="Đăng ký"
                fontSize="17px"
                fontWeight="400"
              />
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default SignUpForm;
