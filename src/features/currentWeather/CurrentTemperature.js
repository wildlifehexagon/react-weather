// @flow
import React from "react"

const tempConverter = temp => (temp * (9 / 5) - 459.67).toFixed(1)

type Props = {
  /** Current temperature */
  temperature: string,
}

/**
 * Displays current temperature
 */

const CurrentTemperature = ({ temperature }: Props) => (
  <div>current temperature = {tempConverter(temperature)} °F</div>
)

export default CurrentTemperature
