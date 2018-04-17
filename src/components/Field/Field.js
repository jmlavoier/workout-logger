import React from 'react';

const Field = ({ component:Component, value, onChange }) => (
  <Component value={value} onChange={onChange} />
);

export default Field;