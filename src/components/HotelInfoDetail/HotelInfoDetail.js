import React from "react";
import "./HotelInfoDetail.css";

const HotelInfoDetail = (props) => {
  const {
    title,
    specification,
    features,
    ratings,
    totalRating,
    price,
    cords,
    img,
  } = props.hotelInfo;
  return (
    <div className="hotel-detail-section ">
      <div className="img-area d-flex">
        <img src={img} alt="" style={{ maxWidth: "320px", padding: "20px" }} />
        <div className="hotel-info">
          <h2 className="hotel-title">{title}</h2>
          <p className="hotel-p">
            {specification.guest} guest , {specification.rooms} rooms ,{" "}
            {specification.beds} beds , {specification.bathrooms} bathrooms
          </p>
          <h6 className="hotel-p">{features[0]}</h6>
          <h6 className="hotel-p">{features[1]}</h6>
          <p className="hotel-p">
            {ratings} ({totalRating} )<strong className="ml-3">{price}</strong>
            <del className="ml-3">$ 99 discount</del>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HotelInfoDetail;
