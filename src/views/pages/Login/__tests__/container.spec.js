import React from 'react'
import { shallow } from 'enzyme'
import configureStore from 'redux-mock-store'

import LoginPage from '../container'

describe('LoginPage', () => {
  const mockStore = configureStore()()

  it('matches snapshot', () => {
    const container = shallow(
      <LoginPage
        store={mockStore}
        onSubmit={jest.fn}
      />
    )
      .dive()
      .dive()

    expect(container).toMatchSnapshot()
  })
})
