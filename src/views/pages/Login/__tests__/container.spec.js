import React from 'react'
import { shallow } from 'enzyme'
import configureStore from 'redux-mock-store'

import diveTo from 'TestUtils/diveToEnzyme'

import LoginPage, { LoginFormContainer } from '../container'

describe('LoginPage', () => {
  const mockStore = configureStore()()

  it('matches snapshot', () => {
    const wrapper = shallow(
      <LoginPage
        store={mockStore}
        onSubmit={jest.fn}
      />
    )
    const container = diveTo(wrapper, LoginFormContainer)

    expect(container).toMatchSnapshot()
  })
})
