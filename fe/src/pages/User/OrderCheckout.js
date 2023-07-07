import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Card from "../../UI/Card";
import { useSelector } from "react-redux";
import PaymentPicker from "../../components/User/PaymentPicker";
import PaypalCheckoutButton from "../../components/User/PaypalCheckoutButton";
import { Box, Container, Divider, Grid } from "@mui/material";
import Title from "../../components/Title";
import CashCheckoutButton from "../../components/User/CashCheckoutButton";
import { MdLocationOn } from "react-icons/md";
import useDateTranslate from "../../components/DateTranslate";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


const OrderCheckout = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const data = useLoaderData();
  const user = JSON.parse(sessionStorage.getItem("user"));
  const cartItems = useSelector((state) => state.order.items);
  const totalAmount = useSelector((state) => state.order.totalAmount);
  const [payment, setPayment] = useState("Tiền mặt");
  const [bill, setBill] = useState({});
  const { translateWeekdays } = useDateTranslate();

  useEffect(() => {
    handleBill();
  }, []);
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
    };
    console.log(bill);
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
                  <Button onClick={handleOpen}>Thêm địa chỉ</Button>
                  <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box sx={style}>
                      <Typography id="modal-modal-title" variant="h6" component="h2">
                        Text in a modal
                      </Typography>
                      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                      </Typography>
                    </Box>
                  </Modal>
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
      </Box>
    </>
  );
};

export default OrderCheckout;
