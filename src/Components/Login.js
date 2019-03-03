import React, { Component } from 'react';
import { Button,Typography } from '@material-ui/core';
import StateContext from '../Context/StateContext'; 
import {Redirect} from 'react-router-dom';

class Login extends Component {
  // static contextType = StateContext;

  render() {
    return(
      <div>
        login
      </div>
    );
  }
}

export default Login;
