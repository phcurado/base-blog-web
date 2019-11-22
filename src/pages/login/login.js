import React, { useState, useEffect } from 'react';
import AuthService from '../../services/authService';
import { useHistory } from 'react-router-dom';
import { Grid, Box } from '../../components';

const LoginPage = () => {
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);

  async function login() {
    AuthService.login(email, password).then(() => {
      useHistory().push('/');
    });
  }

  return (
    <Grid container row>
      <Grid>
        <Box>Olá</Box>
      </Grid>
      <Grid>
        <Box>Olá</Box>
      </Grid>
    </Grid>
    // <Grid container spacing={3}>
    //   <Grid item xs={12}>
    //     <Input value={email} onChange={e => setEmail(e.target.value)}></Input>
    //   </Grid>
    //   <Grid item xs={12}>
    //     <Input value={password} type={"password"} onChange={e => setPassword(e.target.value)}></Input>
    //   </Grid>
    //   <Button onClick={login} >login</Button>
    // </Grid>
  );
};

export default LoginPage;
