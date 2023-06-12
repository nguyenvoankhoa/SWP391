import React, { useState } from "react";
import Title from "../../components/Title";
import "./ActionRecord.css";
import { Link, useLoaderData } from "react-router-dom";
import UserHistory from "./UserHistory";
import UserOddShift from "./UserOddShift";
import UserPeriodic from "./UserPeriodic";
const ActionRecord = () => {
  const data = useLoaderData();
  console.log(data);
  const [option, setOption] = useState("Ca lẻ");
  const handleChangeOption = (option) => {
    setOption(option);
  };
  const oodShift = data.filter(
    (bill) => !bill.completeStatus && bill.frequency === ""
  );
  const periodic = data.filter(
    (bill) => !bill.completeStatus && bill.frequency != ""
  );
  const history = data.filter((bill) => bill.completeStatus === true);
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
              <Link
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
              </Link>
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
  const token = JSON.parse(sessionStorage.getItem("jwtToken"));
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
