import React from 'react'
import { shallow } from 'enzyme'
import configureStore from 'redux-mock-store'

import diveTo from 'TestUtils/diveToEnzyme'

import Header, { HeaderComponent } from '../container'

jest.mock('Store/concepts/account/selectors', () => ({
  usernameSelector: jest.fn()
}))

describe('Menu', () => {
  const mockStore = configureStore()()
  const defaultProps = {
    store: mockStore,
    getUsername: jest.fn(),
    username: 'testUser'
  }

  it('matches snapshot', () => {
    const wrapper = shallow(<Header {...defaultProps} />)
    const container = diveTo(wrapper, HeaderComponent)

    expect(container).toMatchSnapshot()
  })
})
