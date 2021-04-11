import React from 'react'
import { shallow } from 'enzyme'
import configureStore from 'redux-mock-store'

import diveTo from 'TestUtils/diveToEnzyme'

import Pagination, { PaginationComponent } from '../container'

jest.mock('react-router-dom', () => ({
  useHistory: jest.fn(() =>({
    location: {
      search: '?page=1'
    }
  }))
}))

jest.mock('Store/concepts/movies/selectors', () => ({
  getDashboardMoviesTotalSelector: jest.fn(() => 4)
}))

describe('Pagination', () => {
  const mockStore = configureStore()()

  it('matches snapshot', () => {
    const wrapper = shallow(
      <Pagination
        store={mockStore}
      />
    )
    const container = diveTo(wrapper, PaginationComponent)

    expect(container).toMatchSnapshot()
  })
})
