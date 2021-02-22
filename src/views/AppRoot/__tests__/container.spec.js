import React from 'react'
import { shallow } from 'enzyme'
import configureStore from 'redux-mock-store'

import diveTo from 'TestUtils/diveToEnzyme'

import AppRoot, { AppRootContainer } from '../container'

jest.mock('Store/concepts/session/selectors', () => ({
  isLoggedInSelector: jest.fn(() => true)
}))

describe('AppRoot match snapshot', () => {
  let mockStore

  beforeAll(() => {
    mockStore = configureStore([])()
  })

  it('with default props', () => {
    const wrapper = shallow(<AppRoot store={mockStore} />)
    const container = diveTo(wrapper, AppRootContainer)

    expect(container).toMatchSnapshot()
  })
})
