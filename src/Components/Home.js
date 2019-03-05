import React, { Component } from 'react';
import '../App.css';
import { Button, Grid, Paper, Typography, Snackbar, CircularProgress} from '@material-ui/core';
import Particles from 'react-particles-js';
import ParticleParams from '../Assets/ParticleParams.js';
import {Link} from 'react-router-dom';
import StateContext from '../Context/StateContext';

class Home extends Component {
  static contextType = StateContext;

  render() {
    if(this.context.status === "loading"){
      return(
        <CircularProgress />
      );
    }
    else{
      return (
        <div>
          <Particles className = "particleProps" params = {ParticleParams}/>
          <Snackbar 
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            open = {this.context.open}
            autoHideDuration = {2000}
            onClose = {this.context.handleClose}
            message = {<span>{this.context.message}</span>}
          />
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid container justify="flex-end">
              {this.context.status === "true" ? (
                <Button 
                style = {{margin: "1em"}}
                variant = "contained" 
                size = "small" 
                color = "secondary"
                onClick = {this.context.onLogout}
              >
                logout
              </Button>
              ) : (
              <div>
                <Button 
                style = {{margin: "1em", marginRight: "-0.5em"}}
                variant = "contained" 
                size = "small" 
                color = "secondary"
                component = {Link}
                to = "/register"
                >
                  register
                </Button>
                <Button
                  style = {{margin: "1em"}}
                  variant = "contained" 
                  size = "small" 
                  color = "primary"
                  to = "/login"
                  component = {Link}
                >
                  login
                </Button>
              </div>
              )}
            </Grid> 
            <Grid item style ={{marginTop:"10vw"}}>
              <Typography 
                variant = "h2"
                style = {{
                  fontFamily: "\"Kaushan Script\", cursive", 
                  color: "#ffffff", 
                  textAlign: "center",
                  fontSize: "12vw"
                }}
              >
                Techfest'19
              </Typography>
            </Grid>
            <Grid container alignItems = "center" justify = "center">
              <Grid item style={{margin: "5vw"}}>
                <Paper 
                  className="paperStyle"
                  style={{padding: "2vw"}}
                >
                  <Typography 
                    style={{fontWeight: "bold", textDecoration: "none"}} 
                    component = {Link}
                    to = "/events"
                  >
                    EVENTS
                  </Typography>
                </Paper>
              </Grid>
              <Grid item  >
                <Paper 
                  style={{padding: "2vw"}}
                  className="paperStyle" 
                >
                  <Typography
                    style={{fontWeight: "bold", textDecoration: "none"}}
                    component={Link}
                    to = "/workshop"
                  >
                    WORKSHOPS
                  </Typography>
                </Paper>
              </Grid>
            </Grid>    
          </Grid>
        </div>
      );
    }
  }
}

export default Home;
