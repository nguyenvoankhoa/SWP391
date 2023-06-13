import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Grid, TextField, Paper } from "@mui/material";
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

export default function FabricCleaning() {
  const [value, setValue] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const data = useLoaderData();
  const FABRIC_CLEANING = data
    .filter((item) => item.name === "Vệ sinh nệm, sofa, thảm")
    .map((item) => ({
      id: item.serviceId,
      type: item.type,
      price: item.price,
      detail: item.detail,
    }));
  const optionalSofa = FABRIC_CLEANING.filter(
    (item) => item.type === "Sofa"
  ).map((item) => ({
    value: item.id,
    label: item.detail,
  }));

  const optionalNem = FABRIC_CLEANING.filter((item) => item.type === "Nệm").map(
    (item) => ({
      value: item.id,
      label: item.detail,
    })
  );

  const optionalTham = FABRIC_CLEANING.filter(
    (item) => item.type === "Thảm"
  ).map((item) => ({
    value: item.id,
    label: item.detail,
  }));
  const handleChange = (event, newValue) => {
    setValue(newValue);
    setShowForm(true);
  };

  React.useEffect(() => {
    setShowForm(true);
  }, []);

  const OptionalSection = ({ options }) => (
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
        <Title
          title="VỆ SINH SOFA, NỆM, THẢM"
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
                  <AntTab label="Sofa" />
                  <AntTab label="Nệm" />
                  <AntTab label="Thảm" />
                </AntTabs>
              </Box>
              {showForm && (
                <OptionalSection
                  options={
                    value === 0
                      ? optionalSofa
                      : value === 1
                      ? optionalNem
                      : optionalTham
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

              <button>Thêm vào giỏ hàng</button>
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
