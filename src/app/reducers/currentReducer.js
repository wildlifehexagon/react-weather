// @flow
import {
  FETCH_CURRENT_WEATHER_REQUEST,
  FETCH_CURRENT_WEATHER_SUCCESS,
  FETCH_CURRENT_WEATHER_FAILURE,
} from "common/constants/types"

const initialState = {}

const currentReducer = (state: Object = initialState, action: Object) => {
  switch (action.type) {
    case FETCH_CURRENT_WEATHER_REQUEST:
      return {
        ...state,
        isFetching: true,
      }
    case FETCH_CURRENT_WEATHER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.payload.data,
      }
    case FETCH_CURRENT_WEATHER_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload.error,
      }
    default:
      return state
  }
}

export default currentReducer
