import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import AirConditionerForm from "./AirConditionerForm";

const AntTabs = styled(Tabs)({
  "& .MuiTabs-indicator": {
    backgroundColor: "#1890ff",
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
    setShowForm(newValue === 0);
  };

  React.useEffect(() => {
    setShowForm(true);
  }, []);

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ bgcolor: "#fff", p: 2 }}>
        <h1 style={{ textAlign: "center", marginTop: "1%" }}>
          Vệ Sinh Máy Lạnh
        </h1>
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
            style={{
              marginTop: "1%",
            }}
          >
            <AntTab label="Máy Lạnh Treo Tường" />
            <AntTab label="Máy Lạnh Âm Trần" />
          </AntTabs>
        </Box>
        {showForm && <AirConditionerForm options={optionalTreoTuong} />}

        {value === 1 && <AirConditionerForm options={optionalAmTran} />}
      </Box>
    </Box>
  );
}
