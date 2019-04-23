import React, { Component } from 'react';
import '../styles/base.css'
import WeatherApp from './weatherapp'
import DayForcast from './dayforcast'
import { Provider } from 'react-redux'
import store from '../store'
import {BrowserRouter as Router, Route} from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Route exact path="/" component={WeatherApp}/>
            <Route path="/day/i" component={DayForcast}/>
          </div>
        </Router>
      </Provider>





    )
  }
}

export default App;
