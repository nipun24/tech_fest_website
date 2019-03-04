import React, { Component } from 'react';
import {TextField, Button} from '@material-ui/core';
import StateContext from '../Context/StateContext';

class Register extends Component {
    constructor(props) {
        super(props);
        this.name = '';
        this.email = '';
        this.password = '';
    }

    //Context API integration
    static contextType = StateContext;

    onNameChange = (e) => {
        this.name= e.target.value;
    }

    onEmailChange = (e) => {
        this.email= e.target.value;
    }

    onPasswordChange = (e) => {
        this.password= e.target.value;
    }

    render() {
        return(
            <div>
                <TextField
                label="Name"
                type="text"
                margin="normal"
                variant="outlined"
                onChange={this.onNameChange}
                />
                <TextField
                label="Email"
                type="email"
                autoComplete="email"
                margin="normal"
                variant="outlined"
                onChange={this.onEmailChange}
                />
                <TextField
                label="Password"
                type="password"
                autoComplete="current-password"
                margin="normal"
                variant="outlined"
                onChange={this.onPasswordChange}
                />
                <Button 
                    variant="contained" 
                    color="primary" 
                    onClick={() => this.context.onRegister(this.name,this.email,this.password)}
                >
                    Register
                </Button>
            </div>
        );
      }
}

export default Register;
