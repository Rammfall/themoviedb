import React from 'react'
import { shallow } from 'enzyme'
import configureStore from 'redux-mock-store'

import AppRoot from '../container'

jest.mock('Store/concepts/session/selectors', () => ({
  isLoggedInSelector: jest.fn(() => true)
}))

describe('AppRoot match snapshot', () => {
  let mockStore

  beforeAll(() => {
    mockStore = configureStore([])()
  })

  it('with default props', () => {
    const container = shallow(<AppRoot store={mockStore} />)
      .dive()
      .dive()

    expect(container).toMatchSnapshot()
  })
})
