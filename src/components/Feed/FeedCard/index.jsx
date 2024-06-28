import React, { useState } from "react";
import Button from "../../Button";
import like from '../../../assets/blog/like.png';
import comment from '../../../assets/blog/comment.png';
import report from '../../../assets/blog/report.png';
import { BsThreeDotsVertical } from "react-icons/bs";
import { FeedCardWrap } from "./FeedCard.styles";
import imag from "../../../assets/blog/blogLogo.png";
const FeedCard = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded((prevState) => !prevState);
  };

  const value = {
    para: "The saying “an emergency on your part does not constitute an emergency on mine” is such a terrible thing to think. Shouldn’t we try to be, at the very least, empathetic?How about instead, realizing somebody is in trouble and trying to help them get out of situation which is causing them severe mental stress?",
    fullPara:
      "This is a short paragraph that needs to be expanded to show the full content. Here is the full content that is revealed when the paragraph is expanded. It contains more detailed information about the post.",
  };

  return (
    <FeedCardWrap>
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
        <div className="para">
          <p>
            {isExpanded
              ? value.para + value.fullPara
              : `${value.para.substring(0, 200)}...`}
            <span onClick={handleToggle}>
              {isExpanded ? "see less" : "see more"}
            </span>
          </p>
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
    </FeedCardWrap>
  );
};

export default FeedCard;
