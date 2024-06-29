import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import Title, { ManageTitle } from "../Title";

const localizer = momentLocalizer(moment);

const events = (onPreview) => [
  {
    title: <Title onpreview={onPreview} />,
    start: new Date(2024, 5, 28, 2, 0),
    end: new Date(2024, 5, 28, 3, 0),
  },
  {
    title: <ManageTitle />,
    start: new Date(2024, 5, 28, 6, 0),
    end: new Date(2024, 5, 28, 7, 0),
  },
  {
    title: <Title onpreview={onPreview} />,
    start: new Date(2024, 5, 28, 11, 0),
    end: new Date(2024, 5, 28, 12, 0),
  },
  {
    title: <ManageTitle />,
    start: new Date(2024, 5, 28, 15, 0),
    end: new Date(2024, 5, 28, 16, 0),
  },
];

const TimeSlots = ({ onPreview }) => {
  const eventList = events(onPreview);

  return (
    <div style={{ height: 500 }}>
      <Calendar
        localizer={localizer}
        events={eventList}
        startAccessor="start"
        endAccessor="end"
        views={["day"]}
        defaultView="day"
        onSelectEvent={(event) => {
          
          onPreview(); 
        }}
      />
    </div>
  );
};

export default TimeSlots;
