import React from "react"
import { shallow } from "enzyme"
import UserLocation from "./UserLocation"

describe("UserLocation", () => {
  it("renders without crashing", () => {
    shallow(<UserLocation />)
  })

  it("displays the correct location", () => {
    const props = {
      location: "Chicago",
    }
    const wrapper = shallow(<UserLocation {...props} />)
    const div = wrapper.find("div")

    expect(div.text()).toEqual("Chicago")
  })
})
