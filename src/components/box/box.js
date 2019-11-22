import React from 'react';
import './box.scss';

const Box = props => {
  return <div className="box">{props.children}</div>;
};

export default Box;
