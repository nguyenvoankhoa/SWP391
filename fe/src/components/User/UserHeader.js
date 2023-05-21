import React from "react";
import HeadingLine from "../HeadingLine";
import UserHeadingBar from "./UserHeadingBar";
const UserHeader = () => {
  return (
    <>
      <nav>
        <HeadingLine />
        <UserHeadingBar />
      </nav>
    </>
  );
};

export default UserHeader;
