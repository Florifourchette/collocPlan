import React, { useEffect, useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import EventForm from '../components/EventForm';
// import handleDates from '../utils/handleDates';

//
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
// import newEventValidation from '../utils/newEventValidation';

const localizer = momentLocalizer(moment);

const test = [
  {
    id: 1,
    title: 'Meeting',
    start: new Date(2023, 6, 19, 10, 0),
    end: new Date(2023, 6, 19, 11, 0),
  },
  {
    id: 2,
    title: 'Meeting 2',
    start: new Date(2023, 6, 19, 11, 0),
    end: new Date(2023, 6, 20, 12, 0),
  },
];

const Scheduler = () => {
  const eventState = {
    title: '',
    startDay: '',
    endDay: '',
    startTime: '',
    endTime: '',
  };
  const [newEventClicked, setNewEventClicked] = useState(false);
  const [dateValidation, setDateValidation] = useState(true);
  const [titleValidation, setTitleValidation] = useState(true);
  const [newEvent, setNewEvent] = useState(eventState);
  const events = test;

  const handleClick = () => {
    setNewEventClicked((prev) => !prev);
  };

  const handleNewEvent = () => {
    console.log(newEvent);
    // const startDate = handleDates(
    //   new Date(newEvent.startDay),
    //   newEvent.startTime
    // );
    // const endDate = handleDates(
    //   new Date(newEvent.endDay),
    //   newEvent.endTime
    // );
    // const validation = newEventValidation({
    //   id: events.length + 1,
    //   title: newEvent.title,
    //   start: startDate,
    //   end: endDate,
    // });

    if (dateValidation === true && titleValidation === true) {
      events.push(newEvent);
    }
    setNewEventClicked((prev) => !prev);
    setNewEvent(eventState);
    setTitleValidation(true);
    setDateValidation(true);
    console.log(events);
  };

  useEffect(() => {}, [newEventClicked]);

  return (
    <>
      <div className="calendar">
        <button onClick={handleClick}>Add new event</button>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
        />
      </div>
      {newEventClicked ? (
        <EventForm
          handleNewEvent={handleNewEvent}
          newEvent={newEvent}
          setNewEvent={setNewEvent}
          setDateValidation={setDateValidation}
          dateValidation={dateValidation}
          events={events}
          titleValidation={titleValidation}
          setTitleValidation={setTitleValidation}
        />
      ) : (
        <></>
      )}
    </>
  );
};

export default Scheduler;
