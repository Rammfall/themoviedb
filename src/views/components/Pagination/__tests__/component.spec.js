import React from 'react'
import { shallow } from 'enzyme'

import PaginationComponent from '../component'

describe('PaginationComponent', () => {
  it('matches snapshot', () => {
    const component = shallow(<PaginationComponent onChange={jest.fn} />)

    expect(component).toMatchSnapshot()
  })

  describe('when total > 20', () => {
    it('matches snapshot', () => {
      const component = shallow(
        <PaginationComponent
          total={21}
          onChange={jest.fn}
        />
      )

      expect(component).toMatchSnapshot()
    })
  })
})
