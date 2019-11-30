import React, { useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { Grid, InputForm, Button } from '../../components';
import PostService from '../../services/postService';

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
    <Fragment>
      <Grid container row center>
        <Grid column>
          <InputForm value={title} onChange={e => setTitle(e.target.value)} />
          <InputForm value={abstract} onChange={e => setAbstract(e.target.value)} />
          <Button onClick={addPost}>Adicionar</Button>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default PostEditPage;
