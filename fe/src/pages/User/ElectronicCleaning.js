import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Grid, TextField, Paper, Typography, Button } from "@mui/material";
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

const AntTabs = styled(Tabs)({
  "& .MuiTabs-indicator": {
    backgroundColor: "none",
  },
});

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

const optionalTreoTuong = [
  { value: "option1", label: "Dưới 2HP" },
  { value: "option2", label: "Trên 2HP" },
];

const optionalAmTran = [
  { value: "option3", label: "Dưới 3HP" },
  { value: "option4", label: "Trên 3HP" },
];

export default function ElectronicCleaning() {
  const [value, setValue] = useState(0);
  const [showForm, setShowForm] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setShowForm(true);
  };

  React.useEffect(() => {
    setShowForm(true);
  }, []);

  const [selectedPayment, setSelectedPayment] = useState("Tiền mặt");
  const paymentHandler = (payment) => {
    setSelectedPayment(payment);
  };

  const OptionalSelect = ({ options }) => (
    <>
      <Grid container spacing={2} justifyContent="left" marginRight={1}>
        <Grid item>
          <TextField label="Chọn dịch vụ" select>
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
    </>
  );

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ bgcolor: "none", p: 2 }}>
        <h1
          style={{
            textAlign: "center",
            marginTop: "1%",
            fontFamily: "Montserrat",
          }}
        >
          Vệ Sinh Máy Lạnh
        </h1>
        {showForm && (
          <Box
            component="div"
            sx={{
              "& .MuiTextField-root": { mt: 5, width: "30ch", ml: 5 },
              display: "flex",
              mt: 5
            }}
            noValidate
            autoComplete="off"
          >
            <Paper
              className="col-md-6"
              sx={{
                flexGrow: 1,
                width: "30%",
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
                  <AntTab label="Máy lạnh treo tường" />
                  <AntTab label="Máy lạnh âm trần" />
                </AntTabs>
              </Box>
              {showForm && (
                <OptionalSelect
                  options={
                    value === 0
                      ? optionalTreoTuong
                      : value === 1
                      ? optionalAmTran
                      : []
                  }
                />
              )}

              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer
                  components={["DatePicker"]}
                  sx={{
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
              <Button
                variant="contained"
                sx={{
                  width: "87%",
                  height: "10%",
                  mt: 6,
                  mb: 8,
                  ml: 5,
                  backgroundColor: "#397F77",
                  color: "#ffffff",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  "&:hover": {
                    backgroundColor: "#397F77",
                  },
                }}
              >
                Hoàn tất đơn hàng
              </Button>
            </Paper>
            <div
              className="col-5"
              style={{
                display: "flex",
                position: "initial"
              }}
            >
              <OrderSumation />
            </div>
          </Box>
        )}
      </Box>
    </Box>
  );
}
