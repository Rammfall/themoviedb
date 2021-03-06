import React from 'react'
import { shallow } from 'enzyme'
import configureStore from 'redux-mock-store'

import diveTo from 'TestUtils/diveToEnzyme'

import Route, { RouteContainer } from '../container'

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

    describe('with default props', () => {
      it('matches snapshot', () => {
        // eslint-disable-next-line react/jsx-props-no-spreading
        const wrapper = shallow(<Route {...defaultProps} />)
        const container = diveTo(wrapper, RouteContainer)

        expect(container).toMatchSnapshot()
      })
    })

    describe('with privateRoute', () => {
      it('matches snapshot', () => {
        const privateProps = {
          ...defaultProps,
          privateRoute: true
        }
        // eslint-disable-next-line react/jsx-props-no-spreading
        const wrapper = shallow(<Route {...privateProps} />)
        const container = diveTo(wrapper, RouteContainer)

        expect(container).toMatchSnapshot()
      })
    })
  })
})
