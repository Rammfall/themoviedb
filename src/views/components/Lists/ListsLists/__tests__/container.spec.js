import React from 'react'
import { shallow } from 'enzyme'
import configureStore from 'redux-mock-store'

import diveTo from 'TestUtils/diveToEnzyme'

import ListsLists, { ListsListsContainer } from '../container'

jest.mock('react-intl', () => ({
  get injectIntl() {
    return component => component
  }
}))

jest.mock('antd', () => ({
  Modal: {
    confirm: jest.fn()
  }
}))

jest.mock('Store/concepts/lists/selectors', () => ({
  getListsSelector: jest.fn(() => [{
    id: 1,
    name: 'test',
    description: 'test'
  }]),
  getListsTotalSelector: jest.fn(() => 3)
}))

jest.mock('Store/concepts/lists/actions', () => ({
  deleteList: jest.fn()
}))

describe('ListsLists', () => {
  const store = configureStore()()
  const wrapper = shallow(
    <ListsLists
      intl={{formatMessage: jest.fn()}}
      store={store}
    />)

  describe('with default props', () => {
    it('matches snapshot', () => {
      const container = diveTo(wrapper, ListsListsContainer)

      expect(container).toMatchSnapshot()
    })

    describe('onDeleteModal', () => {
      const container = diveTo(wrapper, ListsListsContainer)
      const spy = jest.spyOn(container.instance(), 'onDeleteModal')
      container.instance().onDeleteModal(3)

      expect(spy).toBeCalledWith(3)
    })
  })
})
