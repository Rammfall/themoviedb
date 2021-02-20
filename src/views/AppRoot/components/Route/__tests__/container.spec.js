import React from 'react'
import { shallow } from 'enzyme'
import configureStore from 'redux-mock-store'

import Route from '../container'

jest.mock('Store/concepts/session/selectors', () => ({
  isLoggedInSelector: jest.fn(() => true)
}))

describe('Route', () => {
  describe('matches snapshot', () => {
    const mockStore = configureStore()()
    const Component = () => <div>Test</div>
    const defaultProps = {
      store: mockStore,
      path: '/',
      component: Component
    }

    it('with default props', () => {
      // eslint-disable-next-line react/jsx-props-no-spreading
      const container = shallow(<Route {...defaultProps} />)
        .dive()
        .dive()

      expect(container).toMatchSnapshot()
    })

    it('with privateRoute', () => {
      const privateProps = {
        ...defaultProps,
        privateRoute: true
      }
      // eslint-disable-next-line react/jsx-props-no-spreading
      const container = shallow(<Route {...privateProps} />)
        .dive()
        .dive()

      expect(container).toMatchSnapshot()
    })
  })
})
