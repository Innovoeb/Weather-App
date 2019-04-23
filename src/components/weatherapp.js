import React, { Component } from 'react';
import {setWeather} from '../actions/weather_man.js'
import {setForcast} from '../actions/weather_man.js'
import {getIcon} from '../actions/weather_man.js'
import { connect } from "react-redux";



class WeatherApp extends Component {



  componentDidMount() {
    setForcast()
    setWeather()
    getIcon()
  }



  render() {
    return (
      <div>



              <h1>Now</h1>
              <p>Temperature: {Math.ceil(this.props.tempNow)} degrees</p>
              {this.props.forcast.map((day, i)=> (
                <div key={'day-' + i} className="_3hour">
                  <h1>{day.dt_txt}</h1>
                  <p>Expected High: {Math.ceil(day.main.temp_max)} degrees</p>
                  <p>Expected Low: {Math.ceil(day.main.temp_min)} degrees</p>
                </div>
              ))}



      </div>
    )
  }


}

// function that maps the application state to props
function mapStateToProps(appState) {
  return {
    forcast: appState.forcast,
    tempNow: appState.tempNow,
    tempHigh: appState.tempHigh,
    tempLow: appState.tempLow,
    weatherIcon: appState.weatherIcon,
  }
}

// connect() is a higher order component that ...
export default connect(mapStateToProps)(WeatherApp)
