import React, { useEffect, useState } from "react";
import Title from "../../components/Title";
import "./AccountInfor.css";
import {
  Button,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";
import { useLoaderData, useNavigate } from "react-router-dom";
const AccountInfor = () => {
  const data = useLoaderData();
  console.log(data);
  const nav = useNavigate();
  const user = JSON.parse(sessionStorage.getItem("user"));
  const [name, setName] = useState(data.name);
  const [phone, setPhone] = useState(data.phone);
  const [departs, setDeparts] = useState([]);
  const [rooms, setRooms] = useState([]);
  const [selectedToa, setSelectedToa] = useState("");
  const [selectedCanHo, setSelectedCanHo] = useState("");
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };
  useEffect(() => {
    const departmentLoader = async () => {
      const apiUrl = process.env.REACT_APP_API_URL;
      const res = await fetch(apiUrl + "departments");
      const data = await res.json();
      return data;
    };
    const loadDepartments = async () => {
      const result = await departmentLoader();
      const DEPARTMENT = result.map((e) => ({
        value: e.departmentId,
        label: e.departmentName,
        rooms: e.rooms,
      }));
      setDeparts(DEPARTMENT);
    };

    loadDepartments();
  }, []);
  const roomHandler = (event) => {
    const selectedRoom = event.target.value;
    setSelectedCanHo(selectedRoom);
  };
  const departmentHandler = (event) => {
    const selectedDepartment = event.target.value;
    setSelectedToa(selectedDepartment);
    const roomsOption = departs.filter(
      (department) => department.value === event.target.value
    );
    const opts = roomsOption[0].rooms.map((e) => ({
      value: e.id,
      label: e.roomName,
    }));
    setRooms(opts);
  };
  const customerHandler = async () => {
    if (selectedCanHo === "" || selectedToa === "") {
      alert("chọn tòa và căn hộ");
      return;
    }
    let newCustomer = {
      id: user.id,
      name: name,
      phone: phone,
      departmentNumber: selectedToa,
      roomNumber: selectedCanHo,
    };
    const token = sessionStorage.getItem("jwtToken");
    const apiUrl = process.env.REACT_APP_API_URL;
    const res = await fetch(apiUrl + "customer/edit", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(newCustomer),
    });

    if (!res.ok) {
      throw new Error("Error fetching data");
    }
    alert("Edit success");
    nav("/user/account-infor");
  };
  return (
    <>
      <div
        className="container"
        style={{
          height: "auto",
        }}
      >
        <Title
          title="THÔNG TIN TÀI KHOẢN"
          color="#397F77"
          fontSize="35px"
          fontWeight="1000"
          padding="3% 0 0  0"
        />
        <div className="row justify-content-center">
          <div className="row col-lg-8 col-sm-8 ai-content">
            <div className="row col-lg-7 col-md-12 u-infor">
              <div className="col-md-12">
                <p className="custom-p">Tên</p>
                <input value={name} onChange={handleNameChange} />
              </div>
              <div className="col-md-12">
                <p className="custom-p">Email</p>
                <input value={data.email} disabled />
              </div>
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
                  defaultValue={data.departmentNumber}
                >
                  {departs.map((option) => (
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
                  disabled={!selectedToa}
                >
                  {rooms.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <div className="col-md-12">
                <p className="custom-p">Số điện thoại</p>
                <input value={phone} onChange={handlePhoneChange} />
              </div>
              <div
                className="col-md-12 d-flex justify-content-center"
                id="finish"
              >
                <Button
                  variant="contained"
                  onClick={customerHandler}
                  sx={{
                    fontFamily: "Montserrat",
                    width: "110%",
                    height: "30%",
                    mt: 5,
                    mb: 7,
                    ml: 1,
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
                >
                  Cập nhật
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountInfor;

export async function customerInfoLoader() {
  const token = sessionStorage.getItem("jwtToken");
  const user = JSON.parse(sessionStorage.getItem("user"));
  const request = {
    id: user.id,
  };
  const apiUrl = process.env.REACT_APP_API_URL;
  const res = await fetch(apiUrl + "customer/info", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(request),
  });

  const data = await res.json();
  return data;
}
