import React from 'react';
import { useState } from 'react';
import { Button, Form } from 'semantic-ui-react';

const EventForm = ({ handleNewEvent, newEvent, setNewEvent }) => {
  return (
    <Form className="eventForm" onSubmit={handleNewEvent}>
      <Form.Field>
        Title:
        <input
          type="text"
          value={newEvent.title}
          onChange={(e) =>
            setNewEvent({ ...newEvent, title: e.target.value })
          }
        />
      </Form.Field>
      <Form.Field>
        Start day:
        <input
          type="date"
          value={newEvent.startDay}
          onChange={(e) =>
            setNewEvent({ ...newEvent, startDay: e.target.value })
          }
        />
      </Form.Field>
      <Form.Field>
        End day:
        <input
          type="date"
          value={newEvent.endDay}
          onChange={(e) =>
            setNewEvent({ ...newEvent, endDay: e.target.value })
          }
        />
      </Form.Field>
      <Form.Field>
        Start Time:
        <input
          type="time"
          value={newEvent.startTime}
          onChange={(e) =>
            setNewEvent({ ...newEvent, startTime: e.target.value })
          }
        />
      </Form.Field>
      <Form.Field>
        End Time:
        <input
          type="time"
          value={newEvent.endTime}
          onChange={(e) =>
            setNewEvent({ ...newEvent, endTime: e.target.value })
          }
        />
      </Form.Field>
      <Button type="submit">Add Event</Button>
    </Form>
  );
};

export default EventForm;
