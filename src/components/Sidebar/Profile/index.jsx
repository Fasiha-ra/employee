import React from "react";
import { ProfileWrap } from "./Profile.styles";
import { FaRegEdit } from "react-icons/fa";
import imgIcon from "../../../assets/profile/imgIcon.png";
import Icon from "../../../assets/profile/icon.png";
import { Link } from "react-router-dom";
const Profile = () => {
  return (
    <ProfileWrap>
      <div className="editHolder">
        <Link to="/UpdateProfile">
          <FaRegEdit />
        </Link>
      </div>
      <div className="imgHolder">
        <img src={imgIcon} alt="icon"></img>
      </div>
      <div className="textHolder">
        <h4>Full Name</h4>
        <p>Designation</p>
        <p>Company Name</p>
      </div>
      <div className="sessionHolder">
        <div className="session">
          <div className="iconHolder">
            <img src={Icon} alt="icon" />
            <span>Enrolled Sessions</span>
          </div>

          <span className="count">00</span>
        </div>
        <div className="session">
          <div className="iconHolder">
            <img src={Icon} alt="icon" />
            <span>Enrolled Sessions</span>
          </div>

          <span className="count">00</span>
        </div>
      </div>
    </ProfileWrap>
  );
};

export default Profile;
