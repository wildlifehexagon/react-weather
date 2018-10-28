// @flow
import React, { Component } from "react"
import { connect } from "react-redux"

import { fetchCurrentWeather } from "app/actions/currentActions"
// import CurrentConditions from "./currentWeather/CurrentConditions"
// import CurrentWeatherIcon from "./currentWeather/CurrentWeatherIcon"
import CurrentTemperature from "./currentWeather/CurrentTemperature"
import UserLocation from "./currentWeather/UserLocation"

type Props = {
  /** Action to fetch current weather */
  fetchCurrentWeather: Function,
  /** Slice of state providing current weather data */
  current: Object,
}

class WeatherContainer extends Component<Props> {
  componentDidMount() {
    const { fetchCurrentWeather } = this.props
    fetchCurrentWeather()
  }

  render() {
    const { current } = this.props

    if (current.isFetching) {
      return <div>Loading...</div>
    }

    return (
      <div>
        {current.data && (
          <div>
            {/* <CurrentWeatherIcon /> */}
            <CurrentTemperature temperature={current.data.main.temp} />
            <UserLocation location={current.data.name} />
            {/* <CurrentConditions weather={current.data.weather} /> */}
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = ({ current }) => ({ current })

export default connect(
  mapStateToProps,
  { fetchCurrentWeather },
)(WeatherContainer)
