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
      isLoggedIn: false
    };
  }

  componentDidMount = () => {
    this.authListener();
  }

  authListener = () => {
    db.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({isLoggedIn: true});
      } else {
        console.log(user);
      }
    });
  }

  onRegister = (name,email,password) => {
    db.auth().createUserWithEmailAndPassword(email,password)
    .then(res => {
      db.database().ref('users/'+ res.user.uid).set({
        username: name,
        email: email
      });
      this.setState({isLoggedIn: true})
    })
    .catch(error => {console.log(error)});
  }

  onLogin = (email,password) => {
    db.auth().signInWithEmailAndPassword(email, password)
    .then(res => {
      this.setState({isLoggedIn: true});
    })
    .catch(error => {
      console.log(error);
    });
  }

  onLogout = () => {
    db.auth().signOut().then(res => {
      this.setState({isLoggedIn: false})
    }).catch(function(error) {
      console.log(error);
    });
  }

  render() {
    return (
      <StateContext.Provider value = {{
        user: this.state.user,
        isLoggedIn: this.state.isLoggedIn,
        onRegister: this.onRegister,
        onLogin: this.onLogin,
        onLogout: this.onLogout
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
