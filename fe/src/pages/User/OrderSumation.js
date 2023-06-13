import React, { useState } from "react";
import { Divider } from "@mui/material";
import "./OrderSumation.css";
import { useDispatch, useSelector } from "react-redux";
import { orderItemAction } from "../../redux/order";
const OrderSumation = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.order.items);
  const totalAmount = useSelector((state) => state.order.totalAmount);
  const [discount, setDiscount] = useState(null);
  const discountHandler = () => {
    setDiscount(10);
  };

  return (
    <>
      <div className="hh-total col-md-4">
        <h5 className="text-center">Thông tin đơn hàng</h5>
        <div className="total-infor">
          {cartItems.length === 0 ? (
            <p>Chưa có thông tin</p>
          ) : (
            cartItems.map((order) => (
              <p key={order.type}>
                <p>{order.type}</p>
                <p>Số lượng: {order.quantity}</p>
                <img
                  type="button"
                  src="/assets/images/remove.svg"
                  alt="remove"
                  style={{
                    width: "18px",
                  }}
                  onClick={() =>
                    dispatch(orderItemAction.removeItem(order.businessId))
                  }
                />
              </p>
            ))
          )}
        </div>
        <Divider sx={{ borderBottomWidth: 1, backgroundColor: "black" }} />
        <div className="total-cost">
          <p>
            Đơn giá: <span>{totalAmount} VNĐ</span>
          </p>
          <input
            placeholder="Mã giảm giá"
            className="inputDiscount"
            name="email"
            type="text"
          />
          <button className="apply-discount" onClick={discountHandler}>
            Ap dung
          </button>
          {discount && <p>Giam gia : {discount}%</p>}
          <p>
            Thành tiền:
            <span>{totalAmount - (totalAmount * discount) / 100} VND</span>
          </p>
        </div>
        <Divider sx={{ borderBottomWidth: 1, backgroundColor: "black" }} />
        <div className="total-sumup">
          <h5>
            <span>Tổng</span>
            <span>Giá trị</span>
            <span>Đơn hàng</span>
          </h5>
          <h4>
            {totalAmount - (totalAmount * discount) / 100}
            <span>VNĐ</span>
          </h4>
        </div>
      </div>
    </>
  );
};

export default OrderSumation;
