import React from 'react'
import { mount } from 'enzyme'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import { IntlProvider } from 'react-intl'

import LoginContainer from '../container'
import en from '../../../../locales/en'

describe('LoginContainer to match snapshots', () => {
  let mockStore

  beforeAll(() => {
    mockStore = configureStore([])
  })

  it('with default props', () => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // Deprecated
        removeListener: jest.fn(), // Deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn()
      }))
    })

    const container = mount(
      <Provider store={mockStore({ session: {} })}>
        <IntlProvider
          messages={en.messages}
          locale="en"
        >
          <LoginContainer onSubmit={jest.fn} />
        </IntlProvider>
      </Provider>
    )

    expect(container).toMatchSnapshot()
  })
})
