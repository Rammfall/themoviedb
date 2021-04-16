import React from 'react'
import { shallow } from 'enzyme'
import configureStore from 'redux-mock-store'

import diveTo from 'TestUtils/diveToEnzyme'

import DashboardPagination, { DashboardPaginationContainer } from '../container'

jest.mock('Store/concepts/movies/selectors', () => ({
  getDashboardMoviesTotalSelector: jest.fn(() => 3)
}))

describe('DashboardPagination', () => {
  const store = configureStore()()

  it('matches snapshot', () => {
    const wrapper = shallow(
      <DashboardPagination store={store} />
    )
    const container = diveTo(wrapper, DashboardPaginationContainer)

    expect(container).toMatchSnapshot()
  })
})
