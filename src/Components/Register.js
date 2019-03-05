import React, { Component } from 'react';
import {TextField, Button, CircularProgress, Snackbar} from '@material-ui/core';
import StateContext from '../Context/StateContext';
import {Redirect} from 'react-router-dom';

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
        if(this.context.status === "true"){
            return(
                <Redirect to = '/'/>
            );
        }
        else if(this.context.status === "loading"){
            return(
                <CircularProgress />
            );
        }
        else{
            return(
                <div>
                    <Snackbar 
                        anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                        }}
                        open = {this.context.open}
                        autoHideDuration = {3000}
                        onClose = {this.context.handleClose}
                        message = {<span>{this.context.message}</span>}
                    />
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
}

export default Register;
