import React, { useState, useEffect, Fragment } from 'react';
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Grid,
  Button,
  Paper,
  makeStyles,
  IconButton,
  Container
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

import PostService from '../../services/postService';

import './postPage.scss';

const useStyles = makeStyles({
  buttonGrid: {
    padding: '10px 0'
  }
});

const PostPage = props => {
  const [posts, setPosts] = useState([]);

  const fetchData = async () => {
    const result = await PostService.get();
    setPosts(result.data);
  };

  const editData = async id => {
    props.history.push(`/posts/edit/${id}`);
  };

  const deleteData = async id => {
    await PostService.delete(id);
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  const classes = useStyles();

  return (
    <Container>
      <Grid container direction="column">
        <Grid container direction="row" justify="flex-end" className={classes.buttonGrid}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => props.history.push('/posts/new')}
          >
            Adicionar Post
          </Button>
        </Grid>
        <Grid container direction="row">
          <Grid container direction="column">
            <TableContainer component={Paper}>
              <Table size="small" aria-label="a dense table">
                <TableHead>
                  <TableRow>
                    <TableCell>Id</TableCell>
                    <TableCell align="left">Nome</TableCell>
                    <TableCell align="left">Autor</TableCell>
                    <TableCell align="right">Ações</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {posts.map(row => (
                    <TableRow key={row.id}>
                      <TableCell component="th" scope="row">
                        {row.id}
                      </TableCell>
                      <TableCell align="left">{row.title}</TableCell>
                      <TableCell align="left">{row.author.nickname}</TableCell>
                      <TableCell align="right">
                        <IconButton onClick={_ => editData(row.id)}>
                          <EditIcon />
                        </IconButton>
                        <IconButton onClick={_ => deleteData(row.id)}>
                          <DeleteIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default PostPage;
