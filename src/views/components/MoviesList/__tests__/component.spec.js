import React from 'react'
import { shallow } from 'enzyme'

import MoviesList from '../component'

describe('MoviesList', () => {
  const defaultProps = {
    movies: [{
      original_title: 'test',
      id: 2,
      overview: 'test',
      poster_path: 'test'
    }],
    actions: (id) => [() => (<div key={id}>{id}</div>)]
  }

  describe('with default props', () => {
    it('matches snapshot', () => {
      const component = shallow(<MoviesList {...defaultProps} />)

      expect(component).toMatchSnapshot()
    })
  })

  describe('when isLoading is true', () => {
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
