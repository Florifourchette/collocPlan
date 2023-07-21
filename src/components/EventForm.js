import React, { useEffect, useState } from 'react';
import { Button, Form } from 'semantic-ui-react';
import handleDates from '../utils/handleDates';
import handleDateValidation from '../utils/handleDateValidation';

const EventForm = ({
  handleNewEvent,
  newEvent,
  setNewEvent,
  setDateValidation,
  dateValidation,
  events,
  titleValidation,
  setTitleValidation,
  eventState,
  setNewEventClicked,
}) => {
  const [event, setEvent] = useState(eventState);
  console.log(event);
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
      console.log(event.startDay);

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

    if (validated === 'event not validated') {
      setDateValidation(false);
    } else {
      setNewEvent({
        id: events.length + 1,
        title: event.title,
        start: startDate,
        end: endDate,
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
