import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//Components
import SignUpForm from './pages/SignUpForm';
import SignInForm from './pages/SignInForm';
import FindHotel from './pages/FindHotel';
import AddHotel from './pages/AddHotel';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={SignUpForm}>
          </Route>
          <Route path="/sign-in" component={SignInForm}>
          </Route>
          <Route path="/find-hotel" component={FindHotel}>
          </Route>
          <Route path="/add-hotel" component={AddHotel}>
          </Route>
        </div>
      </Router >
    )
  }

}

export default App;
