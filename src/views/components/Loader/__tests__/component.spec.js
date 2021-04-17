import React from 'react'
import { shallow } from 'enzyme'

import Loader from '../component'

describe('MoviesLoader', () => {
  it('matches snapshot', () => {
    const component = shallow(<Loader />)

    expect(component).toMatchSnapshot()
  })
})
