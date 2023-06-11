import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import FabricCleaningForm from "./FabricCleaningForm";

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

const optionalSofa = [
  { value: "option1", label: "Sofa 1 ghế" },
  { value: "option2", label: "Sofa 2 ghế" },
];

const optionalNem = [
  { value: "option3", label: "Nhỏ hơn 2m" },
  { value: "option4", label: "Lớn hơn 2m" },
];

const optionalTham = [
  { value: "option5", label: "Thảm nhỏ ( < 1.5m )" },
  { value: "option6", label: "Thảm vừa ( 1.5m - 2m )" },
  { value: "option7", label: "Thảm lớn ( > 2m )" },
];

export default function FabricCleaning() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ bgcolor: "none", p: 2 }}>
        <h1 style={{ textAlign: "center", marginTop: "1%", fontFamily: "Montserrat" }}>Vệ Sinh Sofa, Nệm, Thảm</h1>
        {value === 0 && <FabricCleaningForm options={optionalSofa} />}
        {value === 1 && <FabricCleaningForm options={optionalNem} />}
        {value === 2 && <FabricCleaningForm options={optionalTham} />}
      </Box>
    </Box>
  );
}
