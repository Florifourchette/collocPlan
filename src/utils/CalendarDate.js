const calendarDate = (date) => {
  const newDate = new Date(date);
  const day = newDate.getDate();
  const month = newDate.getMonth();
  const year = newDate.getFullYear();
  const hours = newDate.getHours();
  const minutes = newDate.getMinutes();

  return {
    day: day,
    month: month,
    year: year,
    hours: hours,
    minutes: minutes,
  };
};

export default calendarDate;
