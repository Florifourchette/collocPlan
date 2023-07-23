const addMinutes = (date, minutes) => {
  date.setMinutes(date.getMinutes() + minutes);

  return date;
};
export default addMinutes;
