import React, { useEffect, useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import EventForm from '../components/EventForm';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import addMinutes from '../utils/addMinutes';
import dateConverter from '../utils/dateConverter';
import timeConverter from '../utils/timeConverter';
import schedules from '../samples/schedules';

const localizer = momentLocalizer(moment);

const test = schedules();

const Scheduler = () => {
  const newEventState = {
    title: '',
    start: '',
    end: '',
  };

  const eventState = {
    title: '',
    startDay: dateConverter(new Date()),
    startTime: timeConverter(new Date()),
    endDay: dateConverter(new Date()),
    endTime: timeConverter(new Date()),
  };

  const selectedDatesState = {
    selectedStart: new Date(),
    selectedEnd: addMinutes(new Date(), 30),
  };
  const [event, setEvent] = useState(eventState);
  const [newEventClicked, setNewEventClicked] = useState(false);
  const [dateValidation, setDateValidation] = useState(true);
  const [titleValidation, setTitleValidation] = useState(true);
  const [newEvent, setNewEvent] = useState(newEventState);
  const [selectedDates, setSelectedDates] = useState(
    selectedDatesState
  );
  const events = test;

  const handleClick = () => {
    setSelectedDates(selectedDatesState);
    setNewEventClicked((prev) => !prev);
  };

  const handleNewEvent = () => {
    console.log(newEvent);
    if (dateValidation === true && titleValidation === true) {
      events.push(newEvent);
    }
    setNewEventClicked((prev) => !prev);
    setNewEvent(newEventState);
    setSelectedDates(selectedDatesState);
    setTitleValidation(true);
    setDateValidation(true);
    console.log(events);
  };

  const handleDateSelect = ({ start, end }) => {
    console.log(start);
    const startDate = start;
    const endDate = end;
    setSelectedDates({
      selectedStart: startDate,
      selectedEnd: endDate,
    });
    setNewEventClicked(true);
  };

  useEffect(() => {
    console.log(newEvent);
  }, [newEventClicked, newEvent]);

  return (
    <div className="scheduler">
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
          setEvent={setEvent}
          event={event}
          eventState={eventState}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default Scheduler;
