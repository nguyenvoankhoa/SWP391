import React, { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Card from "../../UI/Card";
import { useSelector } from "react-redux";
import PaymentPicker from "../../components/User/PaymentPicker";
import PaypalCheckoutButton from "../../components/User/PaypalCheckoutButton";
import { Box, Button, Container, Divider, Grid } from "@mui/material";
import Title from "../../components/Title";
import { BsFillSendCheckFill } from "react-icons/bs";

const OrderCheckout = () => {
  const data = useLoaderData();
  const nav = useNavigate();
  const user = JSON.parse(sessionStorage.getItem("user"));
  const cartItems = useSelector((state) => state.order.items);
  const [payment, setPayment] = useState("Tiền mặt");
  const [bill, setBill] = useState([]);
  const paymentHandler = (pay) => {
    setPayment(pay);
    if (pay === "PayPal") {
      let bill = [];
      cartItems.forEach((checkout) => {
        let item = {
          customerId: user.id,
          businessId: checkout.businessId,
          day: checkout.day,
          date: checkout.date,
          month: checkout.month,
          total: checkout.price,
          payment: pay,
          note: checkout.note,
          frequency: checkout.frequency,
          hour: checkout.hour,
        };
        bill.push(item);
      });
      setBill(bill);
    }
  };
  const createBillHandler = async () => {
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
    const token = sessionStorage.getItem("jwtToken");
    const res = await fetch(
      "https://swp391-production.up.railway.app/customer/order",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(bill),
      }
    );

    if (!res.ok) {
      throw new Error("Error fetching data");
    }
    const data = await res.json();
    console.log(data);
    nav("/user/order-completed");
  };

  return (
    <>
      <Box container flex >
        <Grid container flex justifyContent={"center"}>
          <Grid item xs={12}>
            <Title
              title="Thanh Toán"
              color="black"
              fontSize="35px"
              fontWeight="1000"
            />
          </Grid>
          <Grid> <h5 style={{ fontStyle: "italic" }}>Vui lòng kiểm tra lại thông tin trước khi đặt hàng</h5></Grid>
        </Grid>
        <Container sx={{
          width: "1000px"
        }}>

          <Card>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <h5>Vị trí làm việc</h5>
              </Grid>
              <Grid item xs={6}>
                <div class="input-group">
                  <button class="btn btn-dark infor-button-order" type="button" id="button-addon1" disabled>Toà</button>
                  <input class="form-control" value={data.departmentNumber} aria-describedby="button-addon1" disabled />
                </div>
              </Grid>
              <Grid item xs={6} >
                <div class="input-group">
                  <button class="btn btn-dark infor-button-order" type="button" id="button-addon1" disabled>Phòng</button>
                  <input class="form-control" value={data.roomNumber} aria-describedby="button-addon1" disabled />
                </div>
              </Grid>
              <Grid item xs={12}>
                <div class="input-group">
                  <button class="btn btn-dark infor-button-order" type="button" id="button-addon1" disabled>Chi tiết địa chỉ </button>
                  <input class="form-control" value={`Số Phòng ${data.roomNumber}, Số Toà ${data.departmentNumber}, Số 512 đường Nguyễn Xiển,
  Phường Long Thạnh Mỹ, Quận 9, TP. Hồ Chí Minh`} aria-describedby="button-addon1" disabled />
                </div>
              </Grid>
            </Grid>

            <Grid container paddingTop={2}>

              <Grid item xs={12}>
                <h5>Thông tin đơn hàng</h5>
              </Grid>

              {cartItems.length === 0 ? (
                <p>Chưa có đơn hàng</p>
              ) : (

                cartItems.map((item) => (

                  <Grid container spacing={2} paddingTop={1} key={item.businessId}>
                    <Grid item xs={12}>
                      <Divider sx={{ borderBottomWidth: 3, backgroundColor: "black", }} />
                    </Grid>
                    <Grid item xs={12}>
                      <div class="input-group">
                        <button class="btn btn-dark infor-button-order" type="button" id="button-addon1" disabled>Ngày làm việc</button>
                        <input class="form-control" value={`${item.day}:${item.date}/${item.month}/2023`} aria-describedby="button-addon1" disabled />
                      </div>
                    </Grid>
                    <Grid item xs={6}>
                      <div class="input-group">
                        <button class="btn btn-dark infor-button-order" type="button" id="button-addon1" disabled>Thời gian</button>
                        <input class="form-control" value={item.hour} aria-describedby="button-addon1" disabled />
                      </div>
                    </Grid>
                    <Grid item xs={6}>
                      <div class="input-group">
                        <button class="btn btn-dark infor-button-order" type="button" id="button-addon1" disabled>Lặp lại</button>
                        <input class="form-control" value={item.frequency} aria-describedby="button-addon1" disabled />
                      </div>
                    </Grid>
                    <Grid item xs={12}>
                      <div class="input-group">
                        <button class="btn btn-dark infor-button-order" type="button" id="button-addon1" disabled>Chi tiết công việc</button>
                        <input class="form-control" value={`(${item.name} - ${item.type}) Ghi chú: ${item.note}, Giá: ${item.price}`} aria-describedby="button-addon1" disabled />
                      </div>
                    </Grid>

                  </Grid>
                ))
              )}
            </Grid>
            <Grid paddingTop={2}>
              <h5>Phương thức thanh toán</h5>
              <PaymentPicker onAddPayment={paymentHandler} />
              {payment === "Tiền mặt" ? (
                <div className="col-md-5 d-flex justify-content-center hh-payment">
                  <Button variant="contained" onClick={createBillHandler} startIcon={<BsFillSendCheckFill />}>
                    Đăng việc
                  </Button>
                </div>
              ) : (
                <PaypalCheckoutButton items={bill} />
              )}
            </Grid>
          </Card>
        </Container>

      </Box >

    </>
  );
};

export default OrderCheckout;
