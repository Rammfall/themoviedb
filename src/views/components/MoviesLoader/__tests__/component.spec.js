import React from 'react'
import { shallow } from 'enzyme'

import MoviesLoader from '../component'

describe('MoviesLoader', () => {
  it('matches snapshot', () => {
    const component = shallow(<MoviesLoader />)

    expect(component).toMatchSnapshot()
  })
})
