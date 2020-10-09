import React from "react";
import { Link } from "react-router-dom";
import "./SIngleCard.css";

const SingleCard = (props) => {
  const { title, img, id } = props.cardData;
  return (
    <div className="col-md-4 py-5 mt-5 card-single">
      <Link
        className="card-all-hover"
        to={`/booking/${id}`}
        style={{ textDecoration: "none", color: "white" }}
      >
        {" "}
        <div className="card-img">
          <img src={img} alt="card" style={{ width: "100%" }} />
          <h3 className="card-all-title">{title}</h3>
        </div>
      </Link>
    </div>
  );
};

export default SingleCard;
