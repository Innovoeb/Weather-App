// application's initial state
const initialState = {
  forcast: [],
  tempNow: "",
  tempHigh: "",
  tempLow: "",
}


  // a reducer receives actions in order to change the different application states
  export default function myReducer(state = initialState, action) {
    switch ( action.type ) {
      // check weather api for forcast and grab the forecast array
      case 'GET_FORCAST':
        return {...state,
          forcast: action.forcast
        }
      // check weather api for current temperature and temp his and lows
      case 'GET_WEATHER':
        return {...state,
          tempNow: action.tempNow,
          tempHigh: action.tempHigh,
          tempLow: action.tempLow,
        }

      default:
        return state
    }
  }
