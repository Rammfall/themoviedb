import React from 'react'
import { shallow } from 'enzyme'
import { useHistory } from 'react-router-dom'

import Pagination from '../container'

jest.mock('react-router-dom', () => ({
  useHistory: jest.fn()
}))
jest.mock('Utils/router/changePage', () => jest.fn)

describe('Pagination', () => {
  describe('without page param', () => {
    it('matches snapshot', () => {
      useHistory.mockImplementation(() => ({
        location: {
          search: '?some=3'
        }
      }))
      const container = shallow(
        <Pagination />
      )
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
      const container = shallow(
        <Pagination />
      )
      expect(container).toMatchSnapshot()
    })
  })
})
