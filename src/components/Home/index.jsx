import React, { useState } from "react";
import CoachingCategory from "./coachingCategory";
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
  const [activeSection, setActiveSection] = useState(null);

  const handleViewAll = (section) => {
    setActiveSection(section);
  };

  return (
    <>
      {activeSection === null ? (
        <HomeWrap>
          <div className="home">
            <div className="discussion">
              <Comment />
            </div>
            <CoachingCategory />
            <EnrollSession onViewAll={() => handleViewAll('enroll')} showAll={false} />
            <CoachingProfile onViewAll={() => handleViewAll('coaching')} showAll={false} />
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
      ) : activeSection === 'enroll' ? (
        <EnrollSession onViewAll={() => handleViewAll('enroll')} showAll={true} />
      ) : activeSection === 'coaching' ? (
        <CoachingProfile onViewAll={() => handleViewAll('coaching')} showAll={true} />
      ) : null}
    </>
  );
};

export default Home;
