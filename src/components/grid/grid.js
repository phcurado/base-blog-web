import React from 'react';
import './grid.scss';

const Grid = props => {
  let className = 'grid';
  if (props.container) {
    className += ' grid-container';
  }
  if (props.row) {
    className += ' grid-row';
  }

  return <div className={className}>{props.children}</div>;
};

export default Grid;
