import React from 'react'
import { shallow } from 'enzyme'

import MoviesList from '../component'

describe('Pagination', () => {
  const defaultProps = {
    current: 1,
    movies: [{
      original_title: 'test',
      id: 2,
      overview: 'test',
      poster_path: 'test'
    }],
    quantity: 20,
    isLoading: false,
    getMovies: jest.fn()
  }

  describe('with default props', () => {
    it('matches snapshot', () => {
      const component = shallow(<MoviesList {...defaultProps} />)

      expect(component).toMatchSnapshot()
    })
  })

  describe('when isLoading', () => {
    it('matches snapshot', () => {
      const props = {
        ...defaultProps,
        isLoading: true
      }
      const component = shallow(<MoviesList {...props} />)

      expect(component).toMatchSnapshot()
    })
  })
})
