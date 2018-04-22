
export const timeSpentValidation = (event) => {
  const { value } = event.target;
  const [, minutes] = value.split(':');
  const parsedMinutes = parseInt(minutes, 10);
  const minutesLength = String(parsedMinutes).length;
  const isMinuteANumber = !isNaN(parsedMinutes);

  if (isMinuteANumber && minutesLength === 1 && parsedMinutes >= 6 && parsedMinutes <= 9) {
    return false;
  }

  if (isMinuteANumber && parsedMinutes > 59) {
    return false;
  }

  return true;
};

export const timeSpentBeforeChange = (value) => {
  const [hours, minutes] = value.split(':');

  const hoursReplaced = String(hours).replace(/_/g, ' ');
  const minutesReplaced = String(minutes).replace(/_/g, ' ');

  return `${hoursReplaced}:${minutesReplaced}`;
};

export const formSubmitValidation = (form) => {
  const {
    timeSpent,
    date,
  } = form;

  const [hours, minutes] = timeSpent.split(':');
  const dateValue = date;

  const hoursReplaced = hours.replace(' ', '');
  const minutesReplaced = minutes.replace(' ', '');

  if (isNaN(parseInt(minutesReplaced, 10))) {
    return {
      status: false,
      field: 'timeSpent',
    };
  }

  if (parseInt(hoursReplaced, 10) === 0 && parseInt(minutesReplaced, 10) === 0) {
    return {
      status: false,
      field: 'timeSpent',
    };
  }

  if (isNaN(parseInt(minutesReplaced, 10))) {
    return {
      status: false,
      field: 'timeSpent',
    };
  }

  if (minutesReplaced.length < 2) {
    return {
      status: false,
      field: 'timeSpent',
    };
  }

  if (dateValue === '') {
    return {
      status: false,
      field: 'date',
    };
  }

  return {
    status: true,
  };
};

