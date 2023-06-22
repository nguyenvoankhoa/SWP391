import React from "react";
import { useNavigate } from "react-router-dom";
import { orderItemAction } from "../../redux/order";
import { useDispatch } from "react-redux";
import { Button, Grid } from "@mui/material";

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
    <Grid container spacing={0} marginTop={3}>
      <Grid item xs={12}>
        <p>Thanh toán sau khi nhân viên đã hoàn thành công việc</p>
      </Grid>
      <Grid item xs={12} container flex justifyContent={"center"}>
        <Button
          variant="contained"
          onClick={handlePayment}
          sx={{
            fontFamily: "Montserrat",
            backgroundColor: "#397F77",
            color: "#ffffff",
            letterSpacing: "0.07rem",
            width: "250px",
            "&:hover": {
              backgroundColor: "#397F77",
            },
          }}
        >
          Cập nhật
        </Button>
      </Grid>
    </Grid>





  );
};

export default CashCheckoutButton;
