import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { Grid, TextField, Paper, Autocomplete } from "@mui/material";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import MenuItem from "@mui/material/MenuItem";
import { styled } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import "./ElectronicCleaning.css";
import OrderSumation from "./OrderSumation";
import { useLoaderData } from "react-router-dom";
import Title from "../../components/Title";
import { useDispatch } from "react-redux";
import { orderItemAction } from "../../redux/order";

const AntTabs = styled(Tabs)({});

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
    fontFamily: "Montserrat, sans-serif",
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

const CleanFreq = ["Hàng tuần", "Hàng tháng", "Một lần"];

export default function FabricCleaning() {
  const [value, setValue] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const dispatch = useDispatch();
  const [selectedDate, setSelectedDate] = useState();
  const [selectedTime, setSelectedTime] = useState();
  const [selectedServiceId, setSelectedServiceId] = useState("");
  const [selectedFreq, setSelectedFreq] = useState("");
  const data = useLoaderData();
  const DATA = data
    .filter((item) => item.name === "Vệ sinh nệm, sofa, thảm")
    .map((item) => ({
      id: item.serviceId,
      type: item.type,
      price: item.price,
      detail: item.detail,
    }));
  const selectedService = DATA.find(
    (service) => service.id === selectedServiceId
  );
  const optionalNem = DATA.filter((item) => item.type === "Nệm").map(
    (item) => ({
      value: item.id,
      label: item.detail,
    })
  );

  const optionalTham = DATA.filter((item) => item.type === "Thảm").map(
    (item) => ({
      value: item.id,
      label: item.detail,
    })
  );

  const optionalSofa = DATA.filter((item) => item.type === "Sofa").map(
    (item) => ({
      value: item.id,
      label: item.detail,
    })
  );
  console.log(optionalSofa);
  const handleChange = (event, newValue) => {
    setValue(newValue);
    setShowForm(true);
  };

  useEffect(() => {
    setShowForm(true);
  }, []);
  const handleServiceChange = (event) => {
    setSelectedServiceId(() => event.target.value);
  };

  const addServiceHandler = () => {
    const date = selectedDate.$D;
    const dayParse = new Date(selectedDate.$d);
    const day = dayParse.toLocaleDateString("en-US", { weekday: "long" });
    const month = selectedDate.$M;
    const timeParse = new Date(selectedTime.$d);
    const hour = timeParse.getHours() + ":" + timeParse.getMinutes();
    let frequency;
    if (selectedFreq === "Hàng tuần") {
      frequency = "Weekly";
    } else if (selectedFreq === "Hàng tháng") {
      frequency = "Monthly";
    } else {
      frequency = "Once";
    }
    let service = {
      businessId: selectedService.id,
      date: date,
      month: month + 1,
      day: day,
      hour: hour,
      frequency: frequency,
      quantity: 1,
      price: selectedService.price,
      type: selectedService.type,
    };
    dispatch(orderItemAction.addItem(service));
  };

  const OptionalSection = ({ options }) => (
    <Grid container spacing={2} justifyContent="left" marginRight={1}>
      <Grid item>
        <TextField
          label="Chọn dịch vụ"
          select
          value={selectedService ? selectedService.id : ""}
          onChange={handleServiceChange}
        >
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </Grid>
      <Grid item>
        <Autocomplete
          value={selectedFreq === "" ? null : selectedFreq}
          onChange={(event, freq) => setSelectedFreq(freq)}
          disablePortal
          id="combo-box-demo"
          options={CleanFreq}
          sx={{ width: 400 }}
          renderInput={(params) => (
            <TextField {...params} label="Chọn loại vệ sinh" />
          )}
        />
      </Grid>
    </Grid>
  );

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ bgcolor: "none", p: 2 }}>
        <Title
          title="VỆ SINH MÁY LẠNH"
          color="white"
          fontSize="35px"
          fontWeight="1000"
          padding="1% 0 1% 0"
        />
        {showForm && (
          <Box
            component="div"
            sx={{
              "& .MuiTextField-root": { mt: 5, width: "30ch", ml: 5 },
              display: "flex",
              mt: 5,
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
                  <AntTab label="Nệm" />
                  <AntTab label="Sofa" />
                  <AntTab label="Thảm" />
                </AntTabs>
              </Box>
              {showForm && (
                <OptionalSection
                  options={
                    value === 0
                      ? optionalNem
                      : value === 1
                      ? optionalSofa
                      : optionalTham
                  }
                />
              )}

              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["DatePicker"]}>
                  <DemoItem>
                    <DatePicker
                      disablePast
                      label="Chọn ngày"
                      format="DD/MM/YYYY"
                      value={selectedDate}
                      onChange={(date) => setSelectedDate(date)}
                    />
                  </DemoItem>
                  <DemoItem>
                    <TimePicker
                      value={selectedTime}
                      onChange={(time) => setSelectedTime(time)}
                      label="Chọn giờ"
                      format="hh:mm"
                      ampm={false}
                    />
                  </DemoItem>
                </DemoContainer>
              </LocalizationProvider>

              <button onClick={addServiceHandler}>Thêm vào giỏ hàng</button>
            </Paper>
            <div
              className="col-5"
              style={{
                display: "flex",
                position: "initial",
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
