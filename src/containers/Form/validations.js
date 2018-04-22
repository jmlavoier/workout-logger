
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

  const zeroLeft = minutes[0] === '0';

  const parsedHours = parseInt(hours, 10);
  const parsedMinutes = parseInt(minutes, 10);

  const hoursSet = !isNaN(parsedHours) ? parsedHours : '';
  const minutessSet = !isNaN(parsedMinutes) ? parsedMinutes : '';

  return `${hoursSet}:${zeroLeft ? '0' : ''}${minutessSet}`;
};
