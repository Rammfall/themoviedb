import React from 'react'
import { shallow } from 'enzyme'

import PaginationComponent from '../component'

describe('PaginationComponent', () => {
  it('matches snapshot', () => {
    const component = shallow(<PaginationComponent onChange={jest.fn} />)

    expect(component).toMatchSnapshot()
  })
})
