import React, { useState } from "react";
import { useParams } from "react-router-dom";
import homeData from "../fakeData/homeData";
import "./Booking.css";

const Booking = () => {
  const { id } = useParams();
  const bookingList = homeData.find((item) => item.id === id);

  return (
    <div className="booking home-section py-5 mt-5">
      <div className="darkoverlay">
        <div className="container">
          <div className="row">
            <div className="col-md-6  left-side">
              <h1 className="title">{bookingList.title}</h1>
              <p className="description">{bookingList.description}</p>
            </div>
            <div className="col-md-6"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
