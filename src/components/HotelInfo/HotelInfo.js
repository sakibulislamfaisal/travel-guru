import React, { useState } from "react";
import hotelInfo from "../fakeData/hotelInfo";
import MapContainer from "../GoogleMap/MapContainer";
import HotelInfoDetail from "../HotelInfoDetail/HotelInfoDetail";
import "./HotelInfo.css";

const HotelInfo = (props) => {
  const [hotelData, setHotelData] = useState(hotelInfo);
  console.log(hotelData);
  return (
    <div className="hotel-info py-5 mt-4">
      <div className="container">
        <div className="head mt-5 ml-4">
          <p className="head-title">542 stays May 13-17 3 guests</p>
          <h3 className="head-big">Stay in Cox’s Bazar</h3>
        </div>
        <div className="row">
          <div className="col-md-7">
            {hotelData.map((item) => (
              <HotelInfoDetail hotelInfo={item} key={item.id}></HotelInfoDetail>
            ))}
          </div>
          <div className="col-md-5">
            <MapContainer></MapContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelInfo;
