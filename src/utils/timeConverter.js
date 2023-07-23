const timeConverter = (date) => {
  const formattedDate = new Date(date);

  return `${
    formattedDate.getHours() < 10
      ? '0' + formattedDate.getHours()
      : formattedDate.getHours()
  }:${
    formattedDate.getMinutes() < 10
      ? '0' + formattedDate.getMinutes()
      : formattedDate.getMinutes()
  }`;
};

export default timeConverter;
