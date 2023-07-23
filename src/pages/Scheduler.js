import React, { useEffect, useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import EventForm from '../components/EventForm';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

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
  const newEventState = {
    title: '',
    start: '',
    end: '',
  };
  const [newEventClicked, setNewEventClicked] = useState(false);
  const [dateValidation, setDateValidation] = useState(true);
  const [titleValidation, setTitleValidation] = useState(true);
  const [newEvent, setNewEvent] = useState(newEventState);
  const [selectedDates, setSelectedDates] = useState({
    selectedStart: '',
    selectedEnd: '',
  });
  const events = test;

  const handleClick = () => {
    setNewEventClicked((prev) => !prev);
  };

  const handleNewEvent = () => {
    console.log(newEvent);
    if (dateValidation === true && titleValidation === true) {
      events.push(newEvent);
    }
    setNewEventClicked((prev) => !prev);
    setNewEvent(newEventState);
    setTitleValidation(true);
    setDateValidation(true);
    console.log(events);
  };

  const handleDateSelect = ({ start, end }) => {
    console.log(start);
    const startDate = start.toUTCString();
    const endDate = end.toUTCString();
    setSelectedDates({
      selectedStart: startDate,
      selectedEnd: endDate,
    });
    // setNewEvent({
    //   ...newEvent,
    //   start: startDate,
    //   end: endDate,
    // });
    setNewEventClicked(true);
  };

  useEffect(() => {
    console.log(newEvent);
  }, [newEventClicked, newEvent]);

  return (
    <>
      <div className="calendar">
        <button onClick={handleClick}>Add new event</button>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          selectable={true}
          onSelectSlot={handleDateSelect}
          longPressThreshold={1}
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
          setNewEventClicked={setNewEventClicked}
          selectedStart={newEvent.start}
          selectedEnd={newEvent.end}
          selectedDates={selectedDates}
        />
      ) : (
        <></>
      )}
    </>
  );
};

export default Scheduler;
