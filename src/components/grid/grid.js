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
  if (props.column) {
    className += ' grid-column';
  }
  if (props.center) {
    className += ' grid-center';
  }
  if (props.size) {
    className += ' grid-' + props.size;
  }

  return <div className={className}>{props.children}</div>;
};

export default Grid;
