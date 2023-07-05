import React, { useEffect, useState } from "react";
import Title from "../../../components/Title";
import { useLoaderData } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Paper, TableContainer, TablePagination } from "@mui/material";
import OddShiftTable from "../../../components/User/OddShiftTable";
import PeriodicTable from "../../../components/User/PeriodicTable";
const ActionRecord = () => {
  const odd = useLoaderData();
  const [data, setData] = useState([]);
  const billLoader = async () => {
    const token = sessionStorage.getItem("jwtToken");
    const user = JSON.parse(sessionStorage.getItem("user"));
    const request = {
      id: user.id,
    };
    const apiUrl = process.env.REACT_APP_API_URL;
    const res = await fetch(apiUrl + "customer/periodic-orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(request),
    });
    if (!res.ok) {
      throw new Error("Error");
    }
    const responseData = await res.json();
    setData(responseData);
  };

  useEffect(() => {
    billLoader();
  }, []);
  const [option, setOption] = useState("Ca lẻ");
  const [value, setValue] = useState(0);
  const DATA_FILTER = odd.filter(
    (bill) => bill.business.name === "Tổng vệ sinh"
  );
  const oodShift = DATA_FILTER.filter(
    (bill) => !bill.completeStatus && bill.frequency === "Một lần"
  );
  const periodic = data.filter(
    (bill) =>
      !bill.completeStatus &&
      bill.frequency !== "Một lần" &&
      bill.business.name === "Tổng vệ sinh"
  );

  const [table, setTable] = useState(oodShift);
  const handleChangeOption = (option) => {
    setOption(option);
    if (option === "Ca lẻ") {
      setTable(oodShift);
    } else {
      setTable(periodic);
    }
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
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
  const columnOddShift = [
    { id: "type", label: "Loại", minWidth: 170 },
    { id: "date", label: "Ngày", minWidth: 170 },
    { id: "staff", label: "Nhân viên", minWidth: 170 },
    { id: "transaction", label: "Giao dịch", minWidth: 170 },
    { id: "total", label: "Tổng cộng", minWidth: 170 },
  ];
  const columnPeriodic = [
    { id: "type", label: "Loại", minWidth: 170 },
    { id: "date", label: "Ngày", minWidth: 170 },
    { id: "staff", label: "Nhân viên", minWidth: 170 },
    { id: "transaction", label: "Giao dịch", minWidth: 170 },
    { id: "total", label: "Tổng cộng", minWidth: 170 },
    { id: "cancel", label: "Hủy định kỳ", minWidth: 170 },
  ];

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      <Title
        title="HOẠT ĐỘNG"
        color="#397F77"
        fontSize="35px"
        fontWeight="1000"
        padding="1% 0 0  0"
      />
      <Paper
        className="container"
        sx={{
          marginTop: 3,
          width: "90%",
          overflow: "hidden",
          justifyContent: "center",
          display: "flex-end",
        }}
      >
        <TableContainer sx={{ maxHeight: 440}}>
          <AntTabs
            value={value}
            onChange={handleChange}
            aria-label="ant example"
          >
            <AntTab label="Ca lẻ" onClick={() => handleChangeOption("Ca lẻ")} />
            <AntTab
              label="Định kì"
              onClick={() => handleChangeOption("Định kỳ")}
            />
          </AntTabs>
          {option === "Ca lẻ" && (
            <OddShiftTable table={oodShift} column={columnOddShift} />
          )}
          {option === "Định kỳ" && (
            <PeriodicTable table={periodic} column={columnPeriodic} />
          )}
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 15]}
          component="div"
          count={table.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          classes={{
            selectLabel: "custom-select-label",
            displayedRows: "custom-displayed-rows",
          }}
        />
      </Paper>
    </>
  );
};

export default ActionRecord;
