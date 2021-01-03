import React from 'react'
import { mount } from 'enzyme'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'

import AppRoot from '../container'
import LoginContainer from '../../pages/Login'

describe('AppRoot match snapshot', () => {
  let mockStore

  beforeAll(() => {
    mockStore = configureStore([])
  })

  it('with default props', () => {
    const container = mount(
      <Provider store={mockStore({ session: { isLogged: true } })}>
        <MemoryRouter initialEntries={['/']}>
          <AppRoot />
        </MemoryRouter>
      </Provider>
    )

    expect(container.find(LoginContainer)).toHaveLength(0)
  })
})
