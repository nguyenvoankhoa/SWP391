import React, { useState } from "react";
import Title from "./Title";
import "./SignComponent.css";
import { Link, useNavigate } from "react-router-dom";
import {
  Button,
  TextField,
  Paper,
  Input,
  InputAdornment,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Alert,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import IconButton from "@mui/material/IconButton";
import PhoneIcon from "@mui/icons-material/Phone";
import ApartmentIcon from "@mui/icons-material/Apartment";
import HomeIcon from "@mui/icons-material/Home";
const SignUpForm = () => {
  const nav = useNavigate();
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [departmentNumber, setDepartmentNumber] = useState("");
  const [roomNumber, setRoomNumber] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState(false);
  const [selectedToa, setSelectedToa] = useState("");
  const [selectedCanHo, setSelectedCanHo] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const registerHandler = async () => {
    let newUser = {
      name: name,
      email: email,
      password: password,
      phone: phone,
      departmentNumber: departmentNumber,
      roomNumber: roomNumber,
    };
    const apiUrl = process.env.REACT_APP_API_URL;
    const res = await fetch(apiUrl + "register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    });
    if (!res.ok) {
      throw new Error("error");
    } else {
      const data = await res.json();
      nav("/sign-in");
      return data;
    }
  };
  const nameHandler = (event) => {
    const inputValue = event.target.value;
    setName(inputValue);
    if (!/^[a-zA-Z]+(?:\s+[a-zA-Z]+)*$/.test(inputValue.trim())) {
      setNameError(false);
    } else {
      setNameError(true);
    }
    if (inputValue.trim().length === 0) {
      setIsNameEmpty(true);
    } else {
      setIsNameEmpty(false);
    }
        setIsFormValid(true);
  };
  const [isNameEmpty, setIsNameEmpty] = useState(false);

  const emailHandler = (event) => {
    const inputValue = event.target.value;
    setEmail(inputValue);
    if (isNameEmpty) {
      return;
    }
    if (!/^[\w-.]+@gmail\.com$/i.test(inputValue)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  };

  const passwordHandler = (event) => {
    const inputValue = event.target.value;
    setPassword(inputValue);
  };
  const departmentHandler = (event) => {
    const selectedDepartment = event.target.value;
    setSelectedToa(selectedDepartment);
  };
  const roomHandler = (event) => {
    const selectedRoom = event.target.value;
    setSelectedCanHo(selectedRoom);
  };
  const phoneHandler = (event) => {
    const inputValue = event.target.value;
    setPhone(inputValue);
    if (isNameEmpty) {
      return;
    }
    if (!/^0\d{9}$/.test(inputValue)) {
      setPhoneError(true);
    } else {
      setPhoneError(false);
    }
  };
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const departments = [
    { value: "S1.01", label: "S1.01" },
    { value: "S1.02", label: "S1.02" },
    { value: "S1.03", label: "S1.03" },
    { value: "S1.05", label: "S1.05" },
    { value: "S1.06", label: "S1.06" },
    { value: "S1.07", label: "S1.07" },
    { value: "S2.01", label: "S2.01" },
    { value: "S2.02", label: "S2.02" },
    { value: "S2.03", label: "S2.03" },
    { value: "S2.05", label: "S2.05" },
    { value: "S3.01", label: "S3.01" },
    { value: "S3.02", label: "S3.02" },
    { value: "S3.03", label: "S3.03" },
    { value: "S3.05", label: "S3.05" },
    { value: "S5.01", label: "S5.01" },
    { value: "S5.02", label: "S5.02" },
    { value: "S5.03", label: "S5.03" },
  ];
  const rooms = [
    // Mỗi tầng gồm 20 phòng
    // Tầng 2
    { value: "0201", label: "0201" },
    { value: "0202", label: "0202" },
    { value: "0203", label: "0203" },
    { value: "0204", label: "0204" },
    { value: "0205", label: "0205" },
    { value: "0206", label: "0206" },
    { value: "0207", label: "0207" },
    { value: "0208", label: "0208" },
    { value: "0209", label: "0200" },
    { value: "0210", label: "0210" },
    { value: "0211", label: "0211" },
    { value: "0212", label: "0212" },
    { value: "0213", label: "0213" },
    { value: "0214", label: "0214" },
    { value: "0215", label: "0215" },
    { value: "0216", label: "0216" },
    { value: "0217", label: "0217" },
    { value: "0218", label: "0218" },
    { value: "0219", label: "0219" },
    { value: "0220", label: "0220" },
    ,
  ];

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img
            src="/assets/images/registration.svg"
            alt=""
            style={{ width: "800px", height: "100%" }}
          />
        </div>
        <div className="col-md-3 offset-md-2">
          <Title
            color="#015450"
            title="ĐĂNG KÝ"
            fontSize="25px"
            fontWeight="600"
          />

          <div className="col-md-12 mt-3">
            <Input
              id="account-fill"
              sx={{ width: "90%", marginLeft: 4 }}
              placeholder="Họ tên"
              value={name}
              onChange={nameHandler}
              error={nameError}
              required
              startAdornment={
                <InputAdornment position="start">
                  <PersonIcon />
                </InputAdornment>
              }
            />
            {nameError && (
              <Alert severity="error" sx={{ ml: 4 }}>
                Họ tên không hợp lệ!
              </Alert>
            )}
            <Input
              id="account-fill"
              sx={{ width: "90%", marginLeft: 4, marginTop: 4 }}
              placeholder="Email"
              onChange={emailHandler}
              disabled={isNameEmpty}
              required
              startAdornment={
                <InputAdornment position="start">
                  <EmailIcon />
                </InputAdornment>
              }
            />
            {emailError && (
              <Alert severity="error" sx={{ marginLeft: 4 }}>
                Email không hợp lệ!
              </Alert>
            )}
            <Input
              id="account-fill"
              sx={{ width: "90%", marginLeft: 4, marginTop: 4 }}
              placeholder="Số điện thoại"
              onChange={phoneHandler}
              required
              disabled={isNameEmpty}
              startAdornment={
                <InputAdornment position="start">
                  <PhoneIcon />
                </InputAdornment>
              }
            />
            {phoneError && (
              <Alert severity="error" sx={{ marginLeft: 4 }}>
                Số điện thoại không hợp lệ!
              </Alert>
            )}
            <Input
              id="standard-adornment-password"
              sx={{ width: "90%", marginLeft: 4, marginTop: 4 }}
              placeholder="Mật khẩu"
              onChange={passwordHandler}
              disabled={isNameEmpty}
              type={showPassword ? "text" : "password"}
              required
              startAdornment={
                <InputAdornment position="start">
                  <LockIcon />
                </InputAdornment>
              }
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
            <FormControl
              variant="standard"
              sx={{ width: "40%", marginLeft: 4, marginTop: 3 }}
            >
              <InputLabel
                id="demo-simple-select-standard-label"
                sx={{ justifyContent: "left" }}
              >
                Tòa
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                onChange={departmentHandler}
                displayEmpty
                required
                disabled={isNameEmpty}
                startAdornment={
                  <InputAdornment position="start">
                    <ApartmentIcon />
                  </InputAdornment>
                }
              >
                {departments.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl
              variant="standard"
              sx={{ width: "40%", marginLeft: 4, marginTop: 3 }}
            >
              <InputLabel
                id="demo-simple-select-standard-label"
                sx={{ justifyContent: "left" }}
              >
                Căn hộ
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                onChange={roomHandler}
                displayEmpty
                required
                disabled={!selectedToa || isNameEmpty}
                startAdornment={
                  <InputAdornment position="start">
                    <HomeIcon />
                  </InputAdornment>
                }
              >
                {rooms.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <Button
              variant="contained"
              onClick={registerHandler}
              sx={{
                fontFamily: "Montserrat",
                width: "40%",
                height: "30%",
                mt: 5,
                mb: 7,
                ml: 15,
                backgroundColor: "#397F77",
                color: "#ffffff",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                letterSpacing: "0.07rem",
                "&:hover": {
                  backgroundColor: "#397F77",
                },
              }}
              disabled={isFormValid || isFormValid} 
            >
              Đăng ký
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
