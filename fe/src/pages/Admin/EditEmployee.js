import React, { useState } from "react";
import Card from "../../UI/Card";
import "./EditCus.css";
import Title from "../../components/Title";
import { useLoaderData } from "react-router-dom";
import EditEmployeeForm from "../../components/Admin/EditEmployeeForm";
import { AiOutlineUserAdd } from "react-icons/ai";
import Button from '@mui/material/Button';
import { Grid } from "@mui/material";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
const style = {
  position: 'absolute',
  top: '50%',
  left: '60%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
const EditEmployee = () => {
  const [Job, setJob] = React.useState('');

  const handleChange = (event) => {
    setJob(event.target.value);
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const data = useLoaderData();
  const [employee, setEmployee] = useState([]);
  const editEmployeeHandler = (employee) => {
    setEmployee(employee);
  };
  return (
    <>

      <div className="mb-5" />
      <Grid container flex>
        <Grid item xs={4}>

        </Grid>
        <Grid item xs={4}>
          <Title title="NHÂN VIÊN" color="white" fontSize="35px" fontWeight="700" />
        </Grid>
        <Grid item xs={1}>

        </Grid>
        <Grid item xs={3} style={{
          paddingTop: '15px',
          paddingLeft: '15px'
        }} >
          <Button color="primary" onClick={handleOpen} variant="contained" startIcon={<AiOutlineUserAdd />}>
            Thêm nhân viên
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Title title="THÊM NHÂN VIÊN " fontSize="25px" fontWeight="700" />
              <Grid container flex spacing={2}>
                <Grid item xs={6}>
                  <TextField id="outlined-basic" label="Nhập tên" variant="outlined" />
                </Grid>
                <Grid item xs={6}>
                  <TextField id="outlined-basic" label="Mật khẩu" variant="outlined" />
                </Grid>
                <Grid item xs={6}>
                  <TextField id="outlined-basic" label="Nhập Số điện thoại" variant="outlined" />
                </Grid>
                <Grid item xs={6}>
                  <TextField id="outlined-basic" label="Email" variant="outlined" />
                </Grid>

                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Công việc</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="Công việc"
                      value={Job}
                      onChange={handleChange}


                    >
                      <MenuItem value={10} >Giúp việc theo giờ</MenuItem>
                      <MenuItem value={20} >Tổng vệ sinh</MenuItem>
                      <MenuItem value={30} >Vệ sinh sofa, nệm, rèm, thảm</MenuItem>
                      <MenuItem value={40} >Vệ sinh Điều hoà máy lạnh</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid container flex style={{
                  paddingTop: '15px'
                }} >
                  <Grid item xs={7}>
                  </Grid>
                  <Grid item xs={2}>
                    <Button variant="contained" color="success">
                      Huỷ
                    </Button>
                  </Grid>
                  <Grid item xs={3}>
                    <Button variant="contained" color="success">
                      Xác nhận
                    </Button>
                  </Grid>
                </Grid>

              </Grid>


            </Box>
          </Modal>

        </Grid>

      </Grid>
      <div className="row justify-content-center">
        <div className="col-10">
          <Card>
            <div class="table-responsive table-wrapper-scroll-y my-custom-scrollbar">
              <table className="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th scope="col">STT</th>
                    <th scope="col">Tên</th>
                    <th scope="col">Email</th>
                    <th scope="col">Số điện thoại</th>
                    <th scope="col">Công việc</th>
                    <th scope="col" style={{ opacity: 0 }}>
                      Chỉnh sửa
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((employee) => (
                    <tr key={employee.id}>
                      <th scope="row">{employee.id}</th>
                      <td>{employee.employeeInfo.name}</td>
                      <td>{employee.employeeInfo.email}</td>
                      <td>{employee.employeeInfo.phone}</td>
                      <td>{employee.workType}</td>
                      <td>
                        <div className="d-flex justify-content-around">
                          <div className="item-icon">
                            <img
                              src="../assets/images/iconTrash.svg"
                              alt="#"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal"
                            />
                          </div>
                          <div className="item-icon">
                            <img
                              src="../assets/images/edit.png"
                              alt="#"
                              data-bs-toggle="modal"
                              data-bs-target="#staticBackdrop"
                              onClick={() => editEmployeeHandler(employee)}
                            />
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </div>
      <EditEmployeeForm employee={employee} />
    </>
  );
};

export default EditEmployee;

export async function employeeLoader() {
  const token = sessionStorage.getItem("jwtToken");
  const res = await fetch(
    "https://swp391-production.up.railway.app/admin/employees",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  if (!res.ok) {
    throw new Error("error");
  } else {
    const data = await res.json();
    return data;
  }
}
