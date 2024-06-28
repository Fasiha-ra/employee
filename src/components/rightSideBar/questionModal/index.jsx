import React from "react";
import { QuestionWrapper } from "./QuestionModal.styles";

const QuestionModal = () => {
  return (
    <QuestionWrapper>
      <input type="text" placeholder="Ask a question (required)" />
      <div className="line"></div>
      <textarea placeholder="Add more details" className="textareaWrap" />
    </QuestionWrapper>
  );
};

export default QuestionModal;
