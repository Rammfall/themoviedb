import React from 'react'
import { shallow } from 'enzyme'
import configureStore from 'redux-mock-store'

import diveTo from 'TestUtils/diveToEnzyme'

import ListContent, { ListContentContainer } from '../container'

jest.mock('react-router-dom', () => ({
  withRouter: component => component
}))

jest.mock('react-intl', () => ({
  injectIntl: component => component
}))

jest.mock('Store/concepts/listDetails/selectors', () => ({
  getListDetailsMoviesSelector: jest.fn(() => ({ isEmpty: false })),
  getListTitleSelector: jest.fn(() => 'test')
}))

describe('ListContent', () => {
  it('matches snapshot', () => {
    const store = configureStore()()
    const props = {
      match: {
        params: {
          id: 1
        }
      },
      intl: {
        formatMessage: jest.fn(() => 'test')
      }
    }

    const wrapper = shallow(
      <ListContent
        store={store}
        {...props}
      />
    )
    const container = diveTo(wrapper, ListContentContainer)

    expect(container).toMatchSnapshot()
  })
})
