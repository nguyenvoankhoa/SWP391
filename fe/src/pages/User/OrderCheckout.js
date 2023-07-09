import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Card from "../../UI/Card";
import { useSelector } from "react-redux";
import PaymentPicker from "../../components/User/PaymentPicker";
import PaypalCheckoutButton from "../../components/User/PaypalCheckoutButton";
import { Box, Container, Divider, FormControl, FormControlLabel, FormLabel, Grid, InputAdornment, InputLabel, MenuItem, Radio, RadioGroup, Select } from "@mui/material";
import Title from "../../components/Title";
import CashCheckoutButton from "../../components/User/CashCheckoutButton";
import { MdLocationOn } from "react-icons/md";
import useDateTranslate from "../../components/DateTranslate";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import ApartmentIcon from '@mui/icons-material/Apartment';
import HomeIcon from '@mui/icons-material/Home';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import Checkbox from '@mui/material/Checkbox';
import DeleteIcon from '@mui/icons-material/Delete';

import { useNavigate } from "react-router-dom";
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const OrderCheckout = (props) => {
  const nav = useNavigate();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setUnderstood(false);
  };
  const token = sessionStorage.getItem("jwtToken");
  const apiUrl = process.env.REACT_APP_API_URL;
  const data = useLoaderData();
  const user = JSON.parse(sessionStorage.getItem("user"));
  const cartItems = useSelector((state) => state.order.items);
  const totalAmount = useSelector((state) => state.order.totalAmount);
  const [payment, setPayment] = useState("Tiền mặt");
  const [bill, setBill] = useState({});
  const { translateWeekdays } = useDateTranslate();
  const [rooms, setRooms] = useState([]);
  const [selectedToa, setSelectedToa] = useState("");
  const [selectedCanHo, setSelectedCanHo] = useState("");
  const [building, setBuilding] = useState("");
  const [departs, setDeparts] = useState([]);
  const [room, setRoom] = useState("");
  const [listAddress, setListAddress] = useState([]);
  const [understood, setUnderstood] = useState(false);
  const [selectedLocationId, setSelectedLocationId] = useState(Object.keys(listAddress).length > 0 ? listAddress[0].id : '')
  
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

  const addressHandler = async () => {
    if (selectedCanHo === "" || selectedToa === "") {
      alert("chọn tòa và căn hộ");
      return;
    }
    const user = JSON.parse(sessionStorage.getItem("user"));
    let newAddress = {
      customerId: user.id,
      buildingId: selectedToa,
      roomId: selectedCanHo,
    };
    const res = await fetch(apiUrl + "customer/create-address", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(newAddress),
    });
    setUnderstood(false)
  };

  // địa chỉ có sẵn
  console.log(listAddress);
  // const DEPARTMENT = props.data.map((e) => ({
  //   value: e.departmentId,
  //   label: e.departmentName,
  //   rooms: e.rooms,
  // }));
  useEffect(() => {
    addressHistory();
    handleBill();
  }, [understood]);
  const addressHistory = async () => {
    const user = JSON.parse(sessionStorage.getItem("user"));
    const token = sessionStorage.getItem("jwtToken");
    const apiUrl = process.env.REACT_APP_API_URL;
    const id = {
      id: user.id,
    };
    const res = await fetch(apiUrl + "customer/history-address", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(id),
    });
    let data = await res.json();
    setListAddress(data.filter(
      (data, index, self) =>
        self.findIndex((d) => d.buildingName === data.buildingName && d.roomName === data.roomName) === index
    ));
  };

  const handleBill = () => {
    let bill = {
      customerId: user.id,
      businessId: cartItems[0].businessId,
      day: cartItems[0].day,
      date: cartItems[0].date,
      month: cartItems[0].month,
      total: totalAmount,
      payment: payment,
      note: cartItems[0].note,
      frequency: cartItems[0].frequency,
      hour: cartItems[0].hour,
      businessName: cartItems[0].name,
      favouriteEmployee: cartItems[0].favouriteEmployee,
      employeeId: cartItems[0].employeeId,
      buildingId: building,
      roomId: room,
    };
    setBill(bill);
  };

  const paymentHandler = (props) => {
    setPayment(props);
  };
  return (
    <>
      <Box container flex>
        <Grid container flex justifyContent={"center"}>
          <Grid item xs={12}>
            <Title
              title="Thanh Toán"
              color="#397f77"
              fontSize="35px"
              fontWeight="1000"
            />
          </Grid>
          <Grid>
            {" "}
            <h4 style={{ fontStyle: "italic", fontWeight: "400" }}>
              Vui lòng kiểm tra lại thông tin trước khi đặt hàng
            </h4>
          </Grid>
        </Grid>
        <Container
          sx={{
            width: "1000px",
          }}
        >
          <div className="line"></div>
          <Card>
            <Grid container spacing={1}>
              <Grid
                item
                xs={12}
                container
                style={{
                  color: "#397f77",
                }}
              >
                <Grid item xs={0}>
                  <MdLocationOn fontSize={25} />
                </Grid>
                <Grid item xs={5}>
                  <h5>Địa điểm làm việc</h5>
                </Grid>
              </Grid>
              <Grid item xs={2}>
                <div>
                  <h5
                    style={{
                      fontWeight: "700",
                    }}
                  >
                    {user.name}
                  </h5>
                </div>
                <p>{user.phone}</p>
              </Grid>
              <Grid item xs={10}>
                <div>
                  <p>
                    Tòa {data.departmentNumber}.{data.roomNumber}, Vinhomes
                    Grand Park, Phường Long Thạch Mỹ, Quận 9, TP.Hồ Chí Minh.
                  </p>
                </div>
                <div>
                  <Button variant="outlined" onClick={handleOpen}>
                    Thay đổi
                  </Button>

                  <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"

                  >
                    {!understood ? (
                      <Grid>
                        <DialogTitle id="alert-dialog-title"
                          style={{
                            color: "#397f77",
                          }}
                        >
                          Địa chỉ của tôi
                        </DialogTitle>
                        <Divider
                          sx={{
                            borderBottomWidth: 1,
                            backgroundColor: "black",
                          }}
                        />
                        <Grid item xs={12}>
                          <DialogContent >
                            <DialogContentText id="alert-dialog-description">
                              <Grid container flex mr={2}>
                                <Grid item xs={12} container flex>
                                  <Grid item xs={12}>
                                    <FormControl>
                                      <RadioGroup
                                        defaultValue={Object.keys(listAddress).length > 0 ? listAddress[0].id : null }
                                        name="radio-buttons-group"
                                      >
                                        {
                                          listAddress.map((item) =>
                                            <FormControlLabel
                                              value={item.id}
                                              control={<Radio />}
                                              label={`Tòa ${item.buildingName}.${item.roomName}, Vinhomes
                                              Grand Park, Phường Long Thạch Mỹ, Quận 9, TP.Hồ Chí Minh.`}
                                              sx={{margin: "1vh 0"}}
                                              onClick={() => {
                                                setSelectedLocationId(item.id);
                                                console.log("Selected item: ", item, " Selected id:",selectedLocationId);
                                              }}
                                            />
                                          )
                                        }
                                      </RadioGroup>
                                    </FormControl>
                                  </Grid>
                                  <Grid container flex>
                                    <Grid item xs={4}>
                                      <Button startIcon={<AddCircleOutlineIcon />} variant="outlined" onClick={() => setUnderstood(true)} >
                                        Thêm địa chỉ
                                      </Button>
                                    </Grid>
                                    <Grid item xs={3}>
                                      <Button startIcon={<DeleteIcon />} variant="outlined" >
                                        Xoá
                                      </Button>
                                    </Grid>
                                  </Grid>
                                </Grid>

                              </Grid>
                            </DialogContentText>
                          </DialogContent>
                          <DialogActions>
                            <Button onClick={() => setOpen(false)}>Huỷ</Button>
                            <Button onClick={handleClose}>
                              Xác nhận
                            </Button>
                          </DialogActions>
                        </Grid>


                      </Grid>
                    ) : (

                      <Grid>
                        <DialogTitle id="alert-dialog-title"
                          style={{
                            color: "#397f77",
                          }}
                        >
                          Địa chỉ mới
                        </DialogTitle>
                        <Divider
                          sx={{
                            borderBottomWidth: 1,
                            backgroundColor: "black",
                          }}
                        />

                        <DialogContent>
                          <DialogContentText>
                            <Grid container flex mr={2}>
                              <Grid item xs={6}>
                                <FormControl
                                  variant="standard"
                                  sx={{ width: "120px" }}
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
                                    defaultValue={data.buildingNumber}

                                    startAdornment={
                                      <InputAdornment position="start">
                                        <ApartmentIcon />
                                      </InputAdornment>
                                    }
                                  >

                                    {departs.map((option) => (
                                      <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                      </MenuItem>
                                    ))}

                                  </Select>
                                </FormControl>
                              </Grid>
                              <Grid item xs={6}>
                                <FormControl
                                  variant="standard"
                                  sx={{ width: "120px" }}
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
                              </Grid>
                            </Grid>
                          </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                          <Button onClick={() => setUnderstood(false)} >Quay lại</Button>
                          <Button onClick={addressHandler} autoFocus>
                            Thêm
                          </Button>
                        </DialogActions>
                      </Grid>

                    )}
                  </Dialog>
                </div>
              </Grid>
            </Grid>
          </Card>

          <Grid
            style={{
              marginTop: "20px",
            }}
          >
            <Card>
              <Grid container>
                <Grid item xs={12}>
                  <h5
                    style={{
                      color: "#397f77",
                    }}
                  >
                    Thông tin đơn hàng
                  </h5>
                </Grid>

                {cartItems.length === 0 ? (
                  <p>Chưa có đơn hàng</p>
                ) : (
                  cartItems.map((item) => (
                    <Grid
                      container
                      spacing={2}
                      paddingTop={1}
                      key={item.businessId}
                    >
                      <Grid item xs={12}>
                        <Divider
                          sx={{
                            borderBottomWidth: 1,
                            backgroundColor: "black",
                          }}
                        />
                      </Grid>
                      <Grid item xs={12} container>
                        <Grid item xs={4}>
                          <Grid>
                            <h5>Công việc</h5>
                          </Grid>
                          <Grid>
                            <p>
                              {item.name} - {item.type}
                            </p>
                          </Grid>
                        </Grid>
                        <Grid item xs={4}>
                          <Grid>
                            <h5>Thời gian</h5>
                          </Grid>
                          <Grid>
                            <p>
                              {item.hour} {translateWeekdays(item.day)},{" "}
                              {item.date}/{item.month}
                              /2023
                            </p>
                          </Grid>
                        </Grid>
                        <Grid item xs={2}>
                          <Grid>
                            <h5>Lặp lại</h5>
                          </Grid>
                          <Grid>
                            <p>{item.frequency}</p>
                          </Grid>
                        </Grid>
                        <Grid item xs={2}>
                          <Grid>
                            <h5>Thành tiền</h5>
                          </Grid>
                          <Grid>
                            <p>{item.price.toLocaleString()} VNĐ</p>
                          </Grid>
                        </Grid>
                        <Grid item xs={12} container flex>
                          <Grid paddingRight={2}>
                            <h5>Ghi chú:</h5>
                          </Grid>

                          <Grid>
                            <p>{item.note}</p>
                          </Grid>
                        </Grid>
                        <Grid items xs={12} paddingTop={2} paddingBottom={2}>
                          <h5
                            style={{
                              color: "#397f77",
                            }}
                          >
                            Phương thức thanh toán
                          </h5>
                          <PaymentPicker onAddPayment={paymentHandler} />
                          {payment === "Tiền mặt" ? (
                            <CashCheckoutButton items={bill} />
                          ) : (
                            <PaypalCheckoutButton items={bill} />
                          )}
                        </Grid>
                      </Grid>
                    </Grid>
                  ))
                )}
              </Grid>
            </Card>
          </Grid>
        </Container>
      </Box >
    </>
  );
};

export default OrderCheckout;
