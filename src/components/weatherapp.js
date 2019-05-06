import React, { Component } from 'react';
import {setWeather} from '../actions/weather_man.js'
import {setForcast} from '../actions/weather_man.js'
import { connect } from "react-redux"
import moment from 'moment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloud } from '@fortawesome/free-solid-svg-icons'
import { faCloudShowersHeavy } from '@fortawesome/free-solid-svg-icons'



class WeatherApp extends Component {



  componentDidMount() {
    setForcast()
    setWeather()
  }



  render() {
    return (
      <div>


              <h1 className="LV">Las Vegas, NV</h1>
              <h1>Now - {moment().format('ddd hA')}</h1>
              <p>Temperature: {Math.ceil(this.props.tempNow)} degrees</p>
              {this.props.forcast.map((day, i)=> {
                  if (day.weather[0].main === 'Clear') {
                    return (
                      <div key={'day-' + i} className="_3hour">
                            <h1>{moment(day.dt_txt).format('dddd ha')}</h1>
                            <p>Expected High: {Math.ceil(day.main.temp_max)} degrees</p>
                            <p>Expected Low: {Math.ceil(day.main.temp_min)} degrees</p>

                      </div>

                    )
                  } else if (day.weather[0].main === 'Clouds') {
                    return (
                      <div key={'day-' + i} className="_3hour">
                            <h1>{moment(day.dt_txt).format('dddd ha')}</h1>
                            <p>Expected High: {Math.ceil(day.main.temp_max)} degrees</p>
                            <p>Expected Low: {Math.ceil(day.main.temp_min)} degrees</p>
                              <FontAwesomeIcon id="cloudy" icon={faCloud} />
                      </div>

                    )
                  } else if (day.weather[0].main === 'Rain') {
                    return (
                      <div key={'day-' + i} className="_3hour">
                          <h1>{moment(day.dt_txt).format('dddd ha')}</h1>
                          <p>Expected High: {Math.ceil(day.main.temp_max)} degrees</p>
                          <p>Expected Low: {Math.ceil(day.main.temp_min)} degrees</p>
                            <FontAwesomeIcon id="rainy" icon={faCloudShowersHeavy} />
                      </div>
                    )
                  }
                })}





      </div>
    )
  }


}

/*
<div key={'day-' + i} className="_3hour">
  <h1>{moment(day.dt_txt).format('ddd hA')}</h1>
  <p>Expected High: {Math.ceil(day.main.temp_max)} degrees</p>
  <p>Expected Low: {Math.ceil(day.main.temp_min)} degrees</p>
</div>
*/

// function that maps the application state to props
function mapStateToProps(appState) {
  return {
    forcast: appState.forcast,
    tempNow: appState.tempNow,
    tempHigh: appState.tempHigh,
    tempLow: appState.tempLow,
  }
}

// connect() is a higher order component that ...
export default connect(mapStateToProps)(WeatherApp)
