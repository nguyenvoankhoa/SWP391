import React from "react";
import Card from "../UI/Card";
const ContactInfo = (props) => {
  return (
    <div className="col-lg-4 col-sm-12 mb-4">
      <Card>
        <div className="row">
          <div className="col-4 d-flex justify-content-center align-items-center">
            <img src={props.image} alt="" className="w-100" />
          </div>
          <div className="col-8">
            <h5>{props.title}</h5>
            <p>{props.content}</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ContactInfo;
