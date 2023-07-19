const handleDates = (date, time) => {
  const formattedDate = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    time.slice(0, 2),
    time.slice(3, 5)
  );
  return formattedDate;
};

export default handleDates;
