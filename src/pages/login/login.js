import React, { useState, useEffect } from "react";
import api from '../../config/api';
import { Input, Container, Button } from '@material-ui/core';
import AuthService from "../../services/authService";
import Grid from '@material-ui/core/Grid';


const LoginPage = () => {
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);

  async function login() {
    AuthService.login(email, password).then(x => {
      alert("deu boa")
    }).catch(alert("asdf"))
    setData(result.data.data)
  }

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Input value={email} onChange={e => setEmail(e.target.value)}></Input>
      </Grid>
      <Grid item xs={12}>
        <Input value={password} type={"password"} onChange={e => setPassword(e.target.value)}></Input>
      </Grid>
      <Button onClick={login} >login</Button>
    </Grid>
  )
};

export default LoginPage;