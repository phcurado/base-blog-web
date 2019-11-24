import React, { useState, useEffect } from 'react';
import AuthService from '../../services/authService';
import { Redirect } from 'react-router-dom';
import { Grid } from '../../components';

const LoginPage = props => {
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);

  async function login() {
    AuthService.login(email, password).then(() => {
      props.history.push('/');
    });
  }

  return (
    <Grid container row>
      <Grid>
        <input value={email} onChange={e => setEmail(e.target.value)} />
      </Grid>
      <Grid>
        <input value={password} onChange={e => setPassword(e.target.value)} />
      </Grid>
      <button onClick={login}>login</button>
    </Grid>
  );
};

export default LoginPage;
