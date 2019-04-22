import React, { Component } from 'react';
import '../styles/base.css'
import WeatherApp from './weatherapp'
import { Provider } from 'react-redux'
import store from '../store'


class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div>
        <WeatherApp />
      </div>
      </Provider>





    )
  }
}

export default App;
