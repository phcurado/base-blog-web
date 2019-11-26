import React, { useState, useEffect, Fragment } from 'react';
import AuthService from '../../services/authService';
import { Grid, InputForm, Button } from '../../components';

import './loginPage.scss';

const LoginPage = props => {
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);

  async function login() {
    AuthService.login(email, password).then(() => {
      props.history.push('/');
    });
  }

  return (
    <Fragment>
      <Grid container row center>
        <Grid column size={5} />
        <Grid column>
          <InputForm value={email} onChange={e => setEmail(e.target.value)} />
          <InputForm value={password} onChange={e => setPassword(e.target.value)} />
          <Button onClick={login}>Entrar</Button>
        </Grid>
        <Grid column size={5} />
      </Grid>
    </Fragment>
  );
};

export default LoginPage;
