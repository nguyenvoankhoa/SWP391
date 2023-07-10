import React from "react";
import { useDispatch } from "react-redux";
import { Button, Grid } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Link } from "react-router-dom";
import Slide from "@mui/material/Slide";
import { HiOutlineCheckBadge } from "react-icons/hi2";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CashCheckoutButton = (props) => {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const bill = props.items;

  const handleOpen = async () => {
    const token = sessionStorage.getItem("jwtToken");
    const apiUrl = process.env.REACT_APP_API_URL;
    console.log(bill);
    const res = await fetch(apiUrl + "customer/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(bill),
    });

    if (res.status === 400) {
      alert("Bạn đã đặt đơn hàng này");
    } else {
      setOpen(true);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Grid container spacing={0} marginTop={3}>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle sx={{ alignItems: "center" }}>
          {"Đơn hàng đã hoàn tất"}
        </DialogTitle>
        <DialogContent sx={{ alignItems: "center" }}>
          <DialogContentText
            id="alert-dialog-slide-description"
            style={{
              fontSize: "39px",
              color: "green",
            }}
          >
            <HiOutlineCheckBadge />
          </DialogContentText>

          <DialogContentText id="alert-dialog-slide-description">
            Cảm ơn bạn tin tưởng và sử dụng dịch vụ của chúng tôi
          </DialogContentText>
        </DialogContent>

        <DialogActions>
          <Button component={Link} to="/user">
            Trang chủ
          </Button>
        </DialogActions>
      </Dialog>

      <Grid item xs={12}>
        <p>Thanh toán sau khi nhân viên đã hoàn thành công việc</p>
      </Grid>
      <Grid item xs={12} container flex justifyContent={"center"}>
        <Button
          variant="contained"
          onClick={() => handleOpen()}
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
      </Grid>
    </Grid>
  );
};

export default CashCheckoutButton;
