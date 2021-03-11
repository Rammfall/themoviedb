import React from 'react'
import { shallow } from 'enzyme'
import configureStore from 'redux-mock-store'

import diveTo from 'TestUtils/diveToEnzyme'

import Menu, { MenuComponent } from '../container'

describe('Menu', () => {
  const mockStore = configureStore()()

  it('matches snapshot', () => {
    const wrapper = shallow(
      <Menu store={mockStore}
            onLogout={jest.fn}
      />)
    const container = diveTo(wrapper, MenuComponent)

    expect(container).toMatchSnapshot()
  })
})
