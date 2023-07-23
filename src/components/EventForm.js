import React, { useEffect, useState } from 'react';
import { Button, Form } from 'semantic-ui-react';
import handleDates from '../utils/handleDates';
import handleDateValidation from '../utils/handleDateValidation';

const eventState = {
  title: '',
  startDay: '',
  startTime: '',
  endDay: '',
  endTime: '',
};

const EventForm = ({
  handleNewEvent,
  newEvent,
  setNewEvent,
  setDateValidation,
  dateValidation,
  events,
  titleValidation,
  setTitleValidation,
  setNewEventClicked,
  selectedStart,
  selectedEnd,
  selectedDates,
}) => {
  console.log(newEvent);
  console.log(selectedStart);
  console.log(selectedEnd);
  console.log(selectedDates);

  const [event, setEvent] = useState(eventState);
  const handleChange = (e, property) => {
    setDateValidation(true);
    setTitleValidation(true);
    setEvent({ ...event, [property]: e.target.value });
  };

  useEffect(() => {
    let validated = 'event validated';
    let startDate = '';
    let endDate = '';

    if (
      event.startDay !== '' &&
      event.endDay !== '' &&
      event.startTime !== undefined &&
      event.endTime !== undefined
    ) {
      startDate = handleDates(
        new Date(event.startDay),
        event.startTime
      );

      endDate = handleDates(new Date(event.endDay), event.endTime);
      validated = handleDateValidation({
        start: startDate,
        end: endDate,
      });
    }

    console.log('setNewEvent useEffect in EventForm');

    if (validated === 'event not validated') {
      setDateValidation(false);
    } else {
      setNewEvent({
        id: events.length + 1,
        title: event.title,
        start: new Date(startDate).toUTCString(),
        end: new Date(endDate).toUTCString(),
      });
    }
  }, [
    event.endDay,
    event.endTime,
    event.startDay,
    event.startTime,
    event.title,
    events.length,
    setNewEvent,
    setDateValidation,
  ]);

  useEffect(() => {
    if (event.title === '') {
      setTitleValidation((prev) => !prev);
    }
  }, [event.title, setTitleValidation]);

  useEffect(() => {
    console.log(selectedDates);
    const newStart = new Date(selectedDates.selectedStart);
    const newEnd = new Date(selectedDates.selectedEnd);

    const newStartDay = `${newStart.getFullYear()}-${
      newStart.getMonth() < 10
        ? '0' + newStart.getMonth()
        : newStart.getMonth()
    }-${newStart.getDate()}`;

    const newEndDay = `${newEnd.getFullYear()}-${
      newEnd.getMonth() < 10
        ? '0' + newEnd.getMonth()
        : newEnd.getMonth()
    }-${newEnd.getDate()}`;

    const newStartTime = `${
      newStart.getHours() < 10
        ? '0' + newStart.getHours()
        : newStart.getHours()
    }:${
      newStart.getMinutes() < 10
        ? '0' + newStart.getMinutes()
        : newStart.getMinutes()
    }`;

    const newEndTime = `${
      newEnd.getHours() < 10
        ? '0' + newEnd.getHours()
        : newEnd.getHours()
    }:${
      newEnd.getMinutes() < 10
        ? '0' + newEnd.getMinutes()
        : newEnd.getMinutes()
    }`;
    setEvent({
      ...event,
      startDay: newStartDay,
      startTime: newStartTime,
      endDay: newEndDay,
      endTime: newEndTime,
    });
    console.log(newStart.getMonth());
  }, [selectedDates]);

  return (
    <>
      <Form className="eventForm" onSubmit={handleNewEvent}>
        <button onClick={() => setNewEventClicked(false)}>
          cancel
        </button>
        <Form.Field>
          Title:
          <input
            type="text"
            value={event.title}
            onChange={(e) => handleChange(e, 'title')}
          />
          {titleValidation ? (
            <></>
          ) : (
            <p>The title should not be empty</p>
          )}
        </Form.Field>
        <Form.Field>
          Start day:
          <input
            type="date"
            value={event.startDay}
            onChange={(e) => handleChange(e, 'startDay')}
          />
        </Form.Field>
        <Form.Field>
          Start Time:
          <input
            type="time"
            value={event.startTime}
            onChange={(e) => handleChange(e, 'startTime')}
          />
        </Form.Field>
        <Form.Field>
          End day:
          <input
            type="date"
            value={event.endDay}
            onChange={(e) => handleChange(e, 'endDay')}
          />
        </Form.Field>

        <Form.Field>
          End Time:
          <input
            type="time"
            value={event.endTime}
            onChange={(e) => handleChange(e, 'endTime')}
          />
        </Form.Field>
        {dateValidation ? (
          <></>
        ) : (
          <p>The dates are not correct, please check your input</p>
        )}
        <Button type="submit">Add Event</Button>
      </Form>
    </>
  );
};

export default EventForm;
