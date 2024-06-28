import React from "react";
import CoachingCategory from "./coachingCategory";
import Session from "./Session";
import EnrollSession from "./Enroll";
import CoachingProfile from "./CoachingProfile";
import Schedule from "./Schedule";
import Trending from "./Trending";
import { HomeWrap } from "./Home.styles";
import Comment from "../rightSideBar/Comment/index";
import RightSideBar from "../rightSideBar";
import Blog from "../rightSideBar/Blog";
import UpgradeCourse from "../Sidebar/UpgradeCourse";
const Home = () => {
  return (
    <HomeWrap>
      <div className="home">
        <div className="discussion">
          <Comment />
        </div>
        <CoachingCategory />
        <Session />
        <EnrollSession />
        <CoachingProfile />
        <Schedule />
        <Trending />
      </div>

      <div className="rightSideBar">
        <RightSideBar>
          <div className="comment">
            <Comment />
          </div>
          <div className="blog">
            <Blog />
          </div>
          <div className="course">
            <UpgradeCourse />
          </div>
        </RightSideBar>
      </div>
    </HomeWrap>
  );
};

export default Home;
