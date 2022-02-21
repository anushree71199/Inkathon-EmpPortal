import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState } from 'react';
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './Attendance.css';

const locales = {
    "en-US": require("date-fns/locale/en-US"),
};
const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});

const events = [
    /* {
        title: "Big Meeting",
        allDay: true,
        start: new Date(2021, 6, 0),
        end: new Date(2021, 6, 0),
    },
    {
        title: "Vacation",
        start: new Date(2021, 6, 7),
        end: new Date(2021, 6, 10),
    },
    {
        title: "Conference",
        start: new Date(2021, 6, 20),
        end: new Date(2021, 6, 23),
    }, */
];

function Attendance() {
const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
const [allEvents, setAllEvents] = useState(events);

function handleAddEvent() {
   setAllEvents([...allEvents, newEvent]);
}
return (
<div className="attendance">
  <h4>Click to let us know you are present!</h4>
  <Calendar localizer={localizer} events={allEvents} startAccessor="start" endAccessor="end"  style={{ height: 500, width:750, marginTop: "80px", marginLeft: "450px" }} />
  <div class="leaveForms">
  <h4> Check your form details here</h4>
        <button>
          Submit a leave form
        </button>
        <button>
          Check your form status
        </button>
        <button>
          Mail HR here
        </button>
        <button>
          Check your total logged in time here
        </button>
      </div>
  </div>
  );
}
          
export default Attendance;