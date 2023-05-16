import React from "react";
import Title from "./Title";

const Benefit = (props) => {
  return (
    <div className="col-6">
      <div className="container">
        <img src={props.image} alt="" />
        <Title
          title={props.title}
          fontSize={props.fontSize}
          fontWeight={props.fontWeight}
        />
        <p>{props.content}</p>
      </div>
    </div>
  );
};

export default Benefit;
