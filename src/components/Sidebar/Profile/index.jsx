import React, { useEffect, useState } from "react";
import { ProfileWrap } from "./Profile.styles";
import { FaRegEdit } from "react-icons/fa";
import imgIcon from "../../../assets/profile/imgIcon.png";
import Icon from "../../../assets/profile/icon.png";
import { Link } from "react-router-dom";
import axios from "axios";
import { serverDomain } from "../../../constant/server-domain";
const Profile = () => {
  const email = "contact@alhn.dev";
  const [user, setUser] = useState({});
  useEffect(() => {
    (async () => {
      try {
        const res = await axios(`${serverDomain}/user/1`);
        setUser(res.data.user);
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <ProfileWrap>
      <div className="editHolder">
        <Link to="/UpdateProfile">
          <FaRegEdit />
        </Link>
      </div>
      <div className="imgHolder">
        <img src={`${serverDomain}${user?.avatar}`} alt="icon"></img>
      </div>
      <div className="textHolder">
        <h4>
          {user?.firstName} {user?.lastName}
        </h4>
        <p>{user?.designation}</p>
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
