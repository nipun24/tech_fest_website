import React, { Component } from 'react';
import { Button,Typography } from '@material-ui/core';
import StateContext from '../Context/StateContext'; 
import {Redirect} from 'react-router-dom';

class Register extends Component {
    static contextType = StateContext;

    componentDidMount = () => {
        console.log("register", this.context);
    }

    render() {
        return(
            <div>
                register
            </div>
        );
      }
}

export default Register;
