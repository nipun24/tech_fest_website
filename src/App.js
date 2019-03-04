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
      user: {}
    };
  }

  componentDidMount = () => {
    this.authListener();
  }

  authListener = () => {
    db.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({user});
        console.log("authlisterner",this.state.user);
      } else {
        console.log(user);
      }
    });
  }

  onRegister = (name,email,password) => {
    db.auth().createUserWithEmailAndPassword(email,password).then(res => {
      db.database().ref('users/'+ res.user.uid).set({
        username: name,
        email: email
      })
    }).catch(error => {
      console.log(error);
    });
    // var user = db.auth().currentUser;
    // console.log(user);
    // db.database().ref('users/'+ 1).set({
    //   username: name,
    //   email: email,
    //   password: password
    // });
  }

  //template for firebase database write

  // db.database().ref('users/'+ 1).set({
  //   username: name,
  //   email: email,
  //   password: password
  // });

  render() {
    return (
      <StateContext.Provider value = {{
        user: this.state.user,
        onRegister: this.onRegister
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
