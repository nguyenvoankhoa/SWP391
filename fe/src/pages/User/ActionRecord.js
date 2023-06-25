import React, { useState } from "react";
import Title from "../../components/Title";
import "./ActionRecord.css";
import { Link, useLoaderData } from "react-router-dom";
import UserHistory from "./UserHistory";
import UserOddShift from "./UserOddShift";
import UserPeriodic from "./UserPeriodic";
import { styled } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import {Paper,} from "@mui/material";
const ActionRecord = () => {
  const data = useLoaderData();
  const [option, setOption] = useState("Ca lẻ");
  const [value, setValue] = useState(0);
  const handleChangeOption = (option) => {
    setOption(option);
  };
  console.log(data);
  const oodShift = data.filter(
    (bill) => !bill.completeStatus && bill.frequency === "Once"
  );
  const periodic = data.filter(
    (bill) => !bill.completeStatus && bill.frequency !== "Once"
  );
  const history = data.filter((bill) => bill.completeStatus === true);
  console.log(history);

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
  return (
    <>
      <Title
        title="HOẠT ĐỘNG"
        color="#397F77"
        fontSize="35px"
        fontWeight="1000"
        padding="3% 0 0  0"
      />
      <Paper className="container"
        sx={{
          marginTop: 5,
          marginLeft: 3,
          width: "90%",
          overflow: "hidden",
          justifyContent: "center",
          display: "flex-end",
        }}
      >
      
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
          <div className="col-md-12 ar-list p-0 table-responsive table-wrapper-scroll-y w-100  my-custom-scrollbar">
            {option === "Lịch sử" && <UserHistory list={history} />}
            {option === "Ca lẻ" && <UserOddShift list={oodShift} />}
            {option === "Định kỳ" && <UserPeriodic list={periodic} />}

            {/* <Table>
              <TableHead>
                <TableRow>
                  {column.map((column) => (
                    <TableCell key={column.id} align="center">
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {(rowsPerPage > 0
                  ? rows.slice(
                      page * rowsPerPage,
                      page * rowsPerPage + rowsPerPage
                    )
                  : rows
                ).map((row) => (
                  <TableRow key={row.id} hover role="checkbox" tabIndex={-1}>
                    <TableCell align="left" style={{ paddingLeft: "5%" }}>
                      {row.service}
                    </TableCell>
                    <TableCell align="left" style={{ paddingLeft: "3%" }}>
                      {row.type}
                    </TableCell>
                    <TableCell align="center">{row.date}</TableCell>
                    <TableCell align="center">{row.staff}</TableCell>
                    <TableCell align="center">{row.transaction}</TableCell>
                    <TableCell align="center">{row.total}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table> */}
          </div>
        {/* <TablePagination 
          rowsPerPageOptions={[10, 15]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          classes={{
            selectLabel: 'custom-select-label',
            displayedRows: 'custom-displayed-rows'
          }}
        /> */}
      </Paper>
    </>
  );
};

export default ActionRecord;

export async function billLoader() {
  const token = sessionStorage.getItem("jwtToken");
  const user = JSON.parse(sessionStorage.getItem("user"));
  const request = {
    id: user.id,
  };
  const res = await fetch(
    "https://swp391-production.up.railway.app/customer/orders",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(request),
    }
  );
  if (!res.ok) {
    throw new Error("error");
  } else {
    const data = await res.json();
    return data;
  }
}
