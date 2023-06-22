import React from "react";
import { useNavigate } from "react-router-dom";
import { orderItemAction } from "../../redux/order";
import { useDispatch } from "react-redux";
import { Button } from "@mui/material";
const CashCheckoutButton = (props) => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const bill = props.items;
  const handlePayment = async () => {
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
    dispatch(orderItemAction.removeAllItems());
    nav("/user/order-completed");
  };
  return (
    <div className="col-md-12 d-flex justify-content-center">
      <Button
        variant="contained"
        onClick={handlePayment}
        sx={{
          fontFamily: "Montserrat",
          width: "30%",
          height: "30%",
          mt: 2,
          backgroundColor: "#397F77",
          color: "#ffffff",
          letterSpacing: "0.07rem",
          "&:hover": {
            backgroundColor: "#397F77",
          },
        }}
      >
        Cập nhật
      </Button>
    </div>

  );
};

export default CashCheckoutButton;
