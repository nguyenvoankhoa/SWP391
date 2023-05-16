import React from "react";
import HeadingLine from "../components/HeadingLine";
import HeadingBar from "./HeadingBar";
import Seperator from "../UI/Seperator";
const Header = () => {
  return (
    <>
      <nav>
        <HeadingLine />
        <HeadingBar />
      </nav>
      <Seperator />
    </>
  );
};

export default Header;
