import React, { useState } from "react";
import { CoachingWrap } from "./CoachingProfile.styles";
import Button from "../../Button";
import { FaArrowRightLong } from "react-icons/fa6";
import stars from "../../../assets/home/session/stars.png";
import { coachingProfile } from "../../Constant/Data";
import { useNavigate } from "react-router-dom";

const CoachingProfile = ({ onViewAll, showAll }) => {
  const navigate = useNavigate();
  const [visibleCards, setVisibleCards] = useState(showAll ? coachingProfile.length : 6);

  const ProfileOpen = () => {
    navigate("/profile");
  };

  const handleViewAll = () => {
    setVisibleCards(showAll ? 6 : coachingProfile.length);
    onViewAll();
  };

  return (
    <CoachingWrap>
      <div className="heading">
        <strong className="headingWrap">Coaching Profile</strong>
        {!showAll && (
          <Button width="94px" type="transparent" onClick={handleViewAll}>
            View All <FaArrowRightLong />
          </Button>
        )}
      </div>
      <div className="cardHolder">
        {coachingProfile.slice(0, visibleCards).map((value, index) => (
          <div className="card" key={index} onClick={ProfileOpen}>
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
              <span>Enrolled Students: {value.uploaded}</span>
            </div>
          </div>
        ))}
      </div>
    </CoachingWrap>
  );
};

export default CoachingProfile;
