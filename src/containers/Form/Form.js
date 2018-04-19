import React from 'react';
import PropTypes from 'prop-types';

import Box from 'components/Box';
import Field from 'components/Field';
import Container from 'components/Container';
import InputTime from 'components/InputTime';
import Button from 'components/Button';
import Select from 'components/Select';

const Form = () => (
  <Container>
    <Box>
      <InputTime name="time-spent" value='0:00' />
    </Box>
    <Box>
      <Select name='workout-type' options={['Run', 'Swimming']} value='Run' onChange={e => {}} />
    </Box>
    <Box>
      <InputTime name="date" value='18/04/2018' />
    </Box>
    <Box>
      <Button>Add</Button>
    </Box>
  </Container>
);

export default Form;