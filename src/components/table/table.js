import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
});

const Tabloid = (props) => {
  const classes = useStyles();

  return (
    <Table className={classes.table} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Id</TableCell>
          <TableCell>Título</TableCell>
          <TableCell>Autor</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {props.list.map(row => (
          <TableRow key={row.id}>
            <TableCell >{row.id}</TableCell>
            <TableCell component="th" scope="row">
              {row.title}
            </TableCell>
            <TableCell>{row.author.nickname}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default Tabloid;
