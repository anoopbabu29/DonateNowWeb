import React, { Component } from 'react';
import './App.css';
import {Switch, Route, BrowserRouter} from 'react-router-dom';

//Components
import HomeScreen from './components/HomeScreen';
import Error from './components/Error';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={HomeScreen} exact/>
          <Route component={Error}/>
        </Switch>
      </BrowserRouter>
      
    );
  }
}

export default App;
