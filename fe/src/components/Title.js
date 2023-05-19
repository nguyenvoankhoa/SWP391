import React from "react";
import './Feedback.css';
const Title = (props) => {
  const color = props.color;
  const fontSize = props.fontSize;
  const fontWeight = props.fontWeight;
  return (
    <div
      style={{ color: color, fontSize: fontSize, fontWeight: fontWeight }}
      className="text-center"
    >
      {props.title}
    </div>
  );
};

export default Title;
