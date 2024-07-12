import React, {useState} from "react";
import { ScheduleWrap } from "./Schedule.styles";
import Button from "../../Button";
import { FaArrowRightLong } from "react-icons/fa6";
import { ScheduleData } from "../../Constant/Data";
import { useNavigate } from "react-router-dom";
const Schedule = () => {
  const [openManagement, setOpenManagement]=useState(false);
  const navigate = useNavigate();
  const HandleOpen = () => {
    navigate("/EnrollNow");
  }
  return (
    <ScheduleWrap>
      <div className="heading">
        <strong className="headingWrap">Schedule 1:1 Sessions For You</strong>
        <Button width="94px" type="transparent">
          View All <FaArrowRightLong />
        </Button>
      </div>
      <div className="cardHolder">
        {ScheduleData.map((value, index) => (
          <div className="card" key={index}>
            <div className="imgHolder">
              <img src={value.img} alt="teacher" />
            </div>
            <div className="textHolder">
              <h5>{value.title}</h5>
              <span>{value.name}</span>
              <p>{value.para}</p>
              <Button width="138px" onClick={HandleOpen}>View Details</Button>
            </div>
          </div>
        ))}
      </div>
    </ScheduleWrap>
  );
};

export default Schedule;
