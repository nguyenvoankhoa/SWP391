import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Card from "../../UI/Card";
import { useSelector } from "react-redux";
import PaymentPicker from "../../components/User/PaymentPicker";
import PaypalCheckoutButton from "../../components/User/PaypalCheckoutButton";
import { Box, Container, Divider, Grid } from "@mui/material";
import Title from "../../components/Title";
import CashCheckoutButton from "../../components/User/CashCheckoutButton";
import { MdLocationOn } from "react-icons/md";
const OrderCheckout = () => {
  const data = useLoaderData();
  const user = JSON.parse(sessionStorage.getItem("user"));
  const cartItems = useSelector((state) => state.order.items);
  const [payment, setPayment] = useState("Tiền mặt");
  const [bill, setBill] = useState([]);

  const handleBill = () => {
    let bill = [];
    cartItems.forEach((checkout) => {
      let item = {
        customerId: user.id,
        businessId: checkout.businessId,
        day: checkout.day,
        date: checkout.date,
        month: checkout.month,
        total: checkout.price,
        payment: payment,
        note: checkout.note,
        frequency: checkout.frequency,
        hour: checkout.hour,
      };
      bill.push(item);
    });
    console.log(bill);
    setBill(bill);
  };
  const paymentHandler = (props) => {
    setPayment(props);
    handleBill();
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
                              {item.hour} {item.day}, {item.date}/{item.month}
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
          {/* <Grid items xs={12} paddingTop={2} paddingBottom={2}>
            <Card>
              <h5 style={{
                color: "#397f77"
              }}>Phương thức thanh toán</h5>
              <PaymentPicker
                onAddPayment={paymentHandler}
              />
              {payment === "Tiền mặt" ? (

                <CashCheckoutButton items={bill} />
              ) : (
                <PaypalCheckoutButton items={bill} />
              )}
            </Card>
          </Grid> */}
        </Container>
      </Box>
    </>
  );
};

export default OrderCheckout;
