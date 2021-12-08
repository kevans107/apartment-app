import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ApartmentShow from './ApartmentShow'

Enzyme.configure({adapter: new Adapter()})

describe("When show renders", () => {
  it("displays a header", () => {
    const showHeading = shallow(<ApartmentShow />).find("h1")
    expect(showHeading.text()).toEqual("Apartment Details")
  })
})