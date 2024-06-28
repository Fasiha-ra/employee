import React from "react";
import { CoachingWrap } from "./CoachingProfile.styles";
import Button from "../../Button";
import { FaArrowRightLong } from "react-icons/fa6";
import stars from "../../../assets/home/session/stars.png";
import { coachingProfile } from "../../Constant/Data";
const CoachingProfile = () => {
  return (
    <CoachingWrap>
      <div className="heading">
        <strong className="headingWrap">Enroll For Group Sessions</strong>
        <Button width="94px" type="transparent">
          View <FaArrowRightLong />
        </Button>
      </div>
      <div className="cardHolder">
        {coachingProfile.map((value, index) => (
          <div className="card" key={index}>
            <div className="logoWrap">
              <div className="imgHolder">
                <img src={value.img} alt="logo" />
              </div>
              <div className="review">
                <img src={stars} alt="stars" />
                <span>50 reviews</span>
              </div>
            </div>
            <div className="textContent">
              <h5>{value.name}</h5>
              <span>{value.type}</span>
            </div>
            <div className="sessions">
              <span>Uploaded Sessions: {value.sessions} </span>
              <span>Enrolled Students: : {value.uploaded}</span>
            </div>
          </div>
        ))}
      </div>
    </CoachingWrap>
  );
};

export default CoachingProfile;
