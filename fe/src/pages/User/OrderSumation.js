import React, { useState } from "react";
import { Button, Divider, Grid } from "@mui/material";
import "./OrderSumation.css";
import { useDispatch, useSelector } from "react-redux";
import { orderItemAction } from "../../redux/order";
import { Link } from "react-router-dom";
import { MdPayments } from "react-icons/md";
import { BsFillBackspaceFill } from "react-icons/bs";

const OrderSumation = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.order.items);
  const totalAmount = useSelector((state) => state.order.totalAmount);
  return (
    <>
      <div className="hh-total col-md-6">
        <h5
          className="text-center"
          style={{
            fontFamily: "Montserrat",
            fontWeight: "lighter",
            fontSize: "28px",
          }}
        >
          Thông tin đơn hàng
        </h5>
        <div className="total-infor">
          {cartItems.length === 0 ? (
            <p>Chưa có thông tin</p>
          ) : (
            cartItems.map((order) => (
              <div key={order.type}>
                <div className="card mb-3">
                  <div className="card-body">
                    <div className="d-flex justify-content-between">
                      <div className="d-flex flex-row align-items-center">
                        <div className="ms-3">
                          <h5>{order.name}</h5>
                          <p className="small mb-0">{order.type}</p>
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center">
                        <div style={{ width: 100 }}>
                          <h5
                            className="mb-0"
                            style={{
                              fontSize: "15px",
                              marginTop: "2rem",
                              marginRight: "10%",
                            }}
                          >
                            {order.price.toLocaleString()} VNĐ
                          </h5>
                        </div>
                        <BsFillBackspaceFill
                          style={{
                            fontSize: "20px",
                            color: "#cc0000",
                            cursor: "pointer",
                            marginTop: "2rem",
                          }}
                          onClick={() =>
                            dispatch(
                              orderItemAction.removeItem(order.businessId)
                            )
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        <Divider sx={{ borderBottomWidth: 1, backgroundColor: "black" }} />
        <div className="total-cost">
          <p>
            Đơn giá: <span>{totalAmount.toLocaleString()} VNĐ</span>
          </p>

          <p>
            Thành tiền:
            <span>{totalAmount.toLocaleString()} VND</span>
          </p>
        </div>
        <Divider
          sx={{
            borderBottomWidth: 1,
            backgroundColor: "black",
            marginBottom: "4%",
          }}
        />

        <Grid container>
          <Grid item xs={3} marginBottom={7}></Grid>
          <Grid item xs={6}>
            <Link
              className="text-center"
              to="/user/order"
              style={{
                textDecoration: "none",
                fontFamily: "Montserrat",
                fontWeight: "lighter",
                fontSize: "22px",
              }}
            >
              <Button
                variant="contained"
                startIcon={<MdPayments color="white" />}
                sx={{
                  backgroundColor: "#397F77",
                  color: "#ffffff",
                  "&:hover": {
                    backgroundColor: "#397F77",
                  },
                }}
              >
                Thanh toán
              </Button>
            </Link>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default OrderSumation;
