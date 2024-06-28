import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ModalsWrap } from "./Modals.styles";
import Button from "../../Button";
import calendar from "../../../assets/sessions/calendar.png";

const TimeSlot = [
  {
    time: "02:15 pm - 03:15 pm",
    bgClr: "gray"
  },
  {
    time: "02:15 pm - 03:15 pm"
  },
  {
    time: "02:15 pm - 03:15 pm"
  },
  {
    time: "02:15 pm - 03:15 pm"
  },
  {
    time: "02:15 pm - 03:15 pm"
  },
  {
    time: "02:15 pm - 03:15 pm"
  },
  {
    time: "02:15 pm - 03:15 pm"
  },
  {
    time: "02:15 pm - 03:15 pm"
  },
  {
    time: "02:15 pm - 03:15 pm"
  },
  {
    time: "02:15 pm - 03:15 pm"
  },
  {
    time: "02:15 pm - 03:15 pm"
  },
  {
    time: "02:15 pm - 03:15 pm"
  }
];

const DateTime = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);

  const toggleCalendar = (bgClr) => {
    setShowCalendar(!showCalendar);
  };

  return (
    <ModalsWrap>
      <h2>Session Date & Time</h2>
      <span>Select Session Date & Time</span>
      <div className="para">
        <p>Change Management: Leading Agile Systems Change</p>
        <Button type="outline" width="237px" onClick={toggleCalendar}>
          {startDate.toDateString()}
          <img src={calendar} alt="calendar" />
        </Button>
        {showCalendar && (
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            inline
          />
        )}
      </div>
      <div className="timeSlots">
        {TimeSlot.map((val, ind) => (
          <div className="time" key={ind}>
            <Button
              type="outline"
              width="206px"
              bgClr={val.bgClr}
            >
              {val.time}
            </Button>
          </div>
        ))}
      </div>
    </ModalsWrap>
  );
};

export default DateTime;
