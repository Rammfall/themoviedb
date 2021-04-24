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

jest.mock('antd', () => ({
  Modal: {
    confirm: jest.fn()
  }
}))

describe('ListContent', () => {
  const store = configureStore()()
  const props = {
    match: {
      params: {
        id: '1'
      }
    },
    history: {
      push: jest.fn()
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

  it('matches snapshot', () => {
    expect(container).toMatchSnapshot()
  })

  describe('onListDelete()', () => {
    const spy = jest.spyOn(container.instance(), 'onListDelete')
    container.instance().onListDelete()

    expect(spy).toHaveBeenCalled()
  })
})
