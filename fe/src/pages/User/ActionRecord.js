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

const ActionRecord = () => {
  const data = useLoaderData();
  const [option, setOption] = useState("Ca lẻ");
  const handleChangeOption = (option) => {
    setOption(option);
  };
  const oodShift = data.filter(
    (bill) => !bill.completeStatus && bill.frequency === "Once"
  );
  const periodic = data.filter(
    (bill) => !bill.completeStatus && bill.frequency !== "Once"
  );
  const history = data.filter((bill) => bill.completeStatus === true);

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
      <div
        className="container"
        style={{
          height: "auto",
        }}
      >
        <Title
          title="HOẠT ĐỘNG"
          color="white"
          fontSize="35px"
          fontWeight="1000"
          padding="3% 0 0  0"
        />
        <div className="row justify-content-center">
          <div className="row col-10 ar-content">
            <div className="row ar-nav">
              {/* <Link
                className="col-4 p-0 navigate"
                onClick={() => handleChangeOption("Ca lẻ")}
              >
                Ca lẻ
              </Link>
              <Link
                className="col-4 p-0 navigate"
                onClick={() => handleChangeOption("Định kỳ")}
              >
                Định kỳ
              </Link>
              <Link
                className="col-4 p-0 navigate"
                onClick={() => handleChangeOption("Lịch sử")}
              >
                Lịch sử
              </Link> */}
              <div>
                <AntTabs
                  value={option}
                  onChange={handleChangeOption}
                  aria-label="ant example"
                >
                  <AntTab label="Ca lẻ" />
                  <AntTab label="Định kỳ" />
                  <AntTab label="Lịch sử" />
                </AntTabs>
              </div>
            </div>
            <div className="col-md-12 ar-list p-0">
              {option === "Lịch sử" && <UserHistory list={history} />}
              {option === "Ca lẻ" && <UserOddShift list={oodShift} />}
              {option === "Định kỳ" && <UserPeriodic list={periodic} />}
            </div>
          </div>
        </div>
      </div>
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
