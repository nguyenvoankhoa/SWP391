import React from "react";
import { orderItemAction } from "../../redux/order";
import { useDispatch } from "react-redux";
import { Button, Grid } from "@mui/material";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const CashCheckoutButton = (props) => {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const bill = props.items;

  const handleOpen = async () => {
    const token = sessionStorage.getItem("jwtToken");
    const apiUrl = process.env.REACT_APP_API_URL;
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
      <Stack spacing={2} sx={{ width: "100%" }}>
        <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
          <Alert severity="success" sx={{ width: "100%" }}>
            Bạn đã đặt hàng thành công
          </Alert>
        </Snackbar>
      </Stack>
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
