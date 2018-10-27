// @flow
import React, { Component } from "react"
import { connect } from "react-redux"

import { fetchCurrentWeather } from "app/actions/currentActions"
import CurrentConditions from "./currentWeather/CurrentConditions"
import CurrentTemperature from "./currentWeather/CurrentTemperature"
import CurrentWeatherIcon from "./currentWeather/CurrentWeatherIcon"
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
        <CurrentWeatherIcon />
        <CurrentTemperature />
        <UserLocation />
        <CurrentConditions />
      </div>
    )
  }
}

const mapStateToProps = ({ current }) => ({ current })

export default connect(
  mapStateToProps,
  { fetchCurrentWeather },
)(WeatherContainer)
