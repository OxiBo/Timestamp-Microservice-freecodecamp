exports.getDateAndTime = data => {
  return {
    unix: !data
      ? new Date().getTime()
      : isNaN(+data)
      ? new Date(data).getTime()
      : new Date(+data).getTime(),
    utc: !data
      ? new Date().toUTCString()
      : isNaN(+data)
      ? new Date(data).toUTCString()
      : new Date(+data).toUTCString()
  };
};

