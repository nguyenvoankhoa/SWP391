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
import { Link, useLoaderData } from "react-router-dom";
import Title from "../../components/Title";
import { useDispatch } from "react-redux";
import { orderItemAction } from "../../redux/order";
import Button from "@mui/material/Button";
import { BiCartAdd } from "react-icons/bi";

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

export default function ElectronicCleaning() {
  const [value, setValue] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const dispatch = useDispatch();
  const [selectedDate, setSelectedDate] = useState();
  const [selectedTime, setSelectedTime] = useState();
  const [selectedServiceId, setSelectedServiceId] = useState("");
  const [selectedFreq, setSelectedFreq] = useState("");
  const [note, setNote] = useState("");
  const data = useLoaderData();
  const DATA = data
    .filter((item) => item.name === "Vệ sinh máy lạnh")
    .map((item) => ({
      id: item.serviceId,
      type: item.type,
      price: item.price,
      detail: item.detail,
    }));
  const selectedService = DATA.find(
    (service) => service.id === selectedServiceId
  );
  const optionalTreoTuong = DATA.filter(
    (item) => item.type === "Treo tường"
  ).map((item) => ({
    value: item.id,
    label: item.detail,
  }));

  const optionalAmTran = DATA.filter((item) => item.type === "Âm trần").map(
    (item) => ({
      value: item.id,
      label: item.detail,
    })
  );
  const handleChange = (event, newValue) => {
    setValue(newValue);
    setShowForm(true);
  };

  useEffect(() => {
    setSelectedDate();
    setSelectedTime();
    setSelectedFreq();
    setSelectedServiceId();
    setNote("");
    setShowForm(true);
  }, [value]);
  const handleServiceChange = (event) => {
    setSelectedServiceId(() => event.target.value);
  };
  const handleNoteChange = (event) => {
    setNote(event.target.value);
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
      name: "Vệ sinh máy lạnh",
      note: note,
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
    <Grid container spacing={5} justifyContent="center" marginRight={1}>
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
        <TextField
          select
          label="Chọn tần suất"
          value={selectedFreq}
          onChange={(event) => setSelectedFreq(event.target.value)}
        >
          {CleanFreq.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
      </Grid>
    </Grid>
  );

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ bgcolor: "none", p: 2 }}>
        <Title
          title="VỆ SINH MÁY LẠNH"
          color="#397f77"
          fontSize="35px"
          fontWeight="1000"
          padding="1% 0 1% 0"
        />
        {showForm && (
          <Box
            component="div"
            sx={{
              "& .MuiTextField-root": { mt: 5, width: "30ch" },
              display: "flex",
              mt: 5,
            }}
            noValidate
            autoComplete="off"
            className="row"
          >
            <Paper
              className="col-lg-6 col-sm-12"
              sx={{
                flexGrow: 1,
                width: "50%",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                <AntTabs
                  value={value}
                  onChange={handleChange}
                  aria-label="ant example"
                >
                  <AntTab label="Treo tường" />
                  <AntTab label="Âm trần" />
                </AntTabs>
              </Box>
              {showForm && (
                <OptionalSection
                  options={value === 0 ? optionalTreoTuong : optionalAmTran}
                />
              )}

              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Grid container flex justifyContent={"center"}>
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
                        disablePast
                        sx={{ marginLeft: "27px" }}
                        value={selectedTime}
                        onChange={(time) => setSelectedTime(time)}
                        label="Chọn giờ"
                        format="hh:mm"
                        ampm={false}
                      />
                    </DemoItem>
                  </DemoContainer>
                </Grid>
                <div className="row justify-content-center mt-5">
                  <div className="col-11">
                    <div class="form-floating">
                      <textarea
                        style={{ marginLeft: "6%", width: "88%" }}
                        class="form-control"
                        placeholder="Leave a comment here"
                        onChange={handleNoteChange}
                      />
                      <label
                        for="floatingTextarea"
                        style={{ marginLeft: "7%", marginBottom: "4%" }}
                      >
                        Ghi chú
                      </label>
                    </div>
                  </div>
                </div>
                <Grid container flex sx={{ justifyContent: "center", m: 4 }}>
                  <Grid item xs={4}>
                    <Button variant="outlined" component={Link} to="/user">
                      Quay lại trang chủ
                    </Button>
                  </Grid>
                  <Grid item xs={5}>
                    <Button
                      variant="contained"  
                      onClick={addServiceHandler}
                      startIcon={<BiCartAdd />}
                      sx={{
                        backgroundColor: "#397F77",
                        color: "#ffffff",
                        "&:hover": {
                          backgroundColor: "#397F77",
                        },
                      }}
                    >
                      Thêm vào giỏ hàng
                    </Button>
                  </Grid>
                </Grid>
              </LocalizationProvider>
            </Paper>

            <div className="col-lg-5 col-sm-12">
              <OrderSumation />
            </div>
          </Box>
        )}
      </Box>
    </Box>
  );
}
