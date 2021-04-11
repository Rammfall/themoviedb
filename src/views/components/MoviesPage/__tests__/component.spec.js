import React from 'react'
import { shallow } from 'enzyme'

import MoviesPage from '../component'

describe('MoviesPage', () => {
  it('matches snapshot', () => {
    const props = {
      movies: [
        {
          original_title: 'test',
          id: 1,
          overview: 'test',
          poster_path: 'uri'
        }
      ],
      isLoading: false,
      isEmpty: false
    }
    const component = shallow(<MoviesPage {...props} />)

    expect(component).toMatchSnapshot()
  })
})
