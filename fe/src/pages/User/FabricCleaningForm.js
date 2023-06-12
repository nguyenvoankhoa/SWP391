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
import { styled } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import "./ElectronicCleaning.css";
import OrderSumation from "./OrderSumation";


const FabricCleaningForm = ({ selectedTab, onTabChange, options }) => {
  React.state = {
    payMethod: ["PayPal", "Tiền mặt"],
  };
  const [selectedPayment, setSelectedPayment] = useState("Tiền mặt");
  const paymentHandler = (payment) => {
    setSelectedPayment(payment);
  };
  const AntTabs = styled(Tabs)(({ theme }) => ({
    "& .MuiTabs-indicator": {
      backgroundColor: "#1890ff",
    },
    "& .MuiTab-root": {
      minWidth: "auto",
      [theme.breakpoints.up("sm")]: {
        minWidth: "auto",
      },
    },
  }));

  const AntTab = styled((props) => <Tab disableRipple {...props} />)(
    ({ theme }) => ({
      textTransform: "none",
      minWidth: 0,
      [theme.breakpoints.up("sm")]: {
        minWidth: 0,
      },
      fontWeight: theme.typography.fontWeightRegular,
      marginRight: theme.spacing(2),
      color: "rgba(0, 0, 0, 0.85)",
      fontFamily: [
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
      "&:hover": {
        color: "#40a9ff",
        opacity: 1,
      },
      "&.Mui-selected": {
        color: "#1890ff",
        fontWeight: theme.typography.fontWeightMedium,
      },
      "&.Mui-focusVisible": {
        backgroundColor: "#d1eaff",
      },
    })
  );
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { mt: 5, width: "30ch", ml: 5 },
        display: "flex",
        mt:5,
      }}
      noValidate
      autoComplete="off"
    >
      <Paper
        className="col-md-6 "
        sx={{
          flexGrow: 1,
          width: "50%",
          ml: 4,
          mr: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            textAlign: "center",
            marginLeft: 25,
            marginTop: "1%",
          }}
        >
          <AntTabs
            value={value}
            onChange={handleChange}
            aria-label="ant example"
          >
            <AntTab label="Sofa" />
            <AntTab label="Nệm" />
            <AntTab label="Thảm" />
          </AntTabs>
        </Box>
        <Grid container spacing={2} justifyContent="left" marginRight={1}>
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
              // alignItems: "center",
              // display: "flex",
              // justifyContent: "center",
              marginRight: 1,
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
          <div className="col-md-12 ec-payment">
            <PaymentPicker onAddPayment={paymentHandler} />
          </div>
        </div>
      </Paper>
      <div
        className="col-5"
        style={{
          display: "flex",
          position: "initial",
        }}
      >
        <OrderSumation/>
      </div>
      
    </Box>
  );
};

export default FabricCleaningForm;
