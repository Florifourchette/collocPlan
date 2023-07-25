import React, { useEffect } from 'react';
import { Button, Form } from 'semantic-ui-react';
import handleDates from '../utils/handleDates';
import handleDateValidation from '../utils/handleDateValidation';
import dateConverter from '../utils/dateConverter';
import timeConverter from '../utils/timeConverter';

const EventForm = ({
  handleNewEvent,
  setNewEvent,
  setDateValidation,
  dateValidation,
  events,
  titleValidation,
  setTitleValidation,
  setNewEventClicked,
  selectedDates,
  event,
  setEvent,
  eventState,
}) => {
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

    if (validated === 'event not validated') {
      setDateValidation(false);
    } else {
      setNewEvent({
        id: events.length + 1,
        title: event.title,
        start: new Date(startDate),
        end: new Date(endDate),
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
    console.log(event.title);
    if (event.title === '') {
      setTitleValidation((prev) => !prev);
    }
  }, [event.title]);

  useEffect(() => {
    console.log(selectedDates);

    const newStart = new Date(selectedDates.selectedStart);
    const newEnd = new Date(selectedDates.selectedEnd);

    const newStartDay = dateConverter(newStart);

    const newEndDay = dateConverter(newEnd);

    const newStartTime = timeConverter(newStart);

    const newEndTime = timeConverter(newEnd);
    setEvent({
      ...event,
      startDay: newStartDay,
      startTime: newStartTime,
      endDay: newEndDay,
      endTime: newEndTime,
    });
    setDateValidation(true);
  }, [selectedDates]);

  return (
    <>
      <Form className="eventForm" onSubmit={handleNewEvent}>
        <button
          onClick={() => {
            setEvent(eventState);
            setNewEventClicked(false);
          }}
        >
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
