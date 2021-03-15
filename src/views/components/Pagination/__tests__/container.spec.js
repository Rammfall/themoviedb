import React from 'react'
import { shallow } from 'enzyme'

import Pagination from '../container'

jest.mock('react-router-dom', () => ({
  useHistory: jest.fn()
}))

describe('Pagination', () => {
  it('matches snapshot', () => {
    const container = shallow(<Pagination onChange={jest.fn()} />)

    expect(container).toMatchSnapshot()
  })
})
