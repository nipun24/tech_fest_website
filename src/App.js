import React, { Component } from 'react';
import Home from './Components/Home';
import Register from './Components/Register';
import ErrorPage from './Components/ErrorPage';
import Login from './Components/Login';
import Events from './Components/Events';
import Workshop from './Components/Workshop';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import StateContext from './Context/StateContext';

class App extends Component {
  state = {
    route: 'home'
  }

  onRouteChange = route => {
    this.setState({route})
  }

  render() {
    return (
      <StateContext.Provider value = {{
        route: this.state.route,
        onRouteChange: this.onRouteChange
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
