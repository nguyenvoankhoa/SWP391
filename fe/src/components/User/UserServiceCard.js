import React from "react";
import Card from "../../UI/Card";
import { Link } from "react-router-dom";
import Title from "../Title";
const UserServiceCard = (props) => {
  return (
    <div className="col-lg-6 col-sm-12 py-5 px-5">
      <Card>
        <Link style={{ textDecoration: "none" }} to={props.link}>
          <div className="d-flex justify-content-center">
            <img src={props.img} alt="img" />
          </div>

          <Title
            title={props.title}
            color="#000000"
            fontSize="20px"
            fontWeitgh="600"
          />
        </Link>
      </Card>
    </div>
  );
};

export default UserServiceCard;
