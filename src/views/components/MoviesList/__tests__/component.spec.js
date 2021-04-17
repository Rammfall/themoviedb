import React from 'react'
import { shallow } from 'enzyme'

import MoviesList from '../component'

describe('MoviesList', () => {
  const Component = () => (<div>Test</div>)
  const defaultProps = {
    movies: [{
      original_title: 'test',
      id: 2,
      overview: 'test',
      poster_path: 'test'
    }],
    // eslint-disable-next-line react/jsx-key
    actions: () => [<Component />]
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
