import React from 'react';

import Box from 'components/Box';
import Container from 'components/Container';
import InputTime from 'components/InputTime';
import Button from 'components/Button';
import Select from 'components/Select';

const optionsMock = [
  { id: '1', value: 'Run' },
  { id: '2', value: 'Swimming' },
];

const Form = () => (
  <Container>
    <Box>
      <InputTime name="time-spent" value="0:00" onChange={() => {}} />
    </Box>
    <Box>
      <Select name="workout-type" options={optionsMock} value="Run" onChange={() => {}} />
    </Box>
    <Box>
      <InputTime name="date" value="18/04/2018" onChange={() => {}} />
    </Box>
    <Box>
      <Button onClick={() => {}} >Add</Button>
    </Box>
  </Container>
);

export default Form;
