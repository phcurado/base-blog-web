import React, { Fragment } from 'react';
import TableRow from './tableRow';

const TableCell = props => {
  return <td>{props.children}</td>;
};

export default TableCell;
