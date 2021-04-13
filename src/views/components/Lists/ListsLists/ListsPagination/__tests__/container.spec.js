import React from 'react'
import { shallow } from 'enzyme'
import configureStore from 'redux-mock-store'

import diveTo from 'TestUtils/diveToEnzyme'

import ListsPagination, { ListsPaginationContainer } from '../container'

jest.mock('Store/concepts/lists/selectors', () => ({
  getListsTotalSelector: jest.fn(() => 3)
}))

describe('ListsPagination', () => {
  it('matches snapshot', () => {
    const store = configureStore()()
    const wrapper = shallow(
      <ListsPagination store={store} />
    )
    const container = diveTo(wrapper, ListsPaginationContainer)

    expect(container).toMatchSnapshot()
  })
})
