import React from 'react'
import { shallow } from 'enzyme'
import configureStore from 'redux-mock-store'
import { useHistory } from 'react-router-dom'

import diveTo from 'TestUtils/diveToEnzyme'

import Pagination, { PaginationContainer } from '../container'

jest.mock('react-router-dom', () => ({
  useHistory: jest.fn()
}))
jest.mock('Store/concepts/movies/selectors', () => ({
  getDashboardMoviesTotalSelector: jest.fn(() => 4)
}))
jest.mock('Utils/router/changePage', () => jest.fn)

describe('Pagination', () => {
  const mockStore = configureStore()()

  describe('without page param', () => {
    it('matches snapshot', () => {
      useHistory.mockImplementation(() => ({
        location: {
          search: '?some=3'
        }
      }))
      const wrapper = shallow(
        <Pagination
          store={mockStore}
        />
      )
      const container = diveTo(wrapper, PaginationContainer)
      expect(container).toMatchSnapshot()
    })
  })

  describe('with page param', () => {
    it('matches snapshot', () => {
      useHistory.mockImplementation(() => ({
        location: {
          search: '?page=1'
        }
      }))
      const wrapper = shallow(
        <Pagination
          store={mockStore}
        />
      )
      const container = diveTo(wrapper, PaginationContainer)
      expect(container).toMatchSnapshot()
    })
  })
})
