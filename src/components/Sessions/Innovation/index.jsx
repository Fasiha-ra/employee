import React, { useState } from "react";
import { InnovationWrap } from "./innovation.styles";
import img1 from "../../../assets/sessions/enroll-1.png";
import author from "../../../assets/sessions/author.png";
import stars from "../../../assets/sessions/stars.png";
import date from "../../../assets/sessions/calendar.png";
import time from "../../../assets/sessions/time.png";
import session from "../../../assets/sessions/session.png";
import Button from "../../Button";
import Accordions from "../../Accordions";
import { items } from "../../Constant/Data";
import Modal from '../../Modal'
import Calendar from "../SessionModals/DateTime";
import DateTime from "../SessionModals/DateTime";
const Innovation = () => {
  const [dateTime, setDateTime]=useState(false);
  const handleClick = () =>{
    setDateTime(true);
  }
  return (
    <InnovationWrap>
      <div className="sessionDetail">
        <div className="textHolder">
          <h2>Adapting to Change and Embracing Innovation</h2>
          <div className="auhtorDetail">
            <figure>
              <img src={author} alt="author" />
            </figure>
            <div className="name">
            <h5>By : Sahra Conar</h5>
            <span>
              Talent <br /> Management
            </span>
            <img src={stars} alt="stars" />
            </div>
          </div>
          <div className="date flex">
            <figure >
              <img src={date} alt="date" />
            </figure>
            <span>April 30, 2024 - May 07, 2024</span>
          </div>
          <div className="time flex">
            <figure>
              <img src={time} alt="time" />
            </figure>
            <span>09:00 pm - 11:00 pm</span>
          </div>
          <div className="session flex">
            <figure>
              <img src={session} alt="session" />
            </figure>
            <span>1 : 1 Session</span>
          </div>
          <Button width="150px" onClick={handleClick}>Book Now</Button>
        </div>
        <figure className="thumb">
          <img src={img1} alt="img1" />
        </figure>
      </div>
      <div className="sessionPara">
        <h5>About Session</h5>
        <p>
          Change is now and forever. It is not optional any more than breathing
          and sleeping and doing it well is a requirement of organization
          health. Learning to capture the competitive advantage of a changing
          landscape is an essential skill for leaders.
          <br />
          This course is based on the forty five years of experience helping
          companies like Merck, Shell Oil, Honeywell, Honda and dozens of others
          to create cultures of engagement and continuous improvement.
        </p>
      </div>
      <div className="accordion">
      <h5>Topics</h5>
      <Accordions items={items}/>
      </div>
      {dateTime && (
        <Modal open={dateTime} setOpen={setDateTime} width="1200px">
          <DateTime/>
        </Modal>
      )}
    </InnovationWrap>
  );
};

export default Innovation;
