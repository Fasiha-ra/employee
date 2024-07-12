import React, { useState } from "react";
import { SessionPopup } from "./EnrollSessionPopup.styles";
import TextField from "../../TextField/TextField";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import time from "../../../assets/sessions/time.png";
import Button from "../../Button";
import { useNavigate } from "react-router-dom";

const EnrollSessionPopup = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const navigate = useNavigate();
  const clickHandler = () =>{
    navigate("/calendar")
  }
  return (
    <SessionPopup>
      <div className="textWrap">
        <div className="titleHolder">
          <strong className="tite">Enroll for session</strong>
        </div>
        <p>
          We appreciate your interest in our upcoming session and would like to
          provide you with a comprehensive form to enroll for the event. Kindly
          follow the steps below to complete the form & secure your spot
        </p>
      </div>
      <div className="titleHolder">
        <strong className="tite">Personal Information</strong>
      </div>
      <div className="flex">
        <TextField
          parentClass="emailWrapper"
          className="input-field"
          field_Name="email"
          type="email"
          placeholder="Corporate Email ID"
          // value={email}
          // onChange={handleInputChange}
          bgClr="rgba(255, 255, 255, 0.37)"
        />
        <TextField
          parentClass="emailWrapper"
          className="input-field"
          field_Name="number"
          type="number"
          placeholder="Contact Number"
          // value={email}
          // onChange={handleInputChange}
          bgClr="rgba(255, 255, 255, 0.37)"
        />
      </div>
      <div className="titleHolder">
        <strong className="tite">Select the session you wish to attend</strong>
      </div>
      <div className="flex">
        <TextField
          parentClass="emailWrapper"
          className="input-field"
          label="Topic"
          field_Name="text"
          type="text"
          placeholder="Enter topic name"
          // value={email}
          // onChange={handleInputChange}
          bgClr="rgba(255, 255, 255, 0.37)"
        />
        <label htmlFor="" className="dateLabel">
          Date
          <div className="date-picker">
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              dateFormat="dd/MM/yyyy"
              placeholderText="Select date"
            />
          </div>
        </label>
      </div>
      <div className="timerHolder">
        <span>Time</span>
        <div className="timeWrap">
          <div className="time">
            <input type="text" placeholder="From"/>
            <img src={time} alt="time" />
          </div>
          <div className="time">
            <input type="text" placeholder="To" />
            <img src={time} alt="time" />
          </div>
        </div>
      </div>
      <TextField
        parentClass="emailWrapper"
        variant="textarea"
        className="input-field"
        field_Name="number"
        label="Note/Description"
        type="text"
        // value={email}
        // onChange={handleInputChange}
        bgClr="rgba(255, 255, 255, 0.37)"
      />
     <div className="btn">
     <Button width="124px" onClick={clickHandler}>Save</Button>
     </div>
    </SessionPopup>
  );
};

export default EnrollSessionPopup;
