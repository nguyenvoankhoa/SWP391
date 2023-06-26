import React, { useState } from "react";
import { Link } from "react-router-dom";
import { orderItemAction } from "../../redux/order";
import { useDispatch } from "react-redux";
import { Button, Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const CashCheckoutButton = (props) => {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();
  const bill = props.items;
  const handlePayment = async () => {
    console.log(bill);
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
    if (res.status === 400) {
      alert("Bạn đã đặt đơn hàng này");
    } else {
      setOpen(true);
    }
    dispatch(orderItemAction.removeItem());
  };
  return (
    <Grid container spacing={0} marginTop={3}>
      <Grid item xs={12}>
        <p>Thanh toán sau khi nhân viên đã hoàn thành công việc</p>
      </Grid>
      <Grid item xs={12} container flex justifyContent={"center"}>
        <Button
          variant="contained"
          // onClick={handleOpen}
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
          Thanh toán
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Grid container flex justifyContent={"center"}>
              <Grid item xs={12} container flex justifyContent={"center"}>
                <img
                  src="/assets/images/order-completed.svg"
                  alt="order-completed"
                  style={{
                    width: "5vw",
                    height: "5vw",
                  }}
                ></img>
              </Grid>
              <Grid>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  ĐƠN HÀNG ĐÃ HOÀN TẤT
                </Typography>
              </Grid>
              <Grid>
                <p>Cảm ơn bạn đã sử dụng dịch vụ</p>
              </Grid>
              <Grid>
                <Button
                  component={Link}
                  to="/user"
                  variant="contained"
                  color="primary"
                  style={{
                    backgroundColor: "teal",
                    color: "white",
                    "&:hover": {
                      backgroundColor: "darkslateblue",
                    },
                  }}
                >
                  Trang chủ
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Modal>
      </Grid>
    </Grid>
  );
};

export default CashCheckoutButton;
