import React from 'react'
import { shallow } from 'enzyme'

import MoviesPage from '../component'

describe('MoviesPage', () => {
  it('matches snapshot', () => {
    const props = {
      isLoading: false,
      isEmpty: false
    }
    const component = shallow(<MoviesPage {...props} />)

    expect(component).toMatchSnapshot()
  })
})
