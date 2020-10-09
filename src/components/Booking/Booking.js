import React from "react";
import { Link, useParams } from "react-router-dom";
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
            <div className="col-md-6 py-5 mt-3 ">
              <div className="booking-form py-2">
                <div className="form-group">
                  <label htmlFor="data">Origin</label>
                  <input
                    type="text"
                    name="name"
                    id="data"
                    placeholder={bookingList.id && bookingList.origin}
                    className="form-control book-input"
                  />
                </div>
                <div className="form-group ">
                  <label htmlFor="data1">Destination</label>
                  <input
                    type="text"
                    name="destination"
                    id="data1"
                    placeholder={bookingList.id && bookingList.title}
                    className="form-control book-input"
                  />
                </div>
                <div className="form-group row booking-date ">
                  <div className="col-md-6 book-left">
                    <label htmlFor="data2">From</label>
                    <input
                      type="date"
                      name="from"
                      id="data2"
                      className="form-control date-control "
                    />
                  </div>
                  <div className="col-md-6  book-left">
                    <label htmlFor="data3">To</label>
                    <input
                      type="date"
                      name="to"
                      id="data3"
                      className="form-control date-control"
                    />
                  </div>
                </div>
                <Link
                  to="/destination"
                  style={{
                    textDecoration: "none",
                    maxWidth: "464px",
                    boxSizing: "border-box",
                    marginLeft: "25px",
                    display: "block",
                    padding: "10px",
                  }}
                >
                  <button
                    className="btn btn-warning btn-block"
                    type="submit"
                    style={{
                      fontSize: "20px",
                      color: "black",
                      padding: "15px",
                      marginBottom: "15px",
                    }}
                  >
                    Start Booking
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
