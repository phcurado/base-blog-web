import React, { useState, useEffect, Fragment } from 'react';
import { Grid, TableHeader, TableRow, TableCell, Table, Button } from '../../components';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

import PostService from '../../services/postService';

import './postPage.scss';

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

  return (
    <Fragment>
      <Grid container row center>
        <Button onClick={() => props.history.push('/posts/new')}>Adicionar Post</Button>
      </Grid>
      <Grid container row center>
        <Grid column>
          <Table>
            <thead>
              <TableRow>
                <TableHeader>Id</TableHeader>
                <TableHeader>Nome</TableHeader>
                <TableHeader>Autor</TableHeader>
                <TableHeader>Ações</TableHeader>
              </TableRow>
            </thead>
            <tbody>
              {posts.map(x => (
                <TableRow key={x.id}>
                  <TableCell>{x.id}</TableCell>
                  <TableCell>{x.title}</TableCell>
                  <TableCell>{x.author.nickname}</TableCell>
                  <TableCell width={'5%'}>
                    <EditIcon onClick={_ => editData(x.id)}></EditIcon>
                    <DeleteIcon onClick={_ => deleteData(x.id)}></DeleteIcon>
                  </TableCell>
                </TableRow>
              ))}
            </tbody>
          </Table>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default PostPage;
