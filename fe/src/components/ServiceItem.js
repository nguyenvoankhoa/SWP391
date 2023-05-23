import React from "react";
import Title from "./Title";
import Button from "../UI/Button";
import { Link } from "react-router-dom";
const ServiceItem = (props) => {
  return (
    <div className="col">
      <div className="card-service">
        <div className="card-item">
          <span className="dot">
            <img src={props.image} alt="img" />
          </span>
          <h5 className="card-title">{props.title}</h5>
          <p className="my-3">{props.content}</p>
          <Button
            backgroundColor="#D9D9D9"
            borderRadius="15px"
            padding="10px 50px"
          >
            <Link to={props.link} style={{ textDecoration: "none" }}>
              <Title
                color="#000000"
                title="Đặt ngay"
                fontSize="20px"
                fontWeight="700"
              />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ServiceItem;
