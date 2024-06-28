import React from "react";
import { FeedWrap } from "./Feed.styles";
import Comment from "../rightSideBar/Comment";
import FeedCard from "./FeedCard";
import CoachingCategory from "./CoachingCategory";
import CoachProfile from "./CoachProfile";
import UpcomingSession from "./UpcomingSession";
import Sessions from "./Sessions";
import GroupSession from "./GroupSession";
import TrendingSession from "./TrendingSession";
import CardProgress from "./CardProgress";

const Feed = () => {
  return (
    <FeedWrap>
      <div className="feed">
        <div className="comment">
          <Comment />
        </div>
        <div className="FeedCard">
          <FeedCard />
        </div>
        <div className="cardProgress">
          <CardProgress/>
        </div>
        <div className="FeedCard">
          <FeedCard />
        </div>
        <div className="cardProgress">
          <CardProgress/>
        </div>
      </div>
      <div className="rightSideBar">
        <div className="coachingCategory">
            <CoachingCategory/>
            <CoachProfile/>
            <UpcomingSession/>
            <Sessions/>
            <GroupSession/>
            <TrendingSession />

        </div>
      </div>
    </FeedWrap>
  );
};

export default Feed;
