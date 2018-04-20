import React from 'react';
import PropTypes from 'prop-types';

import Box from 'components/Box';
import Container from 'components/Container';
import InputTime from 'components/InputTime';
import Button from 'components/Button';
import Select from 'components/Select';

const optionsMock = [
  { id: '1', value: 'Run' },
  { id: '2', value: 'Swimming' },
];

const handleChange = (changeField, fieldName) => (e) => {
  changeField(fieldName, e.target.value);
};

const Form = ({ form, changeField }) => (
  <Container>
    <Box>
      <InputTime name="time-spent" value={form.timeSpent} onChange={handleChange(changeField, 'timeSpent')} />
    </Box>
    <Box>
      <Select name="workout-type" options={optionsMock} value={form.workoutType} onChange={handleChange(changeField, 'workoutType')} />
    </Box>
    <Box>
      <InputTime name="date" value={form.date} onChange={handleChange(changeField, 'date')} />
    </Box>
    <Box>
      <Button onClick={() => {}} >Add</Button>
    </Box>
  </Container>
);

Form.propTypes = {
  form: PropTypes.objectOf(PropTypes.string).isRequired,
  changeField: PropTypes.func.isRequired,
};

export default Form;
