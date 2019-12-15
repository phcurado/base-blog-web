import React, { useState } from 'react';
import AuthService from '../../services/authService';

import './loginPage.scss';
import {
  FormControl,
  InputLabel,
  Input,
  Grid,
  Paper,
  Container,
  Button,
  Typography
} from '@material-ui/core';
import HomeIcon from '@material-ui/icons/SupervisedUserCircleSharp';

const LoginPage = props => {
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);

  async function login() {
    AuthService.login(email, password).then(() => {
      props.history.push('/');
    });
  }

  return (
    <Grid className="login-wrapper" container spacing={0} alignItems="center" justify="center">
      <Container>
        <Paper className="login-paper">
          <Grid container alignItems="center" direction="column" spacing={2}>
            <Grid item>
              <HomeIcon fontSize="large"></HomeIcon>
            </Grid>
            <Grid item>
              <Typography variant="h3">Login</Typography>
            </Grid>
            <Grid item>
              <FormControl>
                <InputLabel htmlFor="login">Email</InputLabel>
                <Input id="login" value={email} onChange={e => setEmail(e.target.value)} />
              </FormControl>
            </Grid>
            <Grid item>
              <FormControl>
                <InputLabel htmlFor="password">Senha</InputLabel>
                <Input id="password" value={password} onChange={e => setPassword(e.target.value)} />
              </FormControl>
            </Grid>
            <Grid item>
              <Button onClick={login} variant="contained" color="primary">
                Login
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Grid>
  );
};

export default LoginPage;
