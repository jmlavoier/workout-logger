import React from 'react';
import PropTypes from 'prop-types';
import uid from 'uid';

import Box from 'components/Box';
import Container from 'components/Container';
import InputText from 'components/InputText';
import InputDate from 'components/InputDate';
import Button from 'components/Button';
import Select from 'components/Select';
import Field from 'components/Field';

const workoutTypeOptions = [
  { id: '1', value: 'Run' },
  { id: '2', value: 'Swimming' },
  { id: '3', value: 'Bike' },
  { id: '4', value: 'Stretch' },
  { id: '5', value: 'Yoga' },
  { id: '6', value: 'Gym' },
];

const handleClick = (clickAdd, form) => () => {
  const formSet = {
    timeSpent: form.timeSpent.value,
    workoutType: form.workoutType.value,
    date: form.date.value,
  };

  clickAdd(formSet, uid());
};

const handleChangeDate = (changeField, fieldName) => date => changeField(fieldName, date.format('YYYY-MM-DD'));

const timeSpentValidation = (event) => {
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

const Form = ({ form, changeField, clickAdd }) => {
  const { timeSpent, workoutType, date } = form;

  return (
    <Container>
      <Box>
        <Field
          component={InputText}
          fieldName="timeSpent"
          value={timeSpent.value}
          isValid={timeSpent.isValid}
          changeField={changeField}
          validation={timeSpentValidation}
          mask={[/\d/, ':', /\d/, /\d/]}
        />
      </Box>
      <Box>
        <Field
          component={Select}
          fieldName="workoutType"
          value={workoutType.value}
          isValid={timeSpent.isValid}
          changeField={changeField}
          options={workoutTypeOptions}
        />
      </Box>
      <Box>
        <InputDate
          fieldName="date"
          value={date.value}
          isValid={date.isValid}
          onChange={handleChangeDate(changeField, 'date')}
        />
      </Box>
      <Box>
        <Button onClick={handleClick(clickAdd, form)} >Add</Button>
      </Box>
    </Container>
  );
};

Form.propTypes = {
  form: PropTypes.objectOf(PropTypes.shape({
    value: PropTypes.string,
    isValid: PropTypes.bool,
  })).isRequired,
  changeField: PropTypes.func.isRequired,
  clickAdd: PropTypes.func.isRequired,
};

export default Form;
