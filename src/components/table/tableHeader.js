import React, { Fragment } from 'react';
import TableRow from './tableRow';

const TableHeader = props => {
  return <th>{props.children}</th>;
};

export default TableHeader;
