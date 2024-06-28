import React, { useState } from "react";
import { EnrollWrapper } from "./Enroll.styles";
import Button from "../../Button";
import { FaArrowRightLong } from "react-icons/fa6";
import date from "../../../assets/home/session/calendar.png";
import time from "../../../assets/home/session/watch.png";
import { Enroll } from "../../Constant/Data";

const EnrollSession = () => {
  const [showFirstSet, setShowFirstSet] = useState(true);

  const toggleCards = () => {
    setShowFirstSet(!showFirstSet);
  };

  return (
    <EnrollWrapper>
      <div className="heading">
        <strong className="headingWrap">Enroll For Group Sessions</strong>
        <Button width="94px" type="transparent" onClick={toggleCards}>
          {showFirstSet ? "View " : "View Less"} <FaArrowRightLong />
        </Button>
      </div>
      <div className="cardHolder">
        {Enroll.slice(showFirstSet ? 0 : 3, showFirstSet ? 3 : 9).map(
          (value, index) => (
            <div className="card" key={index}>
              <img src={value.img} alt="Enroll" className="imgWrap" />
              <div className="textWrapper">
                <h5>{value.title}</h5>
                <span>{value.name}</span>
              </div>
              <div className="timeHolder">
                <div className="date">
                  <img src={date} alt="date" />
                  17 June
                </div>
                <div className="time">
                  <img src={time} alt="time" />
                  9:00 am
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </EnrollWrapper>
  );
};

export default EnrollSession;
