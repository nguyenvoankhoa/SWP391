import React, { useState } from "react";
import { Button, Divider, Grid } from "@mui/material";
import "./OrderSumation.css";
import { useDispatch, useSelector } from "react-redux";
import { orderItemAction } from "../../redux/order";
import { Link } from "react-router-dom";
import { MdPayments } from "react-icons/md";
import { CiCircleRemove } from "react-icons/ci";

const OrderSumation = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.order.items);
  const totalAmount = useSelector((state) => state.order.totalAmount);
  return (
    <>
      <div className="hh-total col-md-6">
        <h5 className="text-center" style={{ fontFamily: "Montserrat", fontWeight: "lighter", fontSize: "28px" }}>Thông tin đơn hàng</h5>
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
                        <div style={{ width: 80 }}>
                          <h5 className="mb-0">
                            {order.quantity * order.price}
                          </h5>
                        </div>
                        <CiCircleRemove
                          style={{
                            fontSize: "20px",
                            color: "red",
                            cursor: "pointer"
                          }}
                          onClick={() =>
                            dispatch(
                              orderItemAction.removeItem(order.businessId)
                            )
                          } />

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
            Đơn giá: <span>{totalAmount} VNĐ</span>
          </p>

          <p>
            Thành tiền:
            <span>{totalAmount} VND</span>
          </p>
        </div>
        <Divider sx={{ borderBottomWidth: 1, backgroundColor: "black", marginBottom: "4%" }} />

        <Grid container>
          <Grid item xs={3} marginBottom={7}>

          </Grid>
          <Grid item xs={6}>
            <Link className="text-center" to="/user/order" style={{ textDecoration: "none", fontFamily: "Montserrat", fontWeight: "lighter", fontSize: "22px" }}>
              <Button variant="contained" color="primary" startIcon={<MdPayments color="white" />}>
                Thanh Toán
              </Button>
            </Link>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default OrderSumation;
