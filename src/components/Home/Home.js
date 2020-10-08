import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import fakeData from "../fakeData/fakeData";
import "./Home.css";

const Home = () => {
  const [cardData, setCardData] = useState(fakeData);
  console.log(cardData);
  return (
    <div className="home-section py-5 mt-5 ">
      <div className="darkoverlay">
        <div className="container">
          <div className="row">
            <div className="col-md-5 left-side">
              <h1 className="home-title">Cox's bazar</h1>
              <p className="home-subtitle">
                Cox's Bazar is a city, fishing port, tourism centre and district
                headquarters in southeastern Bangladesh. It is famous mostly for
                its long natural sandy beach, and it is the most popular place
                in the world.
              </p>
              <Link to="/" style={{ textDecoration: "none" }}>
                <button className="btn btn-warning btn-rounded btn-lg">
                  Booking <FontAwesomeIcon icon={faArrowRight} />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
