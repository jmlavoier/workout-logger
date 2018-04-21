import React from 'react';
import PropTypes from 'prop-types';
import uid from 'uid';

import Box from 'components/Box';
import Container from 'components/Container';
import InputTime from 'components/InputTime';
import Button from 'components/Button';
import Select from 'components/Select';

const workoutTypeOptions = [
  { id: '1', value: 'Run' },
  { id: '2', value: 'Swimming' },
  { id: '3', value: 'Bike' },
  { id: '4', value: 'Stretch' },
  { id: '5', value: 'Yoga' },
  { id: '6', value: 'Gym' },
];

const handleChange = (changeField, fieldName) => (e) => {
  changeField(fieldName, e.target.value);
};

const handleClick = (clickAdd, form) => () => {
  clickAdd(form, uid());
};

const Form = ({ form, changeField, clickAdd }) => {
  const { timeSpent, workoutType, date } = form;

  return (
    <Container>
      <Box>
        <InputTime name="time-spent" value={timeSpent} onChange={handleChange(changeField, 'timeSpent')} />
      </Box>
      <Box>
        <Select name="workout-type" options={workoutTypeOptions} value={workoutType} onChange={handleChange(changeField, 'workoutType')} />
      </Box>
      <Box>
        <InputTime name="date" value={date} onChange={handleChange(changeField, 'date')} />
      </Box>
      <Box>
        <Button onClick={handleClick(clickAdd, form)} >Add</Button>
      </Box>
    </Container>
  );
};

Form.propTypes = {
  form: PropTypes.objectOf(PropTypes.string).isRequired,
  changeField: PropTypes.func.isRequired,
  clickAdd: PropTypes.func.isRequired,
};

export default Form;
