import React from 'react';
import Input from '../input/input';

import './inputForm.scss';

const InputForm = props => {
  return (
    <Input {...props} className="input-form">
      {props.children}
    </Input>
  );
};

export default InputForm;
