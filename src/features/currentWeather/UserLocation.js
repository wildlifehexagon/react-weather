// @flow
import React from "react"

type Props = {
  /** User's current location */
  location: string,
}

/**
 * Displays user's location
 */

const UserLocation = ({ location }: Props) => (
  <div>user location: {location}</div>
)

export default UserLocation
