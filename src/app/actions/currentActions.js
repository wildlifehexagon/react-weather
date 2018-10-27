// @flow
import {
  FETCH_CURRENT_WEATHER_REQUEST,
  FETCH_CURRENT_WEATHER_SUCCESS,
  FETCH_CURRENT_WEATHER_FAILURE,
} from "common/constants/types"

const apiKey = process.env.REACT_APP_WEATHER_API_KEY
const fetchUrl = `http://api.openweathermap.org/data/2.5/weather?q=chicago&appid=${apiKey}`

const fetchCurrentWeatherRequest = () => ({
  type: FETCH_CURRENT_WEATHER_REQUEST,
  payload: {
    isFetching: true,
  },
})

const fetchCurrentWeatherSuccess = (data: Object) => ({
  type: FETCH_CURRENT_WEATHER_SUCCESS,
  payload: {
    isFetching: false,
    data,
  },
})

const fetchCurrentWeatherFailure = error => ({
  type: FETCH_CURRENT_WEATHER_FAILURE,
  payload: {
    error,
  },
})

export const fetchCurrentWeather = () => async (dispatch: Function) => {
  try {
    dispatch(fetchCurrentWeatherRequest())
    const res = await fetch(fetchUrl)
    const json = await res.json()
    if (res.ok) {
      console.log(json)
      return dispatch(fetchCurrentWeatherSuccess(json))
    }

    dispatch(fetchCurrentWeatherFailure(res.statusText))
  } catch (error) {
    return dispatch(fetchCurrentWeatherFailure(error.toString()))
  }
}

export default fetchCurrentWeather
