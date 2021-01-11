import React from 'react'
import { shallow } from 'enzyme'
import configureStore from 'redux-mock-store'

import LoginContainer from '../container'

describe('LoginContainer', () => {
  const mockStore = configureStore([])()

  it('matches snapshot', () => {
    const container = shallow(
      <LoginContainer
        store={mockStore}
        onSubmit={jest.fn}
      />
    )
      .dive()
      .dive()

    expect(container).toMatchSnapshot()
  })
})
