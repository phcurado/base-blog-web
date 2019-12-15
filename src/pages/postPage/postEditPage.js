import React, { useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import PostService from '../../services/postService';
import { FormControl, InputLabel, Input, Grid, Button, Container } from '@material-ui/core';

const PostEditPage = props => {
  const [title, setTitle] = useState([]);
  const [abstract, setAbstract] = useState([]);

  let { id } = useParams();

  const fetchData = async id => {
    const { data } = await PostService.getById(id);
    setTitle(data.title);
    setAbstract(data.abstract);
  };

  const addPost = async () => {
    let post = { title, abstract, status: 1 };
    if (id) {
      return PostService.put(id, post).then(() => {
        props.history.push('/posts');
      });
    }

    PostService.post(post).then(() => {
      props.history.push('/posts');
    });
  };

  useEffect(() => {
    if (id) {
      fetchData(id);
    }
  }, []);

  return (
    <Container>
      <Grid container direction="column" spacing={4}>
        <Grid container direction="row" item>
          <Grid container direction="column" item>
            <FormControl>
              <InputLabel htmlFor="title">Título</InputLabel>
              <Input id="title" value={title} onChange={e => setTitle(e.target.value)} />
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="abstract">Resumo</InputLabel>
              <Input id="abstract" value={abstract} onChange={e => setAbstract(e.target.value)} />
            </FormControl>
          </Grid>
        </Grid>
        <Grid container direction="row" item>
          <Grid container direction="column">
            <Button variant="contained" color="primary" onClick={addPost}>
              Adicionar
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default PostEditPage;
