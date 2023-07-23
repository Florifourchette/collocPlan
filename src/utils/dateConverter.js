const dateConverter = (date) => {
  const formattedDate = new Date(date);
  const month = formattedDate.getMonth() + 1;

  return `${formattedDate.getFullYear()}-${
    month < 10 ? '0' + month : month
  }-${
    formattedDate.getDate() < 10
      ? '0' + formattedDate.getDate()
      : formattedDate.getDate()
  }`;
};

export default dateConverter;
