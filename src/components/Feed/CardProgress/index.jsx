import React, { useState } from "react";
import Button from "../../Button";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FeedCardWrap } from "../FeedCard/FeedCard.styles";
import imag from "../../../assets/blog/blogLogo.png";
import KycLevel from "../../KycLevel"
import { ProgressWrapper } from "./CardProgress.styles";
import like from '../../../assets/blog/like.png';
import comment from '../../../assets/blog/comment.png';
import report from '../../../assets/blog/report.png';

const progress = [
    {
      grade: "I want to move to Europe",
      percent: "50",
    },
    {
      grade: "I want to move to India",
      percent: "20",
    },
    {
      grade: "I want to move to Us",
      percent: "30",
    },
    {
      grade: "Other",
      percent: "10",
    },
  ];
const CardProgress = () => {
  return (
    <FeedCardWrap>
        <ProgressWrapper>
      <div className="post">
        <div className="blogHeader">
          <div className="logo">
            <img src={imag} alt="blog" />
            <div className="titleHolder">
              <h5>Works at TCS</h5>
              <div className="tags">
                <span>#situation #emergency</span>
              </div>
            </div>
          </div>
          <div className="icon">
            <BsThreeDotsVertical />
          </div>
        </div>
        <h4>Where do you plan to make a move in 2023 furthering your career prospects?</h4>
        <div className="progressbar">
          {progress.map((value, index) => (
            <div className="progressWrap" key={index}>
              <span className="grade">{value.grade}</span>
              <KycLevel level={value.percent} />

              <strong>{value.percent}%</strong>
            </div>
          ))}
        </div>
        <div className="flex">
        <div className="replyWrap">
        <button className="reply">
              <img src={like} alt="like" />
              Like
            </button>
            <button  className="reply">
              <img src={comment} alt="comment" />
              Comment
            </button>
            <button  className="reply">
              <img src={report} alt="report" />
              Report
            </button>
        </div>
        <div className="counts">
          <span>0 likes | 0 reports</span>
        </div>
        </div>
      </div>
      </ProgressWrapper>
    </FeedCardWrap>
  );
};

export default CardProgress;
