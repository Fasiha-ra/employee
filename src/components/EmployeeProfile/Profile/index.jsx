import React from "react";
import { ProfileHold } from "./Profile.styles";
import BG from "../../../assets/profile/background.png";
import Logo from "../../../assets/profile/logo.png";
import stars from "../../../assets/sessions/stars.png";
import Button from '../../Button'
const Profile = () => {
  return (
    <ProfileHold>
      <div className="bgImg">
        <img src={BG} alt="background" />
      </div>
      <div className="logo">
        <figure>
          <img src={Logo} alt="logo" />
        </figure>
      </div>
      <div className="textxWrap">
        <div className="text">
          <h2>Rahul Wagh</h2>
          <p>Talent Management Sessions</p>
          <strong>Human Rights | Women Empowerment</strong>
        </div>
        <div className="review">
          <figure>
            <img src={stars} alt="stars" />
          </figure>
          <span>20+ Reviews</span>
        </div>
      </div>
     <div className="btn">
     <Button width = "208px">Schedule </Button>
     </div>
    </ProfileHold>
  );
};

export default Profile;
