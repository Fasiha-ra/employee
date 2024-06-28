import React, { useState } from "react";
import { ModalHolder } from "./DiscussionModal.styles";
import TextField from "../../TextField/TextField";
import Button from '../../Button/index';
import QuestionModal from "../questionModal";
import Poll from "../questionModal/Poll";

const DiscussionModal = ({ chatOptions, click, modalType }) => {
  const renderTextArea = () => {
    switch (modalType) {
      case 'Discussion':
        return <TextField parentClass="textAreaHolder" variant="textarea" placeholder="Share thoughts, ideas or updates for Discussion" />;
      case 'Question':
        return <QuestionModal/>;
      case 'Poll':
        return <Poll/>;
      default:
        return null;
    }
  };

  const renderButton = (type, imgSrc, text) => (
    <button className="chatWrap" onClick={() => click(type)}>
      <img src={imgSrc} alt={type} />
      {text}
    </button>
  );

  return (
    <ModalHolder>
      <span className="subTitle">{modalType}</span>
      {renderTextArea()}
      <TextField
        parentClass="inputHolder"
        className="input-field"
        type="text"
        placeholder="#Tags"
      />
      <div className="chatHolder">
        <div className="chat">
          {chatOptions.includes('discussion') && renderButton('discussion', require('../../../assets/home/discussion/discussion.png'), 'Discussion')}
          {chatOptions.includes('question') && renderButton('question', require('../../../assets/home/discussion/question.png'), 'Question')}
          {chatOptions.includes('poll') && renderButton('poll', require('../../../assets/home/discussion/poll.png'), 'Poll')}
        </div>
        <div className="btnHolder">
          <Button type="dark" width="150px">Post</Button>
        </div>
      </div>
    </ModalHolder>
  );
};

export default DiscussionModal;
