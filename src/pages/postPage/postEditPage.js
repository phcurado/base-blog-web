import React, { useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import PostService from '../../services/postService';
import {
  FormControl,
  InputLabel,
  Input,
  Grid,
  Button,
  Container,
  TextField,
  FormLabel
} from '@material-ui/core';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const PostEditPage = props => {
  const [title, setTitle] = useState([]);
  const [abstract, setAbstract] = useState([]);
  const [textData, setTextData] = useState([]);

  let { id } = useParams();

  const fetchData = async id => {
    const { data } = await PostService.getById(id);
    setTitle(data.title);
    setAbstract(data.abstract);
    setTextData(data.html);
  };

  const addPost = async () => {
    let post = { title, abstract, status: 1, html: textData };
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
            <FormControl margin="dense">
              <InputLabel htmlFor="title">Título</InputLabel>
              <Input id="title" value={title} onChange={e => setTitle(e.target.value)} />
            </FormControl>
            <FormControl margin="dense">
              <InputLabel htmlFor="abstract">Resumo</InputLabel>
              <Input id="abstract" value={abstract} onChange={e => setAbstract(e.target.value)} />
            </FormControl>
            <FormControl margin="dense">
              <FormLabel>Texto</FormLabel>
              <CKEditor
                editor={ClassicEditor}
                data={textData ? textData : 'Digite seu texto aqui'}
                onInit={editor => {
                  // You can store the "editor" and use when it is needed.
                  console.log('Editor is ready to use!', editor);
                }}
                onChange={(event, editor) => setTextData(editor.getData())}
              />
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
