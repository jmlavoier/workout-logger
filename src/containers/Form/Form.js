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

import {
  timeSpentValidation,
  timeSpentBeforeChange,
} from './validations';

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

const Form = ({ form, changeField, clickAdd }) => {
  const { timeSpent, workoutType, date } = form;

  return (
    <Container className="form" justify="center">
      <Box className="time-spent">
        <Field
          component={InputText}
          fieldName="timeSpent"
          value={timeSpent.value}
          isValid={timeSpent.isValid}
          changeField={changeField}
          validation={timeSpentValidation}
          mask={[/\d/, ':', /\d/, /\d/]}
          formatValueBeforeChange={timeSpentBeforeChange}
        />
      </Box>
      <Box className="workout-type">
        <Field
          component={Select}
          fieldName="workoutType"
          value={workoutType.value}
          isValid={timeSpent.isValid}
          changeField={changeField}
          options={workoutTypeOptions}
        />
      </Box>
      <Box className="date">
        <InputDate
          fieldName="date"
          value={date.value}
          isValid={date.isValid}
          onChange={handleChangeDate(changeField, 'date')}
        />
      </Box>
      <Box className="save">
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
