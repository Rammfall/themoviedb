import React from 'react'
import { shallow } from 'enzyme'

import MoviesEmptyState from '../component'

describe('MoviesEmptyState', () => {
  it('matches snapshot', () => {
    const component = shallow(<MoviesEmptyState />)

    expect(component).toMatchSnapshot()
  })
})
