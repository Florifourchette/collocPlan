const handleDateValidation = (event) => {
  if (event.end - event.start > 0) {
    return 'event validated';
  } else {
    return 'event not validated';
  }
};

export default handleDateValidation;
