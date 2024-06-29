import React, { useState } from "react";
import { SessionsWrapper } from "./Sessions.styles";
import SessionSearchbar from "./SessionSearchbar";
import EnrollSessions from "./EnrollSessions";
import StartedSessions from "./startedSessions";
import Enroll from "./Enroll";
import CoachingProfile from "./CoachSessions";
import TrendingSessions from "./TrendingSessions";
import Innovation from "./Innovation";

const Sessions = () => {
  const [enrollOpen, setEnrollOpen] = useState(false);
  const clickHandler = () => {
    setEnrollOpen(true);
  };
  return (
    <>
      {!enrollOpen ? (
        <SessionsWrapper>
          <SessionSearchbar />
          <EnrollSessions />
          <Enroll click={clickHandler} />
          <CoachingProfile />
          <TrendingSessions />
          <StartedSessions />
        </SessionsWrapper>
      ) : (
        <div>
          <Innovation />
        </div>
      )}
    </>
  );
};

export default Sessions;
