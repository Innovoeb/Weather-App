import store from '../store'
import axios from 'axios'
import React from 'react'

export function setForcast() {
  return axios.get('http://api.openweathermap.org/data/2.5/forecast?zip=89103,us&units=imperial&APPID=4469bc2345eac6944698a227fab309e4').then(resp => {
    console.log(resp.data.list)
    store.dispatch({
      type: 'GET_FORCAST',
      forcast: resp.data.list,
      weatherIcon: resp.data.list
    })
  })
}

export function setWeather() {
  return axios.get('http://api.openweathermap.org/data/2.5/weather?zip=89103,us&units=imperial&APPID=4469bc2345eac6944698a227fab309e4').then(resp => {
    console.log(resp.data)
    store.dispatch({
      type: 'GET_WEATHER',
      tempNow: resp.data.main.temp,
      tempHigh: resp.data.main.temp_max,
      tempLow: resp.data.main.temp_min,
    })
  })
}

export function getIcon() {
  axios.get('http://api.openweathermap.org/data/2.5/forecast?zip=89103,us&units=imperial&APPID=4469bc2345eac6944698a227fab309e4').then(resp => {
    const newarr = resp.data.list.map(day => {
      if (day.weather.main === 'Clouds') {
        return (<p>cloud icon</p>)
      } else if (day.weather.main === 'Clear') {
        return (<p>sun icon</p>)
      }
    })
    store.dispatch({
      type: 'GET_ICONS',
      weatherIcon: newarr,
    })
  })
}
