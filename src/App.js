import React, { Component } from 'react';
import Home from './Components/Home';
import Register from './Components/Register';
import ErrorPage from './Components/ErrorPage';
import Login from './Components/Login';
import Events from './Components/Events';
import Workshop from './Components/Workshop';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import StateContext from './Context/StateContext';
import db from './Firebase/Config';
//import firebase modules individually for production
import 'firebase/database';
import 'firebase/auth';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      status: "loading",
      message: '',
      open: false
    };
  }

  componentDidMount = () => {
    this.authListener();
  }

  authListener = () => {
    db.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({status: "true"});
      } else {
        this.setState({status: "false"}); 
      }
    });
  }

  onRegister = (name,email,password) => {
    this.setState({status: "loading"});
    db.auth().createUserWithEmailAndPassword(email,password)
    .then(res => {
      db.database().ref('users/'+ res.user.uid).set({
        id: Math.floor(Math.random()*10000),
        username: name,
        email: email
      });
    })
    .then(res => {
      this.setState({
        status: "true",
        open: true,
        message: "Registration Successful !"
      });
    })
    .catch(error => {
      this.setState({
        status: "false",
        open: true,
        message: `${error}`
      });
    });
  }

  onLogin = (email,password) => {
    this.setState({status: "loading"});
    db.auth().signInWithEmailAndPassword(email, password)
    .then(res => {
      this.setState({
        status: "true",
        open: true,
        message: "Login Successful !"
      });
    })
    .catch(error => {
      this.setState({
        status: "false",
        open: true,
        message: `${error}`
      });
    });
  }

  onLogout = () => {
    this.setState({status: "loading"})
    db.auth().signOut()
    .then(res => {
      this.setState({
        status: "false",
        open: true,
        message: "You have been successfully logged out !"
      });
    })
    .catch(function(error) {
      console.log(error);
    });
  }

  handleClose = () => {
    this.setState({open: false});
  }

  render() {
    return (
      <StateContext.Provider value = {{
        user: this.state.user,
        status: this.state.status,
        message: this.state.message,
        open: this.state.open,
        onRegister: this.onRegister,
        onLogin: this.onLogin,
        onLogout: this.onLogout,
        handleClose: this.handleClose
      }}
      >
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component = {Home} />
            <Route exact path="/login" component = {Login} />
            <Route exact path="/register" component = {Register} />
            <Route exact path="/events" component = {Events} />
            <Route exact path="/workshop" component ={Workshop} />
            <Route component = {ErrorPage}/>
          </Switch  >
        </BrowserRouter>
      </StateContext.Provider>
    );
  }
}

export default App;
