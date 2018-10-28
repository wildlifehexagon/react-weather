// @flow
import React from "react"

// celsius: (temp - 273.15).toFixed(1)
const tempConverter = temp => (temp * (9 / 5) - 459.67).toFixed(1)

type Props = {
  /** Current temperature */
  temperature: string,
}

/**
 * Displays current temperature
 */

const CurrentTemperature = ({ temperature }: Props) => (
  <div>{tempConverter(temperature)} °F</div>
)

export default CurrentTemperature
