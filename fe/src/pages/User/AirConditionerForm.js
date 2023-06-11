import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Grid, TextField, Paper, Typography } from "@mui/material";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import MenuItem from "@mui/material/MenuItem";
import PaymentPicker from "../../components/User/PaymentPicker";
import './ElectronicCleaning.css'

const AirConditionerForm = ({ options }) => {
  React.state = {
    payMethod: ["PayPal", "Tiền mặt"]
  };
  const [selectedPayment, setSelectedPayment] = useState("Tiền mặt");
  const paymentHandler = (payment) => {
    setSelectedPayment(payment);
  };
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { mt: 5, width: "30ch", ml: 5 },
        display: "flex",
      }}
      noValidate
      autoComplete="off"
    >
      <div
        className="col-md-6 offset-md-2"
        style={{
          flexGrow: 1,
        }}
      >
        <Grid
          container
          spacing={2}
          alignItems="center"
          display="inline-flex"
          justifyContent="center"
        >
          <Grid item>
            <TextField
              id="outlined-select-currency"
              label="Chọn dịch vụ"
              select
            >
              {options.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item>
            <TextField
              label="Số lượng"
              type="number"
              inputProps={{
                min: 0,
              }}
              defaultValue={0}
            />
          </Grid>
        </Grid>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer
            components={["DatePicker"]}
            sx={{
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <DemoItem>
              <DatePicker
                disablePast
                views={["year", "month", "day"]}
                label="Chọn ngày"
                format="DD/MM/YYYY"
              />
            </DemoItem>
            <DemoItem>
              <TimePicker
                disablePast
                views={["hours", "minutes"]}
                label="Chọn giờ"
                format="hh:mm"
                ampm={false}
              />
            </DemoItem>
          </DemoContainer>
        </LocalizationProvider>
        <div className="ec-content row payment">
          <div className="col-md-6 offset-md-1 ec-payment">
            <PaymentPicker onAddPayment={paymentHandler} />
          </div>
        </div>

      </div>
      <div
        className="col-4"
        style={{
          display: "flex",
          position: "initial",
        }}
      >
        <Paper sx={{ p: 3, width: 400, mt: 5, ml: 3 }}>
          <Typography
            variant="h6"
            sx={{
              color: "#397F77",
              fontFamily: "Montserrat",
              textAlign: "center",
            }}
          >
            Thông tin đơn hàng
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "black", fontFamily: "Montserrat", mt: 2 }}
          >
            Vệ sinh máy lạnh treo tường
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "black",
              fontFamily: "Montserrat",
              mt: 2,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span>Số lượng:</span>
            <span>1</span>
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "black",
              fontFamily: "Montserrat",
              mt: 2,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span>Thời gian thợ đến:</span>
            <span>16:00</span>
          </Typography>
          <hr sx={{ borderTop: "1px solid lightgrey", my: 1 }} />
          <Typography
            variant="body1"
            sx={{
              display: "flex",
              justifyContent: "space-between",
              color: "grey",
              fontFamily: "Montserrat",
              mt: 2,
            }}
          >
            <span>Đơn giá:</span>
            <span>200.000 VNĐ</span>
          </Typography>
          <Typography
            variant="body1"
            sx={{
              display: "flex",
              justifyContent: "space-between",
              color: "grey",
              fontFamily: "Montserrat",
              mt: 2,
            }}
          >
            <span>VAT:</span>
            <span>10%</span>
          </Typography>
          <Typography
            variant="body1"
            sx={{
              display: "flex",
              justifyContent: "space-between",
              color: "grey",
              fontFamily: "Montserrat",
              mt: 2,
            }}
          >
            <span>Thành tiền:</span>
            <span>220.000 VNĐ</span>
          </Typography>
          <hr sx={{ borderTop: "1px solid lightgrey", my: 1 }} />
          <Typography
            variant="body1"
            sx={{
              display: "flex",
              justifyContent: "space-between",
              color: "black",
              fontFamily: "Montserrat",
              mt: 2,
              fontWeight: "bolder",
            }}
          >
            TỔNG <br /> GIÁ TRỊ <br /> ĐƠN HÀNG{" "}
            <span style={{ fontSize: "22px", color: "#397F77" }}>
              220.000 <br /> VNĐ
            </span>
          </Typography>
        </Paper>
      </div>
    </Box>
  );
};

export default AirConditionerForm;
