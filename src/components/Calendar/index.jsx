import React, { useState } from "react";
import { CalendarWrap } from "./Calendar.styles";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import CalendarHeader from "./CalendarHeader";
import TimeSlots from "./TimeSlots";
import Innovation from "../Sessions/Innovation";
const Calendar = () => {
  const [slot, setSlot] = useState(false);
  const openHandler = () => {
    alert("fasiha");
    setSlot(true);
  };
  return (
    <>
      {!slot ? (
        <CalendarWrap>
          <h4>
            Tuesday, November 30 2024 <FaAngleLeft />
            <FaAngleRight />
          </h4>
          <CalendarHeader />
          <TimeSlots onpreview={openHandler} />
        </CalendarWrap>
      ) : (
        <Innovation />
      )}
    </>
  );
};

export default Calendar;
