import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';

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
  Container,
  TablePagination
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
  const [queryParams, setQueryParams] = useState(useLocation().search);
  const [pageParams, setPageParams] = useState({ page: 1, size: 5, total: 0 });

  const fetchData = async (page = 1, size = 3) => {
    const result = await PostService.get(queryParams, page, size);
    setPageParams(result.metadata);
    setPosts(result.data);
  };

  const handleChangePage = async (event, newPage) => {
    fetchData(newPage + 1);
  };

  const handleChangeRowsPerPage = async (event, newPage) => {
    fetchData(1, event.target.value);
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
            <TablePagination
              rowsPerPageOptions={[3, 5, 10, 25]}
              component="div"
              count={pageParams.total}
              rowsPerPage={pageParams.size}
              page={pageParams.page - 1}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
            />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default PostPage;
