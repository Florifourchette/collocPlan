import React from 'react';

const schedules = () => {
  return [
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
    {
      id: 3,
      title: 'Meeting 3',
      start: new Date(2023, 6, 23, 11, 0),
      end: new Date(2023, 6, 23, 12, 0),
    },
  ];
};

export default schedules;
