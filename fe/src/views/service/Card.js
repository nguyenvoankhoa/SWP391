import React from "react";

const Card = (props) => {
  return (
    <div className="col-3" style={{ margin: "0 35px" }}>
      <h3>{props.title}</h3>
      <p>{props.content}</p>
    </div>
  );
};

export default Card;
